import React, { useEffect, useState } from 'react'
import { Button, Dimensions, FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Order({ navigation }) {
  const h = Dimensions.get('window').height;
  const [quantity, setQuantity] = useState(1);
  function hamCong() {
    setCong + 1;
  }
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://636b3f8cad62451f9fac7663.mockapi.io/coffee');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <View style={styles.container}>
      <View style={{ padding: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Image source={require('../assets/back.png')} style={{ marginStart: 0 }}></Image>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Card list</Text>
        <View></View>
      </View>
      <View style={{ paddingHorizontal: 20, backgroundColor: 'white' }}>
        <FlatList
          data={data}
          renderItem={({ item, index }) => {
            return (
              <View style={{ flexDirection: 'row', marginHorizontal: 20, paddingVertical: 10, justifyContent: 'space-between', borderBottomColor: 'grey', borderBottomWidth: 1 }}>
                <View style={{ flexDirection: 'row' }}>
                  <Image source={{uri:item.img}} style={{ height: 50, width: 50, borderRadius: 10 }} resizeMode={'contain'}></Image>
                  <View style={{ marginStart: 15 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
                    <Text style={{ color: 'grey', fontSize: 12, marginTop: 3 }}>with Realbike</Text>
                    <Text style={{fontWeight:'bold',color:'#fa6500'}}>$ <Text style={{fontWeight:'bold',color:'black'}}>{item.price}</Text></Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                  <TouchableOpacity onPress={() => setQuantity(quantity - 1)} style={{backgroundColor:'#1a1a1a',height:20,width:20,borderRadius:30,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'white'}}>-</Text>
                  </TouchableOpacity>
                  <Text style={{ margin: 10 }}>{quantity}</Text>
                  <TouchableOpacity onPress={() => setQuantity(quantity + 1)} style={{backgroundColor:'#fa6500',height:20,width:20,borderRadius:30,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'white'}}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={{ marginHorizontal: 20, marginTop:20,borderRadius:20,paddingBottom: 0,backgroundColor:'#f5f5f5',padding:20, }}>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
          <Text>Subtotal</Text>
          <Text>$<Text>3,400.00</Text></Text>
        </View>
        <View style={{borderBottomColor:'black',borderBottomWidth:1,flexDirection:'row',justifyContent:'space-between',marginBottom:10,paddingVertical:10}}>
          <Text>Shopping fee</Text>
          <Text>$<Text>1,00.00</Text></Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:0,paddingVertical:10}}>
          <Text style={{fontSize:20,fontWeight:'bold'}}>Total</Text>
          <Text>$<Text>3,500.00</Text></Text>
        </View>
      </View>
      
      <View style={{ marginHorizontal: 20,marginTop:10 }}>
        <TouchableOpacity style={{ backgroundColor: '#fa6500', padding: 15, borderRadius: 10 }}>
          <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Proceed Checkout</Text>
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
