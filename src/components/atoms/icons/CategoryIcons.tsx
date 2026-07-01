import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}

export const Category1Icon: React.FC<IconProps> = ({ 
  width = 24, 
  height = 24, 
  color = '#FF6B6B' 
}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24">
    <Path
      d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
      stroke={color}
      strokeWidth={2}
      fill="none"
    />
  </Svg>
);

export const StickerIcon1: React.FC<IconProps> = ({ 
  width = 24, 
  height = 24, 
  color = '#4CAF50' 
}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24">
    <Circle cx={12} cy={12} r={8} fill={color} />
    <Path
      d="M8 14s2 2 4 2 4-2 4-2"
      stroke="white"
      strokeWidth={2}
      fill="none"
    />
  </Svg>
);

export const StickerIcon2: React.FC<IconProps> = ({ 
  width = 24, 
  height = 24, 
  color = '#2196F3' 
}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24">
    <Path
      d="M12 2L15 8L21 9L17 14L18 20L12 17L6 20L7 14L3 9L9 8L12 2Z"
      fill={color}
    />
  </Svg>
); 