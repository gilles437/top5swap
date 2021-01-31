import React, { useState, useEffect } from "react";
import App from "./../App";
import getWeb3 from "./../getWeb3";
import NavIssuanceModule from "./../contracts/NavIssuanceModule.json";


// state = { storageValue: 0, web3: null, accounts: null, contract: null };

const BuySetToken = ( {account, connect} ) => {

	const [instance, setInstance] = useState("");
	
	// const [storageValue, setStorageValue] = useState(0)
	// console.log({ account });
	const web3 = { connect };
	console.log({ account });

	console.log(web3.connect.eth.net);
		

		
			console.log(23);
		// 	// const networkId = await web3.connect.eth.net.getId();		
		// 	// console.log(networkId);
		// 	const deployedNetwork = NavIssuanceModule.networks[42];
		// 	// console.log(networkId);
		// 	const contract = new web3.eth.Contract(
		// 	NavIssuanceModule.abi,
		// 	deployedNetwork && deployedNetwork.address,
		// );

		// }
	// const networkId = web3.eth.net.getId();

	

	// const contract = new web3.eth.Contract(
	// 		NavIssuanceModule.abi,
	// 		deployedNetwork && deployedNetwork.address,
	// 	);

		
		// setInstance(contract);

		const setToken = "0xB0A6E4C03c68835A02216c3EED10D3FC623102e5";
		// const navIssuanceSettings = [
		// 	//Manage Issuance Hook - custom contract address
		// 	"0x0000000000000000000000000000000000000000",
		// 	//Redemption hook - custom contract address
		// 	"0x0000000000000000000000000000000000000000",
		// 	//AAVE
		// 	["0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
		// 		//UNI
		// 		"0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
		// 		//LOOP
		// 		"0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD"],
		// 	//manager address for being recepient
		// 	"0xa2CEE670D4b589D243B9B413C5F874724A6E0076",
		// 	//[0] issuance fee & [1] redemption fee
		// 	[1e16, 1e16],
		// 	//max fee
		// 	1e16,
		// 	//Premium % to prevent arbitrage
		// 	1e16,
		// 	//Premium % to prevent arbitrage
		// 	1e16,
		// 	//token Supply
		// 	1
		// ];
		// instance.methods.initialize(setToken, navIssuanceSettings).send({ from: account });
	const amountToSend = web3.toWei(1, "ether"); // Convert to wei value
	alert(amountToSend);
	// var send = web3.eth.sendTransaction({ from: addr, to: toAddress, value: amountToSend })
	instance.methods.issueWithEther(setToken, 1, "0xa2CEE670D4b589D243B9B413C5F874724A6E0076").send({ from: account, value: amountToSend });
		

		// console.log(error)

	useEffect(() => {
		// myFunc();

		//esl
	}, []);


	return (
		<>
			<div>Success {account} </div>
			
		</>
	)

}


export default BuySetToken;