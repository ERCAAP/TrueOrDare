import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { GameSticker } from '@/components/GameSticker';
import { Button } from '@/components/atoms/Button';

export default function GameScreen() {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <GameSticker name="medal" size={32} />
        <GameSticker name="mascot" size={80} style={styles.mascot} />
        <GameSticker name="settings" size={32} />
      </View>

      <View style={styles.content}>
        <ThemedText style={styles.title}>Oyun Başlıyor!</ThemedText>
        
        <View style={styles.gameArea}>
          <ThemedText style={styles.instructions}>
            Şişeyi çevirmek için hazır mısın?
          </ThemedText>
          
          {/* Şişe animasyonu buraya gelecek */}
          <View style={styles.bottleContainer}>
            <GameSticker name="mascot" size={120} />
          </View>
          
          <Button 
            title="Şişeyi Çevir"
            onPress={() => {}}
            style={styles.spinButton}
          />
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF4B4B',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  mascot: {
    alignSelf: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginVertical: 20,
  },
  gameArea: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 30,
  },
  instructions: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  bottleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spinButton: {
    width: '80%',
    height: 60,
    backgroundColor: '#fff',
    marginTop: 20,
  },
}); 