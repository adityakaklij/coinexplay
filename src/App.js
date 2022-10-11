
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HowToPlay from './components/HowToPlay'
import RockPaper from './components/RockPaper';
import Color from './components/Color';
import Home from './components/Home';
import LuckyDraw from './components/LuckyDraw';
import Footer from './components/Footer';



function App() {
  return (
    <Router basename='/'>
    <div className="App">
       <Navbar/>

      <Switch>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route exact path="/HowToPlay">
            <HowToPlay/>
          </Route>

          <Route exact path="/RockPaper">
            <RockPaper/>
          </Route>

          <Route exact path="/Color">
            <Color/>
          </Route>

          <Route exact path="/LuckyDraw">
            <LuckyDraw/>
          </Route>
          
        </Switch>

      <Footer/>
    </div>
    </Router>
  );
}

export default App;
