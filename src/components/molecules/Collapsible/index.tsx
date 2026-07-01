import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
}

export const Collapsible: React.FC<CollapsibleProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  const toggleCollapsible = () => {
    const toValue = isOpen ? 0 : 1;
    
    Animated.timing(animation, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
    
    setIsOpen(!isOpen);
  };

  const heightInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1000], // Maksimum yükseklik
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleCollapsible} style={styles.header}>
        <ThemedText style={styles.title}>{title}</ThemedText>
      </TouchableOpacity>
      <Animated.View style={[styles.content, { height: heightInterpolate }]}>
        {children}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    marginVertical: 4,
  },
  header: {
    padding: 15,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    overflow: 'hidden',
  },
}); 