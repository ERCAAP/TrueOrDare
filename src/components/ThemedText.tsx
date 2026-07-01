import React from 'react';
import { Text, TextProps } from 'react-native';
import { useTheme } from '@/context/theme';

interface ThemedTextProps extends TextProps {}

export const ThemedText: React.FC<ThemedTextProps> = ({ style, ...props }) => {
  const { isDarkMode } = useTheme();

  return (
    <Text
      style={[
        {
          color: isDarkMode ? '#fff' : '#000',
        },
        style,
      ]}
      {...props}
    />
  );
}; 