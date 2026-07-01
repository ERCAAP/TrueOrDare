import React, { useState } from 'react';
import { StyleSheet, View, Alert, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { ThemedView } from '../components/ThemedView';
import { ThemedText } from '../components/ThemedText';
import { MedalButton } from '../components/atoms/MedalButton';
import { MaleIcon, FemaleIcon } from '../components/icons/GenderIcons';
import { AchievementModal } from '../components/molecules/AchievementModal';

interface Player {
  id: string;
  name: string;
  isMale: boolean;
}

export const MainScreen: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [achievementModalVisible, setAchievementModalVisible] = useState(false);

  const addPlayer = () => {
    Alert.prompt(
      'Yeni Oyuncu',
      'Oyuncu adını girin:',
      [
        { text: 'İptal', style: 'cancel' },
        {
          text: 'Ekle',
          onPress: (name) => {
            if (name && name.trim()) {
              const newPlayer: Player = {
                id: Date.now().toString(),
                name: name.trim(),
                isMale: true,
              };
              setPlayers([...players, newPlayer]);
            }
          }
        }
      ],
      'plain-text'
    );
  };

  const removePlayer = (id: string) => {
    setPlayers(players.filter(player => player.id !== id));
  };

  const toggleGender = (id: string) => {
    setPlayers(players.map(player => 
      player.id === id ? { ...player, isMale: !player.isMale } : player
    ));
  };

  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <MedalButton 
          onPress={() => setAchievementModalVisible(true)}
        />
        <View style={styles.mascotContainer}>
          <ThemedText style={styles.mascotEmoji}>🤪</ThemedText>
        </View>
        <TouchableOpacity style={styles.iconButton}>
          <ThemedText style={styles.iconButtonText}>⚙️</ThemedText>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <ThemedText style={styles.title}>DOĞRULUK MU CESARET Mİ?</ThemedText>

        <View style={styles.playerSection}>
          {players.map((player) => (
            <View key={player.id} style={styles.playerItem}>
              <ThemedText style={styles.playerText}>{player.name}</ThemedText>
              <TouchableOpacity style={styles.closeButton} onPress={() => removePlayer(player.id)}>
                <ThemedText style={styles.closeButtonText}>×</ThemedText>
              </TouchableOpacity>
              <View style={styles.genderIcons}>
                <TouchableOpacity 
                  style={[styles.genderIcon, player.isMale ? styles.genderIconActive : styles.genderIconInactive]} 
                  onPress={() => toggleGender(player.id)}
                >
                  <MaleIcon color={player.isMale ? '#fff' : '#8B5CF6'} />
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[styles.genderIcon, !player.isMale ? styles.genderIconActive : styles.genderIconInactive]}
                  onPress={() => toggleGender(player.id)}
                >
                  <FemaleIcon color={!player.isMale ? '#fff' : '#8B5CF6'} />
                </TouchableOpacity>
              </View>
            </View>
          ))}

          {players.length === 0 && (
            <ThemedText style={styles.emptyText}>Lütfen en az 2 oyuncu ekle</ThemedText>
          )}

          <TouchableOpacity style={styles.addPlayerButton} onPress={addPlayer}>
            <ThemedText style={styles.addPlayerButtonText}>Oyuncu ekle +</ThemedText>
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={styles.playButton} 
          onPress={() => router.push('game' as never)}
        >
          <ThemedText style={styles.playButtonText}>OYNA</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.continueButton} 
          onPress={() => router.push('game' as never)}
        >
          <ThemedText style={styles.continueButtonText}>DEVAM ET</ThemedText>
        </TouchableOpacity>
      </View>

      <AchievementModal 
        visible={achievementModalVisible}
        onClose={() => setAchievementModalVisible(false)}
      />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8B5CF6',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: 48,
  },
  iconButton: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconButtonText: {
    fontSize: 24,
  },
  mascotContainer: {
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mascotEmoji: {
    fontSize: 80,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginVertical: 20,
  },
  playerSection: {
    width: '100%',
    marginVertical: 20,
  },
  playerItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 12,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 5,
  },
  playerText: {
    flex: 1,
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
  },
  closeButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  closeButtonText: {
    fontSize: 20,
    color: '#000',
  },
  genderIcons: {
    flexDirection: 'row',
    gap: 8,
  },
  genderIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
  },
  genderIconActive: {
    backgroundColor: '#8B5CF6',
  },
  genderIconInactive: {
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  emptyText: {
    color: 'rgba(255,255,255,0.7)',
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 14,
  },
  addPlayerButton: {
    backgroundColor: '#FFD600',
    borderRadius: 25,
    padding: 12,
    marginTop: 10,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  addPlayerButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
  },
  playButton: {
    position: 'absolute',
    bottom: 90,
    width: '100%',
    backgroundColor: '#000',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  playButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  continueButton: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    backgroundColor: '#000',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 