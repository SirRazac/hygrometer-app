import { StyleSheet, View, Text } from "react-native";

const Header = () => {
  return (
    <View style={styles.headerBox}>
      <Text style={styles.headerText}>Willkommen zu meiner App!</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerBox: {
    marginTop: 40, // Abstand zum oberen Bildschirmrand
    marginLeft: 10,
    marginRight: 10,
    paddingVertical: 20, // Vertikale Polsterung
    backgroundColor: "#49225B", // Basisfarbe
    borderBottomWidth: 2, // Border hinzufügen
    borderBottomColor: '#7A4B8C', // Akzentfarbe für die Border
    shadowColor: '#000000', // Schatten für Tiefe
    shadowOffset: { width: 0, height: 2 }, // Position des Schattens
    shadowOpacity: 0.3, // Transparenz des Schattens
    shadowRadius: 4, // Weichzeichnung des Schattens
    elevation: 5, // Höhenwirkung für Android
    borderRadius: 8,
  },
  headerText: {
    textAlign: "center", // Text horizontal zentrieren
    color: "#EDEDED", // Helle Schriftfarbe
    fontSize: 24, // Größere Schrift
    fontWeight: "bold", // Fetter Text
  },
});
