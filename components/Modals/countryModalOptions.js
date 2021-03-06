import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TouchableHighlight, Dimensions } from 'react-native';

class CountryModalOptions extends React.Component {
  constructor(props) {
    super(props);
    this.options = ['Albania', 'Austria', 'Azerbaijan', 'Belgium', 'Bulgaria', 'Egypt', 'Greece', 'Italy', 'Macedonia', 'Romania', 'Russia', 'Serbia', 'Singapore', 'Slovakia']
    this.state = {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      selectedItem: '',
    };

    Dimensions.addEventListener("change", (e) => {
      this.setState(e.window);
    });
  };

  changeModalVisibility = (bool) => {
    this.setState({ isModalVisible: bool })
  };

  closeModal = (bool, data) => {
    if (this.state.selectedItem === '') {
      return
    }
    this.props.changeModalVisibility(bool)
    this.props.setData(data);
    this.setState({ selectedItem: '' })
  };

  render() {
    const option = this.options.map((option, index) => {

      return <TouchableOpacity activeOpacity={1} key={index}
        onPress={() => this.setState({ selectedItem: option })}>
        <Text style={this.state.selectedItem === option ? ([styles.text, { color: "gray" }]) : (styles.text)}>
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </Text>
      </TouchableOpacity>
    })

    return (
      <TouchableOpacity activeOpacity={1} onPress={() => this.props.changeModalVisibility(false)} style={styles.contentContainer}>
        <View style={[styles.modal, { width: this.state.width - 80, height: this.state.height - 70 }]}>
          <ScrollView style={styles.optionView}>
            {option}
          </ScrollView>
          <TouchableHighlight onPress={() => this.closeModal(false, this.state.selectedItem)}
            style={[styles.touchableHighlight, { backgroundColor: 'gray' }]} underlayColor={'#f1f1f1'}>
            <Text style={styles.text}>
              Select Country
            </Text>
          </TouchableHighlight>
        </View>
      </TouchableOpacity>
    );
  };
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
    // flex: 1,
    backgroundColor: 'white',
    paddingVertical: 10,
    alignSelf: 'stretch',
    alignItems: 'center',
    borderRadius: 45,
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

export default CountryModalOptions;