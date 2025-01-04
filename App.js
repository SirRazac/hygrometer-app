import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from './components/header';
import SensorCard from './components/sensorCard';
import History from './components/history';

const theme = {
  colors: {
    primary: '#49225B', // Basisfarbe
    primaryLight: '#7A4B8C', // Heller Akzent
    primaryDark: '#311841', // Dunkler Akzent
    accent: '#BB6BD9', // Kräftiges Lila für Highlights
    background: '#E7D8EF', // Heller Hintergrund
    textDark: '#1E1E1E', // Textfarbe für hellen Hintergrund
    textLight: '#E7D8EF', // Textfarbe für dunklen Hintergrund
  },
};

export default function App() {
  const [currentTemperature, setCurrentTemperature] = useState(25); // Beispielwert
  const [currentHumidity, setCurrentHumidity] = useState(60); // Beispielwert
  const [history, setHistory] = useState([]);

  // Daten aktualisieren und zur Historie hinzufügen
  const handleUpdateData = () => {
    // Hier könntest du zum Beispiel neue Daten abrufen und setzen
    const newTemperature = currentTemperature;
    const newHumidity = currentHumidity;

    setCurrentTemperature(newTemperature);
    setCurrentHumidity(newHumidity);

    // Füge die neuen Werte zur Historie hinzu
    setHistory(prevHistory => [
      ...prevHistory, 
      { temperature: newTemperature, humidity: newHumidity }
    ]);

    console.log("Daten wurden aktualisiert und zur Historie hinzugefügt!");
  };

  // Historie zurücksetzen
  const handleResetHistory = () => {
    setHistory([]); // Historie zurücksetzen
    console.log("Historie zurückgesetzt!");
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>Temperatur & Luftfeuchtigkeit</Text>
        <Text style={styles.subtitle}>
          Diese App zeigt Sensordaten an, die regelmäßig aktualisiert werden.
        </Text>

        {/* SensorCard Komponente für die Anzeige von Sensordaten */}
        <SensorCard temp={currentTemperature} humidity={currentHumidity} />

        {/* Button zum Aktualisieren der Daten */}
        <TouchableOpacity style={styles.button} onPress={handleUpdateData}>
          <Text style={styles.buttonText}>Daten aktualisieren</Text>
        </TouchableOpacity>

        {/* Button zum Zurücksetzen der Historie */}
        <TouchableOpacity style={styles.button} onPress={handleResetHistory}>
          <Text style={styles.buttonText}>Historie zurücksetzen</Text>
        </TouchableOpacity>

        {/* Historie-Komponente */}
        <History history={history} />
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
    alignItems: 'center',
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
    marginBottom: 40,
    textAlign: "center",
  },
  button: {
    backgroundColor: theme.colors.accent,
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: theme.colors.textLight,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
