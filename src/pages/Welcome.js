import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './Welcome.style';

export function Welcome({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        bounces={false}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <StatusBar style="dark" />

        <Image
          accessibilityIgnoresInvertColors
          source={require('../../assets/icon.png')}
          style={styles.imagem}
        />

        <Text style={styles.titulo}>Aulas de Terças e Quintas</Text>
        <Text style={styles.subtitulo}>3º Médio</Text>
        <Text style={styles.descricao}>
          Programação para Dispositivos Móveis
        </Text>

        <Pressable
          accessibilityLabel="Começar"
          accessibilityRole="button"
          onPress={() => navigation.navigate('Login')}
          style={({ pressed }) => [
            styles.botao,
            pressed && styles.botaoPressionado,
          ]}
        >
          <Text style={styles.textoBotao}>Começar</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}
