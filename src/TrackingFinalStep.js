import React from 'react';

const url = 'http://127.0.0.1:5001/tracking/logentry?user_id=1&entry_tod=afternoon&entry_emo_id=2&notes=TEST'

class Notes extends React.Component {

  continue = e => {
    //Send data to API from here
    fetch(url, {method: 'POST'})
            window.alert("You have successfully logged symptoms.")
    this.props.nextStep();
  }
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }
    

  render() {

    const {values: {timeofday, symptoms,emotion,notes}} = this.props;
    return (
        <div>
        <p id = "heading"><u>Please Review the Following:</u></p>

        <p id = "formsummary">Time Of Day: {timeofday} </p>
        <p id = "formsummary">Symptoms Chosen: {symptoms} </p>
        <p id = "formsummary">Emotion Chosen: {emotion} </p>
        <p id = "formsummary">Notes Added: {notes} </p>

        <div id = "buts">
            <button id = "prevBut" onClick = {this.back}>
              Back
            </button>
            <button id = "nextBut" onClick = {this.continue}>
              Confirm
            </button>
          </div>
          
        </div>
    );
  }
}

export default Notes;