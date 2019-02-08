import { injectGlobal } from 'emotion';
import { css } from 'react-emotion';


export const appWrapper = css`
  position: relative;
  width: 100vw;
  overflow-x: hidden;
`;

// Global
export const flex = css`
  display: flex;
  justify-content: center;
  align-items: center;
  align-contents: center;
`;

export const flexColumn = css`
  display: flex;
  flex-flow: column;
  align-items: center;
  align-contents: center;
`;

export const mobile = '@media only screen and (max-width: 700px)';
export const tablet = '@media only screen and (max-width: 1200px)';
export const midSize = '@media only screen and (max-width: 1600px)';
export const retina = '@media only screen and (min-width: 2200px)';

injectGlobal`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    width: 100vw;
    font-family: 'Quicksand';
    font-size: 16px;

    ${midSize} {
      font-size: 12px;
    }

    ${tablet} {
      font-size: 10px;
    }

    ${mobile} {
      font-size: 8px;
    }

    ${retina} {
      font-size: 26px;
    }
  }
`;
