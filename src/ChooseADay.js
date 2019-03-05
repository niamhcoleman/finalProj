import React from 'react';
import DayPicker from 'react-day-picker';
import './ChooseADay.css';


import 'react-day-picker/lib/style.css';

export default class ChooseADay extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: null,
    };
  }
  handleDayClick(day, { selected }) {
    this.setState({
      selectedDay: selected ? undefined : day,
    });
    if (day != undefined)
    {
      //communicate with API. Find and display the information about the chosen date.
    }
  }

  render() {

    return (
      <div>
        <DayPicker
          selectedDays={this.state.selectedDay}
          onDayClick={this.handleDayClick}
          disabledDays={[
            {
              after: new Date(),
            },
          ]}
          
        />
        <p>
          {this.state.selectedDay ? this.state.selectedDay.toLocaleDateString() : 'Please Select a Day.'}
        </p>
      </div>
    );
  }
}