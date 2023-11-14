import React from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistiks';

export const Feedback = ({
  feedbackState,
  onClickFeedback,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  const { good, neutral, bad } = feedbackState;
  const total = countTotalFeedback();
  const positiveFeedback = countPositiveFeedbackPercentage();

  return (
    <div>
      <section>
        <FeedbackOptions
          options={Object.keys(feedbackState)}
          onClickFeedback={onClickFeedback}
        />
      </section>
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
  );
};
