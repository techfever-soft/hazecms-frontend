import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import SwiperCore, { Navigation, SwiperOptions } from 'swiper';

import { BuilderService } from 'src/app/core/services/admin/builder.service';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Navigation]);

@Component({
  selector: 'app-base-element',
  templateUrl: './base-element.component.html',
  styleUrls: ['./base-element.component.scss'],
})
export class BaseElementComponent implements OnInit {
  @ViewChild('elementSwiper') elementSwiper!: SwiperComponent;
  public elementsSwiperConfig: SwiperOptions = {
    modules: [Navigation],
    navigation: {
      nextEl: '#base-element-next',
      prevEl: '#base-element-prev',
    },
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 20,
    centeredSlides: true,
    width: 150,
    breakpoints: {
      479: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      979: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      1023: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
      1199: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
    },
  };

  public filteredElements: any[] = [];

  public searchForm: FormGroup;

  constructor(private fb: FormBuilder, private builderService: BuilderService) {
    this.searchForm = this.fb.group({
      input: [''],
      tags: [''],
    });

    this.searchForm.get('input')?.valueChanges.subscribe((inputValue) => {
      this.searchElement(inputValue);
    });
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.initElements();
    this.searchElement('');
  }

  private initElements() {
    this.builderService.getBaseElements.subscribe((elements) => {
      this.filteredElements = elements.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    });
  }

  private searchElement(value: string) {
    this.elementSwiper.swiperRef.slideTo(0);
    this.builderService.getBaseElements.subscribe((elements) => {
      const filteredElements = elements.filter((element) => {
        const elementName = (element.label as string).toLowerCase();
        return elementName.startsWith(value);
      });

      this.filteredElements = filteredElements.length ? filteredElements : [];
    });
  }

  public onToggleSelectElement(element: any) {
    this.builderService.toggleSelectedBaseElement(element);
  }

  public onClearSearchInput() {
    this.searchForm.reset();
    this.searchElement('');
  }
}
