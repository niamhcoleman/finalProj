import React from 'react';
import './SelectSymptomsStyle.css';

class Indigestion extends React.Component {   
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
            <form >
            <p id = "symptomName">Indigestion</p>
                <div id = "syms">
                    <label class="container">
                        <input align = "left" type="radio" name="radio" value = "Indigestion 1"/>
                        <span class="checkmark" style= {this.style.low}></span>
                    </label>
                    <label class="container">
                        <input align = "center"  type="radio" name="radio" value =  "Indigestion 2"/>
                        <span class="checkmark" style= {this.style.mod} ></span>
                    </label>
                    <label class="container">
                        <input align = "right"  type="radio" name="radio"  value =  "Indigestion 3"/>
                        <span class="checkmark" style= {this.style.sev}></span>
                    </label>
                </div>
            </form>
            

          



        </div>
    );
}
}

export default Indigestion;