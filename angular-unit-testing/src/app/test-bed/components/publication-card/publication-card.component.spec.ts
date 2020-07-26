import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationCardComponent } from './publication-card.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <app-publication-card [publication]="publication" (like)="onLike($event)">
    </app-publication-card>
  `
})
class TestHostComponent {
  public publication = { id: 1, title: 'Breaking news!' };
  public likedPublication: any;

  public onLike(publication) {
    this.likedPublication = publication;
  }
}

describe('PublicationCardComponent', () => {
  let textHostComponent: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationCardComponent, TestHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    textHostComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should contain appropriate title', () => {
    const { debugElement } = fixture;
    const title = debugElement.query(By.css('h1')).nativeElement;

    expect(title.textContent).toEqual(textHostComponent.publication.title);
  });

  it('should trigger like event', () => {
    const { debugElement } = fixture;
    const likeButton = debugElement.query(By.css('.like-button'));
    likeButton.triggerEventHandler('click', null);

    expect(textHostComponent.likedPublication).toEqual(textHostComponent.publication);
  });
});
