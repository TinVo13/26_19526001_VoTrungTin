import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Dimensions, FlatList, Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';


const h = Dimensions.get('window').height;
const DATA = [
  {
    id: '1',
    title: 'Cappuccino',
    img: require('../assets/CFD.png'),
  },
  {
    id: '2',
    title: 'Machiato',
    img: require('../assets/CFD.png'),
  },
  {
    id: '3',
    title: 'Latte',
    img: require('../assets/CFD.png'),
  },
  {
    id: '4',
    title: 'Latte',
    img: require('../assets/CFD.png'),
  },
  {
    id: '5',
    title: 'Latte',
    img: require('../assets/CFD.png'),
  }
];
export default function HomeScreen({ navigation }) {
  const [selectedValue, setSelectedValue] = useState("Bilzen, Tanjungbalai");
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
      <StatusBar />
      <View style={{ paddingHorizontal: 20, paddingTop: 20, flexDirection: 'row', backgroundColor: '#1e1e1e', justifyContent: 'space-between' }}>
        <View>
          <Text style={{ marginLeft: 10, color: '#d4d4d4' }}>Location</Text>
          <Picker
            selectedValue={selectedValue}
            style={{ height: 30, width: 210, color: 'white', marginTop: -10 }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item label='Bilzen, Tanjungbalai' value={'Bilzen, Tanjungbalai'} style={{ color: 'white' }}></Picker.Item>
          </Picker>
        </View>
        <View style={{}}>
          <Image source={require('../assets/profile.png')} style={{ height: 50, width: 50, borderRadius: 20 }} />
        </View>

      </View>
      <View style={{ backgroundColor: '#313131', flexDirection: 'row', padding: 5, alignItems: 'center', justifyContent: 'space-between', borderRadius: 15, margin: 20 }}>
        <View style={{ flexDirection: 'row', marginLeft: 10 }}>
          <Image source={require('../assets/loupe.png')}></Image>
          <TextInput placeholder='Search coffee' placeholderTextColor={'#d4d4d4'} style={{ marginLeft: 10, }}></TextInput>
        </View>
        <View>
          <TouchableOpacity style={{ backgroundColor: '#C67C4E', padding: 10, borderRadius: 10 }}>
            <Image source={require('../assets/settings.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ paddingHorizontal: 20, backgroundColor: '#f9f9f9' }}>
        <ImageBackground source={require('../assets/Cafe_cappuccino.jpg')} style={{ height: 150 }} imageStyle={{ borderRadius: 15 }}>
          <Text style={{ color: 'white', backgroundColor: 'red', borderRadius: 10, padding: 5, margin: 20, width: 55 }}>Promo</Text>
          <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold', width: 200, marginHorizontal: 20 }}>Buy one get one FREE</Text>
        </ImageBackground>
      </View>
      <View style={{ paddingHorizontal: 20, backgroundColor: '#f9f9f9' }}>
        <FlatList
          data={DATA}
          horizontal
          renderItem={({ item, index }) => {
            return (
              <Text style={{ color: 'white', fontSize: 18, backgroundColor: '#C67C4E', marginVertical: 10, marginRight: 10, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10 }}>{item.title}</Text>
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
                <View style={{ height: 250, width: 150, backgroundColor: 'white', margin: 15, borderRadius: 20 }}>
                  <ImageBackground source={{uri:item.img}} imageStyle={{ borderRadius: 20 }} style={{ height: 150, width: 150, }}>
                    <View style={{ flexDirection: 'row', padding: 5, alignItems: 'center' }}>
                      <Image source={require('../assets/star.png')} style={{ height: 15, width: 15 }} />
                      <Text style={{ marginLeft: 5, color: '#1e1e1e', fontWeight: 'bold' }}>{item.star}</Text>
                    </View>
                  </ImageBackground>
                  <View style={{ jalignItems: 'center', marginLeft: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
                    <Text style={{ color: '#dfdfdf', fontSize: 12, marginTop: 5 }}>with Chocolate</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                      <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>$</Text>
                        <Text style={{ fontSize: 20, marginLeft: 5, fontWeight: 'bold' }}>{item.price}</Text>
                      </View>
                      <View>
                        <TouchableOpacity style={{ backgroundColor: '#c67c4e', height: 30, width: 30, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}
                          onPress={()=>{navigation.navigate('Order')}}>
                          <Text style={{ color: 'white', fontSize: 20 }}>+</Text>
                        </TouchableOpacity>
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
    backgroundColor: '#1e1e1e'
  }
})
