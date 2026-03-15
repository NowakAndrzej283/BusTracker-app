import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';

import HomePage from './screens/HomePage';
import TimetablePage from './screens/TimetablePage';
import MapPage from './screens/MapPage';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='dark'/>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerBackground: () => (
            <LinearGradient
              colors={['rgba(147, 214, 163, 0.8)', 'transparent']} style={{flex: 1}}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            />
            ),  
          headerTintColor: '#000000',
          headerTitleAlign: 'center'
        }}
        >
          <Stack.Screen name="Home" component={HomePage}
            options={{title: 'Route'}}
          />
          <Stack.Screen 
            name="TimetablePage" 
            component={TimetablePage} 
            options={{title: 'Schedule'}}
          />
          <Stack.Screen name="MapPage" component={MapPage} options={{title: "Schedule"}}/>
        </Stack.Navigator>
      </NavigationContainer>
     
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
