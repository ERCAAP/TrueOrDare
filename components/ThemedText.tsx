import React from 'react';
import { Text, TextProps } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';

interface ThemedTextProps extends TextProps {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'subtitle' | 'link';
}

export const ThemedText: React.FC<ThemedTextProps> = (props) => {
  const { style, lightColor, darkColor, type = 'default', ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  const textStyle = {
    default: {
      fontSize: 16,
    },
    title: {
      fontSize: 32,
      fontWeight: '700' as const,
    },
    subtitle: {
      fontSize: 24,
      fontWeight: '600' as const,
    },
    link: {
      fontSize: 16,
      color: '#2e78b7',
    },
  }[type];

  return <Text style={[{ color }, textStyle, style]} {...otherProps} />;
};
