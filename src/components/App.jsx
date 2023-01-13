import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { FeedbackForm, FeedbackTitle, StatsTitle } from './App.styled';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onGoodMark = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };
  onNeutralMark = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  onBadMark = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };
  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    let positiveValue = (this.state.good / this.countTotalFeedback()) * 100;
    return Math.round(positiveValue) || 0;
  };
  render() {
    return (
      <FeedbackForm>
        <FeedbackTitle>Please leave feedback</FeedbackTitle>
        <FeedbackOptions
          onGoodMark={this.onGoodMark}
          onBadMark={this.onBadMark}
          onNeutralMark={this.onNeutralMark}
        />
        <StatsTitle>Statistics</StatsTitle>
        {this.countTotalFeedback() ? (
          <Statistics
            total={this.countTotalFeedback()}
            good={this.state.good}
            bad={this.state.bad}
            neutral={this.state.neutral}
            positiveValue={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification />
        )}
      </FeedbackForm>
    );
  }
}
