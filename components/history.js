import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const History = ({ history }) => {
  return (
    <View style={styles.historyContainer}>
      <Text style={styles.historyTitle}>Historie</Text>
      {/* ScrollView, um die Historie scrollbar zu machen */}
      <ScrollView contentContainerStyle={styles.historyContent}>
        {history.map((entry, index) => (
          <View key={index} style={styles.historyItem}>
            <Text style={styles.historyText}>Temperatur: {entry.temperature}°C</Text>
            <Text style={styles.historyText}>Luftfeuchtigkeit: {entry.humidity}%</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  historyContainer: {
    backgroundColor: '#7A4B8C', // Heller Akzent
    padding: 16,
    borderRadius: 8,
    width: '90%',
    marginTop: 20,
    flex: 1, // Wichtig, um ScrollView im Container zu ermöglichen
  },
  historyTitle: {
    color: '#E7D8EF', // Textfarbe für dunklen Hintergrund
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  historyContent: {
    paddingBottom: 20, // Um genug Platz für das Scrollen zu schaffen
  },
  historyItem: {
    backgroundColor: '#49225B', // Basisfarbe
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  historyText: {
    color: '#E7D8EF', // Textfarbe für dunklen Hintergrund
    fontSize: 16,
  },
});

export default History;
