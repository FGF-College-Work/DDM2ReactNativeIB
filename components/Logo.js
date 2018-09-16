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
      <View >
        <Image style={{width:60, height: 60}} source={logoImg} />
        
      </View>
      
    );
  }
}

