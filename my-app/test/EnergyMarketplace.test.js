/*var EnergyMarketplace = artifacts.require('../contracts/EnergyMarketplace.sol');
const EnergyMarketplace = artifacts.require('EnergyMarketplace');
//var EnergyMarketplace = artifacts.require('./EnergyMarketplace');
var assert = require('chai').assert;
contract('EnergyMarketplace', (accounts) => {
  let energyMarketplace;

  before(async () => {
    energyMarketplace = await EnergyMarketplace.deployed();
  });

  describe('deployment', () => { // Remove 'async' keyword from this line
    it('deploys successfully', async () => {
      const address = energyMarketplace.address;
      assert.notEqual(address, '0x0');
      assert.notEqual(address, '');
      assert.notEqual(address, null);
      assert.notEqual(address, undefined);
    });
  });
});
*/
//const artifacts = require('chai').artifacts;
const { artifacts } = require("truffle");
const { before } = require("truffle");
const { contract } = require("truffle");
const EnergyMarketplace = artifacts.require('../contracts/EnergyMarketplace.sol');
const assert = require('chai').assert;
contract('EnergyMarketplace', (accounts) => {
  let emp;

  before(async () => {
    emp = await EnergyMarketplace.deployed();
  });

  describe('deployment', () => {
    it('deploys successfully', async () => {
      const address = emp.address;
      assert.notEqual(address, '0x0');
      assert.notEqual(address, '');
      assert.notEqual(address, null);
      assert.notEqual(address, undefined);
    });
  });
});
