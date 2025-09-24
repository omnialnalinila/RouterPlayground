import { Link } from 'expo-router';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinkButton } from '../../components/LinkButton';

export default function Kitty() {
  return (
    <View style={styles.container}>
      <Text>Kitty Page :3</Text>
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
