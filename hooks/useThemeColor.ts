/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { useColorScheme } from 'react-native';

const ThemeColors = {
  light: {
    text: '#000',
    background: '#fff',
    tint: '#FF4B4B',
    tabIconDefault: '#ccc',
    tabIconSelected: '#FF4B4B',
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: '#FF4B4B',
    tabIconDefault: '#ccc',
    tabIconSelected: '#FF4B4B',
  },
};

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof ThemeColors.light & keyof typeof ThemeColors.dark
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  }
  return ThemeColors[theme][colorName];
}
