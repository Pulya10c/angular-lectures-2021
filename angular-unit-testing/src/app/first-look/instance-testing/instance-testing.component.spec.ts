import { InstanceTestingComponent } from './instance-testing.component';

describe('InstanceTestingComponent', () => {
  let component: InstanceTestingComponent;
  beforeEach(() => {
    component = new InstanceTestingComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngOnInit', () => {
    it('should init component with data', () => {
      component.ngOnInit();
      expect(component.data).toEqual('Hey there!');
    });
  });

  describe('#login', () => {
    it('should log in', () => {
      component.login();
      expect(component.isLoggedIn).toBeTruthy();
    });
  });

  describe('#multiply', () => {
    it('should multiply two numbers', () => {
      expect(component.multiply(2, 2)).toEqual(4);
    });
  });

  describe('#decide', () => {
    it('should return true message', () => {
      expect(component.decide(true)).toEqual('It\'s true');
    });

    // it('should return false message', () => {
    //   expect(component.decide(false)).toEqual('It\'s false');
    // });
  });
});
