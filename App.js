import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './components/Header/Header';

export default class App extends Component {
  render() {
    return (
      <View>
        <Header />
      </View>
    );
  };
};