import React from 'react';
import { View, ViewProps } from 'react-native';
import { useTheme } from '@/context/theme';

interface ThemedViewProps extends ViewProps {}

export const ThemedView: React.FC<ThemedViewProps> = ({ style, ...props }) => {
  const { isDarkMode } = useTheme();

  return (
    <View
      style={[
        {
          backgroundColor: isDarkMode ? '#1F2937' : '#fff',
        },
        style,
      ]}
      {...props}
    />
  );
}; 