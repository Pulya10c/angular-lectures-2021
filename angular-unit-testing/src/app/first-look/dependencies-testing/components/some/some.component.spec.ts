import { SomeComponent } from './some.component';
import { SomeService } from '../../services/some.service';
import { of } from 'rxjs';
import { asyncScheduler } from 'rxjs';
import { fakeAsync, tick } from '@angular/core/testing';

describe('SomeComponent', () => {
  let component: SomeComponent;
  let mockService: SomeService;

  beforeEach(() => {
    mockService = {
      getMessage() { return 'Test message'; },
      getAsyncData() { return of('Test message'); }
    };

    // mockService = {
    //   getMessage: jasmine.createSpy('getMessage')
    //     .and.returnValue('Test message'),
    //   getAsyncData: jasmine.createSpy('getAsyncData')
    //     .and.returnValue(of('Test message'))
    //   // getAsyncData: jasmine.createSpy('getAsyncData')
    //   //   .and.returnValue(of('Test message', asyncScheduler))
    // };

    component = new SomeComponent(mockService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngOnInit', () => {
    it('should set message on init', () => {
      component.ngOnInit();
      // expect(mockService.getMessage).toHaveBeenCalled();
      expect(component.message).toEqual('Test message');
    });
  });

  describe('#getAsyncData', () => {
    it('should set async data', () => {
      component.getAsyncData();
      // expect(mockService.getAsyncData).toHaveBeenCalled();
      expect(component.asyncData).toEqual('Test message');
    });

    // it('should set async data', fakeAsync(() => {
    //   component.getAsyncData();

    //   tick();
    //   expect(mockService.getAsyncData).toHaveBeenCalled();
    //   expect(component.asyncData).toEqual('Test message');
    // }));
  });
});
