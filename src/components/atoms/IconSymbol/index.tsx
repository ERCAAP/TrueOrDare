import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface IconSymbolProps {
  name: string;
  size: number;
  color: string;
  style?: ViewStyle;
}

export const IconSymbol: React.FC<IconSymbolProps> = ({ name, size, color, style }) => {
  return <View style={[{ width: size, height: size, backgroundColor: color }, style]} />;
}; 