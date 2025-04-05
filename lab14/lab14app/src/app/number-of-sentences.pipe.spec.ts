import { NumberOfSentencesPipe } from './number-of-sentences.pipe';

describe('NumberOfSentencesPipe', () => {
  it('create an instance', () => {
    const pipe = new NumberOfSentencesPipe();
    expect(pipe).toBeTruthy();
  });
});
