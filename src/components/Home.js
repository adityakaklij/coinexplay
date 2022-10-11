import React from 'react'
import "../App.css"

export default function Home() {
  return (
    <div style={ {backgroundColor : "rgba(95,209,249,1)" }}>

        <h1 className='heading my-20 '>CETT Play to Earn Games</h1>
        <br />
        <p className='ppp'>Play the small games and win the rewards directly to your wallet.</p>


          {/* First Section */}
        <section>
           <div className="info">
             <div className="images1">
                <img src="rockpaperimg.png" width={"40%"}  alt="" />
             </div>
              <div className="data1">
                <h3> Rock Paper Scissors</h3>
                  <br />
                <p>Play the Simple game and win multiples rewards.</p>
                <p>Stand a chance to double your crypto</p>
                <br />
                <a href="/RockPaper" className="btn btn-primary">Play The Game</a>
              </div>
           </div>
        </section>


        <hr  width={'50%'}/>

          {/* Second Section */}
        <section>
           <div className="info">
              <div className="data">
                <h3> Choose The Color</h3>
                  <br />
                <p> Play the unique game by simpling choosing the color and win exciting prices.</p>
                <p>Stand a chance to eightfold your crypto</p>
                <br />
                <a href="/Color" className="btn btn-primary">Play The Game</a>
              </div>
              <div className="images2">
                <img src="guessColor.png" width={'60%'}  alt="" />
             </div>
           </div>
        </section>
        <hr  width={'50%'}/>
        
          {/* Third Section */}
        <section>
           <div className="info">
             <div className="images">
                <img src="lotteryImg.png" width={'60%'}  alt="" />
             </div>
              <div className="data">
                <h3> Lucky Draw</h3>
                  <br />
                <p> Just buy a lottery ticket and win exciting Rewards</p>
                <p>Stand a chance to 10X your crypto</p>
                <br />
                <a href="/LuckyDraw" className="btn btn-primary">Play The Game</a>
              </div>
           </div>
        </section>
        
    </div>
  )
}
