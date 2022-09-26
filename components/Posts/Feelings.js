import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Feelings({ selectedFeeling }) {
  return (
    <View>
      {selectedFeeling === "está se sentindo feliz &#128578;" ? (
        <Text style={styles.emojis}> está se sentindo feliz &#128578;</Text>
      ) : null}
      {selectedFeeling === "está se sentindo amado &#128525;" ? (
        <Text style={styles.emojis}> está se sentindo amado &#128525;</Text>
      ) : null}

      {selectedFeeling === "está se sentindo triste &#128532;" ? (
        <Text style={styles.emojis}> está se sentindo triste &#128532;</Text>
      ) : null}

      {selectedFeeling === "está se sentindo animado &#129321;" ? (
        <Text style={styles.emojis}> está se sentindo animado &#129321;</Text>
      ) : null}

      {selectedFeeling === "está se sentindo maluco &#129322;" ? (
        <Text style={styles.emojis}> está se sentindo maluco &#129322;</Text>
      ) : null}

      {selectedFeeling === "is feeling thoughtful &#129488;" ? (
        <Text style={styles.emojis}> está se sentindo pensativo &#129488;</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({ emojis: { fontSize: 18 } });

export { Feelings };
