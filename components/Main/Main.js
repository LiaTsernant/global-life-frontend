import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Linking,
  Image
} from 'react-native';
import Header from '../../components/Header/Header';
import { Actions } from 'react-native-router-flux';
import apiCalls from '../../api/apiCalls';
import { AsyncStorage } from 'react-native';
import map from "../../images/map.png"

class Main extends React.Component {
  state = {
    data: '',
  };

  goToAbout = () => {
    Actions.about()
  };

  componentDidMount() {
    AsyncStorage.getItem('user').
      then((value) => {
        this.setState({ 'user': value })
        apiCalls.userShow(this.state.user).
          then(res => res.json()).
          then((res) => {
            this.setState({
              data: res.country
            });
          }
          );
      }).catch((err) => console.log(err))
  };

  render() {
    return (
      <>
        <Header scene={'main'} />
        <View style={styles.backgroundContainer}>
          <View style={styles.map}>
          <Image source={map} style={styles.map}></Image>
        </View>
          <View style={styles.header}>
            <Text style={styles.countryName}>{this.state.data.name}</Text>
            <Text>Press to make a call</Text>
          </View>

          <TouchableOpacity style={styles.button} onPress={() => { Linking.openURL(`tel:${this.state.data.emergency}`) }} >
            <View style={styles.buttonText}>
              <Text style={styles.label}>Emergency: </Text>
              <Text style={styles.left}>{this.state.data.emergency ? this.state.data.emergency : ''}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => { Linking.openURL(`tel:${this.state.data.police}`) }} >
            <View style={styles.buttonText}>
              <Text style={styles.label}>Police: </Text>
              <Text style={styles.left}>{this.state.data.police ? this.state.data.police : ''}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => { Linking.openURL(`tel:${this.state.data.firefighters}`) }} >
            <View style={styles.buttonText}>
              <Text style={styles.label}>Fire: </Text>
              <Text style={styles.left}>{this.state.data.firefighters ? this.state.data.firefighters : ''}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </>
    );
  };
};

const { width: WIDTH } = Dimensions.get('window');
const styles = StyleSheet.create({
  backgroundContainer: {
    marginTop: 30,
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
    backgroundColor: '#ed4c4c',
    justifyContent: 'center',
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  map: {
    width: 300,
    height: 150,
    resizeMode: 'contain',
    tintColor: 'black'
  },
});

export default Main;
