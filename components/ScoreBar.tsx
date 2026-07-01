import React from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import { ThemedText } from './ThemedText';

interface ScoreBarProps {
  score: number;
  maxScore?: number;
  players: Array<{ id: string; name: string; score: number }>;
}

export const ScoreBar: React.FC<ScoreBarProps> = ({ 
  score, 
  maxScore = 400,
  players 
}) => {
  const progress = (score / maxScore) * 100;

  return (
    <View style={styles.container}>
      <View style={styles.playerIcons}>
        {players.map((player) => (
          <View key={player.id} style={styles.playerIcon}>
            <ThemedText>{player.name[0]}</ThemedText>
          </View>
        ))}
      </View>
      <View style={styles.barContainer}>
        <Animated.View 
          style={[
            styles.progressBar,
            { width: `${progress}%` }
          ]} 
        />
      </View>
      <View style={styles.trophy}>
        <ThemedText>🏆</ThemedText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  playerIcons: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  playerIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  barContainer: {
    height: 10,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#fff',
  },
  trophy: {
    position: 'absolute',
    right: -15,
    top: -5,
  },
}); 