const randomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const words = [
  'ad',
  'adipisicing',
  'aliqua',
  'aliquip',
  'amet',
  'anim',
  'aute',
  'cillum',
  'commodo',
  'consectetur',
  'consequat',
  'culpa',
  'cupidatat',
  'deserunt',
  'do',
  'dolor',
  'dolore',
  'duis',
  'ea',
  'eiusmod',
  'elit',
  'enim',
  'esse',
  'est',
  'et',
  'eu',
  'ex',
  'excepteur',
  'exercitation',
  'fugiat',
  'id',
  'in',
  'incididunt',
  'ipsum',
  'irure',
  'labore',
  'laboris',
  'laborum',
  'Lorem',
  'magna',
  'minim',
  'mollit',
  'nisi',
  'non',
  'nostrud',
  'nulla',
  'occaecat',
  'officia',
  'pariatur',
  'proident',
  'qui',
  'quis',
  'reprehenderit',
  'sint',
  'sit',
  'sunt',
  'tempor',
  'ullamco',
  'ut',
  'velit',
  'veniam',
  'voluptate',
];

const sentence = (wordsCount: number) => {
  return [...new Array(wordsCount)]
    .map(() => {
      const index = randomInt(0, words.length);
      return words[index];
    })
    .join(' ')
    .replace(/^./, str => str.toUpperCase())
    .concat('.');
};

const word = () => {
  return words[randomInt(0, words.length - 1)];
};

const paragraph = (sentencesCount: number) => {
  return [...new Array(sentencesCount)]
    .map(() => {
      return sentence(randomInt(4, 12));
    })
    .join(' ');
};
export { sentence, word, paragraph };
