import cx from 'classnames';

import validateFields from './validateFields';
import { cleanNumber, stripInvalidChars } from './cleanNumber';

import ActionButtons from './ActionButtons';

import * as styles from './styles';

export default class EditContact extends React.Component {
  constructor(props) {
    super();

    this.state = {
      contact: { ...props.contact},
      fieldErrors: [],
    };
  }

  updateField = field => e => {
    const { contact } = this.state;
    let value = e.currentTarget.value;

    // Retrict number input
    if (field === 'number') value = stripInvalidChars(value);

    contact[field] = value;

    let { fieldErrors } = this.state;

    // If errors are present we re-validate on each change to dismiss errors in real time
    if (fieldErrors.length > 0) {
      const cleanContact = { ...contact };
      // All numbers are stored in format +484828282, cleaned and validated in that format as well
      cleanContact.number = cleanNumber(contact.number);
      fieldErrors = validateFields(cleanContact);
      return this.setState({ contact, fieldErrors });
    }

    this.setState({ contact });
  };

  save = () => {
    const { contact } = this.state;
    // All numbers are stored in format +484828282, cleaned and validated in that format as well
    contact.number = cleanNumber(contact.number);
    const fieldErrors = validateFields(contact);

    // Track and display errors if present
    if (fieldErrors.length > 0) return this.setState({ fieldErrors });

    this.props.save(contact);
  };

  render() {
    const { newContactModal } = this.props;
    const { contact, fieldErrors } = this.state;

    const contactFields = ['name', 'number', 'context'];

    // Possible error messages with field name as the key so this can easily be expanded
    const errorMessages = {
      name: 'Name is required',
      number: 'Enter valid number e.g. (415) 220-4001 or +43 234-282-4822',
    };

    return (
      <>
        { contactFields.map(f => {
          const error = fieldErrors.includes(f)
            ? errorMessages[f]
            : null;

          return (
            <div className={styles.contactField} key={f}>
              <span style={{ fontSize: newContactModal ? '1.3rem' : ''}}>{f}:</span>
              <input
                type='text'
                spellCheck='false'
                className={cx(styles.contactInput, error && styles.errorInput)}
                value={contact[f]}
                onChange={this.updateField(f)}
                maxLength={f === 'number' ? 23 : undefined }
              />
              {error &&
                <span className={styles.errorMessage}>{error}</span>
              }
            </div>
          );
        })}

        <ActionButtons cancel={this.props.cancel} save={this.save} />
      </>
    );
  }
}


EditContact.propTypes = {
  contact: PropTypes.exact({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    context: PropTypes.string.isRequired,
  }),
  save: PropTypes.func,
  cancel: PropTypes.func,
  newContactModal: PropTypes.bool,
};
