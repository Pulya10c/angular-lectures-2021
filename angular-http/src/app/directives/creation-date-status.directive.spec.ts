import { CreationDateStatusDirective } from './creation-date-status.directive';
import { ElementRef, Renderer2 } from '@angular/core';
import { REACTIVE_DRIVEN_DIRECTIVES } from '@angular/forms/src/directives';

describe('CreationDateStatusDirective', () => {
  let directive: CreationDateStatusDirective;

  const mockElementRef = {
    nativeElement: {}
  } as ElementRef;

  const mockRenderer = {
    setStyle: jasmine.createSpy('renderer.setStyle')
  } as any as Renderer2;

  beforeEach(() => {
    directive = new CreationDateStatusDirective(mockElementRef, mockRenderer);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should not change existing layout for outdated course', () => {
    jasmine.clock().mockDate(new Date('2019-10-10'));
    directive.creationDateString = '2018-05-01';
    directive.ngOnChanges();
    expect(mockRenderer.setStyle).not.toHaveBeenCalled();
  });

  it('should set upcoming color for future courses', () => {
    jasmine.clock().mockDate(new Date('2019-10-10'));
    directive.creationDateString = '2019-10-15';
    directive.ngOnChanges();
    expect(mockRenderer.setStyle).toHaveBeenCalledWith(mockElementRef.nativeElement, 'border', `2px solid ${directive.upcomingColor}`);
  });

  it('should set fresh color for new courses', () => {
    jasmine.clock().mockDate(new Date('2019-10-10'));
    directive.creationDateString = '2019-10-05';
    directive.ngOnChanges();
    expect(mockRenderer.setStyle).toHaveBeenCalledWith(mockElementRef.nativeElement, 'border', `2px solid ${directive.freshColor}`);
  });
});
