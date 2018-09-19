import React from "react";
import {Text, View, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import { Card, FormLabel, FormInput } from "react-native-elements";
import { onSignIn } from "../auth";
import { Pagamento } from "../components/Pagamento";



const styles = StyleSheet.create({ 
  logo: {
    borderRadius: 45,
    backgroundColor: "#056ecf",
    height: 90,
    width: 90,
    align: 'left'
  },
  teste: {
    marginLeft: 100,
    marginTop: -60,
    textAlign: 'justify'
  },
  teste1: {
    marginLeft: 100,
    marginTop: -3,
    textAlign: 'justify'
  },
  teste2: {
    height: 10
  },
  button: {
    //borderRadius: 45,
    backgroundColor: "#ffffff",
    height: 50,
    width: 60,
    align: 'left'
  }
});



export default ({ navigation }) => (
  <View style={{ flex: 1, backgroundColor: '#800080' }}>
      <ScrollView contentContainerStyle={{ paddingVertical: 20 ,backgroundColor: '#800080'}}>
    
          <Card>
          
              <Image style={styles.logo} source={require("../assets/expo.symbol.white.png")}/>
              <View style={styles.teste2}>
              <Text style={styles.teste}>Jéssica Nogueira</Text>
              <Text style={styles.teste1}>3473-8 | 40319-9</Text>
              </View>
           </Card>

           <Card>
              <Text>Saldo: R$ 1.000,00 </Text>
           </Card>
           
           <Card numRows={4} numColumns={4}>

           <View style={{flex: 1, flexDirection: 'row', textAlign: 'justify'}}>
            <View style={{textAlign: 'justify', padding: 5}}>
            <TouchableOpacity onPress={()=>{alert("you clicked me")}}>
              <Image style={styles.button} source={require("../assets/poupanca.png")}/>
            </TouchableOpacity>
            <Text>Poupança</Text>
            </View>
            <View style={{textAlign: 'justify', padding: 5}}>
            <TouchableOpacity onPress={()=>{alert("you clicked me")}}>
              <Image style={styles.button} source={require("../assets/tra.png")}/>
            </TouchableOpacity>
            <Text>Tranferência</Text>
            </View>
            <View style={{textAlign: 'justify', padding: 5}}>
            <TouchableOpacity onPress={()=>{alert("you clicked me")}}>
              <Image style={styles.button} source={require("../assets/tran.png")}/>
            </TouchableOpacity>
            <Text>Extrato</Text>
            </View>
            <View style={{textAlign: 'justify', padding: 5}}>
            <TouchableOpacity onPress={() => {
          onSignIn().then(() => navigation.navigate("Pagamento"));
        }}>
              <Image style={styles.button} source={require("../assets/barra.png")}/>
            </TouchableOpacity>
            <Text>Pagamento</Text>
            </View>
            
          </View>

          

          
           </Card>
    

      </ScrollView>
    </View>
);


