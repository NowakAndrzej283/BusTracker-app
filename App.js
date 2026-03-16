import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import HomePage from './screens/HomePage';
import TimetablePage from './screens/TimetablePage';
import MapPage from './screens/MapPage';
import { initDB } from './services/db';
import { useEffect } from 'react';



//const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

export default function App() {

  useEffect(()=> {
    const handleInitDB = async()=> {
      const data = await initDB();
      console.log('to jest data; ', data)
    };

    handleInitDB();

    return console.log('inside the useEffect');
  },[])


  return (
    <>
      <StatusBar style='dark'/>
      <NavigationContainer>
        <BottomTab.Navigator screenOptions={{
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
          <BottomTab.Screen name="Home" component={HomePage}
            options={{title: 'Route', tabBarIcon: ({color}) => (<MaterialCommunityIcons name="routes" size={24} color='black' />)}}
          />
          <BottomTab.Screen 
            name="TimetablePage" 
            component={TimetablePage} 
            options={{title: 'Schedule', tabBarIcon: ({color}) => (<FontAwesome6 name="bus-simple" size={24} color="black" />)}}
          />
          <BottomTab.Screen name="MapPage" component={MapPage} options={{title: "Maps", tabBarIcon: ({color}) => (<FontAwesome name="map" size={24} color="black" />)}}/>
        </BottomTab.Navigator>
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
