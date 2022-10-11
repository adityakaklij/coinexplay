import React, { useState } from 'react'
import Web3 from 'web3';
import { Abi } from "./RockPaperAbi"



// --------------------------------------------//
//Account Connecting  
export default function RockPaper() {
  let [bool , setBool] = useState("false")
  const [number , setNumber] = useState(0)


    let account;
    let web3; 
    if (typeof window.web3 !== "undefined"){
        web3 = new Web3(window.ethereum.currentProvider);
    }
    else{
        web3 = new Web3.providers.HttpProvider("https://api.s0.b.hmny.io/")
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
        console.log("connected")
      }, 1500 );
      
  }
  async function loadContract() {
      return await new window.web3.eth.Contract( Abi,"0x82c3eeF105726dB2F40351cc2ED1b08daf44eCEE");
  }
  // After connecting to metamask this function will return the account address.
  async function getCurrentAccount() {
        const accounts = await window.web3.eth.getAccounts();
        account =  await accounts[0]
        console.log("account is ", account)
        return accounts[0]
  }

// --------------------------------------------//

async function rewardsWinner(winnerData) {
    //Changes Required
    // let amount = parseInt ((document.getElementById("input").value) * 10 ** 18)
    let mo = await getCurrentAccount()
    const coolNumber = await window.contract.methods.rewards(winnerData).send({ from: mo,gas : 60000, gasPrice: 40000000000,value : number * 10 ** 18 });
    displayResult(winnerData);    
}

// --------------------------------------------//

const x = ["Rock", "Paper", "Sesior"]
let answer;
const[resultWill , setResult] = useState("Will display")
const [aa , setaa] = useState("hehehe")

function getComputerResult(){
    let number = Math.floor(Math.random() * 3 )
    answer = (x[number])
    // setAnswer(x[number])
    console.log("answer direct from function:- " , answer)
    // document.getElementById("data").innerHTML = answer    
    
      setaa(answer)

    return answer
}


const rockBtn =  ()=>{
console.log(bool)
    if (bool === "true"){
    console.log("number is",number)
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
    answer = null
    setResult("Loading ...")
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
    answer = null;
    setResult("Loading ...")
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
  }
  else{
    alert("Please Connect wallet ")
  }
}


function winnerAnounce(p){
    if (p ===1){
        console.log("You Win the Game");
        rewardsWinner(1)
        // document.getElementById("result").innerHTML = "Loading..."
    }
    else if (p === 2){
        rewardsWinner(3)
        console.log("You lose the Game");
        // document.getElementById("result").innerHTML = "You Lose the Game"
    }
    else{
        rewardsWinner(2)
        console.log("Game Tie");
        // document.getElementById("result").innerHTML = "Game Tie"
    }
}

function displayResult(q){
    if (q ===1){
        console.log("You Win the Game");
        setResult("You Win the Game")
        // document.getElementById("result").innerHTML = "You Win the Game"
    }
    else if (q === 2){
        console.log("You lose the Game");
        setResult("Game Tie")
        // document.getElementById("result").innerHTML = "You Lose the Game"
    }
    else{
        console.log("Game Tie");
        setResult("You Lose the Game")
        // document.getElementById("result").innerHTML = "Game Tie"
    }   


}
// --------------------------------------------//
// --------------------------------------------//

const [op , setOp] = useState("")
function increase(){
  if (bool === "true"){
  setNumber( number + 1 )
  if (number >= 0){
    setOp("Telos")
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
    <div>
      <br />
        <button onClick={ConnectBtn} className="btn-primary my-4">{connect}</button>
        <br />
        <button className="btn-primary mx-1" onClick={rockBtn}  >Rock</button>
        <button className="btn-primary mx-1" onClick={paperBtn}>Paper</button>
        <button className="btn-primary mx-1" onClick={secsiorBtn}>secsior</button>
        <br />
        <br />
        <h4 className='my-5'>Amount:- {number} {op}</h4>
        <button className="btn-primary mx-2" onClick={increase}>Increase</button>
        <button className="btn-primary mx-2" onClick={decrease}>Decrease</button>
        <br />

        <br />
        {/* <p>Computer Got:- {answernew}</p> */}
        <p>Computer Got:- </p>
        <p>Result:- {resultWill}</p>
        <p>asas:- {aa}</p>


    </div>
  )
}
