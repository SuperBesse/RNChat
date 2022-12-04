import React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StartupContainer, ChatContainer } from '@/Containers';
import { useTheme } from '@/Hooks';
import { navigationRef } from './utils';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
const Stack = createStackNavigator();

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme();
  const { colors } = NavigationTheme;

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={[
          Layout.fill,
          {
            backgroundColor: colors.card,
          },
        ]}
        edges={['bottom', 'left', 'right']}
      >
        <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
          <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Startup" component={StartupContainer} />
            <Stack.Screen
              name="Main"
              component={ChatContainer}
              options={{
                animationEnabled: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default ApplicationNavigator;
