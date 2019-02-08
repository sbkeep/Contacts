import { css } from 'react-emotion';
import { flex } from '../../../styles';

const actionBox = css`
  ${flex};
  position: absolute;
  bottom: 0;
  right: 0;
`;

const button = css`
  ${flex};
  width: 5.5rem;
  height: 2rem;
  margin: .4rem .8rem;
  border-radius: .16rem;
  color: white;
  cursor: pointer;
  opacity: .6;
  transition: .2s;

  &:hover {
    transform: scale(1.04);
    opacity: 1;
    transition: .5s;
  }
`;

const cancelButton = css`
  ${button};
  background: rgba(40,40,40,.5);

`;

const saveButton = css`
  ${button};
  background: rgba(50,140,140,1);
`;

const ActionButtons = props => {
  const { cancel, save } = props;
  return (
    <div className={actionBox}>
      <div className={cancelButton} onClick={cancel}>Cancel</div>
      <div className={saveButton} onClick={save}>Save</div>
    </div>
  );
};

ActionButtons.propTypes = {
  cancel: PropTypes.func,
  save: PropTypes.func,
};

export default ActionButtons;
