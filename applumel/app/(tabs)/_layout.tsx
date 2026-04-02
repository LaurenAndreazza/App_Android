import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CustomTabIcon = ({ focused, iconName, label }: { focused: boolean, iconName: any, label: string }) => {
  return (
    <View style={[styles.tabContainer, focused && styles.tabContainerFocused]}>
      <Ionicons
        name={focused ? iconName.active : iconName.inactive}
        size={24}
        color={focused ? 'white' : '#9CA3AF'}
      />
      <Text style={[styles.tabLabel, focused && styles.tabLabelFocused]}>
        {label}
      </Text>
    </View>
  );
};

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: 'white',
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
          height: 100, // Make height large enough to accommodate the 72px tall badges
          borderTopWidth: 0,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.05,
          shadowRadius: 10,
          paddingTop: 10,
        },
      }}>

      <Tabs.Screen
        name="produtos"
        options={{
          title: 'Rolês',
          tabBarIcon: ({ focused }) => (
            <CustomTabIcon
              focused={focused}
              iconName={{ active: 'home', inactive: 'home-outline' }}
              label="Rolês"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: 'Reservas',
          tabBarIcon: ({ focused }) => (
            <CustomTabIcon
              focused={focused}
              iconName={{ active: 'receipt', inactive: 'receipt-outline' }}
              label="Reservas"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          title: 'Loja',
          tabBarIcon: ({ focused }) => (
            <CustomTabIcon
              focused={focused}
              iconName={{ active: 'bookmark', inactive: 'bookmark-outline' }}
              label="Loja"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="perfil"
        options={{
          title: 'Eu',
          tabBarIcon: ({ focused }) => (
            <CustomTabIcon
              focused={focused}
              iconName={{ active: 'person', inactive: 'person-outline' }}
              label="Eu"
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
  },
  tabContainerFocused: {
    backgroundColor: '#0A5C47',
    borderRadius: 24,
    height: 72,
    width: 76,
    marginTop: -8, // Traz a pílula verde ligeiramente para cima
  },
  tabLabel: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 4,
    fontWeight: '500',
  },
  tabLabelFocused: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  }
});
