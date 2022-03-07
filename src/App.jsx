import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import './App.css';

export default function App() {
  // A state variable used to store user's public wallet
  const [currentAccount, setCurrentAccount] = useState("");


  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      // Check if metamask is installed in browser
      if (!ethereum) {
        console.log("Make sure you have MetaMask!!");
        return;
      }
      else {
        console.log("We have the ethereum object: %s", ethereum);
      }

      // Check if portal is authorized to access user's wallet
      const accounts = await ethereum.request({method: "eth_accounts"})
      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account: %s", account);
      }
      else {
        console.log("No authorized account found.")
      }
    }
    catch (error) {
      console.log(error)
    }
  }


  // Method to connect wallet to to web portal
  const connectWallet = async () => {
    try {
      const { etherium } = window;
      if (!ethereum) {
        alert("Get Metamask!");
        return;
      }

      const accounts = await ethereum.request({method: "eth_requestAccounts"});
      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]); // Use setCurrentAccount from state defined above.
    }
    catch (error) {
      console.log("error");
    }
  }

  
  const wave = () => {

  }

  
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  
  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
         Howdy!
        </div>

        <div className="bio">
        I'm Nikolai. I'm a professional Cloud Systems DevOps Engineer, and run a ranch in Northern Colorado. Connect your Ethereum wallet, and wave at me!
        </div>

        <button className="waveButton" onClick={wave}>
          Wave at Me
        </button>

        {/*
        * If there is no currentAccount render this button
        */}
        {!currentAccount && (
          <button className="waveButton" onClick={connectWallet}>
            Connect Wallet
          </button>
        )}
          
      </div>
    </div>
  );
}