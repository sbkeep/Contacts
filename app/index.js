import ReactDOM from 'react-dom';

import ContactsPage from './ContactsPage';

import * as styles from './styles';

class App extends React.Component {
  render() {
    return (
      <div className={styles.appWrapper}>
        <ContactsPage />
      </div>
    );
  }
}

window.onload = () => {
  ReactDOM.render(<App />, document.getElementById('app'));
};
