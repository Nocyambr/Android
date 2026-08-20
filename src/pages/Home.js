import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './Home.styles';

const concepts = [
  {
    id: 'react-native',
    title: 'React Native',
    description: 'JavaScript e JSX com componentes nativos.',
  },
  {
    id: 'expo',
    title: 'Expo',
    description: 'Configuração simples e atualização rápida do aplicativo.',
  },
  {
    id: 'components',
    title: 'View e Text',
    description: 'Componentes básicos para organizar e exibir a interface.',
  },
];

const checklist = [
  'Node.js LTS instalado',
  'Projeto Expo criado',
  'App aberto no Android',
  'Primeiro componente editado',
];

export function Home({ navigation, route }) {
  const [completedItems, setCompletedItems] = useState([]);
  const studentName = route?.params?.studentName || 'Aluno';

  function toggleItem(item) {
    setCompletedItems((current) =>
      current.includes(item)
        ? current.filter((currentItem) => currentItem !== item)
        : [...current, item],
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
      <ScrollView
        contentContainerStyle={styles.conteudo}
        showsVerticalScrollIndicator={false}
      >
        <StatusBar style="dark" />

        <View style={styles.cabecalho}>
          <View style={styles.usuario}>
            <Text numberOfLines={1} style={styles.saudacao}>
              Olá, {studentName}
            </Text>
            <Text style={styles.textoApoio}>Bem-Vindo Primo</Text>
          </View>
          <Pressable
            accessibilityLabel="Sair"
            accessibilityRole="button"
            onPress={handleLogout}
            style={({ pressed }) => [
              styles.sair,
              pressed && styles.botaoPressionado,
            ]}
          >
            <Text style={styles.textoSair}>Sair</Text>
          </Pressable>
        </View>

        <View style={styles.resumo}>
          <Text style={styles.aula}>AULA 01 · Primo Gordinhos Pastéis · 3º MÉDIO</Text>
          <Text style={styles.titulo}>Como fritar Pastel</Text>
          <Text style={styles.horario}>Aulas de terças e quintas</Text>
          <View style={styles.linhaProgresso}>
            <Text style={styles.rotuloProgresso}>Progresso</Text>
            <Text style={styles.progresso}>
              {completedItems.length}/{checklist.length}
            </Text>
          </View>
        </View>

        <Text style={styles.tituloSecao}>Conceitos da aula</Text>
        {concepts.map((concept) => (
          <View key={concept.id} style={styles.cartao}>
            <Text style={styles.tituloCartao}>{concept.title}</Text>
            <Text style={styles.descricaoCartao}>{concept.description}</Text>
          </View>
        ))}

        <Text style={styles.tituloSecao}>Meu checklist</Text>
        <View style={styles.lista}>
          {checklist.map((item) => {
            const isCompleted = completedItems.includes(item);

            return (
              <Pressable
                accessibilityLabel={`${
                  isCompleted ? 'Desmarcar' : 'Marcar'
                } ${item} como concluído`}
                accessibilityRole="checkbox"
                accessibilityState={{ checked: isCompleted }}
                key={item}
                onPress={() => toggleItem(item)}
                style={({ pressed }) => [
                  styles.item,
                  pressed && styles.itemPressionado,
                ]}
              >
                <View
                  style={[
                    styles.checkbox,
                    isCompleted && styles.checkboxConcluido,
                  ]}
                >
                  {isCompleted ? <Text style={styles.check}>✓</Text> : null}
                </View>
                <Text
                  style={[
                    styles.textoItem,
                    isCompleted && styles.textoConcluido,
                  ]}
                >
                  {item}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
