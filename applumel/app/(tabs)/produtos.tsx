import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';

const FILTERS = ['Todos', 'Bares', 'Trilhas', 'Shows', 'Cultura'];
const EVENTS = [
  {
    id: '1',
    title: 'Bar Quarto Distrito + Trivia',
    info: 'Hoje, 19h • A partir de R$ 20',
    premium: true,
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=400&h=200',
  },
  {
    id: '2',
    title: 'Trilha no Morro da Apamecor',
    info: 'Sábado, 08h • Grátis',
    premium: false,
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=400&h=200',
  },
  {
    id: '3',
    title: 'Samba do Beco',
    info: 'Sexta, 21h • R$ 15',
    premium: false,
    image: 'https://images.unsplash.com/photo-1533174000273-fa23bc115b74?auto=format&fit=crop&q=80&w=400&h=200',
  },
];

export default function ProdutosScreen() {
  const [activeFilter, setActiveFilter] = useState('Todos');

  return (
    <SafeAreaView style={styles.homePage}>
      <StatusBar barStyle="light-content" backgroundColor="#2C3E35" />

      {/* Cabeçalho do App */}
      <View style={styles.lumelHeader}>
        <Text style={styles.headerTitle}>LUMEL APP</Text>
        <Text style={styles.headerSubtitle}>Eventos e Rolês em POA</Text>
      </View>

      {/* Área de Filtros */}
      <View style={styles.filtersWrapper}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filtersSection}
        >
          {FILTERS.map((filter) => (
            <TouchableOpacity
              key={filter}
              style={[
                styles.filterChip,
                activeFilter === filter && styles.filterChipActive,
              ]}
              onPress={() => setActiveFilter(filter)}
            >
              <Text
                style={[
                  styles.filterChipText,
                  activeFilter === filter && styles.filterChipTextActive,
                ]}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Container de Eventos */}
      <ScrollView contentContainerStyle={styles.eventsFeed} showsVerticalScrollIndicator={false}>
        {EVENTS.map((event) => (
          <View key={event.id} style={styles.eventCard}>
            <Image source={{ uri: event.image }} style={styles.eventImage} />
            <Text style={styles.eventTitle}>{event.title}</Text>

            <View style={styles.eventInfoContainer}>
              <Text style={styles.eventInfo}>{event.info}</Text>
              {event.premium && (
                <View style={styles.premiumBadgeWrapper}>
                  <Text style={styles.premiumBadge}> Premium </Text>
                </View>
              )}
            </View>

            <TouchableOpacity style={styles.btnJoinGroup} activeOpacity={0.8}>
              <Text style={styles.btnJoinGroupText}>Entrar no Grupo</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homePage: {
    flex: 1,
    backgroundColor: '#FDFDFD',
  },
  lumelHeader: {
    backgroundColor: '#2C3E35',
    paddingHorizontal: 20,
    paddingTop: 50, // Added padding for top area
    paddingBottom: 24,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#E0E0E0',
    marginTop: 4,
  },
  filtersWrapper: {
    height: 70, // Fixed height so ScrollView doesn't collapse
  },
  filtersSection: {
    padding: 20,
    alignItems: 'center',
  },
  filterChip: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#EEEEEE',
    borderRadius: 20,
    marginRight: 12, // Gap between chips
  },
  filterChipActive: {
    backgroundColor: '#82C07B',
  },
  filterChipText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666666',
  },
  filterChipTextActive: {
    color: '#2C3E35',
  },
  eventsFeed: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  eventCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    borderColor: '#F0F0F0',
    borderWidth: 1,
    marginBottom: 16,
  },
  eventImage: {
    width: '100%',
    height: 140,
    backgroundColor: '#2C3E35',
    borderRadius: 8,
    marginBottom: 12,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 4,
  },
  eventInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  eventInfo: {
    fontSize: 14,
    color: '#666666',
    marginRight: 8, // Gap between info and badge
  },
  premiumBadgeWrapper: {
    backgroundColor: '#F4C754',
    borderRadius: 4,
    overflow: 'hidden',
  },
  premiumBadge: {
    color: '#333333',
    fontSize: 10,
    fontWeight: 'bold',
    paddingVertical: 4,
    paddingHorizontal: 8,
    textTransform: 'uppercase',
  },
  btnJoinGroup: {
    width: '100%',
    backgroundColor: '#82C07B',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  btnJoinGroupText: {
    color: '#2C3E35',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
