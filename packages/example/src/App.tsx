import {
  multiply,
  Button,
  AnimatedButton,
  Input,
  BottomSheetModal,
} from "design-system-react-native";
import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

const result = multiply(3, 7);

export default function App() {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      {/* <Button>
  <Button.Title>Testando</Button.Title>
</Button> */}

      <AnimatedButton onPress={() => setVisible(true)}/>

      {/* <Input title="Testando" width="LG" secure/> */}
      {/* <AnimatedButton onPress={() => console.log("entrou")}/> */}

      <BottomSheetModal onClose={() => setVisible(false)} visible={visible}>
        <Text>Result: {result}</Text>
      </BottomSheetModal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
});
