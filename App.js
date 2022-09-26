import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeRouter, Redirect, Route } from 'react-router-native';
import { Login } from './components/Logins/Login';
import { SignUp } from './components/Logins/SignUp';
import { Dashboard } from './components/Wall/Dashboard';
import { UserContext } from './components/Context';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { Profile } from './components/Profile/Profile';
import { OpenPost } from './components/Posts/OpenPost';
import { EditProfile } from './components/Profile/EditProfile';
import { AddPost } from './components/Posts/AddPost';
import { FeelingsActivities } from './components/Posts/FeelingsActivities';
import { FriendRequests } from './components/Friends/FriendRequests';
import { FriendsList } from './components/Friends/FriendsList';

var firebaseConfig = {
  apiKey: "AIzaSyCNfHZ6P6nITx6bllhPfmot2hJBf9QhxU4",
  authDomain: "recipes-app-f8580.firebaseapp.com",
  projectId: "recipes-app-f8580",
  storageBucket: "recipes-app-f8580.appspot.com",
  messagingSenderId: "605996003520",
  appId: "1:605996003520:web:9654e1e01427aa6a34bd25",
  measurementId: "G-1DNLYTQ1XP"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <UserContext.Provider value={user}>
      <NativeRouter>
        <View style={styles.container}>
          {user ? (
            <Redirect from='/' to='/dashboard' />
          ) : (
            <Route exact path='/' component={Login} />
          )}
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/profile/:id' component={Profile} />
          <Route exact path='/editProfile/:id' component={EditProfile} />
          <Route exact path='/addPost' component={AddPost} />

          <Route exact path='/post/:id/' component={OpenPost} />
          <Route
            exact
            path='/feelingsActivities'
            component={FeelingsActivities}
          />
          <Route exact path='/friendRequests/:id/' component={FriendRequests} />
          <Route exact path='/friends/:id/' component={FriendsList} />
        </View>
      </NativeRouter>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECE6E0',
  },
});
