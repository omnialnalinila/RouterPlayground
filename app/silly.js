import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import LinkButton from '../components/LinkButton';

export default function Silly() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>silly :3</Text>
      <LinkButton page="/" title="no... i don't like it here... take me back!!"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
  }
});
