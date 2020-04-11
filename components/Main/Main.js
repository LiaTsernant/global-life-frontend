import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { Header } from '../../components/Header/Header';
import { Actions } from 'react-native-router-flux';

const { width: WIDTH } = Dimensions.get('window');

export default class Main extends Component {
  goToAbout = () => {
    Actions.about()
  }

  render() {
    return (
      <View>
        <Header mainPage={'About'}/>

        <View style={styles.backgroundContainer}>
          <Text>I am MAIN! YAAAAAAY!!!</Text>
        </View>

        <TouchableOpacity style={styles.btnAbout} onPress={this.goToAbout}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>

      </View>

    );
  };
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  btnAbout: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    marginTop: 20,
  },
});
