import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { View, Text, TextInput, TouchableOpacity, StatusBar, ActivityIndicator, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import api from '../../services/api';

export default class Welcome extends Component {

  static navigationOptions = {
    header: null,
  };

  state = {
    username: '',
    loading: false,
    errorMessage: '',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  };

  saveUser = async (username) => {
    await AsyncStorage.setItem('@username', username);
  };

  signin = async () => {

    const { username } = this.state;

    if (username.length === 0) return;

    this.setState({ loading: true });

    try {
      await this.checkUserExists(username);

      this.saveUser(username);

      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'User' })
        ]
      });

      this.props.navigation.dispatch(resetAction);

    } catch (error) {
      this.setState({ loading: false, errorMessage: 'Usuario nao existe' });
    }

  }


  checkUserExists = async (userName) => {
    const user = await api.get(`/users/${userName}`);

    return user;
  }

  render() {
    return (
      <View style={styles.container}>

        <StatusBar barStyle='light-content' />

        <Text style={styles.title}> Bem-vindo</Text>
        <Text style={styles.text}>
          Para continuar precisamos que você informe seu usuário do Github
        </Text>

        {!!this.state.errorMessage && <Text style={styles.error}> {this.state.errorMessage} </Text>}

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize='none'
            autoCorrect={false}
            placeholder='Digite seu usuário'
            underlineColorAndroid='rgba(0, 0, 0, 0)'
            value={this.state.username}
            onChangeText={username => this.setState({ username })}
          />

          <TouchableOpacity style={styles.button} onPress={this.signin}>
            {this.state.loading
              ? <ActivityIndicator size='small' color='#FFF' />
              : <Text style={styles.buttonText}>Prosseguir</Text>
            }
          </TouchableOpacity>

        </View>

      </View>
    );
  }
}
