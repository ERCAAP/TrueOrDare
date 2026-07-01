import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IconProps {
  color?: string;
  size?: number;
}

export const MaleIcon: React.FC<IconProps> = ({ color = '#000', size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M20 4h-4v2h2.6l-3.1 3.1C14.1 7.8 12.2 7 10 7c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8c0-2.2-0.8-4.1-2.1-5.5L19 6.4V9h2V4zM10 21c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"
      fill={color}
    />
  </Svg>
);

export const FemaleIcon: React.FC<IconProps> = ({ color = '#000', size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 2C8.7 2 6 4.7 6 8c0 2.5 1.5 4.6 3.7 5.5v2.2H7v2h2.7V20h2v-2.3H14v-2h-2.7v-2.2c2.2-0.9 3.7-3 3.7-5.5 0-3.3-2.7-6-6-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"
      fill={color}
    />
  </Svg>
); 