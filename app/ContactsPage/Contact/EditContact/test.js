import EditContact from './index';

const originalContact = { name: 'a', number: '1', context: 'x' };
const save = jest.fn();

describe('EditContact', () => {

  const wrapper = shallow(<EditContact contact={originalContact} save={save} />);
  const component = wrapper.instance();

  describe('Initial state', () => {
    it('contact state should be set to props contact', () => {
      expect(component.state.contact).toEqual(component.props.contact);
    });

    it('should have no fieldErrors', () =>
      expect(component.state.fieldErrors).toHaveLength(0)
    );
  });

  describe('Edited state', () => {
    afterEach(() =>  component.setState({ contact: { ...originalContact} }));

    it('should update name field without errors', () => {
      const newName = 'adam';
      component.updateField('name')({ currentTarget: { value: newName }});
      expect(component.state.contact.name).toEqual(newName);
    });

    it('should update number field without errors', () => {
      const newNumber = '+48482482';
      component.updateField('number')({ currentTarget: { value: newNumber }});
      expect(component.state.contact.number).toEqual(newNumber);
    });

    it('should update context field without errors', () => {
      const newContext = 'work';
      component.updateField('context')({ currentTarget: { value: newContext }});
      expect(component.state.contact.context).toEqual(newContext);
    });
  });

  describe('Save state', () => {
    afterEach(() =>  {
      component.setState({
        contact: { ...originalContact},
        fieldErrors: [],
      });
      save.mockClear();
    });

    it('save without errors', () => {
      const newName = 'adam';
      component.updateField('name')({ currentTarget: { value: newName }});

      const newNumber = '+12345678910';
      component.updateField('number')({ currentTarget: { value: newNumber }});

      component.save();
      expect(component.state.contact.number).toEqual(newNumber);
      expect(component.state.contact.name).toEqual(newName);
      expect(component.state.fieldErrors).toHaveLength(0);
      expect(save).toHaveBeenCalled();
    });

    it('does not save with name error', () => {
      const newName = '';
      component.updateField('name')({ currentTarget: { value: newName }});

      const newNumber = '+12345678910';
      component.updateField('number')({ currentTarget: { value: newNumber }});

      component.save();
      expect(component.state.contact.number).toEqual(newNumber);
      expect(component.state.contact.name).toEqual(newName);
      expect(component.state.fieldErrors).toHaveLength(1);
      expect(component.state.fieldErrors).toContain('name');
      expect(save).not.toHaveBeenCalled();
    });

    it('does not save with number error', () => {
      const newName = 'adam';
      component.updateField('name')({ currentTarget: { value: newName }});

      const newNumber = '+4842';
      component.updateField('number')({ currentTarget: { value: newNumber }});

      component.save();
      expect(component.state.contact.number).toEqual(newNumber);
      expect(component.state.contact.name).toEqual(newName);
      expect(component.state.fieldErrors).toHaveLength(1);
      expect(component.state.fieldErrors).toContain('number');
      expect(save).not.toHaveBeenCalled();
    });

    it('does not save with name and number errors', () => {
      const newName = '';
      component.updateField('name')({ currentTarget: { value: newName }});

      const newNumber = '+4842';
      component.updateField('number')({ currentTarget: { value: newNumber }});

      component.save();
      expect(component.state.contact.number).toEqual(newNumber);
      expect(component.state.contact.name).toEqual(newName);
      expect(component.state.fieldErrors).toHaveLength(2);
      expect(component.state.fieldErrors).toContain('name');
      expect(component.state.fieldErrors).toContain('number');
      expect(save).not.toHaveBeenCalled();
    });
  });
});
