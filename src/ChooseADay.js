import React, { Component } from 'react';
import './ChooseADay.css';
import Calendar from 'react-calendar';


class ChooseADay extends Component {
  state = {
    date: new Date(),
    response: 'Please Select a Day.',

    morning_sym: ' ',
    morning_n: ' ',
    morning_e: ' ',

    afternoon_sym: ' ',
    afternoon_n: ' ',
    afternoon_e: ' ',

    evening_sym: ' ',
    evening_n: ' ',
    evening_e: ' ',

    night_sym: '',
    night_n: ' ',
    night_e: ' ',
  }

  onClickDay = date => {
    //reset these values so they don't still appear or stack up when user clicks another/reclicks day
    this.setState({morning_sym: " "});
    this.setState({morning_n: " "});
    this.setState({morning_e: " ",})

    this.setState({afternoon_sym: " "});
    this.setState({afternoon_n: " "});
    this.setState({afternoon_e: " ",})

    this.setState({evening_sym: " "});
    this.setState({evening_n: " "});
    this.setState({evening_e: " ",})

    this.setState({night_sym: " "});
    this.setState({night_n: " "});
    this.setState({night_e: " ",})

    this.setState({ date })
  }


  onChange = () => {
    //for formatting the input date to format YYYY/MM/DD
    var d = new Date(this.state.date)
    d = d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate()

    fetch('http://127.0.0.1:5001/history/getdayinfo/1/' + d, {method: 'GET'})
    .then(response => {
      return response.json()
    })
    .then(data => {
      var s = JSON.stringify(data);

      if (s == "{}") //then there are no results
      {
        this.setState({response: "No symptoms were tracked on this day."});
      }
      else
      {
        this.setState({response: d});
        var x = JSON.parse(s);
        var i = 0;
        var current = '';

        //symptom results from json response

        //MORNING
        if (x.morning !== undefined)
        {
          for (i = 0; i< x.morning.length; i++)
          {
            current = x.morning[i];

            this.setState({morning_sym: this.state.morning_sym + " " + current + " ,"});
          }
        }
        if (x.morning_note !== undefined)
        {
          for (i = 0; i< x.morning_note.length; i++)
          {
            current = x.morning_note[i];

            this.setState({morning_n: this.state.morning_n + current + " "});
          }
        }
        if (x.morning_emo !== undefined)
        {
          for (i = 0; i< x.morning_emo.length; i++)
          {
            current = x.morning_emo[i];
            if (current == "1")
            {
              current = "unhappy";
            }
            else if (current  == "2")
            {
              current = "okay";
            }
            else if (current  == "3")
            {
              current = "happy";
            }
            this.setState({morning_e: this.state.morning_e + current + " "});
          }
        }

        //AFTERNOON
        if (x.afternoon !== undefined)
        {
          for (i = 0; i< x.afternoon.length; i++)
          {
            current = x.afternoon[i];

            this.setState({afternoon_sym: this.state.afternoon_sym + " " + current + " ,"});
          }
        }
        if (x.afternoon_note !== undefined)
        {
          for (i = 0; i< x.afternoon_note.length; i++)
          {
            current = x.afternoon_note[i];

            this.setState({afternoon_n: this.state.afternoon_n + current + " "});
          }
        }
        if (x.afternoon_emo !== undefined)
        {
          for (i = 0; i< x.afternoon_emo.length; i++)
          {
            current = x.afternoon_emo[i];
            if (current == "1")
            {
              current = "unhappy";
            }
            else if (current  == "2")
            {
              current = "okay";
            }
            else if (current  == "3")
            {
              current = "happy";
            }
            this.setState({afternoon_e: this.state.afternoon_e + current + " "});
          }
        }

        //EVENING
        if (x.evening !== undefined)
        {
          for (i = 0; i< x.evening.length; i++)
          {
            current = x.evening[i];

            this.setState({evening_sym: this.state.evening_sym + " " + current + " ,"});
          }
        }
        if (x.evening_note !== undefined)
        {
          for (i = 0; i< x.evening_note.length; i++)
          {
            current = x.evening_note[i];
            this.setState({evening_n: this.state.evening_n + " " + current + " "});
          }
        }
        if (x.evening_emo !== undefined)
        {
          for (i = 0; i< x.evening_emo.length; i++)
          {
            current = x.evening_emo[i];
            if (current == "1")
            {
              current = "unhappy";
            }
            else if (current  == "2")
            {
              current = "okay";
            }
            else if (current  == "3")
            {
              current = "happy";
            }
            this.setState({evening_e: this.state.evening_e + current + " "});
          }
        }

        //NIGHT
        if (x.night !== undefined)
        {
          for (i = 0; i< x.night.length; i++)
          {
            current = x.night[i];

            this.setState({night_sym: this.state.night_sym + " " + current + " ,"});
          }
        }
        if (x.night_note !== undefined)
        {
          for (i = 0; i< x.night_note.length; i++)
          {
            current = x.night_note[i];
            this.setState({night_n: this.state.night_n + " " + current + " "});
          }
        }
        if (x.night_emo !== undefined)
        {
          for (i = 0; i< x.night_emo.length; i++)
          {
            current = x.night_emo[i];
            if (current == "1")
            {
              current = "unhappy";
            }
            else if (current  == "2")
            {
              current = "okay";
            }
            else if (current  == "3")
            {
              current = "happy";
            }
            this.setState({night_e: this.state.night_e + " " + current + " "});
          }
        }
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

      <p id = "response">{this.state.response}</p>
      <hr></hr>
      <p id = "tod_heading">Morning:</p>
      <p id = "info-heading">Symptoms:</p> {this.state.morning_sym}<br/>
      <p id = "info-heading">Notes: </p>{this.state.morning_n}<br/>
      <p id = "info-heading">Emotion(s): </p>{this.state.morning_e}<br/>

      <hr></hr>

      <p id = "tod_heading">Afternoon:</p>
      <p id = "info-heading">Symptoms:</p> {this.state.afternoon_sym}<br/>
      <p id = "info-heading">Notes: </p>{this.state.afternoon_n}<br/>
      <p id = "info-heading">Emotion(s): </p>{this.state.afternoon_e}<br/>

      <hr></hr>

      <p id = "tod_heading">Evening:</p>
      <p id = "info-heading">Symptoms:</p> {this.state.evening_sym}<br/>
      <p id = "info-heading">Notes: </p>{this.state.evening_n}<br/>
      <p id = "info-heading">Emotion(s): </p>{this.state.evening_e}<br/>

      <hr></hr>

      <p id = "tod_heading">Night:</p>
      <p id = "info-heading">Symptoms:</p> {this.state.night_sym}<br/>
      <p id = "info-heading">Notes: </p>{this.state.night_n}<br/>
      <p id = "info-heading">Emotion(s): </p>{this.state.night_e}<br/>

      </div>
    );
  }
}

export default ChooseADay;