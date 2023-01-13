import { Btn, BtnList } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ onGoodMark, onNeutralMark, onBadMark }) => (
  <BtnList>
    <Btn onClick={onGoodMark}>Good</Btn>
    <Btn onClick={onNeutralMark}>Neutral</Btn>
    <Btn onClick={onBadMark}>Bad</Btn>
  </BtnList>
);
