import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from './components/header';
import SensorCard from './components/sensorCard';
import History from './components/history';

// Define a theme object for consistent styling throughout the app
const theme = {
  colors: {
    primary: '#49225B', // Base color
    primaryLight: '#7A4B8C', // Light accent
    primaryDark: '#311841', // Dark accent
    accent: '#BB6BD9', // Vibrant purple for highlights
    background: '#E7D8EF', // Light background color
    textDark: '#1E1E1E', // Text color for light backgrounds
    textLight: '#E7D8EF', // Text color for dark backgrounds
  },
};

export default function App() {
  // State to store the current temperature value
  const [currentTemperature, setCurrentTemperature] = useState(25); // Example value
  
  // State to store the current humidity value
  const [currentHumidity, setCurrentHumidity] = useState(60); // Example value
  
  // State to store the history of temperature and humidity readings
  const [history, setHistory] = useState([]);

  // Function to update the data and add it to the history
  const handleUpdateData = () => {
    // Fetch and set new sensor data (example: keep the same for now)
    const newTemperature = currentTemperature;
    const newHumidity = currentHumidity;

    setCurrentTemperature(newTemperature);
    setCurrentHumidity(newHumidity);

    // Add the new data to the history state
    setHistory(prevHistory => [
      ...prevHistory, 
      { temperature: newTemperature, humidity: newHumidity }
    ]);

    console.log("Data has been updated and added to the history!");
  };

  // Function to reset the history
  const handleResetHistory = () => {
    setHistory([]); // Clear the history
    console.log("History has been reset!");
  };

  return (
    <View style={styles.container}>
      {/* Header component */}
      <Header />
      
      {/* Main content */}
      <View style={styles.content}>
        {/* Title of the app */}
        <Text style={styles.title}>Temperature & Humidity</Text>
        
        {/* Subtitle explaining the app */}
        <Text style={styles.subtitle}>
          This app displays sensor data that is regularly updated.
        </Text>

        {/* SensorCard component to display current sensor data */}
        <SensorCard temp={currentTemperature} humidity={currentHumidity} />

        {/* Button to update sensor data */}
        <TouchableOpacity style={styles.button} onPress={handleUpdateData}>
          <Text style={styles.buttonText}>Update Data</Text>
        </TouchableOpacity>

        {/* Button to reset the history */}
        <TouchableOpacity style={styles.button} onPress={handleResetHistory}>
          <Text style={styles.buttonText}>Reset History</Text>
        </TouchableOpacity>

        {/* History component to display the list of previous readings */}
        <History history={history} />
      </View>
    </View>
  );
}

// Define styles for the app using StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1, // Fill the entire screen
    backgroundColor: theme.colors.background, // Set background color
  },
  content: {
    flex: 1, // Fill remaining space
    justifyContent: 'flex-start', // Align items to the top
    alignItems: 'center', // Center items horizontally
    padding: 16, // Add padding around content
    marginTop: 30, // Add margin from the top
  },
  title: {
    color: theme.colors.primary, // Set text color to the primary color
    fontSize: 24, // Large font size
    fontWeight: 'bold', // Bold text
    marginBottom: 8, // Spacing below the title
  },
  subtitle: {
    color: theme.colors.textDark, // Text color for readability
    fontSize: 16, // Medium font size
    marginBottom: 40, // Spacing below the subtitle
    textAlign: "center", // Center-align the text
  },
  button: {
    backgroundColor: theme.colors.accent, // Accent color for the button background
    paddingVertical: 12, // Vertical padding for the button
    paddingHorizontal: 40, // Horizontal padding for the button
    borderRadius: 8, // Rounded corners
    marginTop: 20, // Spacing between buttons
  },
  buttonText: {
    color: theme.colors.textLight, // Light text color for contrast
    fontSize: 16, // Medium font size
    fontWeight: 'bold', // Bold text for emphasis
  },
});
