import '../ReactotronConfig';

import React, { Component } from 'react';
import { AsyncStorage, Platform, StyleSheet, Text, View } from 'react-native';

import createNavigator from './routes';

export default class App extends Component {

  state = {
    userChecked: false,
    userLogged: false,
  }

  async componentDidMount() {
    //await AsyncStorage.clear();
    const username = await AsyncStorage.getItem('@username');
    this.appLoaded(username);
  };

  appLoaded = (username) => {
    this.setState({ userChecked: true, userLogged: !!username });
  }

  render() {

    if (!this.state.userChecked) return null;

    const Routes = createNavigator(this.state.userLogged);

    return (
      <Routes />
    );
  }
}
