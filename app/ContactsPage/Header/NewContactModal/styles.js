import { css } from 'react-emotion';
import { flex, flexColumn, tablet } from '../../../styles';

export const wrapper = css`
  ${flex};
  position: fixed;
  z-index: 11;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(180,190,200,.6);
`;

export const modal = css`
  ${flexColumn};
  position: relative;
  padding: 2rem;
  width: 40rem;
  height: 25rem;
  border-radius: .4rem;
  background: white;
  color: rgba(100,100,100,1);

  ${tablet} {
    width: 90vw;
  }
`;

export const title = css`
  align-self: flex-start;
  font-size: 1.6rem;
  margin-bottom: 2rem;
`;
