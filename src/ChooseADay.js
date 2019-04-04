import React, { Component } from 'react';
import './ChooseADay.css';
import Calendar from 'react-calendar';


class ChooseADay extends Component {
  state = {
    date: new Date(),
    response: 'Please Select a Day.',
  }

  onClickDay = date => this.setState({ date })

  onChange = () => {
    var d = new Date(this.state.date)
    d = d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate()

    fetch('http://127.0.0.1:5001/history/getdayinfo/1/' + d, {method: 'GET'}).then((result) => {
        return result.text();
      }).then((textResult) => {
        if (textResult !== "{}\n")
        {
          this.setState({response: textResult});
        }
        else {
          this.setState({response: "No Results Found."});
        }

      })
  }

  render() {
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
          maxDate={new Date()}
          onClickDay = {this.onClickDay}
        />

      {this.state.response}
      </div>
    );
  }
}

export default ChooseADay;