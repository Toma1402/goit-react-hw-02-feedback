import React, { Component } from 'react';
import {
  FeedbackForm,
  FeedbackTitle,
  StatsList,
  StatsItem,
} from './Feedback.styled';
import { Marks } from './Marks';
export class Feedback extends Component {
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
  render() {
    return (
      <FeedbackForm>
        <FeedbackTitle>Please leave feedback</FeedbackTitle>
        <Marks
          onGoodMark={this.onGoodMark}
          onBadMark={this.onBadMark}
          onNeutralMark={this.onNeutralMark}
        />
        <h2>Statistics</h2>
        <StatsList>
          <StatsItem>
            Good:
            <span> {this.state.good}</span>
          </StatsItem>
          <StatsItem>
            Neutral:
            <span> {this.state.neutral}</span>
          </StatsItem>
          <StatsItem>
            Bad:
            <span> {this.state.bad}</span>
          </StatsItem>
        </StatsList>
      </FeedbackForm>
    );
  }
}
