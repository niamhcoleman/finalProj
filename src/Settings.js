import React from 'react';
import './Settings.css';

const getinfoCall = ' http://127.0.0.1:5001/account/getuserinfo/1'
const changepassCall = ' http://127.0.0.1:5001/account/changepassword/"iamsecure"/1'

class Settings extends React.Component {
    constructor(props) {
        super(props);

      }
    

      handleChange(event) {
        if (event.target.value == "viewinfo"){
            fetch(getinfoCall)
            .then((result) => {
                return result.text();
            }).then((textResult) => {
                window.alert(textResult)
            })
        }
        else if (event.target.value == "changepass") {
            fetch(changepassCall, {method: 'POST'})
            window.alert("Your password was successfully changed.")
        }
        else {
            window.alert("You clicked log out. This function has not yet been implemented. Try again later! ")
        }
      }

  render() {

    return (
        <div onChange={this.handleChange.bind(this)}>
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