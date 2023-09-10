import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import SwiperCore, { Navigation, SwiperOptions } from 'swiper';

import { BuilderService } from 'src/app/core/services/admin/builder.service';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Navigation]);

@Component({
  selector: 'app-container-element',
  templateUrl: './container-element.component.html',
  styleUrls: ['./container-element.component.scss'],
})
export class ContainerElementComponent implements OnInit {
  @ViewChild('elementSwiper') elementSwiper!: SwiperComponent;
  public elementsSwiperConfig: SwiperOptions = {
    modules: [Navigation],
    navigation: {
      nextEl: '#container-element-next',
      prevEl: '#container-element-prev',
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
    });

    this.searchForm.get('input')?.valueChanges.subscribe((inputValue) => {
      this.searchElement(inputValue);
    });
  }

  ngOnInit() {
    this.initElements();
    this.searchElement('');
  }

  private initElements() {
    this.builderService.getContainerElements.subscribe((elements) => {
      this.filteredElements = elements;
    });
  }

  private searchElement(value: string) {
    this.elementSwiper.swiperRef.slideTo(0);
    this.builderService.getContainerElements.subscribe((elements) => {
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
