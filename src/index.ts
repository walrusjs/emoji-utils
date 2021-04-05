import { emojis } from '@walrus/unicode-emoji';
import type { EmojiKey } from './types';

const emojiMap = new Map<string, EmojiKey>()
const unicodeMap = new Map<EmojiKey, string>();

Object.keys(emojis).forEach((item: EmojiKey) => {
  const info = emojis[item];
  const name = info.name;
  emojiMap.set(name, item as EmojiKey);
  unicodeMap.set(item, name);
});

export const emoji = emojiMap;
export const unicode = unicodeMap;
export default {
  emoji: emojiMap,
  unicode: unicodeMap
};
