import React from "react";
import { Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { stylehome } from "./style";
import Banner from "../../Assets/logo.png";

export function Home() {
  return (

    <View style={stylehome.container}>
      <Image style={stylehome.logo} source={Banner} alt="logo" />

      <Text style={stylehome.title}>CARTEIRA DE TRABALHO DIGITAL</Text>

      <View style={stylehome.container2}>
        <TouchableOpacity style={stylehome.button}>
        <Text style={stylehome.textButton}>Entrar com biometria</Text>
       </TouchableOpacity>

        <TouchableOpacity style={stylehome.button2}>
        <Text style={stylehome.textButton2}>Entrar com gov.br</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}
