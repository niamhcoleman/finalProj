import React from 'react';
import './Settings.css';

const getinfoCall = ' http://127.0.0.1:5001/account/getuserinfo/1'

class AccountInfo extends React.Component {
  state = {
    name: '',
    email:'',
  }

  getInfo() {
    fetch(getinfoCall)
    .then(response => {
      return response.json()
    })
    .then(data => {
      // Work with JSON data here via variable 'data'
      var s = JSON.stringify(data);  
      var x = JSON.parse(s);
      this.setState({name: x[0].user_name});
      this.setState({email: x[0].user_email});
    })
  }

  render() {
    return (
      <div id = "returnAcc">
        {this.getInfo()}
        <p id = "accHeading">Account Information:</p><br/>
        <p id = "accInfoHeading">Name : </p>{this.state.name}
        <br/>
        <p id = "accInfoHeading">Account Email : </p>{this.state.email}  
      </div>
    );
  }
}
export default AccountInfo;