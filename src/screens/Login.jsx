import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { styles } from "../lib/style";
export const Login = () => {
  const [text, setEmail] = useState();
  const [passoword, setPassword] = useState();

  return (
    <View style={styles.container}>
      <TextInput
      label="Email"
      mode="outlined"
      value={text}
      onChangeText={(emailDigitado) => setEmail(emailDigitado)}
      />

      <TextInput
      label="Senha"
      mode="outlined"
      value={passoword}
      onChangeText={(valor) => setPassword(valor)}
      secureTextEntry={true}
      />

      <Button  mode="contained" onPress={() => console.log('Pressed')}>
     Logar 
  </Button>

    </View>
  );
};
