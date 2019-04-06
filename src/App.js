import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import ChooseADay from './ChooseADay';
import Settings from './Settings';
import TrackingForm from './TrackingForm';
import "./App.css";



const Tracking = () => (
  <div>
    <TrackingForm/>
  </div>
);

const Account = () => (
  <div>
    <Settings/>
  </div>
);

const History = () => (
  <div>
    <ChooseADay/>
  </div>
);

 class App extends Component {


  render() 
  {
    return (
      <div id ="nav">
        <ul>
          <li>
            <Link to="/Tracking">Tracking</Link>
          </li>
          <li>
            <Link to="/History">History</Link>
          </li>
          <li>
            <Link to="/Account">Account</Link>
          </li>
        </ul>

        <Route path="/Tracking" exact component={Tracking} />
        <Route path="/History" component={History}/>
        <Route path="/Account" component={Account}/>
      </div>
    );
  }
}

export default App;