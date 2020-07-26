import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingsExampleComponent } from './bindings-example.component';

describe('BindingsExampleComponent', () => {
  let component: BindingsExampleComponent;
  let fixture: ComponentFixture<BindingsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
