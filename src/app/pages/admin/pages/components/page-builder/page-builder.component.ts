import { CdkDragDrop, DragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { BuilderElement } from 'src/app/core/interfaces/builder.interface';
import { BuilderService } from 'src/app/core/services/admin/builder.service';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-page-builder',
  templateUrl: './page-builder.component.html',
  styleUrls: ['./page-builder.component.scss'],
})
export class PageBuilderComponent implements OnInit {
  @Input('drawer') elementsDrawer!: MatDrawer;
  public selectedElements: any[] = [];
  public addedElements: any[] = [];
  public allAddedElementsSelected: boolean = false;
  public someAddedElementsSelected: boolean = false;
  public indeterminateSelection: boolean = false;
  public searchForm: FormGroup;

  constructor(private builderService: BuilderService, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      input: [''],
      category: [''],
    });

    this.searchForm.get('input')?.valueChanges.subscribe((searchTerm) => {
      this.onSearchElement(searchTerm);
    });

    this.builderService.getAddedElements.subscribe((addedElements) => {
      this.addedElements = addedElements;
    });

    this.builderService.getAllSelectedElements.subscribe((selectedElements) => {
      this.selectedElements = selectedElements;
    });

    this.builderService.getAllAddedElementsSelected.subscribe(
      (allAddedSelected) => {
        this.allAddedElementsSelected = allAddedSelected;
      }
    );

    this.builderService.getSomeAddedElementSelected.subscribe(
      (addedSelected) => {
        this.someAddedElementsSelected = addedSelected;
      }
    );

    this.builderService.getIndeterminateSelection.subscribe((addedSelected) => {
      this.indeterminateSelection = addedSelected;
    });
  }

  ngOnInit() {}

  public addNestedElement(element: BuilderElement) {
    this.builderService.addNestedElementTo(element);
  }

  public onSelectAllAddedElements(event: MatCheckboxChange) {
    this.builderService.toggleSelectAllAddedElements(event.checked);
  }

  public onDeleteAddedSelection() {
    this.builderService.deleteAddedSelection();
    this.someAddedElementsSelected = false;
    this.builderService.setAllElementsSelected(false);
  }

  public onSelectAddedElement() {
    this.builderService.selectAddedElements();
  }

  public onElementDropped(event: CdkDragDrop<any>) {
    moveItemInArray(
      this.addedElements,
      event.previousIndex,
      event.currentIndex
    );
  }

  public onSearchElement(term: string) {
    console.log(term);
    // TODO: search element
  }

}
