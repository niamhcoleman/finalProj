import React from 'react';
import './SelectSymptomsStyle.css';

class SelectSymptoms extends React.Component {
  constructor(props) {
    super(props);    

    this.style = {};

      this.style.low = {
        backgroundColor: "yellow",
      }

      this.style.mod = {
        backgroundColor: "orange",
      }

      this.style.sev = {
        backgroundColor: "red",
      }

  };


  render() {

    return (
      <div>
        
      <div>
      <form id = "sympForm">
      <p id = "symptomName">{ this.props.value }</p>
      <label class="container">
            <input align = "left" type="radio" name="radio" value = {this.props.value + " 1"}/>
            <span class="checkmark" style= {this.style.low}></span>
            </label>
            <label class="container">
                <input align = "center"  type="radio" name="radio" value =  {this.props.value + " 2"}/>
            <span class="checkmark" style= {this.style.mod} ></span>
            </label>
            <label class="container">
                <input align = "right"  type="radio" name="radio"  value =  {this.props.value + " 3"}/>
            <span class="checkmark" style= {this.style.sev}></span>
            </label>
      </form>
            
        </div>

      </div>

    );
  }
}

export default SelectSymptoms;
