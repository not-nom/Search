import { Component } from "react";

export default class CounterActions extends Component {
  render(){
    return (
      <div>
        <button onClick={this.props.decrement} data-step={1}>
          -
        </button>
        <button onClick={this.props.increment} data-step={1}>
          +
        </button>
      </div>
    );
  }
}