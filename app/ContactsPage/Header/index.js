import NewContactModal from './NewContactModal';

import plus from './plus.png';

import * as styles from './styles';

export default class Header extends React.Component {
  state = {
    showModal: false,
  };

  toggleModal = () => this.setState(prevState => ({
    showModal: !prevState.showModal
  }));

  search = e => {
    const searchQuery = e.currentTarget.value;
    this.props.searchContacts(searchQuery);
  };

  clearSearch = () => this.props.searchContacts('');

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.title}>Contacts</div>

        <div className={styles.searchBox}>
          <input
            type='text'
            spellCheck='false'
            value={this.props.searchQuery}
            onChange={this.search}
            className={styles.search}
            placeholder='Search'
          />
          { this.props.searchQuery &&
            <img src={plus} onClick={this.clearSearch} />
          }
        </div>


        <div className={styles.addButton} onClick={this.toggleModal}>
          <img src={plus} />
        </div>

        { this.state.showModal &&
            <NewContactModal
              closeModal={this.toggleModal}
              addContact={this.props.addContact}
            />
        }
      </div>
    );
  }
}

Header.propTypes = {
  searchQuery: PropTypes.string,
  addContact: PropTypes.func,
  searchContacts: PropTypes.func,
};
