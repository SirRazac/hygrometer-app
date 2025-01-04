import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerBox}>
      <Text style={styles.headerText}>Willkommen in meiner App!</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerBox: {
    marginTop: 60,
    marginLeft: 10,
    marginRight: 10,
    paddingVertical: 20,
    backgroundColor: "#49225B",
    borderBottomWidth: 2,
    borderBottomColor: '#7A4B8C',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 8,
  },
  headerText: {
    textAlign: "center",
    color: "#E7D8EF",
    fontSize: 24,
    fontWeight: "bold",
  },
});
