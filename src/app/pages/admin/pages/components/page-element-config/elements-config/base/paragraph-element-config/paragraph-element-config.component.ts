import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { BuilderElement } from 'src/app/core/interfaces/builder.interface';
import { BuilderService } from 'src/app/core/services/admin/builder.service';

@Component({
  selector: 'app-paragraph-element-config',
  templateUrl: './paragraph-element-config.component.html',
  styleUrls: ['./paragraph-element-config.component.scss'],
})
export class ParagraphElementConfigComponent implements OnInit {
  @Input('element') element!: BuilderElement;
  @Output('formChanged') formChange: EventEmitter<any> =
    new EventEmitter<any>();
  public paragraphForm: FormGroup;

  constructor(private fb: FormBuilder, private builderService: BuilderService) {
    this.paragraphForm = this.fb.group({
      content: [''],
      type: ['caption']
    });

    this.paragraphForm.valueChanges.subscribe(() => {
      this.formChange.next(this.paragraphForm.value);
    });
  }

  ngOnInit() {
    this.updateElementConfig();
  }

  private updateElementConfig() {
    this.formChange.next(this.paragraphForm.value);

    this.builderService.getAddedElements.subscribe((addedElements) => {
      if (this.element) {
        const element: any = addedElements.find(
          (el) => el.id === this.element.id
        );
        if (element && element.config) {
          this.paragraphForm.setValue(element.config, { emitEvent: false });
        }
      }
    });
  }
}
