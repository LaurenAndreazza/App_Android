import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

const CATEGORIES = [
  { id: '1', name: 'RESTAURANTES', icon: 'glass-cocktail', family: 'MaterialCommunityIcons', selected: true },
  { id: '2', name: 'ESPORTES', icon: 'basketball-outline', family: 'Ionicons', selected: false },
  { id: '3', name: 'SHOWS', icon: 'drama-masks', family: 'MaterialCommunityIcons', selected: false },
  { id: '4', name: 'HOBBIES', icon: 'color-palette-outline', family: 'Ionicons', selected: false },
];

const PARTNERS = [
  {
    id: '1',
    name: 'Agridoce Café',
    category: 'Cafeteria',
    rating: '4.8',
    distance: '1.0 km',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    id: '2',
    name: 'Kampeki',
    category: 'Sushi Lounge Bar',
    rating: '4.9',
    distance: '2.5 km',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=300&h=300'
  }
];

export default function ProdutosScreen() {
  const [activeCategory, setActiveCategory] = useState('1');

  const renderIcon = (family: string, name: any, size: number, color: string) => {
    if (family === 'MaterialCommunityIcons') {
      return <MaterialCommunityIcons name={name} size={size} color={color} />;
    }
    return <Ionicons name={name} size={size} color={color} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      {Platform.OS === 'android' && <StatusBar barStyle="dark-content" backgroundColor="#EDF1F3" />}

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

        {/* Header */}
        <View style={styles.header}>
          <View style={styles.profileSection}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150' }}
              style={styles.avatar}
            />
            <View style={styles.greetingContainer}>
              <Text style={styles.greetingText}>BEM-VINDO DE VOLTA</Text>
              <Text style={styles.userName}>Taylor Cassimiro</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.bellButton}>
            <Ionicons name="notifications-outline" size={20} color="#0A5C47" />
          </TouchableOpacity>
        </View>

        {/* Location */}
        <View style={styles.locationContainer}>
          <Ionicons name="location-sharp" size={20} color="#0A5C47" />
          <Text style={styles.locationText}>Niterói, Canoas</Text>
          <Ionicons name="chevron-down" size={16} color="#0A5C47" style={styles.chevronIcon} />
        </View>

        {/* Search */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#9CA3AF" />
          <TextInput
            style={styles.searchInput}
            placeholder="pesquise diversos tipos de rolês"
            placeholderTextColor="#9CA3AF"
          />
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="options" size={20} color="#0A5C47" />
          </TouchableOpacity>
        </View>

        {/* Promo Card */}
        <View style={styles.promoWrapper}>
          <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&q=80&w=600&h=300' }}
            style={styles.promoCard}
            imageStyle={{ borderRadius: 24 }}
          >
            <View style={styles.promoOverlay}>
              <View style={styles.promoBadge}>
                <Text style={styles.promoBadgeText}>OFERTA LIMITADA</Text>
              </View>
              <Text style={styles.promoTitle}>30% de desconto {"\n"}????</Text>
              <TouchableOpacity style={styles.promoButton}>
                <Text style={styles.promoButtonText}>Reserve{"\n"}agora</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>

        {/* Categories Header */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Categorias</Text>
          <TouchableOpacity>
            <Text style={styles.vejaMais}>VEJA MAIS</Text>
          </TouchableOpacity>
        </View>

        {/* Categories List */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesScroll}
        >
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <TouchableOpacity
                key={cat.id}
                style={styles.categoryItem}
                onPress={() => setActiveCategory(cat.id)}
                activeOpacity={0.7}
              >
                <View style={[styles.categoryIconContainer, isSelected && styles.categoryIconSelected]}>
                  {renderIcon(cat.family, cat.icon, 28, isSelected ? 'white' : '#9CA3AF')}
                </View>
                <Text style={[styles.categoryText, isSelected && styles.categoryTextSelected]}>
                  {cat.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Partners Header */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Parceiros</Text>
          <TouchableOpacity>
            <Text style={styles.vejaMais}>VER MAPA</Text>
          </TouchableOpacity>
        </View>

        {/* Partners List */}
        <View style={styles.partnersContainer}>
          {PARTNERS.map(partner => (
            <View key={partner.id} style={styles.partnerCard}>
              <Image source={{ uri: partner.image }} style={styles.partnerImage} />
              <View style={styles.partnerInfo}>
                <View style={styles.partnerTitleRow}>
                  <Text style={styles.partnerTitle}>{partner.name}</Text>
                  <TouchableOpacity>
                    <Feather name="bookmark" size={20} color="#9CA3AF" />
                  </TouchableOpacity>
                </View>
                <Text style={styles.partnerCategory}>{partner.category}</Text>

                <View style={styles.partnerStats}>
                  <View style={styles.statItem}>
                    <Ionicons name="star" size={14} color="#0A5C47" />
                    <Text style={styles.statTextBold}>{partner.rating}</Text>
                  </View>
                  <View style={styles.statItem}>
                    <Ionicons name="location-outline" size={14} color="#9CA3AF" />
                    <Text style={styles.statText}>{partner.distance}</Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF1F3',
  },
  scrollContent: {
    paddingBottom: 120, // Space for standard bottom tabs
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: Platform.OS === 'android' ? 24 : 12,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  greetingContainer: {
    marginLeft: 12,
  },
  greetingText: {
    fontSize: 10,
    color: '#6B7280',
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  userName: {
    fontSize: 18,
    color: '#0A5C47',
    fontWeight: 'bold',
    marginTop: 2,
  },
  bellButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: 24,
  },
  locationText: {
    fontSize: 16,
    color: '#0A5C47',
    fontWeight: 'bold',
    marginLeft: 6,
  },
  chevronIcon: {
    marginLeft: 4,
    marginTop: 2,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 24,
    marginTop: 16,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 14,
    color: '#111827',
  },
  filterButton: {
    width: 36,
    height: 36,
    backgroundColor: '#EDF1F3',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  promoWrapper: {
    marginHorizontal: 24,
    marginTop: 24,
    borderRadius: 24,
    shadowColor: '#0A5C47',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 5,
  },
  promoCard: {
    width: '100%',
    height: 180,
  },
  promoOverlay: {
    flex: 1,
    backgroundColor: 'rgba(10, 92, 71, 0.75)',
    borderRadius: 24,
    padding: 24,
    justifyContent: 'center',
  },
  promoBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 8,
  },
  promoBadgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  promoTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  promoButton: {
    backgroundColor: '#0A5C47',
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
  },
  promoButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 24,
    marginTop: 32,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0A5C47',
  },
  vejaMais: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#62A888',
    letterSpacing: 0.5,
  },
  categoriesScroll: {
    paddingLeft: 24,
    paddingRight: 8,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 24,
  },
  categoryIconContainer: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  categoryIconSelected: {
    backgroundColor: '#0A5C47',
  },
  categoryText: {
    fontSize: 10,
    color: '#9CA3AF',
    fontWeight: 'bold',
    marginTop: 12,
    letterSpacing: 0.5,
  },
  categoryTextSelected: {
    color: '#0A5C47',
  },
  partnersContainer: {
    paddingHorizontal: 24,
  },
  partnerCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 24,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
    alignItems: 'center',
  },
  partnerImage: {
    width: 80,
    height: 80,
    borderRadius: 16,
    backgroundColor: '#EDF1F3',
  },
  partnerInfo: {
    flex: 1,
    marginLeft: 16,
  },
  partnerTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  partnerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0A5C47',
  },
  partnerCategory: {
    fontSize: 13,
    color: '#9CA3AF',
    marginTop: 4,
  },
  partnerStats: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  statTextBold: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#111827',
    marginLeft: 4,
  },
  statText: {
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 4,
  },
});
