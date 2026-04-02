import { LinearGradient } from 'expo-linear-gradient';
import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export default function EsqueciSenhaScreen() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleSendCode = () => {
    // Aqui vai a lógica para enviar o email de reset
    alert(`Código enviado para: ${email}`);
    // Opcional: Voltar para tela de login após envio
    // router.replace('/login');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Background Gradient */}
      <LinearGradient
        colors={['#A8D6C9', '#EDF1F3', '#EDF1F3']}
        style={styles.backgroundGradient}
        start={{ x: 0.5, y: -0.2 }}
        end={{ x: 0.5, y: 0.4 }}
      />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

          <View style={styles.header}>
            <Text style={styles.title}>Esqueceu a sua {'\n'}senha?</Text>
            <Text style={styles.subtitle}>
              Envie um código para o seu e-mail para substituir a sua senha
            </Text>
          </View>

          <View style={styles.formContainer}>
            {/* Input E-mail */}
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              placeholderTextColor="#111827"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />

            {/* Helper Text */}
            <Text style={styles.helperText}>
              <Text style={styles.asterisk}>* </Text>
              Nós iremos enviar uma mensagem para resetar a sua senha
            </Text>

            {/* Botão de Envio */}
            <TouchableOpacity style={styles.submitButton} onPress={handleSendCode}>
              <Text style={styles.submitButtonText}>Envie o Código</Text>
            </TouchableOpacity>

          </View>

          {/* Spacer pushing footer down */}
          <View style={{ flex: 1 }} />

          {/* Rodapé - Cadastro */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Não possui conta? </Text>
            <Link href="/cadastro" asChild>
              <TouchableOpacity>
                <Text style={styles.registerText}>Cadastre-se</Text>
              </TouchableOpacity>
            </Link>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF1F3',
  },
  backgroundGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 80,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0A5C47', // Verde escuro da imagem
    marginBottom: 16,
    lineHeight: 38,
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    paddingRight: 10,
  },
  formContainer: {
    width: '100%',
    marginTop: 10,
  },
  input: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 12,
    color: '#111827',
    fontSize: 14,
    marginBottom: 12,
    fontWeight: '500',
    // Sombra leve no input (como na imagem)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  helperText: {
    fontSize: 12,
    color: '#9CA3AF',
    marginLeft: 4,
    marginBottom: 32,
    lineHeight: 18,
  },
  asterisk: {
    color: '#62A888', // asterisk color slightly stronger if desired, or same
  },
  submitButton: {
    backgroundColor: '#0A5C47',
    paddingVertical: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#0A5C47',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#6B7280',
  },
  registerText: {
    fontSize: 14,
    color: '#34A853', // Verde do link
    fontWeight: 'bold',
  },
});
