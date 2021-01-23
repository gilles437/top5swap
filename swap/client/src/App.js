import React, { useEffect, useState } from "react";
import { Component } from "react";
import SetTokenCreator from "./contracts/SetTokenCreator.json";
import getWeb3 from "./getWeb3";

import "./App.css";


  const App = () => {
  
    const [refresh, setrefresh] = useState(0);
    const [account, setAccount] = useState("");
    const [instance, setInstance] = useState("");


     
    const loadBlockchainData = async () => {
      try {
         const web3 = await getWeb3();

        // Use web3 to get the user's accounts.
        const accounts = await web3.eth.getAccounts();

        setAccount(accounts[0]);

        const networkId = await web3.eth.net.getId();
        const deployedNetwork = SetTokenCreator.networks[42];
        const contract = new web3.eth.Contract(
            SetTokenCreator.abi,
            deployedNetwork && deployedNetwork.address,
          );

        setInstance(contract);

      } catch(error) {
        console.log(error)
        }
  }

  const createSet = async () => {
    
         const components = [
          //AAVE
          "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
          //UNI
          "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
          //BALANCER
          "0xba100000625a3754423978a60c9317c58a424e3D",
         //LOOPRING
         "0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD",
         //KYBER
         "0xdd974D5C2e2928deA5F71b9825b8b646686BD200" 
        ]
        const units = [5*10^17, 5*10^17, 5*10^17, 5*10^17, 5*10^17,];

        const modules = ["0x8a070235a4B9b477655Bf4Eb65a1dB81051B3cC1", "0xE038E59DEEC8657d105B6a3Fb5040b3a6189Dd51", "0x5dB52450a8C0eb5e0B777D4e08d7A93dA5a9c848", "0x936Ffda1C892a7c65777b14C1D71fD2C79222099", "0x6BD69bf1FE2B1464a3017Da50fe4ca7c1779F8f6", "0xC93c8CDE0eDf4963ea1eea156099B285A945210a"];
        const manager = "0xa2CEE670D4b589D243B9B413C5F874724A6E0076";

        const name = "SWAP";

        const symbol = "SWP";
        // Stores a given value, 5 by default.
       try {
        await instance.methods.create(components,units, modules, manager, name, symbol ).send({ from: account });

       } catch(error) {
         
         window.location.reload();
       
      
    
       }
      
    }
 
  useEffect(() => {
    loadBlockchainData();
    // createSet();
    
    //esl
  }, []);
  


    
    return (
      <div className="App">
        <h1>Good to Go!</h1>
        
        <h2>Create Token Set</h2>
        <p>
          Your Account : {account}
        </p>
        <p>
          <button className="btn btn-primary" onClick={createSet}>Create Set Token</button>
        </p>
       
      </div>
    );
  

};



export default App;
