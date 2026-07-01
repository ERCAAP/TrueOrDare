import React from 'react';
import { Image, ImageStyle, StyleProp } from 'react-native';

interface GameStickerProps {
  name: string;
  size?: number;
  style?: StyleProp<ImageStyle>;
}

export const GameSticker: React.FC<GameStickerProps> = ({ name, size = 24, style }) => {
  const getSticker = () => {
    switch (name) {
      case 'medal':
        return require('../assets/stickers/medal.png');
      // Diğer sticker'lar için case'ler eklenebilir
      default:
        return require('../assets/stickers/medal.png');
    }
  };

  return (
    <Image
      source={getSticker()}
      style={[
        {
          width: size,
          height: size,
        },
        style,
      ]}
    />
  );
}; 