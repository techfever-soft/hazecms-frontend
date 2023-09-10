import {
  BasicResponse,
  DataResponse,
} from 'src/app/core/models/interfaces/responses.interface';
import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import { Editor, Toolbar } from 'ngx-editor';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { CategoriesDialogComponent } from '../categories-dialog/categories-dialog.component';
import { ClientApiService } from 'src/app/core/services/client-api.service';
import { Component } from '@angular/core';
import { HazeBreadcrumbItem } from 'src/app/core/models/interfaces/breadcrumb.interface';
import { HazePostCategory } from 'src/app/core/models/interfaces/post.interface';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage {
  public writePostForm: FormGroup;
  public writePostRoute: HazeBreadcrumbItem[] = [
    {
      path: '/admin/blog',
      label: 'Blog',
    },
    {
      path: '/admin/blog/edit',
      label: 'Edit a post',
    },
  ];
  public postResponse!: BasicResponse | null;
  public isPublishing: boolean = false;
  public editor: Editor;
  public toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  readonly separatorKeysCodes = [ENTER, COMMA, SPACE] as const;
  public tags: string[] = [];

  public categories: HazePostCategory[] = [];

  public postId!: string | number | null;

  constructor(
    private fb: FormBuilder,
    private clientApiService: ClientApiService,
    private matDialog: MatDialog,
    private activatedRoute: ActivatedRoute
  ) {
    this.writePostForm = this.fb.group({
      name: [''],
      slug: ['', [Validators.pattern('[a-zA-Z0-9-]*')]],
      categoryId: [''],
      content: [''],
      tags: [''],
      published: [false],
    });

    this.editor = new Editor();

    this.activatedRoute.paramMap.subscribe((params) => {
      if (params.get('postId')) {
        this.postId = params.get('postId');
        this.writePostRoute[1].path = '/admin/blog/edit/' + this.postId;
      }
    });

    this.writePostForm.get('name')?.valueChanges.subscribe((title: string) => {
      this.patchSlug(title);
    });

    this.patchFormWithCurrentPost();

    this.loadCategories();
  }

  public get tagsControl(): FormControl {
    return this.writePostForm.get('tags') as FormControl;
  }

  public patchFormWithCurrentPost() {
    this.clientApiService
      .getRequest('posts/getOne/' + this.postId, {})
      .then((result) => {
        const response = result as DataResponse;
        const post = response.data[0];
        console.log(post);

        console.log(post);

        this.writePostForm.patchValue({
          name: post.name,
          categoryId: post.categoryId,
          content: post.content,
          tags: JSON.parse(post.tags),
          published: post.published === 1 ? true : false,
          createdAt: post.createdAt,
          publishedAt: post.publishedAt,
          updatedAt: post.updatedAt,
        });

        this.tags = JSON.parse(post.tags);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  private loadCategories() {
    this.clientApiService
      .getRequest('posts_categories/getAll', {})
      .then((result) => {
        const response = result as DataResponse;
        this.categories = response.data as HazePostCategory[];
      })
      .catch((err) => {
        console.log(err);
      });
  }

  private patchSlug(title: string) {
    const newSlug = title
      .normalize('NFD')
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-zA-Z0-9-]/g, '');

    this.writePostForm.get('slug')?.setValue(newSlug);
  }

  public onOpenEditCategoriesDialog() {
    this.matDialog
      .open(CategoriesDialogComponent)
      .afterClosed()
      .subscribe(() => {
        this.loadCategories();
      });
  }

  public onSavePost() {
    this.isPublishing = true;

    this.postResponse = null;

    const editEndpoint = 'posts/updateOne/' + this.postId;

    this.clientApiService
      .postRequest(editEndpoint, this.writePostForm.value)
      .then((result: any) => {
        const response = result as BasicResponse;
        this.postResponse = response;

        this.tags = [];
        this.isPublishing = false;
      })
      .catch((err) => {
        this.postResponse = err;
        this.isPublishing = false;
      });
  }

  removeKeyword(tag: string) {
    const index = this.tags.indexOf(tag);
    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.tags.push(value);
    }

    event.chipInput!.clear();
  }
}
