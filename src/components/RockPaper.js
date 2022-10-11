import React, { useState } from 'react'
import Web3 from 'web3';
import { Abi } from "./RockPaperAbi"
import '../App.css'

//
// Rock Paper Scissor
// Contract Address = 0x727340598a10CBcC746c977ec204F25871962445
// Meta Account = 0xc221979949e0ACc4E1E715FbB232284f7eE412d4
// --------------------------------------------//
//Account Connecting  
export default function RockPaper() {
  let [bool , setBool] = useState("false")
  const [number , setNumber] = useState(0)
  const [userChoice , serUserChoice] = useState("")
  const [computerChoice , setComputerChoice] = useState("Will Display")

    let account;
    let web3; 
    if (typeof window.web3 !== "undefined"){
        web3 = new Web3(window.ethereum.currentProvider);
    }
    else{
        web3 = new Web3.providers.HttpProvider("https://testnet.telos.net/evm")
    }


function ConnectBtn(){
    setBool("true")
    async function loadWeb3() {
      if (window.ethereum) {
          // await window.ethereum.send("eth_requestAccount")
          window.web3 = new Web3(window.ethereum);
          window.ethereum.enable();
          
      }
    }
      async function load() {
          await loadWeb3();
          window.contract = await loadContract();       
          
    }
      load();
      getCurrentAccount();

      setTimeout(() => {
          
        setConnect("Connected")
      }, 1500 );
      
  }
  async function loadContract() {
      return await new window.web3.eth.Contract( Abi,"0x055B6FF659Ea52f5d99fcc7A9827d7f2DCC39372");
  }
  // After connecting to metamask this function will return the account address.
  async function getCurrentAccount() {
        const accounts = await window.web3.eth.getAccounts();
        account =  await accounts[0]
        // console.log("account is ", account)
        return accounts[0]
  }

// --------------------------------------------//

async function rewardsWinner(winnerData) {
    let mo = await getCurrentAccount()
    const coolNumber = await window.contract.methods.rewards(winnerData).send({ from: mo,gas : 60000, gasPrice: 500000000000,value : number * 10 ** 18 });
    displayResult(winnerData);    
}

// --------------------------------------------//

const x = ["Rock", "Paper", "Sesior"]
let answer;
const[resultWill , setResult] = useState("Will display")


function getComputerResult(){
    let number = Math.floor(Math.random() * 3 )
    answer = (x[number])
    return answer
}


const rockBtn =  ()=>{
    if (bool === "true"){
      // console.log("number is",number)
      getComputerResult()
      if (answer === "Paper"){
          winnerAnounce(2)
      }
      else if (answer === "Sesior"){
          winnerAnounce(1)
      }
      else{
          winnerAnounce(3)
      }
      setResult("Loading ...")
      serUserChoice("Rock")
      
      setTimeout(() => {
        let ans = answer;
        setComputerChoice(ans)
        answer = null
      }, 19000);
      
  }
  else{
    alert("Please Connect wallet ")
  }
}

const paperBtn =  ()=>{
  if (bool === "true"){
      getComputerResult();
      if (answer === "Rock"){
          winnerAnounce(1)
      }
      else if (answer === "Sesior"){
          winnerAnounce(2)
      }
      else{
          winnerAnounce(3)
      }
      setResult("Loading ...")
      serUserChoice("Paper")
      setTimeout(() => {
        let ans = answer;
        setComputerChoice(ans)
        answer = null
      }, 13000);
      
  }
  else{
    alert("Please Connect wallet ")
  }
}

const secsiorBtn =  ()=>{

  if (bool === "true"){
    getComputerResult();
      if (answer === "Rock"){
          winnerAnounce(2)
      }
      else if (answer === "Paper"){
          winnerAnounce(1)
      }
      else{
          winnerAnounce(3)
      }
      setResult("Loading ...")
      serUserChoice("Secsior")
      setTimeout(() => {
        let ans = answer;
        setComputerChoice(ans)
        answer = null
      }, 13000);
      
  }
  else{
    alert("Please Connect wallet ")
  }
}


function winnerAnounce(p){
    if (p ===1){
        // console.log("You Win the Game");
        rewardsWinner(1)
    }
    else if (p === 2){
        rewardsWinner(3)
        // console.log("You lose the Game");
    }
    else{
        rewardsWinner(2)
        // console.log("Game Tie");
    }
}

function displayResult(q){
    if (q ===1){
        // console.log("You Win the Game");
        setResult("You Win the Game")
    }
    else if (q === 2){
        // console.log("You lose the Game");
        setResult("Game Tie")
    }
    else{
        // console.log("Game Tie");
        setResult("You Lose the Game")
    }   
}
// --------------------------------------------//

const [op , setOp] = useState("")
function increase(){
    if (bool === "true"){
        setNumber( number + 1 )
        if (number >= 0){
          setOp("CETT")
        }
    }
    else{
        alert("Please Connect wallet ")
    }
}

function decrease(){
    if (bool === "true"){
        if (number > 0){
            setNumber( number - 1)
        if (number === 1){
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


const [connect , setConnect] = useState("Connect")
  return (

    <div style={ { backgroundColor :'rgba(95,209,249,1)' ,  height : '100%', width : '100%'}}>
      <br />
      
      <h1 style={{fontWeight: "bold", color: "white" ,fontSize : '3em', paddingTop: '3%' }}>Rock Paper Scissor</h1>
        
        <div className="connectBtn">
            <button onClick={ConnectBtn} >{connect}</button>
        </div>
        <br />
        {/* <button className="btn-primary mx-1" onClick={rockBtn}>Rock</button> */}
        {/* <button className="btn-primary mx-1" onClick={paperBtn}>Paper</button> */}
        {/* <button className="btn-primary mx-1" onClick={secsiorBtn}>secsior</button> */}
        <img className='clickButton my-5 mx-3' src="rock.png" onClick={rockBtn} alt="" />
        <img className='clickButton mx-3' src="paper.png"     onClick={paperBtn} alt="" />
        <img className='clickButton mx-3' src="scissors.png"  onClick={secsiorBtn}alt="" />

        
        <h4 className='my-4' style={{color : "white", fontSize: "1.7em"}}>Amount:- {number} {op}</h4>
            <button className="btn-primarya mx-2" onClick={increase}>+</button>
            <button className="btn-primarya mx-2" onClick={decrease}>-</button>
        
        <br />
        <br />
        <div className="results">
            <p>You Choose {`:- ${userChoice}`}</p>
            <p>Computer Got  {`:- ${computerChoice}`}</p>
            <p>Result {`:- ${resultWill}`}</p>
        </div>
    </div>
  )
}
