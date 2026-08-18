import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { FormField } from '../components/FormField';
import { PrimaryButton } from '../components/PrimaryButton';
import { getStudentName, validateLogin } from '../utils/login';
import { styles } from './Login.styles';

const initialForm = {
  email: '',
  password: '',
};

export function Login({ navigation }) {
  const passwordRef = useRef(null);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }));

    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  }

  function handleSubmit() {
    const nextErrors = validateLogin(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      navigation.replace('Home', {
        studentName: getStudentName(form.email),
      });
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" backgroundColor="#F4F6F9" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.keyboardView}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.content}>
            <View style={styles.header}>
              <Pressable
                accessibilityLabel="Voltar"
                accessibilityRole="button"
                hitSlop={12}
                onPress={() => navigation.goBack()}
                style={({ pressed }) => [
                  styles.backButton,
                  pressed && styles.backButtonPressed,
                ]}
              >
                <Text style={styles.backButtonText}>‹</Text>
              </Pressable>

              <View style={styles.headerBrand}>
                <View style={styles.headerBrandMark}>
                  <Text style={styles.headerBrandMarkText}>MT</Text>
                </View>
                <Text style={styles.headerBrandName}>MINHA TURMA</Text>
              </View>
            </View>

            <View style={styles.intro}>
              <Text style={styles.eyebrow}>ÁREA DO ALUNO</Text>
              <Text style={styles.title}>Bem-vindo de volta</Text>
              <Text style={styles.description}>
                Entre para acompanhar seu progresso na disciplina.
              </Text>
            </View>

            <View style={styles.formCard}>
              <FormField
                autoCapitalize="none"
                autoComplete="email"
                error={errors.email}
                keyboardType="email-address"
                label="E-mail"
                onChangeText={(value) => updateField('email', value)}
                onSubmitEditing={() => passwordRef.current?.focus()}
                placeholder="aluno@email.com"
                returnKeyType="next"
                value={form.email}
              />

              <FormField
                autoCapitalize="none"
                autoComplete="current-password"
                error={errors.password}
                label="Senha"
                onChangeText={(value) => updateField('password', value)}
                onSubmitEditing={handleSubmit}
                placeholder="Mínimo de 4 caracteres"
                ref={passwordRef}
                returnKeyType="done"
                rightAction={showPassword ? 'Ocultar' : 'Mostrar'}
                secureTextEntry={!showPassword}
                onRightAction={() => setShowPassword((current) => !current)}
                value={form.password}
              />

              <PrimaryButton label="Entrar" onPress={handleSubmit} />
            </View>

            <View style={styles.demoHint}>
              <View style={styles.demoHintDot} />
              <Text style={styles.demoHintText}>
                Para testar, use qualquer e-mail válido e uma senha com pelo
                menos 4 caracteres.
              </Text>
            </View>

            <Text style={styles.privacyText}>
              Esta demonstração funciona localmente e não envia seus dados.
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
