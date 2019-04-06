import React from 'react';
import './SelectEmotion.css';

class SelectEmotion extends React.Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const {handleChange, values} = this.props;

    return (
        <div onChange={handleChange('emotion')}>
        <p id = "heading"><u>How are you today?</u></p>
            <form>
                <div id = "emotionradio" >
                    <input type = "radio" value = "Happy" id = "Happy" name = "selector"/>
                    <label id = "emotionlabel" for="Happy">Happy</label>
                    <br/><br/><br/>
                    <input type = "radio" value = "ok" id = "ok" name = "selector"/>
                    <label id = "emotionlabel" for="ok">Okay</label>
                    <br/><br/><br/>
                    <input type = "radio" value = "Unhappy" id = "Unhappy" name = "selector"/>
                    <label id = "emotionlabel" for="Unhappy">Unhappy</label>
                    
                </div>
                </form>
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

export default SelectEmotion;