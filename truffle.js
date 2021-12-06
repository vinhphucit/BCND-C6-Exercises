var HDWalletProvider = require("truffle-hdwallet-provider");

// Be sure to match this mnemonic with that in Ganache! 
var mnemonic = "fade attack defense sound nothing riot rug aim cigar embody until check";

module.exports = {
  networks: {
    development: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "http://127.0.0.1:9545/", 0, 10);
      },
      network_id: '*',
      gas: 6700000
    }
  },
  compilers: {
    solc: {
      version: "^0.4.25"
    }
  }
};