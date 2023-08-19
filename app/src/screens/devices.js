import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

import choque from '../../assets/choque.png';

const width = Dimensions.get('screen').width;

export default function Devices() {
   return <>
   <Text style={styles.title}>Meu quarto</Text>

   <View style={styles.devices}>
      <Text style={styles.text}>Meus trambolhos</Text>
   </View>
   </>
}

const styles = StyleSheet.create({
   title: {
      width: "100%",
      textAlign: "center",
      fontSize: 26,
      lineHeight: 26,
      color: "white",
      fontWeight: "bold",
      padding: 16,
   },
   text: {
      color: "white",
   },
   devices: {
      paddingHorizontal: 8,
      paddingVertical: 16,
      backgroundColor: "#45a9d9"
   },
})