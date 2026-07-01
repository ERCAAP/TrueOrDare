import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { ThemedText } from './ThemedText';
import { IconSymbol } from './ui/IconSymbol';

interface GameHeaderProps {
  title: string;
  onSettingsPress: () => void;
  onMedalPress: () => void;
}

export const GameHeader: React.FC<GameHeaderProps> = ({
  title,
  onSettingsPress,
  onMedalPress,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onMedalPress}>
        <IconSymbol name="medal" size={32} color="#fff" />
      </TouchableOpacity>
      <ThemedText style={styles.title}>{title}</ThemedText>
      <TouchableOpacity onPress={onSettingsPress}>
        <IconSymbol name="settings" size={32} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
  },
}); 