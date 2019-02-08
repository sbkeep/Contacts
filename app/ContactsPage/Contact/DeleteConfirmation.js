import { css } from 'react-emotion';
import { flex } from '../../styles';

const overlay = css`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(40,40,40,.2);
  z-index: 5;
`;

const boxStyle = css`
  display: flex;
  position: absolute;
  width: 100%;
  top: -10%;
  padding: 0 2rem;
  color: rgba(170,20,40,1);
`;

const button = css`
  ${flex};
  display: inline-flex;
  width: 4rem;
  margin-left: 1rem;
  border-radius: .2rem;
  background: rgba(100,100,100,1);
  color: white;
  cursor: pointer;
`;

const confirmButton = css`
  ${button};
  background: rgba(170,20,40,1);
`;

const DeleteConfirmation = props => {
  const { cancel, permanentlyDelete } = props;

  return (
    <>
      <div className={overlay} />
      <div className={boxStyle}>
        Permanently delete contact?
        <div className={button} onClick={cancel}>No</div>
        <div className={confirmButton} onClick={permanentlyDelete}>Yes</div>
      </div>
    </>
  );
};

DeleteConfirmation.propTypes = {
  cancel: PropTypes.func,
  permanentlyDelete: PropTypes.func,
};


export default DeleteConfirmation;
