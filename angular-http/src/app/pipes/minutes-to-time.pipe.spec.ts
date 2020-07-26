import { MinutesToTimePipe } from './minutes-to-time.pipe';

describe('MinutesToTimePipe', () => {
  let pipe: MinutesToTimePipe;

  beforeEach(() => {
    pipe = new MinutesToTimePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('#transform', () => {
    it('should return minutes duration string', () => {
      expect(pipe.transform(30)).toEqual('30 min');
    });

    it('should return hours duration string', () => {
      expect(pipe.transform(60)).toEqual('1 h');
    });

    it('should return hours + minutes duration string', () => {
      expect(pipe.transform(90)).toEqual('1 h 30 min');
    });
  });
});
