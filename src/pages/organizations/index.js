import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../styles';

export default class Organizations extends Component {

  static navigationOptions = {
    title: 'Organizations',
    tabBarIcon: ({ tintColor }) => (
      <Icon name='building' size={24} color={tintColor} />
    ),
  }

  render() {
    return <View />
  }

}

