import React, { Component } from 'react';

var users = [
  {
    name: "Luis",
    lastName: "Pedro"
  },
  {
    name: "Pedro",
    lastName: "Pedro"
  },
  {
    name: "Juana",
    lastName: "Banana"
  }
]

// Lifting state
export default class StopWatch extends Component {
  constructor(props) {
    super(props);
    var date = new Date();
    this.state = {
      time: date.toLocaleTimeString()
    }
    this.updateTime = this.updateTime.bind(this);
  }

  componentWillMount() {
    this.interval = setInterval(() => {
      this.updateTime()
    }, 1000)
  }

  updateTime() {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  }

  render() {
      var { time } = this.state;
      return (
      <ul>
        {
          users.map(({name, lastName}) => <li
            key={name}>
            <TareaItem
              name={name}
              lastName={lastName}
              time={time}
              onUpdateTime={this.updateTime}
            />
          </li>)
        }
      </ul>
    );
  }
}

class TareaItem extends Component {
  constructor() {
    super();
    this.state = {
      times: []
    };
    this.onItemClick = this.onItemClick.bind(this);
  }

  onItemClick() {
    this.props.onUpdateTime();
    this.setState({
      times: this.state.times.concat([this.props.time])
    });
  }

  render() {
    var { name, lastName, time } = this.props;
    var  { times } = this.state;
    return (
      <span>
        <button
          onClick={this.onItemClick}
        >
          Capturar Tiempo
        </button>
        <br/>
        {name} {lastName} <br/>
        {time}
        <br/>
        <ul>
          {
            times.map(time => <li key={time}>{ time }</li>)
          }
        </ul>
      </span>
    );
  }
}
