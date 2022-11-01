import { View, Text } from 'react-native';
import React from 'react';
import styles from '../styles/style';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.author}>Author: Katariina Järvenpää</Text>
    </View>
  )
}