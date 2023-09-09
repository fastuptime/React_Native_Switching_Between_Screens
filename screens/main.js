import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert, Button } from "react-native";

const Screen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, textAlign: "center" }}>Selam, Bu sayfa ekran 1</Text>
      <Button
        title="Ekran 2'ye Git"
        onPress={() => {
          navigation.navigate("screen2");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
});

export default Screen;
