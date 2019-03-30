import React from 'react';


const getinfoCall = ' http://127.0.0.1:5001/account/getuserinfo/1'

class AccountInfo extends React.Component {
    

      getInfo() 
      {
            fetch(getinfoCall)
            .then((result) => {
                return result.text();
            }).then((textResult) => {
                window.alert(textResult)
            })
    }

  render() {
    return (
      <div id = "returnAcc">
        {this.getInfo()}  
      </div>
    );
  }
}
export default AccountInfo;