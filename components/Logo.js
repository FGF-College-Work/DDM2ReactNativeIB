import * as React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Image,
 } from 'react-native';

import logoImg from '../assets/58046cab943898b955eb4d0b683cbbf3.png';

export default class Logo extends React.Component{
  render() {
    return(
      <View style={styles.container}>
        <Image style={{width:60, height: 60}} source={logoImg} />
        <Text style={styles.logoText}></Text>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 20,
    color: 'rgba(255, 255, 255, 0.7)',
  },
});