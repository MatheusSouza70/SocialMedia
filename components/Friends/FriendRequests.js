import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useHistory } from "react-router-native";
import { PageHeaders } from "../AppComponents/PageHeaders";
import { useFirestoreCollection } from "../hooks";
import firebase from "firebase/app";
import { Friend } from "./Friend";
import { Request } from "./Request";

function FriendRequests(props) {
  const history = useHistory();
  const db = firebase.firestore();
  const user = firebase.auth().currentUser;
  const userId = user.uid;

  const fetchFriends = useFirestoreCollection(
    db.collection("accounts").doc(userId).collection("friends"),
    []
  );

  const friendRequestsPending = fetchFriends.map((friend) => {
    if (friend.data.requestAccepted === false) {
      return friend.id;
    }
  });

  const friendRequestAccepted = fetchFriends.map((friend) => {
    if (friend.data.requestAccepted === true || friend.data.isFriend === true) {
      return friend;
    }
  });

  const backToDashboard = () => {
    history.push(`/dashboard`);
  };

  return (
    <View style={styles.requestContainer}>
      <PageHeaders
        placeholder="Voltar"
        onPressNavigation={backToDashboard}
      />
      <View>
        <Text style={styles.requestTitle}>Pedidos de Amizade</Text>
        {friendRequestsPending.map((friendId) => {
          if (friendId !== undefined) {
            return (
              <Request key={friendId} friendId={friendId} userId={userId} />
            );
          }
        })}
        {friendRequestAccepted.map((friend) => {
          if (friend !== undefined) {
            return (
              <Friend
                key={friend.id}
                friendId={friend.id}
                friendsSince={friend.data.created}
              />
            );
          }
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  requestContainer: {
    backgroundColor: "white",
  },
  requestTitle: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 25,
    fontWeight: "bold",
  },
});

export { FriendRequests };
