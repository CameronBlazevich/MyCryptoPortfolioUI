export async function addHoldingAsync(holdingData) {
  try {
    let response = await fetch("https://www.brotoprocrypto.com/api/holdings", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        coinTickerSymbol: holdingData["Ticker symbol"].toUpperCase(),
        amountOwned: holdingData["Amount owned"]
      })
    });
  } catch (error) {
    console.error(error);
  }
}

export async function updateHoldingAsync(holdingData) {
  try {
    console.log("updating coin with data: " + JSON.stringify(holdingData));
    let response = await fetch("https://www.brotoprocrypto.com/api/holdings", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        coinTickerSymbol: holdingData.tickerSymbol.toUpperCase(),
        amountOwned: holdingData.newAmount
      })
    });
  } catch (error) {
    console.error(error);
  }
}

export async function removeHoldingAsync(tickerSymbol) {
  console.log("deleting item with symbol: " + tickerSymbol);
  try {
    let response = await fetch("https://www.brotoprocrypto.com/api/holdings", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        coinTickerSymbol: tickerSymbol.toUpperCase()
      })
    });
  } catch (error) {
    console.error(error);
  }
}
