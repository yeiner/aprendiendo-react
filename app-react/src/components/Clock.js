import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  /**Metodo de ciclo de vida. Montaje.
        Se ejecuta después que la salida del componente ha sido renderizada con el DOM. 
    ***/
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  //Metodo de ciclo de vida. Desmontaje.
  componentWillUnmount() {
      clearInterval(this.timerID);
  }

  tick() {
    this.setState({
        date : new Date()
    });
  }
  render() {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()} .</h2>
      </div>
    );
  }
}

export default Clock;
