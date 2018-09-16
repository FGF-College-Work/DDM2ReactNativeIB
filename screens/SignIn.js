import React from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
  TextInput,
  Button, 
  TouchableOpacity,
  Text
} from 'react-native';
import { Card, FormLabel, FormInput } from "react-native-elements";
import { onSignIn } from "../auth";

import Logo from '../components/Logo';


const styles = StyleSheet.create({
  container: {
     flexGrow: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#455a64'
   },
   inputBox: {
     width: 300,
     height: 50,
     backgroundColor:'rgba(255,255,255,0.3)',
     borderRadius: 25,
     paddingHorizontal: 16,
     fontSize: 16,
     color: '#ffffff',
     marginVertical: 10,
   },
   button: {
     width: 300,
     height: 45,
     backgroundColor:'#1c313a',
     borderRadius: 25,
     paddingVertical: 13,
   },
   buttonText: {
     fontSize: 16,
     fontWeight: '500',
     color: '#ffffff',
     textAlign: 'center',
   },
});

export default ({ navigation }) => (
  <View style={styles.container}>
         
          <TextInput 
          style={styles.inputBox} 
          underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder='Agência'
          placeholderTextColor='#ffffff'
           />
          <TextInput 
          style={styles.inputBox} 
          underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder='Conta'
          placeholderTextColor='#ffffff'
           />
           <TextInput 
          style={styles.inputBox} 
          underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder='Senha'
          secureTextEntry={true}
          placeholderTextColor='#ffffff'
           />
           <TouchableOpacity style={styles.button} onPress={() => {
          onSignIn().then(() => navigation.navigate("SignedIn"));
        }} >
           <Text style={styles.buttonText}> Entrar </Text>
           </TouchableOpacity>
   
           
           <StatusBar barStyle="default" />
      </View>
);