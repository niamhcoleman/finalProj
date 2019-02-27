import React, { Component } from 'react';
import { states } from './States.js';

export const Welcome = (props) => {
  return(

      <div>
          <p>To get started click below!</p>
        <button onClick={() => props.next(states.VEHICLE_CHOOSE)}>Start Tracking</button>
      </div>

  );
}

export class VehicleChoose extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      errors: []
    };
    this._onChange = this._onChange.bind(this);
    this._validate = this._validate.bind(this);
  }

  _onChange(e, { value }) {
    this.setState({ 
      value: value,
      errors: []
    });
  }

  _validate(e) {
    e.preventDefault();
    let value = this.state.value;
    if (value === 'car') {
      this.props.next(states.CAR);
    } else if (value === 'boat') {
      this.props.next(states.BOAT);
    } else {
      this.setState({
        errors: ['Please choose a vehicle type']
      });
    }
  }

  _back() {
    this.props.back(states.WELCOME)
  }

  render() {
    return(
      <form>
        { this.state.errors.length > 0 &&
          <p>{this.state.errors.join('. ')}</p>

        }

          <label>I am insuring:</label>
          <input type = "radio" label = "A Boat" value = "boat" checked={this.state.value === 'boat'} onChange={this._onChange}/>
          <input type = "radio" label = "A Car" value = "car" checked={this.state.value === 'car'} onChange={this._onChange}/>

            <button onClick={this._back}>Back</button>

            <button onClick={this._validate}>Next</button>

       </form>
    );
  }
}

class BaseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: this.props.type,
      make: null,
      model: null,
      value: null,
      length: null,
      errors: []
    }
    this._onChange = this._onChange.bind(this);
    this._validate = this._validate.bind(this);
    this._back = this._back.bind(this);
  }

  _back(e) {
    e.preventDefault();
    this.props.back(states.VEHICLE_CHOOSE);
  }

  _onChange(e, { name, value }) {
    this.setState({
      [name]: value
    });
  }

  _validate(e) {
    e.preventDefault();
    // You can add your validation logic here

    this.props.saveForm({
      type: this.props.type,
      make: this.state.make,
      model: this.state.model,
      year: this.state.year
    });

    this.props.next(this.props.nextState);
  }
    
  render() {
    return(
      <form>
        { this.state.errors.length > 0 &&
          <p>{this.state.errors.join('. ')}</p>
        }
        <h2>{this.props.type} details:</h2>

        <input type = "text" name = "make" value = {this.state.make} onChange = {this._onChange} label = "Make" placeholder = "Make"/>

        <input type = "text" name='model' value = {this.state.make} onChange = {this._onChange} label = "Model" placeholder = "Model"/>

        <input type = "text" name='year' value = {this.state.make} onChange = {this._onChange} label = "Year" placeholder = "Year"/>




          {this.props.type === 'Boat' &&
            <input 
              name='length'
              value={this.state.length}
              onChange={this._onChange}
              label='Length' 
              placeholder='Length'/>
          }


            <button onClick={this._back}>Back</button>

            <button onClick={this._validate}>Next</button>

      </form>
    );
  }
}

export const BoatForm = (props) => {
  return(
    <BaseForm
      type='Boat'
      next={props.next}
      back={props.back}
      saveForm={props.saveForm}
      nextState={states.BOAT_DETAIL}/>
  );
}

export const CarForm = (props) => {
  return(
    <BaseForm
      type='Car'
      next={props.next}
      back={props.back}
      saveForm={props.saveForm}
      nextState={states.CONFIRM}/>
  );
}

export class BoatDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this._onChange = this._onChange.bind(this);
    this._validate = this._validate.bind(this);
  }
  _onChange(e) {

  }

  _validate(e) {
    // You can add validation logic here
    this.props.next(states.CONFIRM)
  }

  render() {

    return(
      <form>
        <h2>Boat History</h2>
        <select name = "select" placeholder = "select answer">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Don't Know">Don't Know</option>
        </select>
            <label>Has your boat been involved with piracy in the past 12 months?</label>

            <button onClick={() => this.props.back(states.BOAT)}>Back</button>

            <button onClick={this._validate}>Next</button>

      </form>
    );
  }
}

export class Confirm extends React.Component {
  render() {
    /*
     * Here is our final step. In the real world, we would
     * obviously do something more complicated than a javascript
     * alert
     */
    return(
        <div>
            <p>Your Vehicles:</p>

            <button onClick={() => alert('Finished!')}>Get quote</button>

        </div>

          
    );
  }
}