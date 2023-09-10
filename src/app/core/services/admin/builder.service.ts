import { BASE_ELEMENTS, CONTAINER_ELEMENTS } from './data/builder';
import { BehaviorSubject, Observable, firstValueFrom, of } from 'rxjs';
import {
  BuilderElement,
  BuilderElementContainer,
} from '../../interfaces/builder.interface';

import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

/**
 * Temporary version, was copied from old version
 */

@Injectable({
  providedIn: 'root',
})
export class BuilderService {
  private selectedBaseElements: BehaviorSubject<BuilderElement[]> =
    new BehaviorSubject<BuilderElement[]>([]);
  public getSelectedBaseElements = this.selectedBaseElements.asObservable();

  private selectedContainerElements: BehaviorSubject<BuilderElement[]> =
    new BehaviorSubject<BuilderElement[]>([]);
  public getSelectedContainerElements =
    this.selectedContainerElements.asObservable();

  private allSelectedElements: BehaviorSubject<BuilderElement[]> =
    new BehaviorSubject<BuilderElement[]>([]);
  public getAllSelectedElements = this.allSelectedElements.asObservable();

  private addedElements: BehaviorSubject<BuilderElement[]> =
    new BehaviorSubject<BuilderElement[]>([]);
  public getAddedElements = this.addedElements.asObservable();

  private baseElements: BehaviorSubject<BuilderElement[]> = new BehaviorSubject<
    BuilderElement[]
  >([]);
  public getBaseElements = this.baseElements.asObservable();

  private containerElements: BehaviorSubject<BuilderElement[]> =
    new BehaviorSubject<BuilderElement[]>([]);
  public getContainerElements = this.containerElements.asObservable();

  private allAddedElementsSelected: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  public getAllAddedElementsSelected =
    this.allAddedElementsSelected.asObservable();

  private someAddedElementSelected: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  public getSomeAddedElementSelected =
    this.someAddedElementSelected.asObservable();

  private indeterminateAddedSelection: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  public getIndeterminateSelection =
    this.indeterminateAddedSelection.asObservable();

  constructor() {
    this.loadElements();
  }

  private getContainerElementsStatic(): any[] {
    return CONTAINER_ELEMENTS;
  }

  private getBaseElementsStatic(): any[] {
    return BASE_ELEMENTS;
  }

  private loadElements(): void {
    this.baseElements.next(this.getBaseElementsStatic());
    this.containerElements.next(this.getContainerElementsStatic());
  }

  public setAllSelectedElements(elements: any[]): void {
    this.allSelectedElements.next(elements);
  }

  public setSelectedBaseElements(elements: any[]) {
    this.selectedBaseElements.next(elements);
  }

  public setSelectedContainerElements(elements: any[]) {
    this.selectedBaseElements.next(elements);
  }

  public setAddedElements(elements: any[]) {
    this.addedElements.next(elements);
  }

  public setAllElementsSelected(state: boolean) {
    this.allAddedElementsSelected.next(state);
  }

  public setSomeAddedElementSelected(state: boolean) {
    this.someAddedElementSelected.next(state);
  }

  public setIndeterminateSelection(state: boolean) {
    this.indeterminateAddedSelection.next(state);
  }

  private updateAllSelectedElements(): void {
    this.allSelectedElements.next([...this.selectedBaseElements.getValue()]);
  }

  public clearSelectedElements(): void {
    firstValueFrom(this.getBaseElements).then((elements: BuilderElement[]) => {
      elements.forEach((element: BuilderElement) => {
        element.selected = false;
      });

      this.baseElements.next(elements);
    });

    firstValueFrom(this.containerElements).then(
      (elements: BuilderElement[]) => {
        elements.forEach((element: BuilderElement) => {
          element.selected = false;
        });

        this.containerElements.next(elements);
      }
    );

    this.allSelectedElements.next([]);
    this.selectedBaseElements.next([]);
    this.selectedContainerElements.next([]);
  }

  public addSelectedElements(): void {
    const previousAddedElements: BuilderElement[] =
      this.addedElements.getValue();
    const selectedElements: BuilderElement[] =
      this.allSelectedElements.getValue();

    previousAddedElements.forEach((e) => {
      e.selected = false;
    });

    selectedElements.forEach((e) => {
      e.selected = false;
    });

    this.addedElements.next([...previousAddedElements, ...selectedElements]);

    this.clearSelectedElements();
  }

  public toggleSelectedBaseElement(element: BuilderElement): void {
    let newElement: BuilderElement | BuilderElementContainer;
    if (element.type === 'container') {
      newElement = {
        id: uuid(),
        selected: element.selected,
        name: element.name,
        icon: element.icon,
        label: element.label,
        type: element.type,
        tags: element.tags,
        nestedElements: [],
      };
    } else {
      newElement = {
        id: uuid(),
        selected: element.selected,
        name: element.name,
        icon: element.icon,
        label: element.label,
        type: element.type,
        tags: element.tags,
        subType: element.subType,
      };
    }

    firstValueFrom(this.getSelectedBaseElements).then(
      (selectedElements: BuilderElement[]) => {
        if (newElement.selected) {
          selectedElements.push(newElement);
        } else {
          const elementIndex = selectedElements.findIndex(
            (e) => e.name === element.name
          );
          selectedElements.splice(elementIndex, 1);
        }

        this.setSelectedBaseElements(selectedElements);
        this.updateAllSelectedElements();
      }
    );
  }

  public addNestedElementTo(element: any): void {
    firstValueFrom(this.getAllSelectedElements).then(
      (selectedElements: BuilderElement[]) => {
        selectedElements.forEach((selectedElement: BuilderElement) => {
          const newNestedElement: BuilderElementContainer = {
            id: uuid(),
            label: selectedElement.label,
            name: selectedElement.name,
            icon: element.icon,
            type: selectedElement.type,
            tags: selectedElement.tags,
            nestedElements: [],
          };

          element.nestedElements.push(newNestedElement);
        });
      }
    );

    this.clearSelectedElements();
  }

  public toggleSelectAllAddedElements(state: boolean) {
    if (state == true) {
      this.setAllElementsSelected(true);
      this.setSomeAddedElementSelected(true);
      this.setIndeterminateSelection(false);
      this.getAddedElements.subscribe((elements) => {
        elements.forEach((element) => {
          element.selected = true;
        });
      });
    } else {
      this.setAllElementsSelected(false);
      this.setSomeAddedElementSelected(false);
      this.setIndeterminateSelection(false);
      this.getAddedElements.subscribe((elements) => {
        elements.forEach((element) => {
          element.selected = false;
        });
      });
    }
  }

  public deleteAddedSelection() {
    this.addedElements.next(
      this.addedElements.getValue().filter((element) => !element.selected)
    );

    this.toggleSelectAllAddedElements(false);
  }

  public updateAddedElementConfig(element: BuilderElement, config: any) {
    const elements = this.addedElements.getValue();
    const elementIndex = elements.findIndex((el) => el.id === element.id);
    if (elementIndex !== -1) {
      elements[elementIndex].config = config;
      this.addedElements.next([...elements]);
    }
  }

  public selectAddedElements() {
    this.addedElements.subscribe((addedElements) => {
      const someSelected = addedElements.some((el) => el.selected);
      const allChecked = addedElements.every((el) => el.selected);

      if (allChecked) {
        this.setAllElementsSelected(true);
        this.setSomeAddedElementSelected(false);
        this.setIndeterminateSelection(false);
      } else {
        this.setAllElementsSelected(false);
        this.setSomeAddedElementSelected(false);
        this.setIndeterminateSelection(true);
      }

      if (someSelected) {
        this.setSomeAddedElementSelected(true);
        this.setIndeterminateSelection(true);
      } else {
        this.setSomeAddedElementSelected(false);
        this.setIndeterminateSelection(false);
      }

      if (allChecked && someSelected) {
        this.setAllElementsSelected(true);
        this.setIndeterminateSelection(false);
        this.setSomeAddedElementSelected(true);
      }
    });
  }
}
