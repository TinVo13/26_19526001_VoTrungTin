import React from 'react'
import { StyleSheet, View,Text, ImageBackground, TouchableOpacity, Image } from 'react-native'

export default function Onboarding({navigation}) {
  return (
    <View style={styles.container}>
        <ImageBackground source={require('../assets/background.png')} style={styles.background} imageStyle={{borderRadius:20}}>
          
        </ImageBackground>
        <View style={styles.textLogin}>
            <Text style={{fontSize:30,color:'#1a1a1a',width:250,textAlign:'center',marginTop:50}}>Welcome to <Text style={{color:'#1a1a1a',fontWeight:'bold'}}>Power Bike Shop</Text></Text>
            <TouchableOpacity style={{backgroundColor:'grey',paddingVertical:20,borderRadius:15,width:320,flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:20}}
              onPress={()=>navigation.navigate('Tabs')}>
                <Image source={require('../assets/google.png')} style={{marginRight:10}}></Image>
              <Text style={{fontWeight:'bold',color:'white',textAlign:'center'}}>Login with Gmail</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'#1a1a1a',paddingVertical:20,borderRadius:15,width:320,flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:20}}
              onPress={()=>navigation.navigate('Tabs')}>
                <Image source={require('../assets/apple.png')} style={{tintColor:'white',marginRight:10}}></Image>
              <Text style={{fontWeight:'bold',color:'white',textAlign:'center'}}>Login with Gmail</Text>
            </TouchableOpacity>
            <Text style={{marginTop:20}}>Not a member? <Text style={{color:'#fa6500'}}>Sign up</Text></Text>
          </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'white',
        alignItems:'center'
    },
    background:{
      height:250,
      width:250,
      flexDirection:'column',
      transform:[{rotate:'45deg'}],
      marginTop:120,
    },
    textLogin:{
      padding:20,
      alignItems:'center',
      marginBottom:20
    }
});
