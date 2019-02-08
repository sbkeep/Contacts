import Contact from './index';

import EditContact from './EditContact';
import DeleteConfirmation from './DeleteConfirmation';

describe('Contact', () => {
  const contact = { name: 'a', number: '1', context: 'x' };
  const wrapper = shallow(<Contact contact={contact} />);

  describe('Initial state', () => {
    it('should NOT display EditContact', () =>
      expect(wrapper.find(EditContact)).toHaveLength(0)
    );

    it('should NOT display DeleteConfirmation', () =>
      expect(wrapper.find(DeleteConfirmation)).toHaveLength(0)
    );
  });

  describe('Edit state', () => {
    beforeEach(() => wrapper.setState({ editing: true }));
    afterEach(() => wrapper.setState({ editing: false }));

    it('should display EditContact', () =>
      expect(wrapper.find(EditContact)).toHaveLength(1)
    );

    it('should NOT display DeleteConfirmation', () =>
      expect(wrapper.find(DeleteConfirmation)).toHaveLength(0)
    );

    describe('Delete state', () => {
      beforeEach(() => wrapper.setState({ deleting: true }));
      afterEach(() => wrapper.setState({ deleting: false }));

      it('should display EditContact', () =>
        expect(wrapper.find(EditContact)).toHaveLength(1)
      );

      it('should display DeleteConfirmation', () =>
        expect(wrapper.find(DeleteConfirmation)).toHaveLength(1)
      );
    });
  });
});
