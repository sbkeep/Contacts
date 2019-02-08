import { css } from 'react-emotion';
import { contactDetail, editingGreen } from '../styles';

export { contactField } from '../styles';

export const contactInput = css`
  ${contactDetail};
  outline: none !important;
  box-shadow: none;
  border: none;
  border-bottom: 1px solid rgba(150,150,150,.4);
  opacity: .7;
  transition: .4s;
  font-family: inherit;


  &:focus{
    opacity: 1;
    border-bottom-color: ${editingGreen};
  }
`;


export const errorInput = css`
  border-bottom-color: rgba(242,41,92,1);
`;


export const errorMessage = css`
  position: absolute;
  bottom: -1rem;
  width: 100%;
  text-align: center;
  color: red;
`;
