import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewsHeadlinesMakingPage } from './news-headlines-making.page';
import { CommonComponentsPageModule } from '../common-components/common-components.module';

const routes: Routes = [
  {
    path: '',
    component: NewsHeadlinesMakingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    CommonComponentsPageModule
  ],
  declarations: [
    NewsHeadlinesMakingPage
  ]
})
export class NewsHeadlinesMakingPageModule {}
