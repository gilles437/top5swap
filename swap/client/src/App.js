import React, { useEffect, useState } from "react";
import { Component } from "react";
import SetTokenCreator from "./contracts/SetTokenCreator.json";
import getWeb3 from "./getWeb3";
import BuySetToken from "./buy_token/buySet";

import NavIssuanceModule from "./contracts/NavIssuanceModule.json";

import "./App.css";


const App = () => {

  const [refresh, setrefresh] = useState(0);
  const [account, setAccount] = useState("");
  const [instance, setInstance] = useState("");

  const [web3, setWeb3] = useState(undefined);
  const [amountToSend, setAmountToSend] = useState(undefined);



  const loadBlockchainData = async () => {
    try {

      // setWeb3(await getWeb3());

      const web3 = await getWeb3();


      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      setAccount(accounts[0]);
      setWeb3(web3);

      //For create SET TOKEN

      // const networkId = web3.eth.net.getId();
      // const deployedNetwork = SetTokenCreator.networks[42];
      // const contract = new web3.eth.Contract(
      //   SetTokenCreator.abi,
      //   deployedNetwork && deployedNetwork.address,
      // );


      // setInstance(contract);



      // const amountToSend = web3.toWei(1000000000000000000, "ether"); // Convert to wei value
      // console.log(amountToSend);
      // setAmountToSend(amountToSend);


      console.log(web3);
      console.log(accounts[0]);


    } catch (error) {
      console.log(error)
    }
  }

  const createSet = () => {

    // create basic set contract
    // e.preventDefault();  


    const components = [
      //AAVE
      "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
      //UNI
      "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984"
    ];

    //BALANCER
    // "0xba100000625a3754423978a60c9317c58a424e3D",
    //LOOPRING
    // "0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD",
    //KYBER
    // "0xdd974D5C2e2928deA5F71b9825b8b646686BD200"

    const units = [5 * 10 ^ 17, 5 * 10 ^ 17];

    const modules = ["0x8a070235a4B9b477655Bf4Eb65a1dB81051B3cC1", "0xE038E59DEEC8657d105B6a3Fb5040b3a6189Dd51", "0x5dB52450a8C0eb5e0B777D4e08d7A93dA5a9c848", "0x936Ffda1C892a7c65777b14C1D71fD2C79222099", "0x6BD69bf1FE2B1464a3017Da50fe4ca7c1779F8f6", "0xC93c8CDE0eDf4963ea1eea156099B285A945210a"];
    const manager = "0xa2CEE670D4b589D243B9B413C5F874724A6E0076";

    const name = "SWAP";

    const symbol = "SWP";

    setWeb3(web3);

    // Stores a given value, 5 by default.
    try {
      instance.methods.create(components, units, modules, manager, name, symbol).send({ from: account });

    } catch (error) {
      window.location.reload();
    }

  }

  const issueToken = async () => {

    const setToken = "0x96d4Aa3aB78f93fc3e0d695fDB36c3177593b66C";
    const navIssuanceSettings = [
      //Manage Issuance Hook - custom contract address
      "0x0000000000000000000000000000000000000000",
      //Redemption hook - custom contract address
      "0x0000000000000000000000000000000000000000",
      //AAVE
      ["0xff795577d9ac8bd7d90ee22b6c1703490b6512fd"],
      //manager address for being recepient
      "0xa2CEE670D4b589D243B9B413C5F874724A6E0076",
      //[0] issuance fee & [1] redemption fee
      [10 ^ 16, 10 ^ 16],
      //max fee
      10 ^ 16,
      //Premium % to prevent arbitrage
      10 ^ 16,
      //Premium % to prevent arbitrage
      10 ^ 16,
      //token Supply
      1
    ];

    // 0xd0a1e359811322d97991e03f863a0c30c2cf029c
   //function addReserveAsset(ISetToken _setToken, address _reserveAsset)

    // instance.methods.addReserveAsset(setToken, "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2").send({ from: account });
    // instance.methods.initialize(setToken, navIssuanceSettings).send({ from: account });
    //For NavIssuanceModule 

    const deployedNetwork = NavIssuanceModule.networks[42];
    // console.log(networkId);
    const contract = new web3.eth.Contract(
      NavIssuanceModule.abi,
      deployedNetwork && deployedNetwork.address,
    );
    setInstance(contract);
    console.log(instance);
    console.log(web3.eth.Contract);

    const toAddress = "0xa2CEE670D4b589D243B9B413C5F874724A6E0076";

    instance.methods.issueWithEther(setToken, 1, "0xa2CEE670D4b589D243B9B413C5F874724A6E0076").send({ from: account, value: 1000000000000000000 });
  }


  useEffect((instance) => {
    loadBlockchainData();
   
    // createSet();

    //<BuySetToken account={account} connect={connect} />
  }, []);




  return (
    <>
      <div className="App">

        <h1>Good to Go!</h1>


        <p>
          Your Account : {account}
        </p>
        <h2>Create Token Set</h2>
        <p>
          <button className="btn btn-primary" onClick={createSet}>Create Set Token</button>
        </p>



        <h2>Issue Set Token</h2>
        <p>
          <button className="btn btn-primary" onClick={issueToken}>Issue Token</button>
        </p>

      </div>


    </>
  );


};



export default App;

