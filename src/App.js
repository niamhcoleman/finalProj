import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import CallSteps from './CallSteps';



const Tracking = () => (
  <div>
    <CallSteps/>
    </div>
);


const Account = () => (
  <div>
    <ul>
      <li>San Francisco</li>
      <li>Istanbul</li>
      <li>Tokyo</li>
    </ul>
  </div>
);

const History = ({ match }) => (
  <div>
    <ul>
      <li>
        <Link to={`${match.url}/technology`}>Technology</Link>
      </li>
      <li>
        <Link to={`${match.url}/business`}>Business</Link>
      </li>
      <li>
        <Link to={`${match.url}/economics`}>Economics</Link>
      </li>
    </ul>

    <Route
      exact
      path={`${match.path}/:course`}
      render={({ match }) => <div> This is {match.params.course} </div>}
    />
  </div>
); 
 class App extends Component {
  render() {
    return (
      <div id ="nav">
        <ul>
          <li>
            <Link to="/Tracking">Tracking</Link>
          </li>
          <li>
          <li><Link to="/History">History</Link></li>
          </li>
          <li>
            <Link to="/Account">Account</Link>
          </li>
        </ul>

        <Route path="/Tracking" exact component={Tracking} />
        <Route path="/History" component={History}/>
        <Route path="/Account" component={Account} />
      </div>
    );
  }
}

export default App;
