import { Link } from 'expo-router';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinkButton } from '../../components/LinkButton';

export default function Puppy() {
  return (
    <View style={styles.container}>
      <Text>Puppy Page :D</Text>
      <Image>
        source={{uri:'https://pbs.twimg.com/media/GxHvtEIXQAAZG3r.jpg'}}
      </Image>
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
});
