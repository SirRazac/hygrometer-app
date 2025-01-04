import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SensorCard = ({ temp, humidity }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Aktuelle Werte:</Text>
      <Text style={styles.cardText}>Temperatur: {temp}°C</Text>
      <Text style={styles.cardText}>Luftfeuchtigkeit: {humidity}%</Text>
    </View>
  );
};

export default SensorCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#49225B',
    padding: 20,
    borderRadius: 8,
    marginVertical: 20,
    shadowColor: '#311841',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
  },
  cardTitle: {
    color: '#E7D8EF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardText: {
    color: '#E7D8EF',
    fontSize: 16,
    marginBottom: 4,
  },
});
