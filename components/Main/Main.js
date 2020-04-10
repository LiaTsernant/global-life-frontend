import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { Header } from './components/Header/Header';

export default class Main extends Component {
  render() {
    return (
      <View style={styles.backgroundContainer}>
          <Text>I am MAIN! YAAAAAAY!!!</Text>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  backgroundContainer: {
      backgroundColor: 'black',
      flex: 1,
      width: null,
      height: null,
      justifyContent: 'center',
      alignItems: 'center',
  }
})


// 8133376366 Kevin 