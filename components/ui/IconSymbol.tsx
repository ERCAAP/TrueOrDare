// This file is a fallback for using MaterialIcons on Android and web.

import React from 'react';
import { Image, ImageStyle } from 'react-native';

interface IconSymbolProps {
  name: string;
  size: number;
  color: string;
  style?: ImageStyle;
}

export const IconSymbol: React.FC<IconSymbolProps> = ({ name, size, color, style }) => {
  const icons = {
    home: require('@/assets/icons/home.png'),
    'game-controller': require('@/assets/icons/game-controller.png'),
    settings: require('@/assets/icons/settings.png'),
  };

  return (
    <Image
      source={icons[name as keyof typeof icons]}
      style={[
        {
          width: size,
          height: size,
          tintColor: color,
        },
        style,
      ]}
    />
  );
};
