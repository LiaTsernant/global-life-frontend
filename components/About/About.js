import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from '../Header/Header';
import map from '../../images/map.png'

class About extends React.Component {
  render() {
    return (
      <>
        <Header />
        <View style={styles.backgroundContainer}>
          <View style={styles.map}>
            <Image source={map} style={styles.map}></Image>
          </View>
          <View style={styles.text}>
            <Text style={styles.title}>ABOUT</Text>

            <Text style={styles.story}>As a traveler, I want to travel and feel safe.{"\n"}{"\n"}
             
            When I had an experience calling 911, I had to wait for 10 minutes to be redirected to emergency phone number and then I needed to explain again my problem.{"\n"}
            What if I know I need emergency NOW and I don’t have time to explain my problem twice? {"\n"}{"\n"}
            I decided to build an application that displays local direct numbers of rescue services in the location of the device and allows to call these services.</Text>
          </View>
        </View>
      </>
    );
  };
};

const styles = StyleSheet.create({
  backgroundContainer: {
    marginTop: 30,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: 300,
    height: 150,
    resizeMode: 'contain',
    tintColor: 'black'
  },
  title: {
    fontSize: 40,
  },
  text: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  story: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  }
});

export default About
