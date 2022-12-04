import { Message } from '@/Types/Message';

const randomTime = () => Math.floor(Math.random() * 2000);

const delay = () => new Promise(resolve => setTimeout(resolve, randomTime()));

const randomError = (): Boolean => Math.floor(Math.random() * 100) < 30;

const sendMessage = async (message: Message): Promise<boolean> => {
  console.log('Send Message API: ', message);
  const fakeError: Boolean = randomError();

  if (fakeError) {
    throw new Error('fake error');
  }
  await delay();
  return fakeError;
};

export default sendMessage;
