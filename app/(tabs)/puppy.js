import { Link } from 'expo-router';
import { StyleSheet, Text, View, Image, Pressable, Alert } from 'react-native';
import { LinkButton } from '../../components/LinkButton';

export default function Puppy() {
  return (
    <View style={styles.container}>
      <Text>Puppy Page :D</Text>
      <Image
        style={styles.picture}
        source={{uri:'https://www.rickey.org/img/2020/bork-video-star-gabe-the-dog-has-died.jpg'}}
      />
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
