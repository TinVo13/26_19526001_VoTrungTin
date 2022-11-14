import React from 'react'
import { StyleSheet, View,Text, ImageBackground, TouchableOpacity } from 'react-native'

export default function Onboarding({navigation}) {
  return (
    <View style={styles.container}>
        <ImageBackground source={require('../assets/coffee_img.jpg')} style={styles.background}>
          <View style={styles.textLogin}>
            <Text style={{fontSize:30,fontWeight:'bold',color:'white',width:250,textAlign:'center'}}>Coffee so good, your taste buds will love it.</Text>
            <Text style={{width:250,textAlign:'center',padding:20,color:'#ddded9'}}>The best grain, the finest roast, the powerful flavor.</Text>
            <TouchableOpacity style={{backgroundColor:'#C67C4E',paddingVertical:20,borderRadius:15,width:'100%'}}
              onPress={()=>navigation.navigate('Tabs')}>
              <Text style={{fontWeight:'bold',color:'white',textAlign:'center'}}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'black',
    },
    background:{
      height:'100%',
      width:'100%',
      flexDirection:'column',
      justifyContent:'flex-end',
    },
    textLogin:{
      padding:20,
      alignItems:'center',
      marginBottom:20
    }
});
