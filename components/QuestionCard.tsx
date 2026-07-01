import React from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import { ThemedText } from './ThemedText';
import { Button } from './ui/Button';

interface QuestionCardProps {
  question: string;
  type: 'truth' | 'dare';
  onAnswer: (isTrue: boolean) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  type,
  onAnswer,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <ThemedText style={styles.type}>
          {type === 'truth' ? 'DOĞRULUK' : 'CESARET'}
        </ThemedText>
        <ThemedText style={styles.question}>{question}</ThemedText>
        <View style={styles.buttons}>
          <Button
            title="DOĞRU"
            onPress={() => onAnswer(true)}
            style={styles.truthButton}
          />
          <Button
            title="YALAN"
            onPress={() => onAnswer(false)}
            style={styles.dareButton}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    width: '100%',
    alignItems: 'center',
  },
  type: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    color: '#FF4B4B',
  },
  question: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
    color: '#000',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  truthButton: {
    backgroundColor: '#4CAF50',
    width: '45%',
  },
  dareButton: {
    backgroundColor: '#FF4B4B',
    width: '45%',
  },
}); 