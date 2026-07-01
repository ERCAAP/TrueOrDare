import React from 'react';
import { StyleSheet, Modal, View, TouchableOpacity, ViewStyle } from 'react-native';
import { ThemedText } from './ThemedText';
import { Button } from './ui/Button';

interface SettingsModalProps {
  visible: boolean;
  onClose: () => void;
  onRestart: () => void;
  onQuit: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  visible,
  onClose,
  onRestart,
  onQuit,
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}>
      <View style={styles.container}>
        <View style={styles.content}>
          <ThemedText style={styles.title}>Ayarlar</ThemedText>
          <Button
            title="Oyunu Yeniden Başlat"
            onPress={onRestart}
            style={styles.button}
          />
          <Button
            title="Oyundan Çık"
            onPress={onQuit}
            style={{ ...styles.button, ...styles.quitButton }}
          />
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <ThemedText style={styles.closeText}>Kapat</ThemedText>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    color: '#000',
  },
  button: {
    width: '100%',
    marginBottom: 10,
  } as ViewStyle,
  quitButton: {
    backgroundColor: '#FF4B4B',
  } as ViewStyle,
  closeButton: {
    marginTop: 10,
    padding: 10,
  },
  closeText: {
    color: '#666',
  },
}); 