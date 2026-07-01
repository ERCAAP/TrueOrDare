export const stickers = {
  medal: require('./medal.png'),
  mascot: require('./mascot.png'),
  settings: require('./settings.png'),
};

export type StickerName = keyof typeof stickers; 