import React from 'react';
import { ScrollView, StyleSheet, View, ViewStyle } from 'react-native';

interface ParallaxScrollViewProps {
  children: React.ReactNode;
  headerBackgroundColor: {
    light: string;
    dark: string;
  };
  headerImage: React.ReactNode;
  style?: ViewStyle;
}

const ParallaxScrollView: React.FC<ParallaxScrollViewProps> = ({
  children,
  headerBackgroundColor,
  headerImage,
  style,
}) => {
  return (
    <ScrollView style={[styles.container, style]}>
      <View style={[styles.header, { backgroundColor: headerBackgroundColor.light }]}>
        {headerImage}
      </View>
      <View style={styles.content}>{children}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 200,
    position: 'relative',
    overflow: 'hidden',
  },
  content: {
    padding: 20,
  },
});

export default ParallaxScrollView; 