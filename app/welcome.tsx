import React, { useEffect } from 'react';
import { StyleSheet, Animated, View } from 'react-native';
import { router } from 'expo-router';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { GameSticker } from '@/components/GameSticker';

export default function WelcomeScreen() {
  useEffect(() => {
    // 3 saniyelik yükleme animasyonundan sonra ana sayfaya yönlendir
    const timer = setTimeout(() => {
      router.replace('/(tabs)');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemedView style={styles.container}>
      <GameSticker name="mascot" size={200} />
      <ThemedText style={styles.loadingText}>Yükleniyor...</ThemedText>
      <ThemedText style={styles.tip}>
        Eğlenceli bir oyun deneyimine hazır olun!
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF4B4B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#fff',
    fontSize: 24,
    marginTop: 20,
  },
  tip: {
    color: '#fff',
    fontSize: 16,
    marginTop: 10,
    opacity: 0.8,
  },
}); 