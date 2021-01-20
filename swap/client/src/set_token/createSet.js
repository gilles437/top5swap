import React, { Component } from "react";
import App from "./App";
import getWeb3 from "./getWeb3";


class CreateSet extends Component {
	state = { storageValue: 0, web3: null, accounts: null, contract: null };

componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

        // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SetTokenCreate.networks[networkId];
      const instance = new web3.eth.Contract(
        SetTokenCreate.abi,
        deployedNetwork && deployedNetwork.address,
      );
     
      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };
setTokenCreate = async ()  => {
	
	const accounts = await web3.eth.getAccounts();
    const starFlashLoan = new web3.eth.Contract(abi, "0xcaa414f8914f2a3c0e5ba3894ab0b742e105c045");
    
    const fromToken =this.state.fromIndex;
    const forToken =this.state.forIndex;
    const tx = await SetTokenCreate.methods.create(["0x...."] ).send({from:accounts[0]});
     
    
}
render(){
    	return (
    		<div>Success</div>
    		)

    	}
	}

