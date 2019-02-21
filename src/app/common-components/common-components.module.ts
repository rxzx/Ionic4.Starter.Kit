import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { SlugNewsPage } from './slug-news/slug-news.page';
import { HeadlinesPage } from './headlines/headlines.page';
import { SlugNewsItemPage } from './slug-news-item/slug-news-item.page';
import { SlugNewsDetailsPage } from './slug-news-details/slug-news-details.page';
import { SlugNewsInstructionPage } from './slug-news-instruction/slug-news-instruction.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [
    SlugNewsPage,
    HeadlinesPage,
    SlugNewsItemPage,
    SlugNewsDetailsPage,
    SlugNewsInstructionPage
  ],
  exports:[
    SlugNewsPage,
    HeadlinesPage
  ]
})
export class CommonComponentsPageModule {}
