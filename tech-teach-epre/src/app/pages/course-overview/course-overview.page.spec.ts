import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseOverviewPage } from './course-overview.page';

describe('CourseOverviewPage', () => {
  let component: CourseOverviewPage;
  let fixture: ComponentFixture<CourseOverviewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CourseOverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
