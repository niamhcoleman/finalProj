/*import React from 'react';
import './SelectTimeOfDay.css';


export default class SelectTimeOfDay extends React.Component {

  setSelectedTimeOfDay(event) {
    window.alert(event.target.value);
  }

  render() {

    return (
    
    <div onChange={this.setSelectedTimeOfDay.bind(this)}>
      <p id = "heading"><u>Please Choose a Time of Day:</u></p>
           <form>
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
        </div>
        
    );
  }
}*/

import React from 'react';
import './SelectTimeOfDay.css';


export default class SelectTimeOfDay extends React.Component {

  state = {
    chosenTOD: ' ',
  }

  onChange = (e) => {
    this.setState({
      chosenTOD: e.target.value,
    });
  }

  render() {

    return (
    
      <div>
      <p id = "heading"><u>Please Choose a Time of Day: </u></p>
           <form onChange={this.onChange}>
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
        </div>
    );
  }

}