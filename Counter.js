import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      showAnimation: false, // State to control animation display
    };
  }

  Increment() {
    this.setState(
      (prevState) => ({
        count: prevState.count + 1,
        showAnimation: prevState.count + 1 === 100, // Trigger animation at 100
      }),
      () => {
        if (this.state.showAnimation) {
          // Reset animation state after a short delay
          setTimeout(() => {
            this.setState({ showAnimation: false });
          }, 2000); // Adjust the duration to match the animation
        }
      }
    );
  }

  Decrement() {
    this.setState((prevState) => ({
      count: prevState.count - 1,
      showAnimation: false, // Disable animation on decrement
    }));
  }

  render() {
    return (
      <>
        <center>
          <h1>INTERACTIVE COUNTER</h1>
          <div className={`container ${this.state.showAnimation ? 'show-animation' : ''}`}>
            <h2>Count: {this.state.count}</h2>
            {this.state.showAnimation && <h3 className="party-message">🎉 Count is 100! 🎉</h3>}
            <br />
            <br />
            <br />
            <br />
            <button onClick={this.Increment.bind(this)}>INCREMENT</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={this.Decrement.bind(this)}>DECREMENT</button>
          </div>
        </center>
      </>
    );
  }
}

export default Counter;
