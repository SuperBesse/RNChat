import { paragraph, sentence, word } from '../LoremIpsum';

describe('Utils', () => {
  it('should generate a lorem ipsum sentence', () => {
    const s = sentence(15);
    expect(s.split(' ').length).toEqual(15);
    expect(s.slice(-1)).toEqual('.');
    const firstLetter = s.slice(0, 1);
    expect(firstLetter).toEqual(firstLetter.toUpperCase());
  });
  it('should generate a lorem ipsum word', () => {
    const w = word();
    expect(w).toBeDefined();
  });
  it('should generate a lorem ipsum paragraph', () => {
    const p = paragraph(15);
    expect(p.split('. ').length).toEqual(15);
  });
});
