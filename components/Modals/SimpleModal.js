import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Modal, TouchableOpacity, Dimensions } from 'react-native';

class SimpleModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: Dimensions.get('window').width,
        },
        Dimensions.addEventListener('change', (e) => {
            this.setState(e.window)
        })
    }

    closeModal = () => {
        this.props.changeModalVisibility(false)
    }

    render() {
        return (
            <TouchableOpacity disabled={true} style={styles.contentContainer}>
                <View style={[styles.modal, {width: this.state.width - 80}]}>
                    <View style={styles.textView}>
                        <Text style={[styles.text, {fontSize: 20}]}>Sample modal header</Text>
                        <Text style={styles.text}>Sample modal text</Text>
                    </View>
                    <View style={styles.buttonsView}>
                        <TouchableHighlight onPress={() => this.closeModal(false, 'Cancel')} style={styles.touchableHighlight} underlayColor={'#f1f1f1'} >
                            <Text style={[styles.text, {color: 'blue'}]}>
                                Cancel
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => this.closeModal(false, 'Ok')} style={styles.touchableHighlight} underlayColor={'#f1f1f1'} >
                            <Text style={[styles.text, {color: 'blue'}]}>
                                Ok
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </TouchableOpacity>
            
        )
    }
};

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        height: 150,
        paddingTop: 10,
        alignSelf: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
    },
    text: {
        margin: 5,
        fontSize: 16,
        fontWeight: 'bold',
    },
    touchableHighlight: {
        flex: 1,
        backgroundColor: 'white', 
        paddingVertical: 10,
        alignSelf: 'stretch',
        alignItems: 'center',
        borderRadius: 10,
    },
    textView: {
        flex: 1,
        alignItems: 'center',
    },
    buttonsView: {
        width: '100%',
        flexDirection: 'row',
    }
});

export default SimpleModal;