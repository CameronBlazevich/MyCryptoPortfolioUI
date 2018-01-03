import React from "react";
import { StyleSheet, Text, View, Keyboard } from "react-native";
import Auth0 from "react-native-auth0";
import StatusBarBuffer from "./src/components/statusBarBuffer";
import NavBar from "./src/components/navBar";
import CryptoHoldingList from "./src/components/cryptoHoldingList";
import AddHoldingModal from "./src/components/addHoldingModal";
import HoldingDetailModal from "./src/components/holdingDetailModal";
import Footer from "./src/components/footer";
import { getPortfolioAsync } from "./src/services/portfolioDataService";
import {
  addHoldingAsync,
  updateHoldingAsync,
  removeHoldingAsync
} from "./src/services/holdingsDataService";

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
  constructor(props) {
    super(props);

    this.state = {
      portfolio: { holdings: [], totalValue: 0 },
      holdingSelected: {},
      addHoldingModalVisible: false,
      holdingDetailModalVisible: false,
      keyboardSpace: 0
    };

    //for get keyboard height
    Keyboard.addListener("keyboardDidShow", frames => {
      if (!frames.endCoordinates) return;
      this.setState({ keyboardSpace: frames.endCoordinates.height });
    });
    Keyboard.addListener("keyboardDidHide", frames => {
      this.setState({ keyboardSpace: 0 });
    });
  }
  async componentDidMount() {
    this.updatePortfolio();
  }

  async getPortfolio() {
    return getPortfolioAsync();
  }

  async addHolding(holdingData) {
    await addHoldingAsync(holdingData);
    this.updatePortfolio();
  }

  async updateHolding(holdingData) {
    await updateHoldingAsync(holdingData);
    this.updatePortfolio();
  }

  async removeHolding(tickerSymbol) {
    await removeHoldingAsync(tickerSymbol);
    this.updatePortfolio();
  }

  async updatePortfolio() {
    let portfolio = await this.getPortfolio();
    this.setState({ portfolio: portfolio });
  }

  handleHoldingListItemTouch = touched => {
    this.setState({
      holdingSelected: touched,
      holdingDetailModalVisible: true
    });
  };

  updateHoldingFromPortfolio = (holdingToUpdate, formData) => {
    this.updateHolding({
      tickerSymbol: holdingToUpdate.coinTickerSymbol,
      newAmount: formData["New Amount"]
    });
    this.handleModalCloseRequest();
  };

  removeHoldingFromPortfolio = holdingToRemove => {
    this.removeHolding(holdingToRemove);
    this.handleModalCloseRequest();
  };

  handleAddHoldingClick = () => {
    this.setState({ addHoldingModalVisible: true });
  };
  handleAddHoldingFormSubmit = formData => {
    if (formData) {
      this.addHolding(formData);
      this.handleModalCloseRequest();
    }
  };
  handleModalCloseRequest = () => {
    this.setState({
      addHoldingModalVisible: false,
      holdingDetailModalVisible: false
    });
  };

  render() {
    return (
      <View style={styles.appContainer}>
        <StatusBarBuffer />
        <NavBar />
        <View style={styles.container}>
          <AddHoldingModal
            keyboardSpace={this.state.keyboardSpace}
            handleModalCloseRequest={this.handleModalCloseRequest}
            visible={this.state.addHoldingModalVisible}
            handleAddHoldingFormSubmit={this.handleAddHoldingFormSubmit}
          />
          <HoldingDetailModal
            keyboardSpace={this.state.keyboardSpace}
            holdingSelected={this.state.holdingSelected}
            visible={this.state.holdingDetailModalVisible}
            handleModalCloseRequest={this.handleModalCloseRequest}
            updateHolding={this.updateHoldingFromPortfolio}
            removeHolding={this.removeHoldingFromPortfolio}
          />
          <CryptoHoldingList
            holdings={this.state.portfolio.holdings}
            handleHoldingListItemTouch={this.handleHoldingListItemTouch}
          />
        </View>
        <Footer
          onAddHoldingClick={this.handleAddHoldingClick}
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
