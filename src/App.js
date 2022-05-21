import logo from './logo.svg';
import './App.css';
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      distance: 0,
      endDate: new Date(),
    };
  }

  componentDidMount() {
    this.startInterval();
  }

  startInterval = () => {
    // console.log(new Date());
    let that = this;

    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    let x = setInterval(function () {
      that.setState({
        distance: that.state.endDate.getTime() - new Date().getTime(),
      });

      if (that.state.distance > 0) {
        document.getElementById('days').innerHTML = that.form(
          Math.floor(that.state.distance / day)
        );
        document.getElementById('hours').innerHTML = that.form(
          Math.floor((that.state.distance % day) / hour)
        );
        document.getElementById('mins').innerHTML = that.form(
          Math.floor((that.state.distance % hour) / minute)
        );
        document.getElementById('seconds').innerHTML = that.form(
          Math.floor((that.state.distance % minute) / second)
        );
      } else {
        document.getElementById('days').innerHTML = '00';
        document.getElementById('hours').innerHTML = '00';
        document.getElementById('mins').innerHTML = '00';
        document.getElementById('seconds').innerHTML = '00';
      }
    }, second);
  };

  form = (value) => (value < 10 ? '0' + value : value);

  handleChange = (e) => {
    this.setState({ endDate: e });
  };

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='head'>React Countdown</h1>
        </header>

        <div className='date-picker'>
          <DatePicker
            className='form-control'
            selected={this.state.endDate}
            dateFormat='EEEE, MMM d, yyyy'
            onChange={(e) => this.handleChange(e)}
          />
        </div>

        <div id='countdown'>
          <ul>
            <li>
              <span id='days'></span>Days
            </li>
            <li>
              <span id='hours'></span>Hours
            </li>
            <li>
              <span id='mins'></span>Mins
            </li>
            <li>
              <span id='seconds'></span>Seconds
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
