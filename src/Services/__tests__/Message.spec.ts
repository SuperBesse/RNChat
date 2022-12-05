import sendMessage from '@/Services/Message';
import type { Message as IMEssage } from '@/Types/Message';

describe('Message Service', () => {
  const message = { content: 'test', date: 1487076708000 } as IMEssage;
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.spyOn(global.Math, 'random').mockRestore();
  });

  it('should send message', async () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.1);

    const result = sendMessage(message);
    jest.runAllTimers();
    jest.runAllTicks();
    expect(result).toBeTruthy();

    
  });

  it('should fail on send message', async () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.9);
    try {
      sendMessage(message);
      jest.runAllTimers();
      jest.runAllTicks();
    } catch (e: any) {
      expect(e.message).toMatch('fake error');
    }
  });
});
