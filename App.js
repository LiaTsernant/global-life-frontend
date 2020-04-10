import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { Header } from './components/Header/Header';
import Routes from './config/Routes';


// import Login from './components/Login/Login';
// import SignUp from './components/SignUp/SignUp';



export default class App extends Component {
  render() {
    return (
      <View style={styles.backgroundContainer}>
        {/* <Header /> */}
        {/* <Login /> */}
        {/* <SignUp /> */}
        <Routes />
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