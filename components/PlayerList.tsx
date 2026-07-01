import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { ThemedText } from './ThemedText';
import { Button } from './ui/Button';

interface Player {
  id: string;
  name: string;
  avatar: string;
  score: number;
}

interface PlayerListProps {
  players: Player[];
  onAddPlayer: () => void;
  maxPlayers?: number;
}

export const PlayerList: React.FC<PlayerListProps> = ({ 
  players, 
  onAddPlayer, 
  maxPlayers = 10 
}) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {players.map((player) => (
          <View key={player.id} style={styles.playerItem}>
            <View style={styles.avatar}>
              <ThemedText>{player.name[0]}</ThemedText>
            </View>
            <ThemedText style={styles.playerName}>{player.name}</ThemedText>
          </View>
        ))}
        {players.length < maxPlayers && (
          <Button
            title="+"
            onPress={onAddPlayer}
            style={styles.addButton}
            textStyle={styles.addButtonText}
          />
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  playerItem: {
    alignItems: 'center',
    marginHorizontal: 8,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playerName: {
    marginTop: 5,
    fontSize: 12,
    color: '#fff',
  },
  addButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginHorizontal: 8,
  },
  addButtonText: {
    fontSize: 24,
  },
}); 