import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function LinkButton({page, title}) {
  return (
    <View style={styles.container}>
      <Link style={styles.text} href={page}>{title}</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
  },
  text: {
    borderWidth: 1,
  }
});
