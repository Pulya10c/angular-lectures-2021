import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedDecompositionComponent } from './feed-decomposition.component';

describe('FeedDecompositionComponent', () => {
  let component: FeedDecompositionComponent;
  let fixture: ComponentFixture<FeedDecompositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedDecompositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedDecompositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
