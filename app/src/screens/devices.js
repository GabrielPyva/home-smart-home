import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

import choque from '../../assets/choque.png';

const width = Dimensions.get('screen').width;

export default function Devices() {
   return <>
   <Image source={choque} style={styles.choque}/>
   <Text style={styles.title}>Automação Braba</Text>

   <View>
      <Text style={styles.text}>Meus trambolhos</Text>
   </View>
   </>
}

const styles = StyleSheet.create({
   choque: {
     width: "100%",
     height: width,
   },
   title: {
      width: "100%",
      position: "absolute",
      textAlign: "center",
      fontSize: 16,
      lineHeight: 26,
      color: "white",
      fontWeight: "bold",
      padding: 16,
   },
   text: {
      color: "white",
   }
})