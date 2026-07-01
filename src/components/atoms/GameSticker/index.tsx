import React from 'react';
import { Image, ImageStyle, StyleProp } from 'react-native';

// Define stickers directly in the component for now
const stickers = {
  medal: require('../../../assets/stickers/medal.png'),
  mascot: require('../../../assets/stickers/mascot.png'),
  settings: require('../../../assets/stickers/settings.png'),
} as const;

type StickerName = keyof typeof stickers;

interface GameStickerProps {
  name: StickerName;
  size?: number;
  style?: StyleProp<ImageStyle>;
}

export const GameSticker: React.FC<GameStickerProps> = ({ name, size = 24, style }) => {
  return (
    <Image
      source={stickers[name]}
      style={[
        {
          width: size,
          height: size,
          resizeMode: 'contain',
        },
        style,
      ]}
    />
  );
}; 