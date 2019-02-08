import { css } from 'react-emotion';
import { flex, flexColumn, mobile, tablet } from '../styles';

export const wrapper = css`
  display: flex;
  flex-wrap: wrap;
  position: relative
  width: 100vw;
  min-height: 100vh;
  background: rgba(247,249,244,1);
  padding-top: 9rem;
  padding-left: 2rem;

  ${tablet} {
    ${flex};
    padding-left: 0;
    align-items: flex-start;
  }

  ${mobile} {
    ${flexColumn};
    justify-content: flex-start;
  }
`;
