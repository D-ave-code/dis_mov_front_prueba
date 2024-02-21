import {
  View,
  Text,
  Image,
  ImageBackground,
  SafeAreaView,
  TextInput,
} from "react-native";
import { Button, style } from "react-native";
import { useState, useEffect } from "react";
import { useFetch } from "../useFetch";
import * as DocumentPicker from "expo-document-picker";
import { ScrollView, StyleSheet } from "react-native";
import Cards from "../componentes/Cards";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";

const Pdf = ({ navigation }) => {
  const [text, setText] = useState("");
  const url_server = process.env.EXPO_PUBLIC_URL_SERVER;
  const [question, setQuistion] = useState("");
  const [resp, setResp] = useState("");
  const [name, setName] = useState("");
  const [precio, setPrecio] = useState("");
  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: "*/*",multiple: true
    });
    console.log(result.assets[0].name);
    console.log(result.assets[1].name);
    setName(result.assets[0].name+" | "+result.assets[1].name);
    const formData = new FormData();
    const assets = result.assets;
    if (!assets) return;
    const file = assets[0];
    const pdfFile = {
      name: file.name.split(".")[0],
      uri: file.uri,
      type: file.mimeType,
      size: file.size,
    };
    formData.append("the_file", pdfFile);
    formData.append("the_file1", pdfFile);

    console.log(formData);
    const d = most(formData);
  };
  function quest() {
    setQuistion("CONSULTANDO....");
    setPrecio("")
    setResp("")
    const formData = new FormData();
    formData.append("question", question);

    console.log(formData);
    fetch(url_server + "/question", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((responseData) => {
        // La solicitud se realizó correctamente
        setResp(
          responseData.data 
           
        );
        setPrecio(responseData.price);
        setQuistion("");
        console.log("Respuesta:", responseData.data);
      })
      .catch((error) => {
        // La solicitud falló
        setQuistion(error);
        console.log("Error:", error);
      });
  }
  function most(formData) {
    setText("CARGANDO....");
    axios
      .post(
        url_server + "/upload",

        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => setText(response.data))
      .catch((err) => {
        console.log(err), setText(err.message);
      });
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <SafeAreaView
          style={{ flex: 1, alignItems: "center", justifyContent: "center",flexDirection: "column", }}
        >
          <Button title="Seleccionar un documento" onPress={pickDocument} />
          
         

          <Text>{text}</Text>
          <Text>{name}</Text>
          
        </SafeAreaView>
      </View>
      <View style={{ flex: 1,  justifyContent:"center",alignItems: "center",}}>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{ fontSize: 18, fontWeight: 'bold',color:"blue",}}>Preguntale algo al pdf que subiste!!!</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
      <TextInput
            placeholder="Ingresa tu pregunta"
            value={question}
            onChangeText={setQuistion}
          />
      </View>
        
      <View style={{flex:1, }}>
      
        
          <Button title="preguntar" onPress={quest} />
         
        </View>
      </View>
      <View style={{ flex: 1, justifyContent:"center",alignItems: "center"  }}>
        <ScrollView style={{ flex: 1 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold'}}>{resp}</Text>
        </ScrollView>
      </View>
      <View style={{ flex: 1, justifyContent:"center",alignItems: "center"  }}>
        <ScrollView style={{ flex: 1 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold'}}>{precio}</Text>
        </ScrollView>
      </View>

      <Button
        color="#228b22"
        title="ir a Home"
        onPress={() => {
          navigation.navigate("Home");
        }}
      ></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  // Estilos de la imagen
  image: {
    width: 500,
    height: 128,
    borderRadius: 5,
    marginRight: 10,
  },
});
export default Pdf;
