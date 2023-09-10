import {
  BasicResponse,
  DataResponse,
} from 'src/app/core/interfaces/responses.interface';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ClientApiService } from 'src/app/core/services/client-api.service';
import { HazePostCategory } from 'src/app/core/interfaces/post.interface';

@Component({
  selector: 'app-categories-dialog',
  templateUrl: './categories-dialog.component.html',
  styleUrls: ['./categories-dialog.component.scss'],
})
export class CategoriesDialogComponent {
  public categoryForm: FormGroup;
  public categories: HazePostCategory[] = [];
  public categoriesStatus!: BasicResponse | null;
  public categoriesLoaded: boolean = false;

  constructor(
    private fb: FormBuilder,
    private clientApiService: ClientApiService
  ) {
    this.categoryForm = this.fb.group({
      name: [''],
    });

    this.loadCategories();
  }

  private loadCategories() {
    this.categoriesStatus = null;

    this.clientApiService
      .getRequest('posts_categories/getAll', {})
      .then((res) => {
        const result = res as DataResponse;
        const categories = result.data as HazePostCategory[];

        this.categories = categories;
        this.categoriesLoaded = true;
      })
      .catch((e) => {
        this.categoriesLoaded = false;
        this.categoriesStatus = e;
      });
  }

  public onDeleteCategory(id: string | number) {
    this.clientApiService
      .deleteRequest('posts_categories/deleteOne/' + id)
      .then((res) => {
        console.log(res);

        this.loadCategories();
      });
  }

  public onSubmit() {
    this.clientApiService
      .postRequest('posts_categories/createOne', {
        name: this.categoryForm.get('name')?.value,
      })
      .then((res) => {
        console.log(res);
        this.loadCategories();
      })
      .catch((e) => {
        console.log(e);
      });
  }
}
