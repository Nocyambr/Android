import {View, Text} from "react-native";
import {styles} from "./Login.styles";

export function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela de Login</Text>
      <Text>Bem-vindo!</Text>
    </View>
  );
}