import EditContact from '../../Contact/EditContact';

import * as styles from './styles';

export default class NewContactModal extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.blockScroll);
    this.scrollX = window.scrollX;
    this.scrollY = window.scrollY;
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.blockScroll);
  }

  blockScroll = () => {
    window.scrollTo(this.scrollX, this.scrollY);
  };

  createContact = async (contact) => {
    const request = createRequest(contact);

    const response = await fetch(request)
      .then(res => res.json())
      .catch(err => err);

    if (!response.error) {
      this.props.addContact(contact);
      this.props.closeModal();
    }
  };

  render() {
    const freshContact = { name: '', number: '', context: '' };

    return (
      <div className={styles.wrapper} onScroll={this.blockScroll}>
        <div className={styles.modal}>

          <div className={styles.title}>New Contact</div>

          <EditContact
            contact={freshContact}
            save={this.createContact}
            cancel={this.props.closeModal}
            newContactModal={true}
          />


        </div>
      </div>
    );
  }
}

NewContactModal.propTypes = {
  closeModal: PropTypes.func,
  addContact: PropTypes.func,
};


const createRequest = contact => {
  return new Request('/api/contact', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(contact),
  });
};
