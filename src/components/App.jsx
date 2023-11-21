import React, { Component } from 'react';

import { Section } from './Section';
import { FeedbackOptions } from '../components/FeedbackOptions';

import { Statistics } from '../components/Statistics';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickFeedback = option => {
    this.setState(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total > 0 ? Math.round((this.state.good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <div>
          <Section title="Feedback Section">
            <FeedbackOptions
              options={Object.keys(this.state)}
              onClickFeedback={this.onClickFeedback}
            />
          </Section>
          <section>
            <h2>Statistics</h2>
            {total > 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positiveFeedback={positiveFeedback}
              />
            ) : (
              <p>There is no Feedback</p>
            )}
          </section>
        </div>
      </div>
    );
  }
}
