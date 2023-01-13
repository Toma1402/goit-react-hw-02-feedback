import { StatsList, StatsItem } from './Statistics.styled';
export const Statistics = ({ total, good, bad, neutral, positiveValue }) => {
  return (
    <StatsList>
      <StatsItem>Good: {good}</StatsItem>
      <StatsItem>Neutral: {neutral}</StatsItem>
      <StatsItem>Bad: {bad}</StatsItem>
      <StatsItem>Total: {total}</StatsItem>
      <StatsItem>Positive feedback: {positiveValue}%</StatsItem>
    </StatsList>
  );
};
