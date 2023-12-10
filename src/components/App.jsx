import React, { useState } from 'react';
import styled from 'styled-components';

const FeedbackOptions = ({ options, onClickFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <Buttons key={option} onClick={() => onClickFeedback(option)}>
          {option}
        </Buttons>
      ))}
    </div>
  );
};

const Buttons = styled.button`
  background-color: gray;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  margin: 8px 4px;
  transition-duration: 0.4s;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    border: 2px solid #4caf50;
  }
`;

const Section = ({ title, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {positiveFeedback}%</li>
    </ul>
  );
};

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const onClickFeedback = option => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total > 0 ? Math.round((feedback.good / total) * 100) : 0;
  };

  const { good, neutral, bad } = feedback;
  const total = countTotalFeedback();
  const positiveFeedback = countPositiveFeedbackPercentage();

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
            options={Object.keys(feedback)}
            onClickFeedback={onClickFeedback}
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
};
