import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Auth0 from "react-native-auth0";
const auth0 = new Auth0({
  domain: "handrangememorizer.auth0.com",
  clientId: "LM7qGI8MCf4GhQMyzfO6Z0tufZ5FCTb0"
});

auth0.webAuth
  .authorize({
    scope: "openid profile email",
    audience: "https://handrangememorizer.auth0.com/userinfo"
  })
  .then(
    credentials => console.log(credentials)
    // Successfully authenticated
    // Store the accessToken
  )
  .catch(error => console.log(error));

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
