import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Auth0 from "react-native-auth0";
import StatusBarBuffer from "./src/components/statusBarBuffer";
import NavBar from "./src/components/navBar";
import CryptoHoldingList from "./src/components/cryptoHoldingList";
import AddHoldingModal from "./src/components/addHoldingModal";
import HoldingDetailModal from "./src/components/holdingDetailModal";
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
  constructor(props) {
    super(props);

    this.state = {
      portfolio: { holdings: [], totalValue: 0 },
      holdingSelected: {},
      addHoldingModalVisible: false,
      holdingDetailModalVisible: false
    };
  }
  async componentDidMount() {
    this.updatePortfolio();
  }

  async getPortfolio() {
    console.log("Getting Portfolio");
    try {
      let response = await fetch(
        "https://www.brotoprocrypto.com/api/portfolios"
      );
      let responseJson = await response.json();
      //console.log(responseJson);
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  }

  async addHolding(holdingData) {
    try {
      let response = await fetch(
        "https://www.brotoprocrypto.com/api/holdings",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            coinTickerSymbol: holdingData["Ticker symbol"].toUpperCase(),
            amountOwned: holdingData["Amount owned"]
          })
        }
      );
    } catch (error) {
      console.error(error);
    }

    this.updatePortfolio();
    //let responseJson = await response.json();
  }

  async updateHolding(holdingData) {
    try {
      console.log("updating coin with data: " + JSON.stringify(holdingData));
      let response = await fetch(
        "https://www.brotoprocrypto.com/api/holdings",
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            coinTickerSymbol: holdingData.tickerSymbol.toUpperCase(),
            amountOwned: holdingData.newAmount
          })
        }
      );
    } catch (error) {
      console.error(error);
    }
    this.updatePortfolio();
  }

  async removeHolding(tickerSymbol) {
    console.log("deleting item with symbol: " + tickerSymbol);
    try {
      let response = await fetch(
        "https://www.brotoprocrypto.com/api/holdings",
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            coinTickerSymbol: tickerSymbol.toUpperCase()
          })
        }
      );
    } catch (error) {
      console.error(error);
    }
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
    // this.updatePortfolio();
  };

  removeHoldingFromPortfolio = holdingToRemove => {
    this.removeHolding(holdingToRemove);
    this.handleModalCloseRequest();
    // this.updatePortfolio();
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
            handleModalCloseRequest={this.handleModalCloseRequest}
            visible={this.state.addHoldingModalVisible}
            handleAddHoldingFormSubmit={this.handleAddHoldingFormSubmit}
          />
          <HoldingDetailModal
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
