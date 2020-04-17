import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ScrollView,
} from 'react-native';
import Header from '../../components/Header/Header';
import { AsyncStorage } from 'react-native';
import setAuthHeader from '../../utils/setAuthHeader';
import { Actions } from 'react-native-router-flux';
import apiCalls from '../../api/apiCalls';
import CountryModal from '../Modals/countryModal';

class Profile extends React.Component {
  state = {
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    photo: "",
    contactPersonName: "",
    contactPersonPhone: "",
    country: ""
  };

  componentDidMount() {
    AsyncStorage.getItem('user').
      then((value) => {
        this.setState({ '_id': value })
        if (this.state._id) {
          this.getUserDetails()
        };
      }).catch((err) => console.log(err));
  };

  getUserDetails = () => {
    apiCalls.userShow(this.state._id).
      then(res => res.json()).then(res => {
        this.setState({
          _id: res._id,
          firstName: res.firstName,
          lastName: res.lastName,
          email: res.email,
          address: res.address,
          photo: res.photo,
          contactPersonName: res.contactPersonName,
          contactPersonPhone: res.contactPersonPhone,
          country: res.country
        })
      }).catch(err => console.log(err))
  };

  goToLogin() {
    Actions.login()
  };

  goToSignup() {
    Actions.signup()
  };

  logout = () => {
    AsyncStorage.removeItem('user').
      then(() => {
        setAuthHeader();
        this.goToLogin();
      }).catch(err => console.log(err))
  };

  handleUpdate = () => {
    apiCalls.updateUser(this.state).
      then(res => res).catch(err => console.log(err))
  };

  handleDelete = () => {
    apiCalls.deleteUser(this.state._id).
      then(res => {
        if (res.status === 200) {
          this.logout();
        };
      }).catch(err => console.log(err))
  };

  setSelectedCountry = (selectedCountry) => {
    console.log(selectedCountry)
    apiCalls.countryShow(selectedCountry).then(res => res.json()).then(res => {
      this.setState({
        country: res
      });

      apiCalls.updateUser(this.state).then(res => res).catch(err => console.log(err))
    }).catch(err => console.log(err));
  };

  render() {
    return (
      <>
        <Header />
        <ScrollView>
          <View style={styles.backgroundContainer}>
            <View style={styles.header}>
              <Text style={styles.countryName}>{this.state.country ? this.state.country.name : ""}</Text>
              <CountryModal setSelectedCountry={this.setSelectedCountry} />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>First Name</Text>
              <TextInput
                style={styles.input}
                value={this.state.firstName ? this.state.firstName : ""}
                placeholderTextColor={'rgba(0, 0, 0, 0.7)'}
                underlineColorAndroid='transparent'
                returnKeyLabel={"next"}
                onChangeText={(text) => this.setState({ firstName: text })}
              />

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Last Name</Text>
                <TextInput
                  style={styles.input}
                  value={this.state.lastName ? this.state.lastName : ""}
                  placeholderTextColor={'rgba(0, 0, 0, 0.7)'}
                  underlineColorAndroid='transparent'
                  returnKeyLabel={"next"}
                  onChangeText={(text) => this.setState({ lastName: text })}
                />
              </View>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>E-mail</Text>
              <TextInput
                style={styles.email}
                value={this.state.email ? this.state.email : ""}
                placeholderTextColor={'rgba(0, 0, 0, 0.7)'}
                underlineColorAndroid='transparent'
                returnKeyLabel={"next"}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Your Address</Text>
              <TextInput
                style={styles.address}
                multiline={true}
                numberOfLines={6}
                value={this.state.address ? this.state.address : ""}
                secureTextEntry={true}
                placeholderTextColor={'rgba(0, 0, 0, 0.7)'}
                underlineColorAndroid='transparent'
                returnKeyLabel={"next"} //WTF???????
                onChangeText={(text) => this.setState({ address: text })} />
            </View>

            <Text style={styles.contactPersonLabel}>First Contact Person Details</Text>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Name</Text>
              <TextInput
                style={styles.input}
                value={this.state.contactPersonName ? this.state.contactPersonName : ""}
                placeholderTextColor={'rgba(0, 0, 0, 0.7)'}
                underlineColorAndroid='transparent'
                returnKeyLabel={"next"}
                onChangeText={(text) => this.setState({
                  contactPersonName: text
                })}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Phone</Text>
              <TextInput
                style={styles.input}
                value={this.state.contactPersonPhone ? this.state.contactPersonPhone : ""}
                placeholderTextColor={'rgba(0, 0, 0, 0.7)'}
                underlineColorAndroid='transparent'
                returnKeyLabel={"next"}
                onChangeText={(text) => this.setState({
                  contactPersonPhone: text
                })}
              />
            </View>

            <View style={styles.actions}>
              <TouchableOpacity onPress={() => { this.handleDelete() }} style={styles.buttonDelete}>
                <Text style={styles.text}>Delete Profile</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => { this.handleUpdate() }} style={styles.buttonUpdate}>
                <Text style={styles.text}>Update Profile</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.actions}>
              <TouchableOpacity onPress={() => { this.logout() }} style={styles.buttonLogout}>
                <Text style={styles.text}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </>
    );
  };
};

const { width: WIDTH } = Dimensions.get('window');


const styles = StyleSheet.create({
  backgroundContainer: {
    marginTop: 20,
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center'
  },
  countryName: {
    fontWeight: 'bold',
    fontSize: 35
  },
  input: {
    width: 300,
    height: 30,
    borderRadius: 45,
    fontSize: 14,
    paddingLeft: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    color: 'rgba(0, 0, 0, 0.7)',
    marginHorizontal: 2,
  },
  inputContainer: {
    marginTop: 5,
  },
  label: {
    textAlign: 'center'
  },
  actions: {
    marginTop: 10,
    flexDirection: 'row',
  },
  buttonLogout: {
    margin: 10,
    width: 300,
    height: 45,
    borderRadius: 45,
    backgroundColor: '#f0e24f',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonDelete: {
    margin: 10,
    width: 100,
    height: 45,
    borderRadius: 45,
    backgroundColor: '#eb3232',
    justifyContent: 'center',
    marginTop: 20,
    textAlign: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonUpdate: {
    margin: 10,
    width: 100,
    height: 45,
    borderRadius: 45,
    backgroundColor: 'orange',
    justifyContent: 'center',
    marginTop: 20,
    textAlign: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    color: 'black',
    fontSize: 14,
    textAlign: 'center'
  },
  address: {
    width: WIDTH - 55,
    height: 70,
    borderRadius: 10,
    fontSize: 13,
    paddingLeft: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    color: 'rgba(0, 0, 0, 0.7)',
    marginHorizontal: 25,
  },
  contactDetails: {
    flexDirection: 'row'
  },
  email: {
    width: 300,
    height: 30,
    borderRadius: 45,
    fontSize: 14,
    paddingLeft: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    color: 'rgba(0, 0, 0, 0.7)',
    marginHorizontal: 25,
  },
  contactPersonLabel: {
    marginTop: 10,
    marginBottom: 0,
    fontWeight: 'bold'
  }
});

export default Profile;