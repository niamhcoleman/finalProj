import React from 'react';
import './Notes.css';

class Notes extends React.Component {
    constructor(props) {
        super(props);
    

      }
    

  render() {

    return (
        <div>
        <p id = "heading"><u>Is There Anything You Would Like to Add?</u></p>

          <form>
            <div id = "temp">
            </div>
            <div id = "notesdiv">
            <textarea name="notes" rows="6" cols="45">
            Today I ate in McDonalds.
              </textarea>
            </div>
              
          </form>
          <div id = "buts">
          <button id = "nextBut">
            Save
          </button>
          </div>
          
        </div>
    );
  }
}

export default Notes;