import { StyleSheet, View, Text } from "react-native";

const Header = () => {
  return (
    <View style={styles.headerBox}>
      <Text style={styles.headerText}>Luftfeuchtigkeit</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerBox: {
    marginTop: 60,
    paddingVertical: 30,
    backgroundColor: "#49225B", 
  },
  headerText: {
    textAlign: "center",
    color: "#F5EBFA",
    fontSize: 20,
    fontWeight: "bold",
  }
});
