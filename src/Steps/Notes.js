import React from 'react';
import './Notes.css';

class Notes extends React.Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }
    

  render() {
    const { handleChange} = this.props;

    return (
        <div>
        <p id = "heading"><u>Is There Anything You Would Like to Add?</u></p>

          <form>
            <div id = "temp">
            </div>
            <div id = "notesdiv">
            <textarea name="notes" rows="6" cols="45" onChange={handleChange('notes')}>
            
            </textarea>
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

export default Notes;