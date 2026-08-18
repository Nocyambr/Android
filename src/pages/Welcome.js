import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PrimaryButton } from '../components/PrimaryButton';
import { styles } from './Welcome.styles';

const highlights = [
  { value: '2x', label: 'por semana' },
  { value: '3º', label: 'Ensino Médio' },
  { value: '100%', label: 'mobile' },
];

export function Welcome({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" backgroundColor="#111B2E" />
      <View pointerEvents="none" style={styles.decorativeCircleTop} />
      <View pointerEvents="none" style={styles.decorativeCircleBottom} />

      <ScrollView
        bounces={false}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <View style={styles.brandRow}>
            <View style={styles.brandMark}>
              <Text style={styles.brandMarkText}>MT</Text>
            </View>
            <View>
              <Text style={styles.brandName}>MINHA TURMA</Text>
              <Text style={styles.brandCaption}>Seu espaço de aprendizagem</Text>
            </View>
          </View>

          <View style={styles.hero}>
            <View style={styles.eyebrow}>
              <Text style={styles.eyebrowText}>
                PROGRAMAÇÃO PARA DISPOSITIVOS MÓVEIS
              </Text>
            </View>

            <Text style={styles.title}>Aprenda. Pratique.{`\n`}Evolua.</Text>
            <Text style={styles.description}>
              Acompanhe os conceitos da aula e avance no desenvolvimento do seu
              primeiro aplicativo com React Native e Expo.
            </Text>
          </View>

          <View style={styles.classCard}>
            <View style={styles.classBadge}>
              <Text style={styles.classBadgeValue}>3º</Text>
              <Text style={styles.classBadgeLabel}>MÉDIO</Text>
            </View>
            <View style={styles.classDetails}>
              <Text style={styles.classTitle}>Encontros semanais</Text>
              <Text style={styles.classSchedule}>Aulas de terças e quintas</Text>
            </View>
            <View style={styles.liveIndicator}>
              <View style={styles.liveDot} />
              <Text style={styles.liveText}>ATIVO</Text>
            </View>
          </View>

          <View style={styles.highlightsRow}>
            {highlights.map((highlight) => (
              <View key={highlight.label} style={styles.highlightItem}>
                <Text style={styles.highlightValue}>{highlight.value}</Text>
                <Text style={styles.highlightLabel}>{highlight.label}</Text>
              </View>
            ))}
          </View>

          <View style={styles.footer}>
            <PrimaryButton
              label="Começar"
              onPress={() => navigation.navigate('Login')}
              variant="light"
            />
            <Text style={styles.footerText}>Criado com React Native + Expo</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
