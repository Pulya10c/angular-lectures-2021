import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeDirectivesComponent } from './attribute-directives.component';

describe('AttributeDirectivesComponent', () => {
  let component: AttributeDirectivesComponent;
  let fixture: ComponentFixture<AttributeDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
