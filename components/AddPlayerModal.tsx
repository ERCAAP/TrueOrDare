import React, { useState } from 'react';
import { StyleSheet, Modal, View, TextInput } from 'react-native';
import { ThemedText } from './ThemedText';
import { Button } from './ui/Button';

interface AddPlayerModalProps {
  visible: boolean;
  onClose: () => void;
  onAdd: (name: string) => void;
}

export const AddPlayerModal: React.FC<AddPlayerModalProps> = ({
  visible,
  onClose,
  onAdd,
}) => {
  const [name, setName] = useState('');

  const handleAdd = () => {
    if (name.trim()) {
      onAdd(name.trim());
      setName('');
      onClose();
    }
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}>
      <View style={styles.container}>
        <View style={styles.content}>
          <ThemedText style={styles.title}>Oyuncu Ekle</ThemedText>
          <TextInput
            style={styles.input}
            placeholder="Oyuncu Adı"
            value={name}
            onChangeText={setName}
            autoFocus
          />
          <View style={styles.buttons}>
            <Button
              title="İptal"
              onPress={onClose}
              style={styles.cancelButton}
            />
            <Button
              title="Ekle"
              onPress={handleAdd}
              disabled={!name.trim()}
            />
          </View>
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
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  cancelButton: {
    backgroundColor: '#ccc',
  },
}); 