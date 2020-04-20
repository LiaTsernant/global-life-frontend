import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Modal,
  Dimensions
} from 'react-native';
import CountryModalOptions from './countryModalOptions';

class CountryModal extends React.Component {
  state = {
    isModalVisible: false,
    country: '',
  };

  setData = (data) => {
    this.setState({ country: data })
    this.props.setSelectedCountry(data)
  };

  changeModalVisibility = (bool) => {
    this.setState({
      isModalVisible: bool
    });
  };

  render() {
    return (
      <View style={styles.contentContainer}>
        <Text style={styles.text}>
          {this.state.choosenData}
        </Text>
        <TouchableHighlight onPress={() => this.changeModalVisibility(true)} underlayColor={'#f1f1f1'}
          style={[styles.touchableHighlight, { backgroundColor: 'rgba(0, 0, 0, 0.3)' }]} >
          <Text style={styles.text}>{this.state.country ? `You selected: ${this.state.country}` : 'Select Country ' + '\u1401'}</Text>
        </TouchableHighlight>  
        <Modal transparent={true} animationType="fade" visible={this.state.isModalVisible}
          onRequestClose={() => this.changeModalVisibility(false)} style={styles.modalContainer}>
          <CountryModalOptions changeModalVisibility={this.changeModalVisibility} setData={this.setData} />
        </Modal>
      </View>
    )
  };
};

const { width: WIDTH } = Dimensions.get('window');
const styles = StyleSheet.create({
  contentContainer: {
  },
  text: {
    textAlign: 'center',
  },
  touchableHighlight: {
    backgroundColor: 'white',
    alignSelf: 'stretch',
    alignItems: 'center',
    width: WIDTH - 55,
    height: 40,
    borderRadius: 45,
    justifyContent: 'center'
  },
})

export default CountryModal;


