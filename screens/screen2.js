import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert, Button } from "react-native";

const Screen =({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, textAlign: "center" }}>Selam, Bu sayfa ekran 2</Text>
      <Button
        title="Ana Sayfaya Git"
        onPress={() => {
          navigation.navigate("main");
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
