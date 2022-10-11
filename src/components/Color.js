// Contract adddress - 0x183a0517473979c2E8C944D19Cc0D09A4E188751
// Harmony

import React, {  useState } from "react";
import { Abi } from "./ColorAbi";
import Web3 from "web3";


export default function Color() {
  
const [connet , setConnect] = useState("Conncet")
const [result , setResult] = useState("")
const [youChoose , setyouChoose] = useState("")
const [computerChoose , setComputerChoose] = useState()

  const connectBtn = () =>{

    async function loadWeb3() {
        if (window.ethereum) {
          window.web3 = new Web3(window.ethereum);
          window.ethereum.enable();
        }
    }
    async function load() {
      await loadWeb3();
      window.contract = await loadContract();
      setBool("true")
    }
    load();
    getCurrentAccount();
    

  }
  async function loadContract() {
    
      return await new window.web3.eth.Contract(Abi,"0xF7B469C6B10f458ef5B184F5EeD70b6018eC8377");
  }

  async function getCurrentAccount() {
      const accounts = await window.web3.eth.getAccounts();
      console.log( "clg from accountSS", accounts[0]);
      setConnect("Connected");
      return accounts[0];
  }

    async function setNumber(winnerData) {
        let amount =num * 10 ** 18;
        const account = await getCurrentAccount();
        const coolNumber = await window.contract.methods.rewardWinner(winnerData)
            .send({
                from: account,
                gas: 60000,
                gasPrice: 40000000000,
                value: amount,
              });
        displayResult(winnerData);
    }

    // Game starts here.

    let color = ["red", "green", "violet", "redViolet", "greenviolet"];

    let number;

    function getWinner() {
      let winner_number = Math.floor(Math.random() * 5);

      if (winner_number === 2) {
        let winner_number = Math.floor(Math.random() * 5);
        number = winner_number;
        console.log("number:-  from violet", number);
        return color[winner_number];
      } 
      else {
        number = winner_number;
        console.log("number:- not from violet ", number);
        return color[winner_number];
      }
    }

    // Red color clicked by user.
    const redBtn = () => {
      console.log("red btn")

      if (bool === "true"){
      buttonClicked("red");

      let p = getWinner();
      if (p === "red") {
        console.log("red Wins!!");
        setNumber(1);
        }
      else if (p === "redViolet") {
        setNumber(3);
        } 
      else {
        console.log("You loose");
        setNumber(5);
      }
      updateWinner(p);
    }
    else{
      alert("Please Connect Wallet")
    }
    }

    // Green color clicked by user.
    const greenBtn = () =>{
      console.log("Green btn")
      if (bool === "true"){
          buttonClicked("green");
          let p = getWinner();
          if (p === "green") {
            console.log("green Wins!!");
            setNumber(1);
          } else if (p === "greenviolet") {
            setNumber(3);
          } else {
            console.log("You loose");
            setNumber(5);
          }
          updateWinner(p);
        }
        else{
          alert("Please Connect Wallet")
        }
    }

    // Violet color clicked by user.
    const violetBtn = () =>{
      console.log("violet btn")
      if (bool === "true"){

          buttonClicked("violet");
          let p = getWinner();
          if (p === "violet") {
              console.log("violet Wins!!");
              setNumber(2);
            } 
          else if (p === "redViolet" || p === "greenviolet") {
              setNumber(4);
            } 
          else {
              console.log("You loose");
              setNumber(5);
          }
          updateWinner(p);
        }
        else{
            alert("Please Connect Wallet")
        }

    }

    function buttonClicked(x) {
        setResult("Loading..")
        setComputerChoose("Loading..")
        if (x === "red") {
            setyouChoose("Red")
            console.log("Red Button clicked");
        } else if (x === "green") {
            setyouChoose("Green")
            console.log("green button clicked");
        } else {
            setyouChoose("Violet")
            console.log("violet button clicked");
        }
    }

    function updateWinner(p) {
      console.log("p is ", p);
      setTimeout(() => {  
        setComputerChoose(p)
      }, 10000);
      
    }

    function displayResult(winnerData) {
      if (winnerData === 1 || winnerData === 2) {
          console.log(" it's 1 or 2")
          setResult("You Won The Game!!")
        } 
      else if (winnerData === 3) {
          console.log("it's 3")
          setResult("You Also Won The Game!!")
        }
      else if (winnerData === 4) {
          console.log("it's 4")
          setResult("You Partically The Game!!")
        }
      else {
          console.log("You lose the Game")
          setResult("You Lose The Game")
      }
    }
      
    const [num ,setNum] = useState(0)
    const [op , setOp] = useState("")
    const [bool , setBool] = useState("false")

    function increase(){
      if (bool === "true"){
          setNum( num + 1 )
        if (num >= 0){
          setOp("Telos")
          }
      }
      else{
          alert("Please Connect wallet ")
      }
    }
    
    function decrease(){
      if (bool === "true"){
          if (num > 0){
              setNum( num - 1)
          if (num === 1){
                setOp("")
            }
          }
      else{ 
      }
    }
      else{
          alert("Please Connect wallet ")
      }
    }

    return (
      <div>
        <h2>From Color</h2>
        <button className="btn-primary" onClick={connectBtn}>{connet}</button>
        <br />
        <button className="btn mx-3 my-3" onClick={redBtn} style = {{background : "red", color: "white"}}>Red</button>
        <button className="btn mx-3 my-3" onClick={greenBtn} style = {{background : "green" , color: "white"}}>Green</button>
        <button className="btn mx-3 my-3" onClick={violetBtn} style = {{background : "violet" ,color: "white"}}>Violet</button>
      
        <br />
        <h4 className='my-5'>Amount:- {num} {op}</h4>
        <button className="btn-primary mx-2" onClick={increase}>Increase</button>
        <button className="btn-primary mx-2" onClick={decrease}>Decrease</button>
        <br />
        <br />
        <p>Computer got:- {computerChoose} </p>
        <p>You Choose:- {youChoose}</p>
        <p>Result:- {result} </p>
      </div>
    );
  }

