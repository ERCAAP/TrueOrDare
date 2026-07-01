import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface IconProps {
  color?: string;
  size?: number;
}

export const MaleIcon: React.FC<IconProps> = ({ color = "#000", size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <Path
      d="M16 6a4 4 0 100 8 4 4 0 000-8zM16 16c-4 0-8 1.5-8 4v4h16v-4c0-2.5-4-4-8-4z"
      fill={color}
    />
    <Path
      d="M12 24h8v4h-8z"
      fill={color}
    />
  </Svg>
);

export const FemaleIcon: React.FC<IconProps> = ({ color = "#000", size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    {/* Dress (triangle shape) */}
    <Path
      d="M12 8C9.5 8 7.5 10 6 14C5.5 15.5 5 17 5 18V20H19V18C19 17 18.5 15.5 18 14C16.5 10 14.5 8 12 8Z"
      fill={color}
    />
    {/* Upper body */}
    <Path
      d="M12 8C14.21 8 16 6.21 16 4C16 1.79 14.21 0 12 0C9.79 0 8 1.79 8 4C8 6.21 9.79 8 12 8Z"
      fill={color}
    />
    {/* Left side straight hair */}
    <Path
      d="M8 3C8 3 6 4 5 6C4 8 4 9 4.5 10C5 11 6 11.5 7 11.5C8 10 8 9 8 8V3Z"
      fill={color}
    />
    {/* Right side straight hair */}
    <Path
      d="M16 3C16 3 18 4 19 6C20 8 20 9 19.5 10C19 11 18 11.5 17 11.5C16 10 16 9 16 8V3Z"
      fill={color}
    />
    {/* Top hair */}
    <Path
      d="M12 2C9 2 7.5 2.5 6 4C8 4 16 4 18 4C16.5 2.5 15 2 12 2Z"
      fill={color}
    />
    {/* Ribbon center */}
    <Path
      d="M12 0.5L9.5 2L12 3.5L14.5 2L12 0.5Z"
      fill={color}
    />
    {/* Ribbon left loop */}
    <Path
      d="M8.5 1.5L9.5 2L8.5 2.5L7 2L8.5 1.5Z"
      fill={color}
    />
    {/* Ribbon right loop */}
    <Path
      d="M15.5 1.5L17 2L15.5 2.5L14.5 2L15.5 1.5Z"
      fill={color}
    />
    {/* Ribbon tails */}
    <Path
      d="M7 2L6 4L7.5 3L8.5 2.5L7 2Z"
      fill={color}
    />
    <Path
      d="M17 2L18 4L16.5 3L15.5 2.5L17 2Z"
      fill={color}
    />
  </Svg>
); 