import { View, Text, Image, ImageBackground } from "react-native";
import { Button, style } from "react-native";
import { useState, useEffect } from "react";
import { useFetch } from "../useFetch";
import { ScrollView, StyleSheet } from "react-native";
import Cards from "../componentes/Cards";
import Icon from "react-native-vector-icons/FontAwesome";

const Home = ({ navigation }) => {
  const { data } = useFetch("https://api.github.com/users/D-ave-code");

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 10,
        }}
      >
       

        <ImageBackground
          style={styles.image}
          source={
            require("../assets/load.gif") //Indicator
          }
        >
          <Image
            style={styles.image}
            source={{
              uri: "https://i.pinimg.com/736x/ca/3c/4f/ca3c4f626be1b0082176367e10cdb8e0.jpg",
            }}
          />
        </ImageBackground>
        <Text
          style={{
            color: "black",
            paddingTop: 10,
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
        <Icon name="leaf" size={32} color="green"></Icon>  REDES SOCIALES <Icon name="comments-o" size={32} color="black"></Icon>
        </Text>
      </View>
      <ScrollView>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <Cards
              red_social="Github"
              imagen={data.avatar_url}
              username={data.login}
              repos={data.public_repos}
              link={data.html_url}
              icon="github"
              color_icon="black"
            />
            <Cards
              red_social="Facebook"
              imagen="https://scontent.fuio10-1.fna.fbcdn.net/v/t39.30808-6/277656962_4975582702522342_3117911792138315574_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=783fdb&_nc_eui2=AeEdUSSOufNwOdzGQAQsAPad2zG8gVSL9PXbMbyBVIv09YYyGHJLJENjJ2O1EVP2crlQfbX8hpCGnKRNpEHbHgpj&_nc_ohc=1n582nqZwvoAX8LPW0g&_nc_ht=scontent.fuio10-1.fna&oh=00_AfCxCghXoOzVPTb1C2ydTbUGl2EaIUy9wBfYjOW6Llbwxw&oe=65B5BF8D"
              username="Dave Code"
              amigos="364"
              link="https://m.facebook.com/profile.php/?id=100002119843884"
              icon="facebook"
              color_icon="blue"
            />
            <Cards
              red_social="kwai"
              imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrKwmWvR1uUb49hb4ucV16137zccV-BmG0WaFiYja_RQ&s"
              username="David andres kwai"
              
              link="https://www.kwai.com/es"
              icon="share"
              color_icon="blue"
            />
            <Cards
              red_social="X-twitter"
              seguidores="4"
              imagen="https://pbs.twimg.com/profile_images/746956315319230464/ob06EJxy_400x400.jpg"
              username="@david_andres5"
              link="https://m.twitter.com/david_andre5"
              icon="twitter"
              color_icon="blue"
            />
            <Cards
              red_social="Twitch"
              seguidores="2"
              imagen="https://static.wikia.nocookie.net/breakingbad/images/3/3a/Alfombra-breaking-bad-mod3-large2.jpg/revision/latest?cb=20190622081645&path-prefix=es"
              username="D4veCode"
              link="https://www.twitch.tv/D4veCode"
              icon="twitch"
              color_icon="purple"
            />
            <Cards
              red_social="Reddit"
              seguidores="0"
              imagen="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_3.png"
              username="ocelotte_dave"
              link="https://www.reddit.com/user/ocelotte_dave/"
              icon="reddit"
              color_icon="orange"
            />
            <Cards
              red_social="linkedin"
              imagen="https://media.licdn.com/dms/image/D4E35AQFGfVFYaCOkGQ/profile-framedphoto-shrink_200_200/0/1687500632996?e=1707012000&v=beta&t=7MRmPrduln5pbrRaUhnfj51i-nVP3KppwrkkRy_d95E"
              username="David Espinosa"
              link="https://www.linkedin.com/in/david-espinosa-89016a11a/"
              icon="linkedin"
              color_icon="#0a66c2"
            />
          </View>
        </View>
      </ScrollView>
      <Button
        color="#228b22"
        title="ir a Lista"
        onPress={() => {
          navigation.navigate("Lista");
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
export default Home;
