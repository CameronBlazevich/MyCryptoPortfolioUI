import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Auth0 from "react-native-auth0";
import StatusBarBuffer from "./src/components/statusBarBuffer";
import NavBar from "./src/components/navBar";
import CryptoHoldingList from "./src/components/cryptoHoldingList";
import Footer from "./src/components/footer";
const auth0 = new Auth0({
  domain: "handrangememorizer.auth0.com",
  clientId: "LM7qGI8MCf4GhQMyzfO6Z0tufZ5FCTb0"
});

// auth0.webAuth
//   .authorize({
//     scope: "openid profile email",
//     audience: "https://handrangememorizer.auth0.com/userinfo"
//   })
//   .then(
//     credentials => console.log(credentials)
//     // Successfully authenticated
//     // Store the accessToken
//   )
//   .catch(error => console.log(error));

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.appContainer}>
        <StatusBarBuffer />
        <NavBar />
        <View style={styles.container}>
          <CryptoHoldingList />
        </View>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff"
  },
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff"
  }
});
