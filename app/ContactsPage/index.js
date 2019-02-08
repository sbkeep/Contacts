import Header from './Header';
import Contact from './Contact';
import Flyouts from './Flyouts';

import * as styles from './styles';

export default class ContactsPage extends React.Component {
  state = {
    contacts: [],
    searchQuery: '',
    createdContactNumber: '',
    restoredContactNumber: '',
    deletedContact: null,
  };

  componentDidMount() {
    this.loadContacts();
  }

  componentWillUnmount() {
    [this.addTimer, this.deleteTimer, this.restoreTimer].map(clearTimeout);
  }

  loadContacts = async () => {
    const contacts = await fetch('/api/contacts', { method: 'GET' })
      .then(res => res.json());

    this.setState({ contacts });
  };

  // Search contacts is setting searchQuery which is used to filter contacts in render method
  searchContacts = searchQuery => this.setState({ searchQuery });

  addContact = contact => {
    clearTimeout(this.addTimer);
    const contacts = [ ...this.state.contacts, contact ];
    const createdContactNumber = contact.number;

    this.setState({ contacts, createdContactNumber });

    // Recently created/restored contact number stored to display confirmation flyout for 4 seconds
    this.addTimer = setTimeout(() => this.setState({ createdContactNumber: '' }), 4000);
  };

  updateContact = async (contact, oldNumber) => {
    const request = new Request(
      `/api/contact/${oldNumber}`,
      {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact),
      },
    );

    const contacts = await fetch(request)
      .then(res => res.json());

    this.setState({ contacts });

    return;
  };

  deleteContact = contact => async () => {
    clearTimeout(this.deleteTimer);
    if (this.state.deletedContact) this.setState({ deletedContact: null });
    const contacts = await fetch(`/api/contact/${contact.number}`, { method: 'DELETE' })
      .then(res => res.json());


    this.setState({ contacts, deletedContact: contact });

    // Recently deleted contact stored for 9 seconds to be diplayed in Flyout
    this.deleteTimer = setTimeout(() => this.setState({ deletedContact: null }), 9000);
  };

  restoreContact = async () => {
    const contact = { ...this.state.deletedContact };
    const request = new Request('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contact),
    });

    const contacts = await fetch(request)
      .then(res => res.json());

    clearTimeout(this.restoreTimer);

    this.setState({
      contacts,
      deletedContact: null,
      restoredContactNumber: contact.number,
    });

    this.restoreTimer = setTimeout(() => this.setState({ restoredContactNumber: '' }), 4000);
  };


  render() {
    let contacts = [...this.state.contacts];

    // Put contacts in alphabetical order
    contacts.sort((a,b) =>
      a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

    // Filter contacts by search query if present
    const searchQuery = this.state.searchQuery.toLowerCase();
    if (searchQuery)
      contacts = contacts.filter(c =>
        c.name.toLowerCase().includes(searchQuery) ||
        c.number.toLowerCase().includes(searchQuery) ||
        c.context.toLowerCase().includes(searchQuery)
      );

    return (
      <div className={styles.wrapper}>
        <Header
          searchQuery={this.state.searchQuery}
          addContact={this.addContact}
          searchContacts={this.searchContacts}
        />

        { contacts.map(c =>
          <Contact
            contact={c}
            updateContact={this.updateContact}
            deleteContact={this.deleteContact(c)}
            isNew={[this.state.createdContactNumber, this.state.restoredContactNumber].includes(c.number)}
            key={c.number}
          />
        )}

        <Flyouts
          deletedContact={this.state.deletedContact}
          restoreContact={this.restoreContact}
          createdContactNumber={this.state.createdContactNumber}
          restoredContactNumber={this.state.restoredContactNumber}
        />
      </div>
    );
  }
}
