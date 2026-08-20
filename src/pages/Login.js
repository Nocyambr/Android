import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './Login.styles';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateLogin({ email = '', password = '' }) {
  const errors = {};
  const normalizedEmail = email.trim();

  if (!normalizedEmail) {
    errors.email = 'Informe seu e-mail.';
  } else if (!EMAIL_PATTERN.test(normalizedEmail)) {
    errors.email = 'Digite um e-mail válido.';
  }

  if (!password) {
    errors.password = 'Informe sua senha.';
  } else if (password.length < 4) {
    errors.password = 'A senha precisa ter pelo menos 4 caracteres.';
  }

  return errors;
}

export function getStudentName(email = '') {
  const localPart = email.trim().split('@')[0] || '';
  const words = localPart
    .split(/[._-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());

  return words.join(' ') || 'Aluno';
}

export function Login({ navigation }) {
  const passwordRef = useRef(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  function updateEmail(value) {
    setEmail(value);

    if (errors.email) {
      setErrors((current) => ({ ...current, email: undefined }));
    }
  }

  function updatePassword(value) {
    setPassword(value);

    if (errors.password) {
      setErrors((current) => ({ ...current, password: undefined }));
    }
  }

  function handleSubmit() {
    const nextErrors = validateLogin({ email, password });
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      navigation.replace('Home', {
        studentName: getStudentName(email),
      });
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.container}
      >
        <StatusBar style="dark" />
        <ScrollView
          contentContainerStyle={styles.conteudo}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.cabecalho}>
            <Pressable
              accessibilityLabel="Voltar"
              accessibilityRole="button"
              onPress={() => navigation.goBack()}
              style={({ pressed }) => [
                styles.voltar,
                pressed && styles.botaoPressionado,
              ]}
            >
              <Text style={styles.textoVoltar}>Voltar</Text>
            </Pressable>
          </View>

          <View style={styles.formulario}>
            <Text style={styles.titulo}>Tela de Login</Text>
            <Text style={styles.subtitulo}>Bem-vindo!</Text>

            <Text style={styles.rotulo}>E-mail</Text>
            <TextInput
              accessibilityLabel="E-mail"
              autoCapitalize="none"
              autoComplete="email"
              keyboardType="email-address"
              onChangeText={updateEmail}
              onSubmitEditing={() => passwordRef.current?.focus()}
              placeholder="aluno@email.com"
              returnKeyType="next"
              style={[styles.campo, errors.email && styles.campoComErro]}
              value={email}
            />
            {errors.email ? (
              <Text accessibilityLiveRegion="polite" style={styles.erro}>
                {errors.email}
              </Text>
            ) : null}

            <Text style={styles.rotulo}>Senha</Text>
            <View
              style={[
                styles.campoSenha,
                errors.password && styles.campoComErro,
              ]}
            >
              <TextInput
                accessibilityLabel="Senha"
                autoCapitalize="none"
                autoComplete="current-password"
                onChangeText={updatePassword}
                onSubmitEditing={handleSubmit}
                placeholder="Mínimo de 4 caracteres"
                ref={passwordRef}
                returnKeyType="done"
                secureTextEntry={!showPassword}
                style={styles.entradaSenha}
                value={password}
              />
              <Pressable
                accessibilityLabel={`${showPassword ? 'Ocultar' : 'Mostrar'} senha`}
                accessibilityRole="button"
                onPress={() => setShowPassword((current) => !current)}
                style={styles.mostrarSenha}
              >
                <Text style={styles.textoMostrarSenha}>
                  {showPassword ? 'Ocultar' : 'Mostrar'}
                </Text>
              </Pressable>
            </View>
            {errors.password ? (
              <Text accessibilityLiveRegion="polite" style={styles.erro}>
                {errors.password}
              </Text>
            ) : null}

            <Pressable
              accessibilityLabel="Entrar"
              accessibilityRole="button"
              onPress={handleSubmit}
              style={({ pressed }) => [
                styles.botao,
                pressed && styles.botaoPressionado,
              ]}
            >
              <Text style={styles.textoBotao}>Entrar</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
