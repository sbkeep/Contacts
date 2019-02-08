import { css, keyframes } from 'react-emotion';
import { flex } from '../../styles';

const backgroundShift = keyframes`
  25% { background-position: 0 80% }
  50% { background-position: 80% 80% }
  75% { background-position: 80% 0 }
`;

export const wrapper = css`
  ${flex};
  z-index: 10;
  padding: 0 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 6rem;
  background: linear-gradient(rgba(68,161,198,1), rgba(106,171,164,1));
  background: radial-gradient(circle, rgba(68,161,198,1),  rgba(106,171,164,1), transparent),
              linear-gradient(rgba(106,171,164,1), rgba(68,161,198,1));

  background-size: 150%;
  animation: ${backgroundShift} 20s linear infinite;
  color: white;
`;


export const title = css`
  font-size: 2.2rem;
  line-height: 3.3rem;
  font-weight: 400;
  position: absolute;
  left: 2rem;
`;

export const searchBox = css`
  position: relative;
  display: flex;
  align-items: center;

    img {
      position: absolute;
      right: 1rem;
      width: 1.7rem;
      background: rgba(150,150,150,1);
      border-radius: 50%;
      transform: rotate(45deg);
      padding: .4rem;
      cursor: pointer;
    }
`;
export const search = css`
  width: 30rem;
  max-width: 40vw;
  height: 3.3rem;
  background: white;
  border-radius: .2rem;
  padding: .4rem .8rem;
  outline: none;
  box-shadow: none;
  border: none;
  font-size: 1.6rem;
  color: rgba(90,90,90,1);

    &::placeholder {
      opacity: .2;
      font-size: 1.4rem;
    }
`;

export const addButton = css`
  ${flex};
  position: absolute;
  right: 2rem;
  width: 3.3rem;
  height: 3.3rem;
  border-radius: 50%;
  background: rgba(20,50,70,1);
  background: rgba(20,65,90,1);
  font-size: 2rem;
  line-height: 4rem;
  cursor: pointer;
  transition: .5s;

  &:hover {
    transform: scale(1.07);
  }

    img {
      width: 50%;
    }
`;
