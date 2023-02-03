import { Component } from 'react';

import CounterActions from './CounterActions';
import CounterDisplay from './CounterDisplay';

let inc = 0;

export default class Counter extends Component {
        state = {
            counter: 0,
            inc: 0,
        };
    
  componentDidMount(){
    console.log('Started')
  }
  componentDidUpdate(){
    console.log(this.state.inc+' times updated')
    this.setState((p) => ({
        inc: p.inc+1,
    }))
  }
  shouldComponentUpdate
  componentDidCatch
  decrement = (e) => {
    this.setState((prevState) => ({
      counter: prevState.counter - Number(e.target.dataset.step),
    }));
  };

  increment = (e) => {
    this.setState((prevState) => ({
      counter: prevState.counter + Number(e.target.dataset.step),
    }));
  };

  render() {
    return (
      <div>
        <CounterActions decrement={this.decrement} increment={this.increment} />
        <CounterDisplay counter={this.state.counter} />
      </div>
    );
  }
}