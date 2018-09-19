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
     backgroundColor: '#800080',
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
     backgroundColor:'#330033',
     borderRadius: 25,
     paddingVertical: 13,
     marginVertical: 10,
   },
   buttonLog: {
     width: 300,
     height: 45,
     backgroundColor:'#4d004d',
     borderRadius: 25,
     paddingVertical: 13,
     marginVertical: 10,
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
          <Logo />
          <TextInput 
          style={styles.inputBox} 
          underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder='Email address...'
          placeholderTextColor='#ffffff'
           />
          <TextInput 
          style={styles.inputBox} 
          underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder='Password...'
          placeholderTextColor='#ffffff'
           />
           <TextInput 
          style={styles.inputBox} 
          underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder='Confirm Password...'
          secureTextEntry={true}
          placeholderTextColor='#ffffff'
           />
           <TouchableOpacity style={styles.button} onPress={() => {
          onSignIn().then(() => navigation.navigate("SignedIn"));
        }} >
           <Text style={styles.buttonText}> SIGN UP </Text>
           </TouchableOpacity>
		   
		   <TouchableOpacity style={styles.buttonLog} onPress={() => navigation.navigate("SignIn")} >
           <Text style={styles.buttonText}> Sign In </Text>
           </TouchableOpacity>
   
          
           <StatusBar barStyle="default" />
</View>
);