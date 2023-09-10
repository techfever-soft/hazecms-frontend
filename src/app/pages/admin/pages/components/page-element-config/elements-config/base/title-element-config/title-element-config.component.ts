import {
  BuilderElement,
  BuilderElementContainer,
} from 'src/app/core/interfaces/builder.interface';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { BuilderService } from 'src/app/core/services/admin/builder.service';

@Component({
  selector: 'app-title-element-config',
  templateUrl: './title-element-config.component.html',
  styleUrls: ['./title-element-config.component.scss'],
})
export class TitleElementConfigComponent implements OnInit {
  @Input('element') element!: BuilderElement;
  @Output('formChanged') formChange: EventEmitter<any> =
    new EventEmitter<any>();
  public titleForm!: FormGroup;

  constructor(private fb: FormBuilder, private builderService: BuilderService) {
    this.titleForm = this.fb.group({
      type: ['h1'],
      content: ['My title'],
    });

    this.titleForm.valueChanges.subscribe(() => {
      this.formChange.next(this.titleForm.value);
    });
  }

  ngOnInit() {
    this.updateElementConfig();
  }

  private updateElementConfig() {
    this.formChange.next(this.titleForm.value);

    this.builderService.getAddedElements.subscribe((addedElements) => {
      if (this.element) {
        const element: any = addedElements.find(
          (el) => el.id === this.element.id
        );
        if (element && element.config) {
          this.titleForm.setValue(element.config, { emitEvent: false });
        }
      }
    });
  }
}
