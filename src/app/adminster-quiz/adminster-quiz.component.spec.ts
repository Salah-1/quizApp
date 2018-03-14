import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsterQuizComponent } from './adminster-quiz.component';

describe('AdminsterQuizComponent', () => {
  let component: AdminsterQuizComponent;
  let fixture: ComponentFixture<AdminsterQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminsterQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsterQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
