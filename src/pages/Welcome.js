import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { styles } from '../styles/styles';

export function Welcome() {
    <View style={styles.overlay}>
      <View style={styles.container}>
       <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
        />

      <View style={styles.subtitulo}>
        <Text style={styles.titulo}>Aulas de Terças e Quintas</Text>
        <Text style={styles.titulo}>3º Médio</Text>
      </View>
     </View>
    </View>
   </ImageBackground >
 );
}