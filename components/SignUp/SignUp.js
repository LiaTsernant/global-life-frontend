import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import apiCalls from '../../api/apiCalls';
import CountryModal from '../Modals/countryModal';
import setAuthHeader from '../../utils/setAuthHeader';
import jwt_decode from 'jwt-decode';
import { AsyncStorage } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

class SignUp extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    country: '',
    contactPersonName: "",
    contactPersonPhone: "",
    address: ""
  };

  async setToStorage(key, val) {
    AsyncStorage.setItem(key, val);
    this.setState({
      key: val
    });
  };

  handleSingnUp = () => {
    apiCalls.register(this.state).
      then(res => {
        if (res.status === 200) {
          const token = res.data.token;
          setAuthHeader(token);
          const decoded = jwt_decode(token);
          this.setToStorage('user', decoded._id);

          this.goToMain();
        } else {
          console.log(res)
        }
      }).catch(err => console.log(err));
  };

  goToLogin() {
    Actions.login();
  };

  goToMain() {
    Actions.main();
  };

  setSelectedCountry = (selectedCountry) => {
    apiCalls.countryShow(selectedCountry).then(res => res.json()).then(res => {
      this.setState({
        country: res._id
      });
    })
  };

  render() {
    return (
      <ScrollView>
      <View style={styles.backgroundContainer}>
        <Text style={styles.signUp}>Sign Up</Text>

        <View style={styles.inputContainer}>
          <CountryModal setSelectedCountry={this.setSelectedCountry} />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={'Firsl Name'}
            placeholderTextColor={'rgba(255, 255, 255, 0.3)'}
            underlineColorAndroid='transparent'
            returnKeyLabel={"next"} //WTF???????
            onChangeText={(text) => this.setState({ firstName: text })}
          />
        </View>
          
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={'Last Name'}
            placeholderTextColor={'rgba(255, 255, 255, 0.3)'}
            underlineColorAndroid='transparent'
            returnKeyLabel={"next"} //WTF???????
            onChangeText={(text) => this.setState({ lastName: text })}
          />
        </View>
          
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={'Email'}
            placeholderTextColor={'rgba(255, 255, 255, 0.3)'}
            underlineColorAndroid='transparent'
            returnKeyLabel={"next"} //WTF???????
            onChangeText={(text) => this.setState({ email: text })}
          />
        </View>
          
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={'Password'}
            secureTextEntry={true}
            placeholderTextColor={'rgba(255, 255, 255, 0.3)'}
            underlineColorAndroid='transparent'
            returnKeyLabel={"next"} //WTF???????
            onChangeText={(text) => this.setState({ password: text })}
          />
        </View>
          
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={'First Contact Person Phone'}
            placeholderTextColor={'rgba(255, 255, 255, 0.3)'}
            underlineColorAndroid='transparent'
            returnKeyLabel={"next"} //WTF???????
            onChangeText={(text) => this.setState({ contactPersonPhone: text })}
          />
        </View>
          
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={'First Contact Person Name'}
            placeholderTextColor={'rgba(255, 255, 255, 0.3)'}
            underlineColorAndroid='transparent'
            returnKeyLabel={"next"} //WTF???????
            onChangeText={(text) => this.setState({ contactPersonName: text })}
          />
        </View>
          
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.address}
            multiline={true}
            numberOfLines={6}
            placeholder={'Your Address'}
            secureTextEntry={true}
            placeholderTextColor={'rgba(255, 255, 255, 0.3)'}
            underlineColorAndroid='transparent'
            returnKeyLabel={"next"} //WTF???????
            onChangeText={(text) => this.setState({ address: text })}
          />
        </View>

        <TouchableOpacity style={styles.btnSignUp} onPress={() => this.handleSingnUp()}>
          <Text style={styles.text}>Sign Up</Text>
        </TouchableOpacity>
          
        <TouchableOpacity onPress={this.goToLogin}>
          <Text style={styles.textLogin}>Login</Text>
        </TouchableOpacity>

        </View>
      </ScrollView>
    )
  };
};

const { width: WIDTH } = Dimensions.get('window');

const styles = StyleSheet.create({
  backgroundContainer: {
    marginTop: 30,
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    top: 0,
    marginTop: 18,
    width: 200,
    height: 150,
    resizeMode: 'contain',
  },
  signUp: {
    marginTop: 10,
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 3
  },
  inputContainer: {
    marginTop: 10,
  },
  input: {
    width: WIDTH - 55,
    height: 40,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    color: 'rgba(0, 0, 0, 0.7)',
    marginHorizontal: 25,
  },
  btnSignUp: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    backgroundColor: '#f0e24f',
    justifyContent: 'center',
    marginTop: 20,
  },
  text: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
  textLogin: {
    marginTop: 10,
    color: 'black',
    textDecorationLine: 'underline'
  },
  address: {
    width: WIDTH - 55,
    height: 70,
    borderRadius: 10,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    color: 'rgba(0, 0, 0, 0.7)',
    marginHorizontal: 25,
  }
});

export default SignUp;