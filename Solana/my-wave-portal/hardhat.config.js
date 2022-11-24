require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/QKJcJ6scgaz5oJtl_v-VLd2bcE38PA7b",
      accounts: ["04daa9efe2a1c157d623ba95ca43af7e15687f1f1f30736032be805bcae595aa"]
    },
  },
};
