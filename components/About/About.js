import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../Header/Header';

class About extends React.Component {
  render() {
    return (
      <>
      <Header />
        <View style={styles.backgroundContainer}>
          <View>
            <Text style={styles.countryName}>ABOUT</Text>
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
  }
});

export default About
