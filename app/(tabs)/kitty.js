import { Link } from 'expo-router';
import { StyleSheet, Text, View, Image, Pressable, Alert } from 'react-native';
import { LinkButton } from '../../components/LinkButton';

const meow = () => {
  Alert.alert("Kitty's Response", 'meow :3', [
    {
      text: 'mew :3',
      onPress: () => Alert.alert('You have meowed back at the kitty cat :3'),
    },
    {
      text: 'hello kitty :D',
      onPress: () => Alert.alert("Kitty's Other Response", 'mrrp :3'),
    },
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
