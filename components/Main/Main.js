import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Linking } from 'react-native';
import Header from '../../components/Header/Header';
import { Actions } from 'react-native-router-flux';
import apiCalls from '../../api/apiCalls';
import { AsyncStorage } from 'react-native';

const { width: WIDTH } = Dimensions.get('window');

export default class Main extends Component {
  state = {
    data: '',
  }

  goToAbout = () => {
    Actions.about()
  }

  componentDidMount() {
    AsyncStorage.getItem('user').
    then((value) => {
        this.setState({'user': value })
        // console.log(this.state) //      PRINTS USER's ID!!!!!!!!!!!!!
    }).catch((err) => console.log(err))

    apiCalls.countryShow("Russia").
      then(res => res.json()).
      then((res) => {
        this.setState({
          data: res
        });
      }
    );
  }

  render() {
    return (
      <>
      <Header scene={'main'} />
      <View style={styles.backgroundContainer}>
        <View>
          <Text style={styles.countryName}>{this.state.data.name}</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={ ()=>{ Linking.openURL(`tel:${this.state.data.emergency}`)} } >
          <View style={styles.buttonText}>
            <Text style={styles.label}>Emergency: </Text>
            <Text style={styles.left}>{ this.state.data.emergency ? this.state.data.emergency : '' }</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={ ()=>{ Linking.openURL(`tel:${this.state.data.police}`)} } >
          <View style={styles.buttonText}>
            <Text style={styles.label}>Police: </Text>
            <Text style={styles.left}>{ this.state.data.police ? this.state.data.police : '' }</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={ ()=>{ Linking.openURL(`tel:${this.state.data.firefighters}`)} } >
          <View style={styles.buttonText}>
            <Text style={styles.label}>Fire: </Text>
            <Text style={styles.left}>{ this.state.data.firefighters ? this.state.data.firefighters : '' }</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={ ()=>{ Linking.openURL(`tel:${this.state.data.crisisHotline}`)} } >
          <View style={styles.buttonText}>
            <Text style={styles.label}>Crisis Hotline: </Text>
            <Text>{ this.state.data.crisisHotline ? this.state.data.crisisHotline : '' }</Text>
          </View>
        </TouchableOpacity>

      </View>
      </>
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
  button: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    backgroundColor: 'red',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    flexDirection: "row",
    justifyContent: 'space-between',
    margin: 10
  },
  label: {
    fontWeight: 'bold'
  },
  countryName: {
    fontSize: 30
  }
});
