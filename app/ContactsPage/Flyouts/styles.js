import { css, keyframes } from 'react-emotion';

const flyout = css`
  position: fixed;
  bottom: 0;
  transition: .3s;
  color: white;
  font-size: 1.5rem;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
`;



export const createdFlyout = css`
  ${flyout};
  right: 0;
  transform: translateX(20rem);
  width: 20rem;
  height: 5rem;
  background: rgba(40,170,90,1);
  border-radius: .2rem 0 0 .2rem;

    img {
      width: 1.7rem;
      margin-left: 1.4rem;
      margin-bottom: .1rem;
    }
`;

export const deletedFlyout = css`
  ${flyout};
  justify-content: space-between;
  left: 0;
  transform: translateX(-30rem);
  width: 30rem;
  height: 5rem;
  padding-left: 1rem;
  background: rgba(200,30,80,1);
  border-radius: 0 .2rem .2rem 0;

  p {
    font-size: 1.1rem;
    margin-top: .1rem;
  }
`;


export const restoreButton = css`
  position: relative;
  height: 100%;
  padding: 0 1rem;
  background: rgba(100,15,40,1);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: .3s;
  font-size: 1.3rem;

  &:hover {
    background: rgba(100,15,40,.7);
  }

    span {
      position: relative;
    }
`;


const shrink = keyframes`
  0% { width: 100%; }
  100% { width: 0%; }
`;

export const restoreTimer = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-top: .3rem solid rgba(200,30,80,1);
  border-bottom: .3rem solid rgba(200,30,80,1);
  animation: ${shrink} 10s;
`;


export const display = css`
  transform: translateX(0);
  transition: .4s;
`;
