import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Splash screen kontrolü
SplashScreen.preventAutoHideAsync();

// Expo Router yapılandırması
export const unstable_settings = {
  initialRouteName: '(tabs)',
} as const;

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <ThemeProvider value={DefaultTheme}>
          <Stack 
            screenOptions={{
              headerShown: false,
              contentStyle: {
                backgroundColor: '#8B5CF6',
              },
            }}
          >
            <Stack.Screen 
              name="(tabs)" 
              options={{
                headerShown: false,
                animation: 'fade',
              }}
            />
            <Stack.Screen 
              name="game" 
              options={{
                presentation: 'modal',
                animation: 'slide_from_bottom',
                contentStyle: {
                  backgroundColor: '#8B5CF6',
                },
              }}
            />
          </Stack>
          <StatusBar style="light" />
        </ThemeProvider>
      </SafeAreaProvider>
    </Provider>
  );
}
