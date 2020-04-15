import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Modal, Dimensions } from 'react-native';
import SimpleModal from './SimpleModal';

class CountryModal extends React.Component {
  state = {
    isModalVisible: false,
    country: '',
  };

  setData = (data) => {
    this.setState({ country: data })
    this.props.setSelectedCountry(data)
  }

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
          style={[styles.touchableHighlight, { backgroundColor: 'orange' }]} >
          <Text style={styles.text}>{this.state.country ? this.state.country : 'Click to Select a Country'}</Text>
        </TouchableHighlight>  
        <Modal transparent={true} animationType="fade" visible={this.state.isModalVisible}
          onRequestClose={() => this.changeModalVisibility(false)} style={styles.modalContainer}>
          <SimpleModal changeModalVisibility={this.changeModalVisibility} setData={this.setData} />
        </Modal>
      </View>
    )
  }
};

const { width: WIDTH } = Dimensions.get('window');


const styles = StyleSheet.create({
  contentContainer: {
  },
  text: {
    // marginVertical: 20,
    // fontSize: 20,
    // fontWeight: 'bold',
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
  modalContainer: {
    // alignItems: 'center',
    // justifyContent: 'center',
  }
})

export default CountryModal;


