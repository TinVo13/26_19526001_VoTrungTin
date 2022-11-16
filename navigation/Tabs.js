import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../component/HomeScreen';
import Order from '../component/Order';
import { Image, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export default function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarStyle: {  height: 60,backgroundColor:'#d4d4d4' },
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen name='Home' component={HomeScreen} options={{
        tabBarIcon: ({ focused }) => {
          return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('../assets/hut.png')} resizeMode='contain' style={{ height: 20, width: 20,tintColor:focused?"#C67C4E" :"black"}}></Image>
              
            </View>
          )
        }            
      }}/> 
        <Tab.Screen name='Order' component={Order}  options={{
        tabBarIcon: ({ focused }) => {
          return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('../assets/bag.png')} resizeMode='contain' style={{ height: 20, width: 20,tintColor:focused?"#C67C4E" :"black"}}></Image>
            </View>
          )
        }            
      }}/>
    </Tab.Navigator>
  )
}