import React from 'react'
import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Detail () {
  const h = Dimensions.get('window').height;
  return (
    <View style={styles.container}>
        <ScrollView>
        <View style={{ padding: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Image source={require('../assets/back.png')} style={{ marginStart: 0 }}></Image>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Detail</Text>
          <Image source={require('../assets/love.png')} style={{ marginEnd: 0 }}></Image>
        </View>
        <View style={{ marginHorizontal: 20, borderBottomColor: '#dfdfdf', borderWidth: 1, borderColor: 'white' }}>
          <ImageBackground source={require('../assets/Cafe_cappuccino.jpg')} style={{ height: 250 }} imageStyle={{ borderRadius: 15 }}>
          </ImageBackground>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>Cappuccino</Text>
          <Text style={{ fontSize: 14, color: '#dfdfdf', marginTop: 10 }}>with Chocolate</Text>
          <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
            <Image source={require('../assets/star.png')} style={{ height: 15, width: 15 }}></Image>
            <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 10 }}>4.8</Text>
            <Text style={{ color: '#dfdfdf', marginLeft: 5, fontSize: 12 }}>(230)</Text>
          </View>
        </View>
        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Description</Text>
          <Text style={{ color: '#1e1e1e' }}>A cappuccino is an approximately 150 ml(5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk the fo...<Text style={{ color: '#c67c4e' }}>Read More</Text></Text>
        </View>
        <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Size</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', borderColor: 'black', borderWidth: 1, borderRadius: 15, width: 80, padding: 10, marginRight: 10 }} onPress={() => { }}>
              <Text>S</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', borderColor: 'black', borderWidth: 1, borderRadius: 15, width: 80, padding: 10, marginRight: 10 }}>
              <Text>M</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', borderColor: 'black', borderWidth: 1, borderRadius: 15, width: 80, padding: 10, marginRight: 10 }}>
              <Text>L</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginVertical:20,flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:'#f9f9f9',padding:20,borderRadius:15 }}>
          <View>
            <Text style={{fontWeight:'bold',color:'grey'}}>Price</Text>
            <Text style={{ color: '#C67C4E', fontSize: 18, fontWeight: 'bold', marginTop: 5 }}>$<Text>4.53</Text></Text>
          </View>
          <View>
            <TouchableOpacity style={{ backgroundColor: '#c67c4e', padding: 15,borderRadius:15,width:150,justifyContent:'center',alignItems:'center' }}>
              <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  }
})
