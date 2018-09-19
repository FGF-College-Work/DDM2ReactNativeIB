import React from "react";
import { ScrollView, Text, Linking, View } from "react-native";
import { Card, Button } from "react-native-elements";

const images = [
  {
    key: "Restaurante",
    name: "R$ 84,00",
    content: "Compra no valor de R$ 84,00 (2x) em Restaurante Cantina do Nero"
    
  },
  {
    key: "Cinema",
    name: "R$ 100,00",
    content: "Compra no valor de R$ 84,00 (2x) em Restaurante Cantina do Nero", 
    
  },
  {
    key: "Praia",
    name: "R$ 800,00",
    content: "Compra no valor de R$ 84,00 (2x) em Restaurante Cantina do Nero", 
    
  },
  {
    key: "Viagem",
    name: "R$ 1.000,00",
    content: "Compra no valor de R$ 84,00 (2x) em Restaurante Cantina do Nero", 
    
  }
];

export default () => (
  <View style={{ flex: 1 }}>
    <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
      {images.map(({ name, content, key }) => (
        <Card title={`Conta ${key}`}  key={key}>
          <Text style={{ marginBottom: 10, fontSize:20 }}>
            Valor {name}.
          </Text>
          <Text>
            {content}
          </Text>
          
        </Card>
      ))}
    </ScrollView>
  </View>
);