import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import firebase from "firebase/app";
import { useFirestoreDocument } from "../hooks";
import { useHistory } from "react-router-native";
import { Image } from "react-native-expo-image-cache";

function EditProfile(props) {
  const history = useHistory();
  const user = firebase.auth().currentUser;
  const userId = user.uid;
  const db = firebase.firestore();
  const [updateUsername, setUpdateUsername] = useState("");
  const [updateEmail, setUpdateEmail] = useState("");
  const [updateBirthday, setUpdateBirthday] = useState("");
  const [updateLocation, setUpdateLocation] = useState("");

  const handleUsernameUpdate = (inputText) => {
    setUpdateUsername(inputText);
  };

  const handleEmailUpdate = (inputText) => {
    setUpdateEmail(inputText);
  };

  const handleBirthdayUpdate = (inputText) => {
    setUpdateBirthday(inputText);
  };

  const handleLocationUpdate = (inputText) => {
    setUpdateLocation(inputText);
  };

  const getCurrentLoggedUser = useFirestoreDocument(
    firebase.firestore().collection("accounts").doc(userId),
    [userId]
  );

  if (!getCurrentLoggedUser) {
    return null;
  }
  const backToProfile = () => {
    history.push(`/profile/${userId}`);
  };

  const handleSaveChanges = () => {
    db.collection("accounts").doc(userId).update({
      birthday: updateBirthday,
      location: updateLocation,
      userName: updateUsername,
      email: updateEmail,
    });
    history.push(`/profile/${userId}`);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => backToProfile(userId)}>
          <Feather name="chevron-left" size={34} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Editar Perfil</Text>
        <TouchableOpacity onPress={handleSaveChanges}>
          <Text style={styles.postButton}>Salvar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.profileContainer}>
        <View style={styles.profileSection}>
          <Text style={styles.userPlaceHolder}>Foto de Perfil:</Text>
          <Image
            uri={getCurrentLoggedUser.data.profilePicture}
            style={styles.profilePicture}
          />
        </View>
        <View style={styles.profileSection}>
          <Text style={styles.userPlaceHolder}>Foto de Capa:</Text>
          <Image
            uri={getCurrentLoggedUser.data.profilePicture}
            style={styles.profilePicture}
          />
        </View>
        <View style={styles.profileSection}>
          <Text style={styles.userPlaceHolder}>Usuário: </Text>
          <TextInput
            style={styles.userData}
            textContentType="name"
            name="username"
            placeholder="Seu Nome"
            placeholderTextColor="#A8A39F"
            onChangeText={handleUsernameUpdate}
            inputText={updateUsername}
          />
        </View>

        <View style={styles.profileSection}>
          <Text style={styles.userPlaceHolder}>Email: </Text>
          <TextInput
            style={styles.userData}
            textContentType="emailAddress"
            name="email"
            placeholder="Seu Email"
            placeholderTextColor="#A8A39F"
            onChangeText={handleEmailUpdate}
            inputText={updateEmail}
          />
        </View>

        <View style={styles.profileSection}>
          <Text style={styles.userPlaceHolder}>Localização: </Text>
          <TextInput
            style={styles.userData}
            name="location"
            placeholder="Sua Localização"
            placeholderTextColor="#A8A39F"
            onChangeText={handleLocationUpdate}
            inputText={updateLocation}
          />
        </View>
        <View style={styles.profileSection}>
          <Text style={styles.userPlaceHolder}>Aniversário: </Text>
          <TextInput
            style={styles.userData}
            textContentType="emailAddress"
            name="birthday"
            placeholder="Seu Aniversário"
            placeholderTextColor="#A8A39F"
            onChangeText={handleBirthdayUpdate}
            inputText={updateBirthday}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { width: "100%" },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 10,
    marginBottom: 10,
    marginRight: 10,
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ECE6E0",
    padding: 15,
  },
  headerTitle: { fontWeight: "bold", fontSize: 25 },

  postButton: { fontWeight: "bold", fontSize: 25, color: "#A8A39F" },
  profilePicture: { width: 100 },
  userName: { fontSize: 18, fontWeight: "bold" },
  profileContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: 10,
  },
  profileSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  userPlaceHolder: { fontSize: 20, fontWeight: "bold" },
  userData: { marginLeft: 10, fontSize: 18 },
});

export { EditProfile };
