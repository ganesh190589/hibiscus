import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobtitleViewComponent } from './jobtitle-view.component';

describe('JobtitleViewComponent', () => {
  let component: JobtitleViewComponent;
  let fixture: ComponentFixture<JobtitleViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobtitleViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobtitleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
