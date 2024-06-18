import React from "react";
import { Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { stylehome } from "./style";
import Banner from "../../Assets/logo.png";

export function Home() {
  return (

    <View style={stylehome.container}>
      <Image style={{ width: 350, height: 350 }} source={Banner} alt="logo" />

      <Text style={stylehome.title}>CARTEIRA DE TRABALHO DIGITAL</Text>

      <TouchableOpacity style={stylehome.button}>
        <Text style={stylehome.textButton}>Entrar com biometria</Text>
      </TouchableOpacity>

      <TouchableOpacity style={stylehome.button}>
        <Text style={stylehome.textButton}>Entrar com gov.br</Text>
      </TouchableOpacity>

    </View>
  );
}
