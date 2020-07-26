import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementWithPropsToOverrideComponent } from './element-with-props-to-override.component';

describe('ElementWithPropsToOverrideComponent', () => {
  let component: ElementWithPropsToOverrideComponent;
  let fixture: ComponentFixture<ElementWithPropsToOverrideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementWithPropsToOverrideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementWithPropsToOverrideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
