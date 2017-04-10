import React, { Component } from 'react';
import Clock from './Clock';

export default class Timer extends Component {

  constructor() {
    super();
    this.state = {
      time: new Date().toLocaleTimeString()
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString()
      })
    }, 1000);
  }

  render() {
    return <Clock time={this.state.time} />
  }
}

/*
  crear un array de objects, con la forma que quieran.
  crear un componente que renderize los datos de UN objeto,
  crear un componente que reciba un array de objetos,
  van a mapear por cada objeto, y van a listar cada objeto del componente.

  Cada componente que renderize los datos debe mostrar un reloj.

  en cada componente itemObjeto va a tener un boton,
  cuando presiones el boton, va a capturar la hora y la va a
  mostrar en una lista que esta dentro de este componente
*/