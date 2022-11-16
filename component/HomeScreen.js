import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Dimensions, FlatList, Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';


const h = Dimensions.get('window').height;
const DATA = [
  {
    id: '1',
    title: 'All',
    img: require('../assets/hinh5.png'),
  },
  {
    id: '2',
    title: 'Roadbike',
    img: require('../assets/hinh5.png'),
  },
  {
    id: '3',
    title: 'Mountain',
    img: require('../assets/hinh5.png'),
  },
  {
    id: '4',
    title: 'Mountain',
    img: require('../assets/hinh5.png'),
  },
];
export default function HomeScreen({ navigation }) {
  const [selectedValue, setSelectedValue] = useState("Bilzen, Tanjungbalai");
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getBike = async () => {
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
    getBike();
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={{ paddingHorizontal: 20, paddingTop: 20, flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-between',alignItems:'center' }}>
        <Image source={require('../assets/menu.png')}/>
        <Image source={require('../assets/bike.png')}/>
        <View style={{flexDirection:'row'}}>
          <Image source={require('../assets/search.png')} style={{marginRight:10}}/>
          <Image source={require('../assets/bell.png')}/>
        </View>
      </View>
      <View style={{ backgroundColor: 'white', flexDirection: 'row',marginTop:10, alignItems: 'center', justifyContent: 'space-between',marginHorizontal:20 }}>
        <Text>The World's <Text style={{color:'#fa6500',fontSize:20,fontWeight:'bold'}}>Best Bike</Text></Text>
      </View>
      <View style={{marginHorizontal:20,marginTop:10}}>
        <Text style={{fontWeight:'bold',fontSize:20}}>Categories</Text>
      </View>
      <View style={{ paddingHorizontal: 20, backgroundColor: 'white' }}>
        <FlatList
          data={DATA}
          horizontal
          renderItem={({ item, index }) => {
            return (
              <Text style={{ color: '#fa6500', fontSize: 18, backgroundColor: '#f5f5f5', marginVertical: 10, marginRight: 10, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10 }}>{item.title}</Text>
            );
          }}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={{ paddingHorizontal: 20, backgroundColor: '#f9f9f9' }}>
        {isLoading ? <ActivityIndicator /> : (
          <FlatList
            data={data}
            numColumns={2}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
              return (
                <View style={{ height: 250, width: 150, backgroundColor: '#f5f5f5', margin: 15, borderRadius: 20 }}>
                  <ImageBackground source={{uri:item.img}} imageStyle={{ borderRadius: 20 }} style={{ height: 150, width: 150, }} resizeMode='contain'>
                    <View style={{ flexDirection: 'row', padding: 5, alignItems: 'center',justifyContent:'flex-end',marginEnd:10 }}>
                      <Image source={require('../assets/love.png')} style={{ height: 15, width: 15 }} />
                    </View>
                  </ImageBackground>
                  <View style={{ alignItems: 'center', marginLeft: 10,justifyContent:'center' }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                      <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold',color:'#fa6500' }}>$</Text>
                        <Text style={{ fontSize: 20, marginLeft: 5, fontWeight: 'bold' }}>{item.price}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        )}
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
