import React from 'react';

class TrackingFinalStep extends React.Component {

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }
   
  apiCall(tod, sym, emo, notes) {

    if (emo && tod && sym)
    {
      if (emo === "Happy")
        {
          var emo_id = 3
        }
    else if (emo === "ok")
        {
          emo_id = 2
        }
    else 
        {
          emo_id = 1
        }
    
      fetch('http://127.0.0.1:5001/tracking/logentry?user_id=1&entry_tod=' + tod + '&entry_emo_id=' + emo_id + '&notes=' + notes + sym , {method: 'POST'})
      window.alert("You have successfully logged symptoms.")
      this.props.nextStep();

    }
    else {
      window.alert("There was an issue with your form. The following steps are compulsary: time of day, at least one symptom & mood.")
      this.props.prevStep();
    }   
  }

  render() {

    const {values: {timeofday, symptoms,emotion,notes}} = this.props;
    return (
        <div id = "buts">
            <button id = "prevBut" onClick = {this.back}>
              Back
            </button>
            <button id = "nextBut" onClick = {this.apiCall(timeofday, symptoms, emotion, notes)}>
              Confirm
            </button>
          </div>

    );
  }
}

export default TrackingFinalStep;