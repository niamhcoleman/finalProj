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

  setSelectedSymptom(event) {
    window.alert(event.target.value);
  }

  render() {

    return (
      <div  onChange={this.setSelectedSymptom.bind(this)}>
        
      <div style = {this.style.symptoms}>
      <form id = "sympForm">
      <p id = "symptomName">{ this.props.value }</p>
      <label class="container">
            <input align = "left" type="radio" name="radio" value = {this.props.value + " low"}/>
            <span class="checkmark" style= {this.style.low}></span>
            </label>
            <label class="container">
                <input align = "center"  type="radio" name="radio" value =  {this.props.value + " mod"}/>
            <span class="checkmark" style= {this.style.mod} ></span>
            </label>
            <label class="container">
                <input align = "right"  type="radio" name="radio"  value =  {this.props.value + " sev"}/>
            <span class="checkmark" style= {this.style.sev}></span>
            </label>
      </form>
            
        </div>

      </div>

    );
  }
}

export default SelectSymptoms;