import { emoji, unicode } from '../src/index';

it('get emoji', () => {
  expect(emoji.get('grinning_face')).toEqual('😀');
});

it('get unicode', () => {
  expect(unicode.get('😀')).toEqual('grinning_face');
});
