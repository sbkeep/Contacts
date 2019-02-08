import ContactsPage from './index';

import Header from './Header';
import Contact from './Contact';
import Flyouts from './Flyouts';

describe('Contacts Page', () => {
  const wrapper = shallow(<ContactsPage />, { disableLifecycleMethods: true });

  describe('Initial state', () => {
    it('should display header', () =>
      expect(wrapper.find(Header)).toHaveLength(1)
    );

    it('should have flyouts mounted', () =>
      expect(wrapper.find(Flyouts)).toHaveLength(1)
    );

    it('should not display any contacts', () =>
      expect(wrapper.find(Contact)).toHaveLength(0)
    );
  });


  describe('Loaded state', () => {
    const contactsMock = [
      { name: 'bob', number: '1', context: 'x' },
      { name: 'brian', number: '2', context: 'x' },
      { name: 'sam', number: '3', context: 'x' },
      { name: 'hank', number: '4', context: 'x' },
    ];

    beforeEach(() => wrapper.setState({ contacts: contactsMock }));
    afterEach(() => wrapper.setState({ contacts: [] }));

    it('should display header', () =>
      expect(wrapper.find(Header)).toHaveLength(1)
    );

    it('should have flyouts mounted', () =>
      expect(wrapper.find(Flyouts)).toHaveLength(1)
    );

    it('should display all contacts', () =>
      expect(wrapper.find(Contact)).toHaveLength(4)
    );

    describe('Search state', () => {
      it('should display contacts relevant to search query', () => {
        wrapper.setState({ searchQuery: 'b' });
        expect(wrapper.find(Contact)).toHaveLength(2);
        wrapper.setState({ searchQuery: 'bob' });
        expect(wrapper.find(Contact)).toHaveLength(1);
        wrapper.setState({ searchQuery: '' });
      });
    });
  });
});
