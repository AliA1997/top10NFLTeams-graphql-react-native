import React from 'react';
import { StyleSheet, Platform, Text, View } from 'react-native';

const TeamCard = ({teamName, city, superBowls}) => (
    <View style={styles.container}>
        <Text style={styles.text}>Team Name: {teamName}</Text>
        <Text style={styles.text}>Team City: {city}</Text>
        <Text style={styles.text}>Team SuperBowls:{superBowls}</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: '800',
        color: '#000',
        fontFamily: Platform.select({
            ios: 'San Francisco',
            android: 'sans-serif'
        })
    }
})

export default TeamCard;