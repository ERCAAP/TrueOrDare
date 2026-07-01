import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';

interface ThemedTextProps extends TextProps {
  type?: 'default' | 'title' | 'defaultSemiBold' | 'link';
}

export const ThemedText: React.FC<ThemedTextProps> = ({ type = 'default', style, ...props }) => {
  return <Text style={[styles[type], style]} {...props} />;
};

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    color: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  defaultSemiBold: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  link: {
    fontSize: 16,
    color: '#0066CC',
    textDecorationLine: 'underline',
  },
}); 