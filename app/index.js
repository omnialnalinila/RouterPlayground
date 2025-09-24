import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import LinkButton from '../components/LinkButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up index.js to start working on your app!</Text>
      <LinkButton page="about" title="Go to a about page :]"/>
      <LinkButton page="silly" title="Witness a silly page :P"/>
      <LinkButton page="kitty" title="See a kitty page :3"/>
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
