import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import  Header from '../../components/Header/Header';
import { AsyncStorage } from 'react-native';
import setAuthHeader from '../../utils/setAuthHeader';
import { Actions } from 'react-native-router-flux';


export default class Profile extends Component {
  goToLogin(){
    Actions.login()
  };

  logout = () => {
    AsyncStorage.removeItem('user').
      then(
        this.goToLogin()
      ).
      catch(err => console.log(err))

    // console.log(AsyncStorage.jwtToken); 
    // setAuthHeader();
    // this.setState({
    //   email: '',
    //   _id: ''
    // });

    // Actions.login();
  };

  render() {
    return (
      <>
      <Header />
      <View style={styles.backgroundContainer}>
        <View>
          <Text style={styles.countryName}>PROFILE</Text>
        </View>

        <TouchableOpacity onPress={ ()=>{ this.logout()} } >
            <Text>Logout</Text>
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
  }
});