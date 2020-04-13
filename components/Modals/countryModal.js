import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Modal } from 'react-native';
import SimpleModal from './SimpleModal';

class CountryModal extends React.Component {
    state = {
        isModalVisible: false,
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
                  style={[styles.touchableHighlight, {backgroundColor: 'orange'}]}>
                 <Text style={styles.text}>Open Modal</Text>
              </TouchableHighlight>  
              <Modal transparent={true} animationType="fade" visible={this.state.isModalVisible} 
                    onRequestClose={() => this.changeModalVisibility(false)} style={styles.modalContainer}>
                  <SimpleModal changeModalVisibility={this.changeModalVisibility} setData={this.setData} />
              </Modal>
           </View>
       )
     }
};

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        marginVertical: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },
    touchableHighlight: {
        backgroundColor: 'white', 
        alignSelf: 'stretch',
        alignItems: 'center',
    },
    modalContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default CountryModal;


