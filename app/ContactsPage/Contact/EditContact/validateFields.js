const validateFields = contact => {
  const errors = [];

  if (!contact.name) errors.push('name');
  if (contact.number.length < 11 || contact.number.length > 16) errors.push('number');

  return errors;
};

export default validateFields;
