import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Auth0 from "react-native-auth0";
import StatusBarBuffer from "./src/components/statusBarBuffer";
import NavBar from "./src/components/navBar";
import CryptoHoldingList from "./src/components/cryptoHoldingList";
import AddHoldingModal from "./src/components/addHoldingModal";
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
async function getPortfolio() {
  console.log("Getting Portfolio");
  try {
    let response = await fetch("https://www.brotoprocrypto.com/api/portfolios");
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolio: { holdings: [], totalValue: 0 },
      modalVisible: false
    };
  }
  async componentDidMount() {
    let portfolio = await getPortfolio();
    console.log(portfolio.holdings);
    this.setState({ portfolio: portfolio });
  }
  handleAddHoldingClick = modalVisible => {
    this.setState({ modalVisible: modalVisible });
  };

  render() {
    return (
      <View style={styles.appContainer}>
        <StatusBarBuffer />
        <NavBar />
        <View style={styles.container}>
          <AddHoldingModal visible={this.state.modalVisible} />
          <CryptoHoldingList holdings={this.state.portfolio.holdings} />
        </View>
        <Footer
          onAddHoldingClick={this.handleAddHoldingClick}
          isModalVisible={this.state.modalVisible}
          totalValue={this.state.portfolio.totalValue}
        />
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
