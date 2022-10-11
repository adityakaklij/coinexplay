
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Test1 from './components/Test1';
import Test2 from './components/Test2';
import RockPaper from './components/RockPaper';
import Color from './components/Color';
import Home from './components/Home';
import LuckyDraw from './components/LuckyDraw';



function App() {
  return (
    <Router>
    <div className="App">
       <Navbar/>

      <Switch>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route exact path="/Test1">
            <Test1/>
          </Route>

          <Route exact path="/Test2">
            <Test2/>
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


    </div>
    </Router>
  );
}

export default App;
