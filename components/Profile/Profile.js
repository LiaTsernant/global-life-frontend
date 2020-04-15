import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Header from '../../components/Header/Header';
import { AsyncStorage } from 'react-native';
import setAuthHeader from '../../utils/setAuthHeader';
import { Actions } from 'react-native-router-flux';
import apiCalls from '../../api/apiCalls';

class Profile extends Component {
  state = {
    userId: ""
  };

  componentDidMount() {
    AsyncStorage.getItem('user').
      then((value) => {
        this.setState({ 'userId': value })
        if (this.state.userId) {
          this.getUserDetails()
        };
      }).catch((err) => console.log(err));
  };

  getUserDetails = () => {
    apiCalls.userShow(this.state.userId).
      then(res => res.json()).then(res => this.setState({ 'user': res })).catch(err => console.log(err))
  };

  goToLogin() {
    Actions.login()
  };

  logout = () => {
    AsyncStorage.removeItem('user').
      then(() => {
        setAuthHeader();
        this.goToLogin();
      }).catch(err => console.log(err))
  };

  render() {
    return (
      <>
        <Header />
        <View style={styles.backgroundContainer}>
          <View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>First Name</Text>
            <TextInput
              style={styles.input}
              placeholder={this.state.user ? this.state.user.firstName : "NAME"}
              placeholderTextColor={'rgba(0, 0, 0, 0.7)'}
              underlineColorAndroid='transparent'
              returnKeyLabel={"next"}
              onChangeText={(text) => this.setState({
                user: {
                  firstName: text
                }
              })}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Last Name</Text>
            <TextInput
              style={styles.input}
              placeholder={this.state.user ? this.state.user.lastName : "LAST NAME"}
              placeholderTextColor={'rgba(0, 0, 0, 0.7)'}
              underlineColorAndroid='transparent'
              returnKeyLabel={"next"}
              onChangeText={(text) => this.setState({
                user: {
                  lastName: text
                }
              })}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput
              style={styles.input}
              placeholder={this.state.user ? this.state.user.email : "EMAIL"}
              placeholderTextColor={'rgba(0, 0, 0, 0.7)'}
              underlineColorAndroid='transparent'
              returnKeyLabel={"next"}
              onChangeText={(text) => this.setState({
                user: {
                  email: text
                }
              })}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Address</Text>
            <TextInput
              style={styles.input}
              placeholder={this.state.user ? this.state.user.address : "ADDRESS"}
              placeholderTextColor={'rgba(0, 0, 0, 0.7)'}
              underlineColorAndroid='transparent'
              returnKeyLabel={"next"}
              onChangeText={(text) => this.setState({
                user: {
                  address: text
                }
              })}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>First Contact Person Name</Text>
            <TextInput
              style={styles.input}
              placeholder={this.state.user && this.state.user.contactPerson ? this.state.user.contactPerson.firstName : "CONTACT PERSON NAME"}
              placeholderTextColor={'rgba(0, 0, 0, 0.7)'}
              underlineColorAndroid='transparent'
              returnKeyLabel={"next"}
              onChangeText={(text) => this.setState({
                user: {
                  contactPerson: {
                    firstName: text
                  }
                }
              })}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>First Contact Person Phone</Text>
            <TextInput
              style={styles.input}
              placeholder={this.state.user && this.state.user.contactPerson ? this.state.user.contactPerson.phone : "CONTACT PERSON PHONE"}
              placeholderTextColor={'rgba(0, 0, 0, 0.7)'}
              underlineColorAndroid='transparent'
              returnKeyLabel={"next"}
              onChangeText={(text) => this.setState({
                user: {
                  contactPerson: {
                    phone: text
                  }
                }
              })}
            />
          </View>

          <View style={styles.actions}>
            <TouchableOpacity onPress={() => { this.logout() }} style={styles.buttonLogout}>
            <Text style={styles.text}>Logout</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { this.logout() }} style={styles.buttonUpdate}>
            <Text style={styles.text}>Update Profile</Text>
          </TouchableOpacity>
          </View>
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
  },
  input: {
    width: 300,
    height: 40,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    color: 'rgba(0, 0, 0, 0.7)',
    marginHorizontal: 25,
  },
  inputContainer: {
    marginTop: 10,
  },

  label: {
    marginLeft: 30
  },
  actions: {
    flexDirection: 'row'
  },
  buttonLogout: {
    margin: 10,
    width: 100,
    height: 45,
    borderRadius: 45,
    backgroundColor: 'red',
    justifyContent: 'center',
    marginTop: 20,
    textAlign: "center"
  },
  buttonUpdate: {
    margin: 10,
    width: 100,
    height: 45,
    borderRadius: 45,
    backgroundColor: 'green',
    justifyContent: 'center',
    marginTop: 20,
    textAlign: "center"
  },
  text: {
    color: 'black',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default Profile;