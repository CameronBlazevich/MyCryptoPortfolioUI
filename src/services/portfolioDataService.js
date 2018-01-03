export async function getPortfolioAsync() {
  console.log("Getting Portfolio");
  try {
    let response = await fetch("https://www.brotoprocrypto.com/api/portfolios");
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}
