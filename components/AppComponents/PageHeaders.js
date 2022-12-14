import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useHistory } from "react-router-native";
import { Feather } from "@expo/vector-icons";

function PageHeaders({ placeholder, onPressNavigation }) {
  const history = useHistory();

  return (
    <TouchableOpacity onPress={onPressNavigation}>
      <View style={styles.postHeader}>
        <Feather
          name="chevron-left"
          size={35}
          color="white"
          style={{ marginTop: 10 }}
        />
        <Text style={styles.requestHeaderText}>{placeholder}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  postHeader: {
    backgroundColor: "#6CA9D6",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  requestHeaderText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    marginTop: 10,
  },
});

export { PageHeaders };
