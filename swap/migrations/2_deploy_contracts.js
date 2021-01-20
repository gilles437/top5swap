var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var SetTokenCreator = artifacts.require("./SetTokenCreator.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(SetTokenCreator);
};
