import React, { useState } from 'react'
import { Button, Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Order({ navigation }) {
  const h = Dimensions.get('window').height;
  const [quantity,setQuantity] = useState(1);
  function hamCong(){
    setCong+1;
  }
  return (
    <View style={styles.container}>
      <View style={{ padding: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Image source={require('../assets/back.png')} style={{ marginStart: 0 }}></Image>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Order</Text>
        <View></View>
      </View>
      <View style={{ marginHorizontal: 20,marginBottom:20, backgroundColor: '#dfdfdf', flexDirection: 'row', borderRadius: 10 }}>
        <TouchableOpacity style={{ backgroundColor: '#c67c4e', width: '50%', padding: 10, borderRadius: 10 }}>
          <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Deliver</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: '#dfdfdf', width: '50%', padding: 10, borderRadius: 10 }}>
          <Text style={{ color: 'grey', fontWeight: 'bold', textAlign: 'center' }}>Deliver</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Delivery Address</Text>
      </View>
      <View style={{ marginHorizontal: 20, marginTop: 10, borderBottomWidth: 1, borderBottomColor: 'grey' }}>
        <Text style={{ color: 'black', fontWeight: 'bold' }}>Jl.Kpg Sutoyo</Text>
        <Text style={{ color: 'grey' }}>kpg. Sutoyo No. 620 Bilzen, Tanjungbalai</Text>
        <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 15 }}>
          <TouchableOpacity style={{ flexDirection: 'row', marginTop: 5, alignItems: 'center', borderWidth: 1, borderColor: 'grey', borderRadius: 10, paddingHorizontal: 5, paddingVertical: 3 }}>
            <Image source={require('../assets/edit.png')} style={{ height: 15, width: 15, }}></Image>
            <Text style={{ marginStart: 5 }}>Edit Address</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row', marginTop: 5, alignItems: 'center', borderWidth: 1, borderColor: 'grey', borderRadius: 10, paddingHorizontal: 5, marginStart: 10, paddingVertical: 3 }}>
            <Image source={require('../assets/add.png')} style={{ height: 15, width: 15, }}></Image>
            <Text style={{ marginStart: 5 }}>Add Note</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flexDirection: 'row', marginHorizontal: 20, paddingVertical: 10, justifyContent: 'space-between', borderBottomColor: 'grey', borderBottomWidth: 1 }}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={require('../assets/Cafe_cappuccino.jpg')} style={{ height: 50, width: 50, borderRadius: 10 }}></Image>
          <View style={{ marginStart: 15 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Cappuccino</Text>
            <Text style={{ color: 'grey', fontSize: 12, marginTop: 3 }}>with Chocolate</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Button title='-' color={'#c67c4e'} onPress={()=>setQuantity(quantity-1)}/>
          <Text style={{ margin: 10 }}>{quantity}</Text>
          <Button title='+' color={'#c67c4e'} onPress={()=>setQuantity(quantity+1)}/>
        </View>
      </View>
      <View style={{ padding: 20 }}>
        <TouchableOpacity style={{ flexDirection: 'row', borderRadius: 10, borderWidth: 1, padding: 15, justifyContent: 'space-between', alignItems: 'center' }} onPress={() => { navigation.navigate('Detail') }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={require('../assets/discount.png')}></Image>
            <Text style={{ marginLeft: 10, fontSize: 14, fontWeight: '500' }}>1 Discount applied</Text>
          </View>
          <Image source={require('../assets/next.png')}></Image>
        </TouchableOpacity>
      </View>
      <View style={{ marginHorizontal: 20, borderBottomColor: 'grey', borderBottomWidth: 1, paddingBottom: 10, }}>
        <Text>Payment Summary</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
          <Text style={{ color: 'grey' }}>Price</Text>
          <Text style={{ color: 'grey' }}>$<Text>4.53</Text></Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, }}>
          <Text style={{ color: 'grey' }}>Deliery Fee</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ color: 'grey', textDecorationLine: 'line-through', }}>$<Text>2.0</Text></Text>
            <Text style={{ color: 'grey', marginStart: 5 }}>$<Text>1.0</Text></Text>
          </View>
        </View>
      </View>
      <View style={{marginHorizontal:20}}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
          <Text style={{ color: 'grey' }}>Total Payment</Text>
          <Text style={{ color: 'grey' }}>$<Text>5.53</Text></Text>
        </View>
      </View>
      <View style={{marginHorizontal:20,flexDirection:'row',paddingVertical:15,justifyContent:'space-between',alignItems:'center'}}>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <Image source={require('../assets/money.png')}></Image>
          <TouchableOpacity style={{backgroundColor:'#c67c4e',borderRadius:10,paddingHorizontal:10,paddingVertical:3,marginStart:10}}>
            <Text style={{color:'white',fontWeight:'bold'}}>Cash</Text>
          </TouchableOpacity>
          <Text style={{backgroundColor:'#f9f9f9',padding:5,borderRadius:10}}>$<Text>5.53</Text></Text>
        </View>
        <Image source={require('../assets/more.png')}></Image>
      </View>
      <View style={{marginHorizontal:20}}>
        <TouchableOpacity style={{backgroundColor:'#c67c4e',padding:15,borderRadius:10}}
          onPress={()=>{navigation.navigate('Detail')}}>
          <Text style={{color:'white',fontWeight:'bold',textAlign:'center'}}>Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})
