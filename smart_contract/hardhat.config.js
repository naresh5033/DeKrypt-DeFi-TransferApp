require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/8ezRuW-8fxkNnb_AwD7qMc0rAHd9YE0T",
      accounts: [
        "a245a87da827da5c3dd63ca47dae6ea9bd3c74fd40beb39dd23acbcf1e25e630", //priv key
      ],
    },
  },
};
