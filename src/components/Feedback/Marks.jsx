import { Btn, BtnList } from './Marks.styled';
export const Marks = ({ onGoodMark, onNeutralMark, onBadMark }) => (
  <BtnList>
    <Btn onClick={onGoodMark}>Good</Btn>
    <Btn onClick={onNeutralMark}>Neutral</Btn>
    <Btn onClick={onBadMark}>Bad</Btn>
  </BtnList>
);
