import PusherFactoryMock from '../pusher-factory-mock';

describe('PusherFactoryMock', () => {
  let pusherFactoryMock;

  beforeEach(() => {
    const pusherKey = '19ir1pkcj13';
    pusherFactoryMock = new PusherFactoryMock(pusherKey);
  });

  it('initializes pusherKey', () => {
    expect(pusherFactoryMock.pusherKey).toEqual('19ir1pkcj13');
  });

  describe('pusherClient', () => {
    it('return an object', () => {
      expect(pusherFactoryMock.pusherClient()).toBeDefined();
    });
  });
});
