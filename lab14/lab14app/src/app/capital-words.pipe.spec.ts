import { CapitalWordsPipe } from './capital-words.pipe';

describe('CapitalWordsPipe', () => {
  it('create an instance', () => {
    const pipe = new CapitalWordsPipe();
    expect(pipe).toBeTruthy();
  });
});
