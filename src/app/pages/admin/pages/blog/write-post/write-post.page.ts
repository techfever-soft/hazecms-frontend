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

import { CategoriesDialogComponent } from '../categories-dialog/categories-dialog.component';
import { ClientApiService } from 'src/app/core/services/client-api.service';
import { Component } from '@angular/core';
import { HazeBreadcrumbItem } from 'src/app/core/models/interfaces/breadcrumb.interface';
import { HazePostCategory } from 'src/app/core/models/interfaces/post.interface';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-write-post',
  templateUrl: './write-post.page.html',
  styleUrls: ['./write-post.page.scss'],
})
export class WritePostPage {
  public writePostForm: FormGroup;
  public writePostRoute: HazeBreadcrumbItem[] = [
    {
      path: '/admin/blog',
      label: 'Blog',
    },
    {
      path: '/admin/blog/write',
      label: 'Write a new post',
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

  constructor(
    private fb: FormBuilder,
    private clientApiService: ClientApiService,
    private matDialog: MatDialog
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

    this.writePostForm.get('name')?.valueChanges.subscribe((title: string) => {
      this.patchSlug(title);
    });

    this.loadCategories();
  }

  public get tagsControl(): FormControl {
    return this.writePostForm.get('tags') as FormControl;
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

    this.clientApiService
      .postRequest('posts/createOne', this.writePostForm.value)
      .then((result: any) => {
        const response = result as BasicResponse;
        this.postResponse = response;

        this.writePostForm.reset();
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
