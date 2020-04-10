import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";

export const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Global Life</Text>
        </View>
      
    );
};

const styles = StyleSheet.create({
    header: {
        height: 80,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: 'black',
        paddingBottom: 10
    },
    text: {
        color: '#ffd05c',
        fontSize: 25
    },
});