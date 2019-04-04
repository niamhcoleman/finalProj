import React, { Component } from 'react';
import './SelectTimeOfDay.css';

export class TimeOfDay extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
  render() {
    //so I cacn use values as a var instead of this.props.values
    const {handleChange} = this.props;
    return (
      <div>
        <p id = "heading"><u>Please Choose a Time of Day: </u></p>
        <form onChange={handleChange('timeofday')}>
            <div id="timeofdayradio">
              <input type="radio" id="option-one" value = "morning" name="selector"/>
              <label id = "timeofdaylabel" for="option-one">Morning</label>
                <br/><br/><br/>
              <input type="radio" id="option-two" value = "afternoon"  name="selector"/>
              <label id = "timeofdaylabel" for="option-two">Afternoon</label>
                <br/><br/><br/>
              <input type="radio" id="option-three" value = "evening" name="selector"/>
              <label id = "timeofdaylabel" for="option-three">Evening</label>
                <br/><br/><br/>
              <input type="radio" id="option-four" value = "night" name="selector"/>
              <label id = "timeofdaylabel" for="option-four">Night</label>
            </div>
        </form>
        <div id = "buts">
          <button id = "nextBut" onClick = {this.continue}>
              Next
            </button>
        </div>
      </div>
    )
  }
}
export default TimeOfDay;