
import React, {Component} from 'react';
import Simples from './componentes/Simples';
import ParImpar from './componentes/ParImpar';
import  Inverter, { MegaSena } from './componentes/Multi';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Simples texto='flexivel'/>
        <ParImpar numero={30}/>
        <Inverter texto='React Nativo!'/>
        <MegaSena/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
  }
});