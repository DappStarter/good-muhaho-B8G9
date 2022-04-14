require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess kiwi suit food struggle reflect mad assume coral light army gate'; 
let testAccounts = [
"0x180da6d1e00203d61663976b97bf5b8cd3942e6945cff9efa01625af300ee2a0",
"0x27bf897fe57dce28d57a54e5ca4f547573084315ec5e7a72fc4b5bde22e9dba5",
"0x898778941ce250746817c399aeaefbbe6208db16d5a387bee37c535e40361068",
"0x8d5419b5ff6f899b29980049382c8fc4924831d3118ee30f43eba70cf7e5b6a3",
"0xeb3f7413c10a9c2e83f4b293e2453b6c4a6c48e1bb43e74fb5144e84de410d96",
"0x8d9b6719b18f384ef4150074f4cd28b1993f3fb4f7cbcb5a73823d2c2532f9a0",
"0xd478a60378bf7d0e6bbb354b8de9426859c365415c6a49725fd25ec3d631eb2a",
"0x56e68d175a28cf179bb1369fd5d437dd5880185d7b1e5b23be06ec1dc2f55186",
"0xcc99a68709a55f77f02af6335eb413b11fb3401c78e0a45b0bfe01428a669349",
"0xc744707fccb7382ea5bcac935aed895216d3bab0f03c4d52276617f540afd692"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

