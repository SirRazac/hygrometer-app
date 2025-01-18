import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const History = ({ history }) => {
  return (
    <View style={styles.historyContainer}>
      <Text style={styles.historyTitle}>Historie</Text>
      {/* ScrollView to make the history scrollable */}
      <ScrollView contentContainerStyle={styles.historyContent}>
        {history.map((entry, index) => (
          <View key={index} style={styles.historyItem}>
            <Text style={styles.historyText}>Temperatur: {entry.temperature}°C</Text>
            <Text style={styles.historyText}>Luftfeuchtigkeit: {entry.humidity}%</Text>
            {/* Display the timestamp (date and time) */}
            <Text style={styles.historyText}>Datum: {entry.timestamp}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  historyContainer: {
    backgroundColor: '#7A4B8C', // Light accent
    padding: 16,
    borderRadius: 8,
    width: '90%',
    marginTop: 20,
    flex: 1, // Important to enable ScrollView within the container
  },
  historyTitle: {
    color: '#E7D8EF', // Text color for dark background
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  historyContent: {
    paddingBottom: 20, // To ensure enough space for scrolling
  },
  historyItem: {
    backgroundColor: '#49225B', // Base color
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  historyText: {
    color: '#E7D8EF', // Text color for dark background
    fontSize: 16,
  },
});

export default History;
