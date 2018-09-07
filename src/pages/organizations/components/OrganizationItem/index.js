import React from 'react';
import PropType from 'prop-types';
import { View, Text, Image } from 'react-native';
import styles from './styles';


const OrganizationItem = ({ organizationItem }) => (
  <View style={styles.container}>
    <Image style={styles.avatar} source={{ uri: organizationItem.avatar_url }} />
    <Text style={styles.title}> {organizationItem.login} </Text>
  </View>
);

OrganizationItem.prototype = {
  organizationItem: PropType.shape({
    avatar_url: PropType.string,
    login: PropType.string,
  }).isRequired,
}

export default OrganizationItem;
