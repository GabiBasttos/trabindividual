import React from 'react'
import { Text, View } from 'react-native'
import { stylehome } from './style';

export function Home(){
  return (
    <View style={stylehome.container}>
        <Text style={stylehome.title}>CARTEIRA DE TRABALHO DIGITAL</Text>
    </View>
  )
}

