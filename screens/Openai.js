import { View, Text, TextInput, StyleSheet, SafeAreaView } from "react-native";
import { Button } from "react-native";
import React, { useEffect } from "react";
import axios, { AxiosError } from "axios";
import { ScrollView } from "react-native";
const Openai = ({ navigation }) => {
  const [prompt, setPrompt] = React.useState("");
  const [total, setTotal] = React.useState("");
  const [openr, setOpenr] = React.useState({});

  function most() {
    setTotal("CARGANDO....");
    axios
      .post(
        "https://api.openai.com/v1/chat/completions",
        {
          model:  process.env.EXPO_PUBLIC_MODEL,
          messages: [{ role: "user", content: prompt + "en español" }],
          temperature: parseFloat(process.env.EXPO_PUBLIC_API_TEMPERATURE),
          max_tokens: parseInt(process.env.EXPO_PUBLIC_MAX_TOKENS),
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer " + process.env.EXPO_PUBLIC_OPENAI,
          },
        }
      )
      /* .then((response) => response.json()) */
      /*. then((response) => setTotal("ddd")) */

      .then((response) => setTotal(response.data.choices[0].message.content))
      /* .then(console.log(data.choices[0].message.content)) */
      /* .then(console.log(data.choices[0].message.content)) */
      .catch((err) => {console.log(err) , setTotal(err.message)});
  }
  
  const mostrar = () => {
    if (openr == true) {
      setOpenr(false);
    } else {
      setOpenr(true);
    }
    
    most();
    setPrompt("");
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}>
          <TextInput
            style={styles.input}
            onChangeText={setPrompt}
            value={prompt}
            placeholder="Ingrese una pregunta"
          />
          <Button title="Consultar" onPress={mostrar}></Button>
        </SafeAreaView>
      </View>
      <View style={{ flex: 4 }}>
        <ScrollView>
          <View style={{ margin: 10 }}>
            <Text style={{ fontSize: 17 }}>{total}</Text>
          </View>
        </ScrollView>
      </View>

      <View style={{ flex: -1 }}>
        <Button
          color="#228b22"
          title="ir a Pdf"
          onPress={() => {
            navigation.navigate("Pdf");
          }}
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default Openai;
