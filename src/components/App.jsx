import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <ul>
          <li>
            <button>Good</button>
          </li>
          <li>
            <button>Neutral</button>
          </li>
          <li>
            <button>Bad</button>
          </li>
        </ul>
        {/* <FeedbackOptions options={} onLeaveFeedback={}></FeedbackOptions> */}
        {/* <Statistics good={} neutral={} bad={} total={} positivePercentage={}></Statistics> */}
      </div>
    );
  }
}
