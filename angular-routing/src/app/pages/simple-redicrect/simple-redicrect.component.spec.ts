import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleRedicrectComponent } from './simple-redicrect.component';

describe('SimpleRedicrectComponent', () => {
  let component: SimpleRedicrectComponent;
  let fixture: ComponentFixture<SimpleRedicrectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleRedicrectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleRedicrectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
