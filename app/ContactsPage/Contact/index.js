import cx from 'classnames';

import EditContact from './EditContact';
import DeleteConfirmation from './DeleteConfirmation';

import formatNumber from './formatNumber';

import pencil from './assets/pencil.png';
import trash from './assets/trash.png';

import * as styles from './styles';


export default class Contact extends React.Component {
  state = {
    editing: false,
    deleting: false,
  };

  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  edit = () => this.setState({ editing: true });

  cancel = () => this.setState({ editing: false, });

  save = async contact => {
    // Numbers are used as ids, old number preserved to identify associated record on backend
    const oldNumber = this.props.contact.number;
    await this.props.updateContact(contact, oldNumber);
    if (this.mounted) this.setState({ editing: false });
  };

  delete = () => this.setState({ deleting: true });

  cancelDelete = () => this.setState({ deleting: false });

  render() {
    const { contact, isNew } = this.props;
    const { editing, deleting } = this.state;

    // Mapping through name fields so it would be easy to add more fields
    const contactFields = ['name', 'number', 'context'];

    // Format display number in +44 (222) 555-2822 format
    const formattedNumber = formatNumber(contact.number);

    // It's nice to have friends in high up places
    const isSpecial = contact.name.toLowerCase() === 'god';

    return (
      <div className={cx(
        styles.box,
        editing && styles.editingBox,
        deleting && styles.deletingBox,
        isNew && styles.newBox,
        isSpecial && styles.special,
      )}>

        { deleting &&
            <DeleteConfirmation
              cancel={this.cancelDelete}
              permanentlyDelete={this.props.deleteContact}
            />
        }

        {/*  Would use ternary but hover state was being persisted for a split second */}
        { !editing &&
          <img src={pencil} className={styles.pencil} onClick={this.edit} />
        }
        { editing &&
          <img src={trash} className={styles.trash} onClick={this.delete} />
        }

        { editing
          ? (
            <EditContact
              contact={contact}
              save={this.save}
              cancel={this.cancel}
            />
          ) : (
            contactFields.map(f =>
              <div className={styles.contactField} key={f}>
                <span>{f}:</span>
                <div className={styles.contactDetail}>{ f === 'number' ? formattedNumber : contact[f] }</div>
              </div>
            ))
        }

      </div>
    );
  }
}


Contact.propTypes = {
  contact: PropTypes.exact({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    context: PropTypes.string.isRequired,
  }),
  updateContact: PropTypes.func,
  deleteContact: PropTypes.func,
  isNew: PropTypes.bool,
};
