import React from 'react';
import { StyleSheet, Platform, Text, View } from 'react-native';


const PlayerCard = ({teamName, bestPlayer}) => (
    <View style={styles.container}>
        <Text style={styles.text}>{teamName}</Text>
        <Text style={styles.text}>{bestPlayer}</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        background: 'lightgray',
    },
    text: {
        fontSize: 20,
        fontFamily: Platform.select({
            ios: 'San Francisco', 
            android: 'sans-serif'
        }),
        color: '#000',
    }
})

export default PlayerCard;