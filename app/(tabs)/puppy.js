import { Link } from 'expo-router';
import { StyleSheet, Text, View, Image, Pressable, Alert } from 'react-native';
import { LinkButton } from '../../components/LinkButton';

const woof = () => {
  Alert.alert("Puppy's Message", 'woof 🐶', [
    {
      text: 'woof 🐶🐶',
      onPress: () => Alert.alert('You have barked back at the puppo 🐶'),
    },
    {
      text: 'haiii puppo ^^',
      onPress: () => Alert.alert("Puppy's Other Response",'woof 🐕'),
    }
  ])
}

export default function Puppy() {
  return (
    <View style={styles.container}>
      <Text>Puppy Page :D</Text>
      <Pressable onPress={woof}>
      <Image
        style={styles.picture}
        source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTgublTv1wgJXThP_4oWsTc67O0WhQgNGV7g&s'}}
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
    resizeMode: 'cover',
  }
});
