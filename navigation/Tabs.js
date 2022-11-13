import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../component/HomeScreen';
import Order from '../component/Order';
import Detail from '../component/Detail';
import Onboarding from '../component/Onboarding';
import { Image, Text, View } from 'react-native';

const Tab = createBottomTabNavigator();
export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { borderTopLeftRadius:30,borderTopRightRadius:30,  height: 80,backgroundColor:'#d4d4d4' },
        headerShown: false,
        tabBarShowLabel: false
      }}>
      <Tab.Screen name='Home' component={HomeScreen} options={{
        tabBarIcon: ({ focused }) => {
          return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('../assets/hut.png')} resizeMode='contain' style={{ height: 20, width: 20,tintColor:focused?"#C67C4E" :"black"}}></Image>
              <Text>-</Text>
            </View>
          )
        }            
      }}/> 
        <Tab.Screen name='Order' component={Order}  options={{
        tabBarIcon: ({ focused }) => {
          return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('../assets/love.png')} resizeMode='contain' style={{ height: 20, width: 20,tintColor:focused?"#C67C4E" :"black"}}></Image>
              <Text>-</Text>
            </View>
          )
        }            
      }}/>
        <Tab.Screen name='Detail' component={Detail} options={{
        tabBarIcon: ({ focused }) => {
          return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('../assets/shopping-bag.png')} resizeMode='contain' style={{ height: 20, width: 20,tintColor:focused?"#C67C4E" :"black"}}></Image>
              <Text>-</Text>
            </View>
          )
        }            
      }}/>
  < Tab.Screen name = 'Onboarding' component={Onboarding}  options={{
        tabBarIcon: ({ focused }) => {
          return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('../assets/bell.png')} resizeMode='contain' style={{ height: 20, width: 20,tintColor:focused?"#C67C4E" :"black"}}></Image>
              <Text>-</Text>
            </View>
          )
        }            
      }}/>
    </Tab.Navigator>
  )
}