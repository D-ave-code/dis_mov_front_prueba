import React, { Component } from "react";

import { View, Image, Text, StyleSheet } from "react-native";
import { ImageBackground } from "react-native";

const Articulos = (props) => {
  return (
    <View style={styles.card}>
      <ImageBackground
        style={styles.image}
        source={
          require("../assets/load.gif") //Indicator
        }
      >
        <Image
          style={styles.image}
          source={{
            uri: props.imagen,
          }}
        />
      </ImageBackground>
      <View style={styles.content}>
        <Text style={styles.username}>
          {props.descripcion == null
            ? "No existe descripccion"
            : props.descripcion}
        </Text>
      </View>
      <Text style={styles.username}>likes: {props.likes}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  // Estilos de la tarjeta
  card: {
    flex: 1,
    height: 250,
    borderRadius: 10,
    backgroundColor: "#fff",
    margin: 10,
    alignItems: "center",
    padding: 15,
  },
  // Estilos de la imagen
  image: {
    width: 128,
    height: 128,
    borderRadius: 5,
    marginRight: 10,
  },
  // Estilos del contenido
  content: {
    flex: 1,
    margin: 20,
    alignItems: "center",
  },
  // Estilos del username
  username: {
    fontSize: 14,
  },
});
export default Articulos;
