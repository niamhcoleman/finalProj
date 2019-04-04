import React from 'react';
import './Settings.css';
import AccountInfo from './AccountInfo';
import ChangePassword from './ChangePassword';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showButton: false
    };
  }

  toggle = () => {
    this.setState({ showButton: true, showButton2: false });
  };

  toggle2 = () => {
    this.setState({ showButton: false, showButton2: true });
  };
  

  render() {
    return (
      <div id = "accDiv">
        <button id = "viewinfo" onClick={this.toggle} >View Account Info</button>
        <br></br><br></br><br></br>
        <button id = "changepass" onClick={this.toggle2}>Change Password</button>
        <br></br><br></br><br></br>

        {this.state.showButton ? <AccountInfo/> : null}
        {this.state.showButton2 ? <ChangePassword/> : null}
      </div>
    );
  }
}

export default Settings;