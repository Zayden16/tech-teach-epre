import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseItemPage } from './course-item.page';

describe('CourseItemPage', () => {
  let component: CourseItemPage;
  let fixture: ComponentFixture<CourseItemPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CourseItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
