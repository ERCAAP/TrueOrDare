import { StickerName, stickers } from '@/src/assets/stickers';
import React from 'react';
import { Image, ImageStyle, StyleProp } from 'react-native';


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