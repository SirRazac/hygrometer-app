import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './components/header';

// Farbpalette als Theme
const theme = {
  colors: {
    primary: '#49225B', // Basisfarbe
    primaryLight: '#7A4B8C', // Heller Akzent
    primaryDark: '#311841', // Dunkler Akzent
    accent: '#BB6BD9', // Kräftiges Lila für Highlights
    background: '#E7D8EF', // Heller Hintergrund
    textDark: '#1E1E1E', // Textfarbe für hellen Hintergrund
    textLight: '#EDEDED', // Textfarbe für dunklen Hintergrund
  },
};

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>Temperatur & Luftfeuchtigkeit</Text>
        <Text style={styles.subtitle}>Diese App zeigt Sensordaten an, die regelmäßig akualisiert werden.</Text>
        <View style={styles.card}>
          <Text style={styles.cardText}>Temperatur: 25°C</Text>
          <Text style={styles.cardText}>Luftfeuchtigkeit: 60%</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center', // Zentriert den Inhalt horizontal
    padding: 16,
    marginTop: 30,
  },
  title: {
    color: theme.colors.primary,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    color: theme.colors.textDark,
    fontSize: 16,
    marginBottom: 100,
    textAlign: "center",
  },
  card: {
    backgroundColor: theme.colors.primary,
    padding: 16,
    borderRadius: 8,
    shadowColor: theme.colors.primaryDark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  cardText: {
    color: theme.colors.textLight,
    fontSize: 16,
    marginBottom: 4,
  },
});
