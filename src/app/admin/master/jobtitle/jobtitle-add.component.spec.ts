import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobtitleAddComponent } from './jobtitle-add.component';

describe('JobtitleAddComponent', () => {
  let component: JobtitleAddComponent;
  let fixture: ComponentFixture<JobtitleAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobtitleAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobtitleAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
