import React from 'react';
import SelectSymptoms from './SelectSymptoms';


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
      const {values, handleChange} = this.props;
      var arr=["Acne", "Vomit", "Bloat", "Indigestion"];
      var elements=[];
      for(var i=0;i<arr.length;i++){
           // push the component to elements
          elements.push(<SelectSymptoms value={ arr[i] } />);
      }

      return (
        <div> 
          <p id = "heading"><u>What Symptoms do you Have Today?</u></p>
          <div onChange = {handleChange('symptoms')}> 
            {elements} 
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