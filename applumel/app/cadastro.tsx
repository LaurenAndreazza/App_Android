import { Ionicons } from '@expo/vector-icons';
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

export default function CadastroScreen() {
  const router = useRouter();
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* Fundo com Degradê Verde */}
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

          {/* Botão de Voltar */}
          <View style={styles.headerTop}>
            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color="#111827" />
            </TouchableOpacity>
          </View>

          {/* Cabeçalho */}
          <View style={styles.header}>
            <Text style={styles.title}>Cadastre-se</Text>
            <Text style={styles.subtitle}>Crie a sua conta para continuar</Text>
          </View>

          {/* Formulário */}
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Lauren"
              placeholderTextColor="#9CA3AF"
              value={nome}
              onChangeText={setNome}
            />

            <TextInput
              style={styles.input}
              placeholder="Andreazza"
              placeholderTextColor="#9CA3AF"
              value={sobrenome}
              onChangeText={setSobrenome}
            />

            <TextInput
              style={styles.input}
              placeholder="Lauren@gmail.com"
              placeholderTextColor="#9CA3AF"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />

            {/* Input Data de Nascimento com Ícone de Calendário */}
            <View style={styles.inputWithIconContainer}>
              <TextInput
                style={styles.inputFlex}
                placeholder="20/03/2026"
                placeholderTextColor="#9CA3AF"
                value={dataNascimento}
                onChangeText={setDataNascimento}
              />
              <Ionicons name="calendar-outline" size={20} color="#9CA3AF" style={styles.rightIcon} />
            </View>

            {/* Input Telefone com DDI */}
            <View style={styles.phoneRow}>
              <View style={styles.countryCodeContainer}>
                <Ionicons name="chevron-down" size={16} color="#6B7280" />
              </View>
              <TextInput
                style={[styles.input, styles.phoneInput]}
                placeholder="(51) 9923-1233"
                placeholderTextColor="#9CA3AF"
                keyboardType="phone-pad"
                value={telefone}
                onChangeText={setTelefone}
              />
            </View>

            {/* Input Senha com Olhinho */}
            <View style={styles.inputWithIconContainer}>
              <TextInput
                style={styles.inputFlex}
                placeholder="*******"
                placeholderTextColor="#9CA3AF"
                secureTextEntry={!showPassword}
                value={senha}
                onChangeText={setSenha}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.rightIcon}>
                <Ionicons name={showPassword ? "eye" : "eye-off-outline"} size={20} color="#9CA3AF" />
              </TouchableOpacity>
            </View>

            {/* Botão Registrar */}
            <TouchableOpacity style={styles.registerButton}>
              <Text style={styles.registerButtonText}>Registrar</Text>
            </TouchableOpacity>
          </View>

          {/* Rodapé - Link para Login */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Possui conta? </Text>
            <Link href="/login" asChild>
              <TouchableOpacity>
                <Text style={styles.loginText}>Entre aqui</Text>
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
    paddingTop: 50,
    paddingBottom: 40,
  },
  headerTop: {
    marginBottom: 20,
  },
  backButton: {
    padding: 8,
    marginLeft: -8,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0A5C47',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
  },
  formContainer: {
    width: '100%',
  },
  input: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 18,
    borderRadius: 12,
    color: '#111827',
    fontSize: 14,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  inputWithIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  inputFlex: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 18,
    color: '#111827',
    fontSize: 14,
  },
  rightIcon: {
    padding: 16,
  },
  phoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  countryCodeContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderRadius: 12,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneInput: {
    flex: 1,
    marginBottom: 0, // Zera a margem pois o contêiner phoneRow já gerencia isso
  },
  registerButton: {
    backgroundColor: '#0A5C47',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
    shadowColor: '#0A5C47',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  footerText: {
    fontSize: 14,
    color: '#6B7280',
  },
  loginText: {
    fontSize: 14,
    color: '#34A853',
    fontWeight: 'bold',
  },
});
