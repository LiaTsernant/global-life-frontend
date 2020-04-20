import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class Header extends React.Component {
  goToAbout = () => {
    Actions.about()
  };

  goToProfile = () => {
    Actions.profile()
  };

  goToMain = () => {
    Actions.main()
  };

  render() {
    if (this.props.scene === 'main') {
      return (
        <View style={styles.header}>
          <Text style={styles.text} onPress={() => this.goToAbout()}>About</Text>
          <Text style={styles.text} onPress={() => this.goToProfile()}>Profile</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.header}>
          <Text style={styles.text} onPress={() => this.goToMain()}>Main</Text>
          <Text style={styles.text} onPress={() => this.goToProfile()}>Profile</Text>
        </View>
      );
    };
  };
};
const { width: WIDTH } = Dimensions.get('window');
const styles = StyleSheet.create({
  header: {
    width: WIDTH,
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    paddingBottom: 10
  },
  text: {
    color: 'white',
    fontSize: 20,
    margin: 10,
    marginTop: 30
  },
});

export default Header;