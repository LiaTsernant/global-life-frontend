import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    // AppRegistry, 
    TextInput, 
    Dimensions 
} from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
const { width: WIDTH } = Dimensions.get('window');

export const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{props.mainPage}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: 'black',
        paddingBottom: 10
    },
    text: {
        color: 'yellow',
        fontSize: 25
    },
});