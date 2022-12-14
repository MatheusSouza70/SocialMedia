import React from "react";
import { View, Text, StyleSheet } from "react-native";
import firebase from "firebase/app";
import { useFirestoreDocument } from "../hooks";

function TaggedFriend({ friendId }) {
  const db = firebase.firestore();

  const fetchFriendInfo = useFirestoreDocument(
    db.collection("accounts").doc(friendId),
    []
  );

  if (!fetchFriendInfo) {
    return null;
  }

  if (friendId === undefined) {
    return null;
  }

  return (
    <View style={styles.friendSection}>
      <Text style={styles.isWith}>com</Text>
      <Text style={styles.friend}> {fetchFriendInfo.data.userName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  friendSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  isWith: {
    fontSize: 18,
  },
  friend: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export { TaggedFriend };
