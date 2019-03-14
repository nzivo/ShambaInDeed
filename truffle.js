module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: '127.0.0.1',// Use own configurations
      port: 7545,// Use own configurations
      network_id: '*' // Match any network id
    }
  }
};
