import Header from './index';

import NewContactModal from './NewContactModal';

describe('Header', () => {
  const wrapper = shallow(<Header />);
  const component = wrapper.instance();

  describe('Initial State', () => {
    it('should not display new contact modal', () => {
      expect(component.state.showModal).toEqual(false);
      expect(wrapper.find(NewContactModal)).toHaveLength(0);
    });
  });

  describe('New contact state', () => {
    afterEach(() => wrapper.setState({ showModal: false }));

    it('should display new contact modal', () => {
      component.toggleModal();
      expect(component.state.showModal).toEqual(true);
      expect(wrapper.find(NewContactModal)).toHaveLength(1);
    });
  });
});
