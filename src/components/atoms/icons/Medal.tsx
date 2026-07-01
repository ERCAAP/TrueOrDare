import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface MedalProps {
  width?: number;
  height?: number;
  color?: string;
}

export const Medal: React.FC<MedalProps> = ({ 
  width = 24, 
  height = 24, 
  color = '#FFD700' 
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <Path
        d="M12 15.4A6.8 6.8 0 0 1 5.2 8.6 6.8 6.8 0 0 1 12 1.8a6.8 6.8 0 0 1 6.8 6.8A6.8 6.8 0 0 1 12 15.4zm0-2a4.8 4.8 0 1 0 0-9.6 4.8 4.8 0 0 0 0 9.6z"
        fill={color}
      />
      <Path
        d="M7 22l5-5 5 5-2.5-7h-5L7 22z"
        fill={color}
      />
    </Svg>
  );
}; 