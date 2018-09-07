import React, { Component } from 'react';
import { TouchableOpacity, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import styles from './styles';
import Icons from 'react-native-vector-icons/FontAwesome';


class HeaderRight extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  signOut = async () => {
    await AsyncStorage.clear();

    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Welcome' })
      ]
    });

    this.props.navigation.dispatch(resetAction);

  }

  render() {
    return (
      <TouchableOpacity onPress={this.signOut} >
        <Icons name='exchange' size={16} style={styles.icon} />
      </TouchableOpacity>
    );
  }
}

export default HeaderRight;
