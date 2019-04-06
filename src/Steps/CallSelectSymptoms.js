import React from 'react';
import Acne from './Acne';
import Vomit from './Vomit';
import Bloat from './Bloat';
import Indigestion from './Indigestion';


class CallSelectSymptoms extends React.Component {   
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
      const {values, handleSymptomChange} = this.props;

      return (
        <div> 
          <p id = "heading"><u>What Symptoms do you Have Today?</u></p>
          <div onChange = {handleSymptomChange('symptoms')}> 
            <Acne values={values}/>
            <br></br>
            <Vomit values = {values}/>
            <br></br>
            <Bloat values = {values}/>
            <br></br>
            <Indigestion values = {values}/>
          </div>
          <br></br><br></br>
          <div id = "responsediv">
          </div>
          

          <div id = "buts">
          <button id = "prevBut" onClick = {this.back}>
              Back
            </button>
          <button id = "nextBut" onClick = {this.continue}>
              Next
            </button>
        </div>

        </div>
    );
}
}

export default CallSelectSymptoms;