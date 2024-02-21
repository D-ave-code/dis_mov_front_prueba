import {
  SafeAreaView,
  View,
  VirtualizedList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
import { Button } from "react-native";
import { ScrollView } from "react-native";
import { useFetch } from "../useFetch";
import Articulos from "../componentes/Articulos";
const Lista = ({ navigation }) => {
  const { data } = useFetch(
    "https://api.unsplash.com/photos/?client_id=tmXX2qlmRsZbsX7eXhvWsY1wfSpKeQj6fU9EQN0fkAw"
  );

  const users = data.map((user, index) => {
    return (
      <Articulos
        key={index}
        likes={user.likes}
        imagen={user["urls"]["thumb"]}
        descripcion={user.alt_description}
      />
    );
  });

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ flex: 1 }}>{users}</View>
      </ScrollView>
      <View>
        <Button
          color="#228b22"
          title="ir a Open Ai"
          onPress={() => {
            navigation.navigate("Openai");
          }}
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  item: {
    backgroundColor: "#f9c2ff",
    height: 150,
    justifyContent: "center",
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  title: {
    fontSize: 32,
  },
});
export default Lista;
