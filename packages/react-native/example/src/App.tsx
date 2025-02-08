import { multiply, Button } from '@juancarllos-ui/react-native';
import { Text, View, StyleSheet } from 'react-native';

const result = multiply(3, 7);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>

      <Button>
        <Button.Title>Testando</Button.Title>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
