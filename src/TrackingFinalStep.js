import React from 'react';

class TrackingFinalStep extends React.Component {

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }
   
  apiCall(tod, sym, emo, notes) {
    if (emo == "Happy")
    {
      var emo_id = 3
    }
    else if (emo == "ok")
    {
      var emo_id = 2
    }
    else {
      var emo_id = 1
    }
    
    fetch('http://127.0.0.1:5001/tracking/logentry?user_id=1&entry_tod=' + tod + '&entry_emo_id=' + emo_id + '&notes=' + notes + '&symptoms=' + sym , {method: 'POST'})
    window.alert("You have successfully logged symptoms.")
    this.props.nextStep();
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
            <button id = "nextBut" onClick = {this.apiCall(timeofday, symptoms, emotion, notes)}>
              Confirm
            </button>
          </div>
          
        </div>
    );
  }
}

export default TrackingFinalStep;