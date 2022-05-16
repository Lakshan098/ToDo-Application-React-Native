import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Sandbox() {
    return(
        <View style ={styles.container}>
            <Text style={styles.boxOne}>one</Text>
            <Text style={styles.boxTwo}>two</Text>
            <Text style={styles.boxThree}>three</Text>
            <Text style={styles.boxFour}>four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        paddingTop: 40,
        backgroundColor: '#ddd',
    },

    boxOne: {

        backgroundColor: 'violet',
        padding: 10,
    },
    boxTwo: {

        backgroundColor: 'gold',
        padding: 10,

    },
    boxThree: {

        backgroundColor: 'coral',
        padding: 10,
    },
    boxFour: {

        backgroundColor: 'skyblue',
        padding: 10,

    }    
})