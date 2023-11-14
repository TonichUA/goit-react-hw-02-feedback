import React, { useState } from 'react';
import { Feedback } from '../components/Feedback';
import { Section } from './Section';

export const App = () => {
  const [feedbackState, setFeedbackState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onClickFeedback = option => {
    setFeedbackState(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return feedbackState.good + feedbackState.neutral + feedbackState.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total > 0 ? Math.round((feedbackState.good / total) * 100) : 0;
  };

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
      <Section title="Please leave feedback">
        <Feedback
          feedbackState={feedbackState}
          onClickFeedback={onClickFeedback}
          countTotalFeedback={countTotalFeedback}
          countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
        />
      </Section>
    </div>
  );
};
