import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Landing from './src/pages/Landing';

export default function App() {
  return (
    //React native nao permite retorno de 2 elemento se nao estiverm dentro de algo
    //Nome disso e fragment
    <>
      <Landing />
      <StatusBar style="auto" />
    </>
  );
}


