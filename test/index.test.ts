import { emoji, unicode } from '../src/index';

it('get emoji', () => {
  expect(emoji.get('grinning-face')).toEqual('😀');
});

it('get unicode', () => {
  expect(unicode.get('😀')).toEqual('grinning-face');
});
