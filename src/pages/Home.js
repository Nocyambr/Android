import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './Home.styles';

const concepts = [
  {
    id: 'react-native',
    number: '01',
    title: 'React Native',
    description: 'JavaScript e JSX com componentes realmente nativos.',
  },
  {
    id: 'expo',
    number: '02',
    title: 'Expo',
    description: 'Configuração simplificada, Metro e atualização rápida.',
  },
  {
    id: 'components',
    number: '03',
    title: 'View e Text',
    description: 'Blocos essenciais para organizar e exibir a interface.',
  },
];

const checklist = [
  {
    id: 'node',
    title: 'Node.js LTS instalado',
    description: 'Ambiente preparado para executar o Expo.',
  },
  {
    id: 'project',
    title: 'Projeto Expo criado',
    description: 'Estrutura em branco pronta para desenvolver.',
  },
  {
    id: 'android',
    title: 'App aberto no Android',
    description: 'Execução validada no emulador ou celular.',
  },
  {
    id: 'component',
    title: 'Primeiro componente editado',
    description: 'View, Text e estilos aplicados no aplicativo.',
  },
];

export function Home({ navigation, route }) {
  const [completedIds, setCompletedIds] = useState([]);
  const studentName = route?.params?.studentName || 'Aluno';
  const progress = completedIds.length / checklist.length;

  function toggleChecklistItem(itemId) {
    setCompletedIds((current) =>
      current.includes(itemId)
        ? current.filter((id) => id !== itemId)
        : [...current, itemId],
    );
  }

  function handleLogout() {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Welcome' }],
    });
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" backgroundColor="#F4F6F9" />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <View style={styles.header}>
            <View style={styles.identity}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>{studentName.charAt(0)}</Text>
              </View>
              <View style={styles.greetingBlock}>
                <Text style={styles.greeting}>Olá, {studentName}</Text>
                <Text style={styles.greetingCaption}>Vamos continuar aprendendo?</Text>
              </View>
            </View>

            <Pressable
              accessibilityLabel="Sair"
              accessibilityRole="button"
              hitSlop={10}
              onPress={handleLogout}
              style={({ pressed }) => [
                styles.logoutButton,
                pressed && styles.logoutButtonPressed,
              ]}
            >
              <Text style={styles.logoutText}>Sair</Text>
            </Pressable>
          </View>

          <View style={styles.courseCard}>
            <View style={styles.courseTopRow}>
              <View style={styles.coursePill}>
                <Text style={styles.coursePillText}>AULA 01</Text>
              </View>
              <Text style={styles.courseLevel}>3º MÉDIO</Text>
            </View>
            <Text style={styles.courseTitle}>
              Programação para{`\n`}Dispositivos Móveis
            </Text>
            <Text style={styles.courseSchedule}>Encontros às terças e quintas</Text>

            <View style={styles.progressBlock}>
              <View style={styles.progressLabels}>
                <Text style={styles.progressLabel}>Progresso do checklist</Text>
                <Text style={styles.progressValue}>
                  {completedIds.length}/{checklist.length}
                </Text>
              </View>
              <View style={styles.progressTrack}>
                <View
                  testID="course-progress"
                  style={[styles.progressFill, { width: `${progress * 100}%` }]}
                />
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Conceitos da aula</Text>
              <Text style={styles.sectionMeta}>3 tópicos</Text>
            </View>

            <View style={styles.conceptsGrid}>
              {concepts.map((concept) => (
                <View key={concept.id} style={styles.conceptCard}>
                  <Text style={styles.conceptNumber}>{concept.number}</Text>
                  <Text style={styles.conceptTitle}>{concept.title}</Text>
                  <Text style={styles.conceptDescription}>
                    {concept.description}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Meu checklist</Text>
              <Text style={styles.sectionMeta}>
                {completedIds.length} de {checklist.length} concluídos
              </Text>
            </View>

            <View style={styles.checklistCard}>
              {checklist.map((item, index) => {
                const isCompleted = completedIds.includes(item.id);

                return (
                  <Pressable
                    accessibilityLabel={`${
                      isCompleted ? 'Desmarcar' : 'Marcar'
                    } ${item.title} como concluído`}
                    accessibilityRole="checkbox"
                    accessibilityState={{ checked: isCompleted }}
                    key={item.id}
                    onPress={() => toggleChecklistItem(item.id)}
                    style={({ pressed }) => [
                      styles.checklistItem,
                      index < checklist.length - 1 && styles.checklistItemBorder,
                      pressed && styles.checklistItemPressed,
                    ]}
                  >
                    <View
                      style={[
                        styles.checkbox,
                        isCompleted && styles.checkboxCompleted,
                      ]}
                    >
                      {isCompleted ? <Text style={styles.checkmark}>✓</Text> : null}
                    </View>
                    <View style={styles.checklistCopy}>
                      <Text
                        style={[
                          styles.checklistTitle,
                          isCompleted && styles.checklistTitleCompleted,
                        ]}
                      >
                        {item.title}
                      </Text>
                      <Text style={styles.checklistDescription}>
                        {item.description}
                      </Text>
                    </View>
                  </Pressable>
                );
              })}
            </View>
          </View>

          <Text style={styles.footerText}>Feito com React Native + Expo</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
