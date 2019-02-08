import cx from 'classnames';

import checkmark from './whiteCheck.png';

import * as styles from './styles';

const Flyouts = props => {
  const {
    deletedContact,
    restoreContact,
    createdContactNumber,
    restoredContactNumber,
  } = props;


  const createdText = restoredContactNumber ? 'restored' : 'created';

  return (
    <>
      <div
        className={cx(
          styles.deletedFlyout,
          deletedContact && styles.display,
        )}>
        <div>
        Contact deleted:
          <br/>
          {deletedContact &&
            <p>
              {deletedContact.name}
              <br/>
              {deletedContact.number}
            </p>
          }
        </div>

        <div className={styles.restoreButton} onClick={restoreContact}>
          { deletedContact && <div className={styles.restoreTimer} /> }
          <span>Undo</span>
        </div>
      </div>


      <div
        className={cx(
          styles.createdFlyout,
          (createdContactNumber || restoredContactNumber) && styles.display
        )}>
        Contact {createdText}
        <img src={checkmark} />
      </div>

    </>
  );
};

Flyouts.propTypes = {
  deletedContact: PropTypes.exact({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    context: PropTypes.string.isRequired,
  }),
  restoreContact: PropTypes.func,
  createdContactNumber: PropTypes.string,
  restoredContactNumber: PropTypes.string,
};


export default Flyouts;
