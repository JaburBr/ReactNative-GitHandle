import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icons from 'react-native-vector-icons/FontAwesome';

class HeaderRight extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  signOut = () => {

  }

  render() {
    return (
      <TouchableOpacity onPress={this.signOut} >
        <Text>Sair</Text>
      </TouchableOpacity>
    );
  }
}

export default HeaderRight;
