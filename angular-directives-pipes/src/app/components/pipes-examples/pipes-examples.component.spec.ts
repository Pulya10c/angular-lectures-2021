import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesExamplesComponent } from './pipes-examples.component';

describe('PipesExamplesComponent', () => {
  let component: PipesExamplesComponent;
  let fixture: ComponentFixture<PipesExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipesExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
