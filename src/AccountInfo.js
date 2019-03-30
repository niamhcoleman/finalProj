import React from 'react';
import './Settings.css';

const getinfoCall = ' http://127.0.0.1:5001/account/getuserinfo/1'

class AccountInfo extends React.Component {
  state = {
    response: '',
  }

      getInfo() 
      {
            fetch(getinfoCall)
            .then((result) => {
                return result.text();
            }).then((textResult) => {
              this.setState({response: textResult});
            })
    }

  render() {
    return (
      <div id = "returnAcc">
        {this.getInfo()}
        {this.state.response}  
      </div>
    );
  }
}
export default AccountInfo;