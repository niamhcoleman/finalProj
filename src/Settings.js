import React from 'react';
import './Settings.css';

class Settings extends React.Component {
    constructor(props) {
        super(props);
    

      }
    

  render() {

    return (
        <div>
            <form>
                <div id = "accountradio" >
                    <input type = "radio" value = "viewinfo" id = "viewinfo" name = "selector"/>
                    <label id = "acclabel" for="viewinfo">View Account Info</label>
                    <br/><br/><br/>
                    <input type = "radio" value = "changepass" id = "changepass" name = "selector"/>
                    <label id = "acclabel" for="changepass">Change Password</label>
                    <br/><br/><br/>
                    <input type = "radio" value = "logout" id = "logout" name = "selector"/>
                    <label id = "acclabel" for="logout">Log Out</label>
                </div>
                </form>
        </div>
    );
  }
}

export default Settings;