import React from 'react';
import './SelectEmotion.css';

class SelectEmotion extends React.Component {
  constructor(props) {
    super(props);    

    this.style = {};

  };

  setSelectedEmotion(event) {
    window.alert(event.target.value);
  }

  render() {

    return (
        <div onChange={this.setSelectedEmotion.bind(this)}>
        <p id = "heading"><u>How are you today?</u></p>
            <form>
                <div id = "emotionradio" >
                    <input type = "radio" value = "Unhappy" id = "Unhappy" name = "selector"/>
                    <label id = "emotionlabel" for="Unhappy">Unhappy</label>
                    <br/><br/><br/>
                    <input type = "radio" value = "Meh" id = "Meh" name = "selector"/>
                    <label id = "emotionlabel" for="Meh">Meh</label>
                    <br/><br/><br/>
                    <input type = "radio" value = "Happy" id = "Happy" name = "selector"/>
                    <label id = "emotionlabel" for="Happy">Happy</label>
                </div>
                </form>
        </div>
    );
  }
}

export default SelectEmotion;