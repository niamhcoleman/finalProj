import React from 'react';
import './Settings.css'


class AccountInfo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit() {
        var newpass = this.state.value
        if (newpass.length <= 3)
        {
          
          window.alert('Your Password was could not be changed.');
        }
        else {
          fetch('http://127.0.0.1:5001/account/changepassword/"' + newpass + '"/1', {method: 'POST'})
          window.alert('Your Password was successfully changed.');
        }
      
    }
  
    render() {
      return (
            <form onSubmit={this.handleSubmit}>
            <p id = "accHeading">Change Password:</p><br/>
            <label>
                New Password:
                <br></br>
                <input type="password" value={this.state.value} onChange={this.handleChange} id = "passchange" required/>
            </label>
            <br></br> <br></br> <br></br>
            <input type="submit" value="Confirm" id = "pass_submit"/>
            </form>
      );
    }
  }
export default AccountInfo;