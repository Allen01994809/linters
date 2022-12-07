import { eslintConfigTypescript } from './eslint-config-typescript';

describe('eslintConfigTypescript', () => {
  it('should work', () => {
    expect(eslintConfigTypescript()).toEqual('eslint-config-typescript');
  });
});
