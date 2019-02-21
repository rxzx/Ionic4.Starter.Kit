import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsHeadlinesMakingPage } from './news-headlines-making.page';

describe('NewsHeadlinesMakingPage', () => {
  let component: NewsHeadlinesMakingPage;
  let fixture: ComponentFixture<NewsHeadlinesMakingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsHeadlinesMakingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsHeadlinesMakingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
