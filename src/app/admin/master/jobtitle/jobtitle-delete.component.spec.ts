import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobtitleDeleteComponent } from './jobtitle-delete.component';

describe('JobtitleDeleteComponent', () => {
  let component: JobtitleDeleteComponent;
  let fixture: ComponentFixture<JobtitleDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobtitleDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobtitleDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
