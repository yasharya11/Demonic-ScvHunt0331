import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgRiddlesComponent } from './ng-riddles.component';

describe('NgRiddlesComponent', () => {
  let component: NgRiddlesComponent;
  let fixture: ComponentFixture<NgRiddlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgRiddlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgRiddlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
