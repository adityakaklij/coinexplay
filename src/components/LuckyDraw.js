// Contract Address = 0x5F5bd33FEf8375E4ee67CC0E44a9FCb8EfBEf737
// Meta Account = 0xc221979949e0ACc4E1E715FbB232284f7eE412d4
// Lottery


import React, { useState , useEffect } from 'react'
import Web3 from 'web3'
import { Abi } from './LuckyDrawAbi.js';
import '../App.css'


export default function LuckyDraw() {

    let contractAddress = "0x5a1899FaFf22a2b3EA0294d86Cd1BE6269931ef1";
    const [connect , setConnect]= useState("Connect")

    const [number1 , setNumber1] = useState(0)
    const [number2 , setNumber2] = useState(0)
    const [number3 , setNumber3] = useState(0)

    let web3;
    const connectWallet = async () =>{
        if(window.ethereum){
            await window.ethereum.request({method : "eth_requestAccounts"})
            web3 = new Web3 (window.ethereum)
            setConnect("Connected")
        }
        else{
            alert("Please Install Metamask")
        }
    }

    web3 = new Web3(window.ethereum)
    const vmContract = new web3.eth.Contract(Abi,contractAddress)

    useEffect( () =>{
        getInt()
    })
    
    const getInt = async () => {
            const num1 = await vmContract.methods.usersA().call()
            const num2 = await vmContract.methods.usersB().call()
            const num3 = await vmContract.methods.usersC().call()
            
            setNumber1(num1)
            setNumber2(num2)
            setNumber3(num3)
    }

    const setNum = async (input) =>{
           const accounts = await web3.eth.getAccounts()
           if (input === 1){
                const value1 = await vmContract.methods.enter(1).send({
                    from: accounts[0],
                    value: 1 * 10 ** 18
                })
           }

           else if (input === 2){
                const value2 = await vmContract.methods.enter(2).send({
                    from: accounts[0],
                    value: 5 * 10 ** 18
                })
           }

           else {
                const value3 = await vmContract.methods.enter(3).send({
                    from: accounts[0],
                    value: 10 * 10 ** 18
                })
           }
            getInt()
    }

    function Lottery1(){
        setNum(1)
    }
    
    function Lottery2(){
        setNum(2)
        
    }
    
    function Lottery3(){
        setNum(3)

    }


  return (

    <div className="lucky">
    <div style={ {backgroundColor : "rgba(95,209,249,1)" ,  width : '100%', marginBottom : "80px"}}>
        <h2 className="containerr mx-12" style={{fontWeight: "bold", color: "white" ,fontSize : '3em', paddingTop: '3%' }}>Lucky Draw</h2>
        <div className="connectBtn"> 
            <button className="btn-primary m-4" onClick={connectWallet}>{connect}</button>
        </div>
        <br /><br /><br />

    <div className='d-flex justify-content-around' >

        {/* Lottery One */}
      <div className="card  "  style={{width: "18rem"}}>
          <img src="../images/silver.png" className="card-img-top" alt="..."/>
          <div className="card-body" style={{backgroundColor : '#c1c1c1'}}>
              <h5 className="card-title my-4" style={{fontWeight: "bold", color: "blue" ,fontSize : '2em' }}>Lottery 1</h5>
              <h5 className="card-title">Spend 1 CETT <br></br>win 8 CETT </h5>
              <p className="card-text">Grab a lottery ticket just for 1 CETT and stand a chance to win 800% rewards.</p>
              <br />
              <p>Participant:- {number1}/10</p>
              <button className="btnLottery m-4" onClick={Lottery1}>Lottery1</button>
          </div>
      </div>

        {/* Lottery Two */}
        <div className="card  "  style={{width: "18rem"}}>
          <img src="../images/gold.png" className="card-img-top" alt="..."/>
          <div className="card-body" style={{backgroundColor : "rgb(255, 251, 9)"}}>
              <h5 className="card-title1 mx-2">Lottery 2</h5>
              <h5 className="card-title">Spend 5 CETT <br></br>win 45 CETT </h5>
              <p className="card-text">Grab a lottery ticket just for 5 CETT and stand a chance to win 900% rewards.</p>
              <br />
              <p>Participant:- {number2}/10</p>
              <button className="btnLottery m-4" onClick={Lottery2}>Lottery2</button>
          </div>
        </div>

      {/* Lottery Three */}
      <div className="card  "  style={{width: "18rem"}}>
          <img src="../images/platinum.png" className="card-img-top" alt="..."/>
          <div className="card-body" style={{backgroundColor : "#d5e5ff"}}>
              <h5 className="card-title1">Lottery 3</h5>
              <h5 className="card-title">Spend 10 CETT <br></br>win 100 CETT </h5>
              <p className="card-text">Grab a lottery ticket just for 10 CETT and stand a chance to win 1000% rewards.</p>
              <br />
              <p>Participant:- {number3}/10</p>
              <button className="btnLottery m-4" onClick={Lottery3}>Lottery3</button>
          </div>
        </div>

      </div>

    </div>

    </div>
  )
}
