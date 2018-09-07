import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { metrics } from './styles';

import HeaderRight from './components/HeaderRight';

//Pages
import Welcome from './pages/welcome';
import Repositories from './pages/repositories';
import Organizations from './pages/organizations';

const createNavigator = (isLogged = false) =>
  Routes = StackNavigator({
    Welcome: { screen: Welcome },
    User: {
      screen: TabNavigator({
        Repositories: { screen: Repositories },
        Organizations: { screen: Organizations },
      }),
    },
  }, {
      initialRouteName: isLogged ? 'User' : 'Welcome',
      navigationOptions: {
        headerStyle: {
          paddingHorizontal: metrics.basePadding
        },
        headerRight: <HeaderRight />
      },
    });

export default createNavigator;
