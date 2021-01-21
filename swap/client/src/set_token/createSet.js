import React, { Component } from "react";
import App from "./App";
import getWeb3 from "./getWeb3";


class CreateSet extends Component {
	state = { storageValue: 0, web3: null, accounts: null, contract: null };

setTokenCreate = async ()  => {
	
	const connect = await App();

	console.log(App.accounts);
	// const accounts = await web3.eth.getAccounts();
 //    const starFlashLoan = new web3.eth.Contract(abi, "0xcaa414f8914f2a3c0e5ba3894ab0b742e105c045");
    
 //    const fromToken =this.state.fromIndex;
 //    const forToken =this.state.forIndex;
 //    const tx = await SetTokenCreate.methods.create(["0x...."] ).send({from:accounts[0]});
     
    
}
render(){
    	return (
    		<div>Success</div>
    		)

    	}
	}

