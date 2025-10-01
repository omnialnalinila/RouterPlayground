import { Link } from 'expo-router';
import { StyleSheet, Text, View, Image, Pressable, Alert } from 'react-native';
import { LinkButton } from '../../components/LinkButton';

const meow = () => {
  Alert.alert("meow :3", "meow :3" [
    {
      text: "meow :3",
      onPress: () => console.log("meowed back :3"),
    },
    {text:"kitty!!",onPress:()=>console.log("noticed kitty :3c")}
  ])
}

export default function Kitty() {
  return (
    <View style={styles.container}>
      <Text>Kitty Page :3</Text>
      <Pressable onPress={meow}>
      <Image
        style={styles.picture}
        source={{uri:'https://pbs.twimg.com/media/G049fOUaoAIVoDT.jpg'}}
      />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  picture: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  }
});
