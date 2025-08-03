import { multiply, InputLine, Input } from "@juancarllos-ui/react-native";
import { Text, View } from "react-native";

const result = multiply(3, 7);

export default function App() {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text>Result: {result}</Text>


      <Input placeholder="oi"/>

      <InputLine title="oi"/>
    </View>
  );
}
