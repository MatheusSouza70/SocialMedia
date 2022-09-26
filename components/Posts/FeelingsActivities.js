import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

function FeelingsActivities({ setModalVisible, modalVisible, addAFeeling }) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <Feather name="x" size={25} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Escolha um sentimento</Text>
      </View>
      <View style={styles.feelingsTable}>
        <View style={styles.leftColumns}>
          <TouchableOpacity>
            <Text
              style={styles.emojis}
              onPress={() => {
                addAFeeling("está se sentindo feliz &#128578;");
                setModalVisible(!modalVisible);
              }}
            >
              &#128578; feliz
            </Text>
          </TouchableOpacity>
          <Text
            style={styles.emojis}
            onPress={() => {
              addAFeeling("está se sentindo amado &#128525;");
              setModalVisible(!modalVisible);
            }}
          >
            &#128525; amado
          </Text>
          <Text
            style={styles.emojis}
            onPress={() => {
              addAFeeling("está se sentindo triste &#128532;");
              setModalVisible(!modalVisible);
            }}
          >
            &#128532; triste
          </Text>
        </View>
        <View style={styles.rightColumns}>
          <Text
            style={styles.emojis}
            onPress={() => {
              addAFeeling("está se sentindo animado &#129321;");
              setModalVisible(!modalVisible);
            }}
          >
            &#129321; animado
          </Text>
          <Text
            style={styles.emojis}
            onPress={() => {
              addAFeeling("está se sentindo maluco &#129322;");
              setModalVisible(!modalVisible);
            }}
          >
            &#129322; maluco
          </Text>
          <Text
            style={styles.emojis}
            onPress={() => {
              addAFeeling("está se sentindo pensativo &#129488;");
              setModalVisible(!modalVisible);
            }}
          >
            &#129488; pensativo
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    backgroundColor: "white",
  },

  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginBottom: 10,
    marginRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ECE6E0",
    padding: 15,
  },
  headerTitle: { fontWeight: "bold", fontSize: 18 },
  postButton: { fontWeight: "bold", fontSize: 18, color: "#A8A39F" },
  feelingsTable: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  emojis: {
    padding: 20,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#ECE6E0",
  },
});

export { FeelingsActivities };
