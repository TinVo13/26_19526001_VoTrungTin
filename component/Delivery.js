import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import MapView from 'react-native-maps';

export const Delivery = () => {
    return (
        <View style={styles.container}>
            <Text>Maps</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
