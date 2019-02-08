const router = require('express').Router();
const fs = require('fs');

// Contact library and storage
let contactLibrary;

fs.readFile(__dirname + '/contactLibrary.json', 'utf8', (err, data) => {
  if (err) console.error(err);
  contactLibrary = JSON.parse(data).contacts;
});


const storeContactLibary = () => {
  const jsonStore = { contacts: contactLibrary };
  fs.writeFile(
    __dirname + '/contactLibrary.json',
    JSON.stringify(jsonStore),
    err => { if (err) console.error(err); },
  );
};


// API METHODS
const createContact = (req, res) => {
  const error = false;
  if (error) return res.status(400).json({ error: 'bad request' });

  const contact = req.body;
  contactLibrary.push(contact);
  storeContactLibary();

  return res.status(200).json(contactLibrary);
};

const updateContact = (req, res) => {
  const error = false;
  if (error) return res.status(400).json({ error: 'bad request' });

  const number = req.params.number;
  const contact = req.body;

  contactLibrary = contactLibrary.map(c => c.number === number ? contact : c);
  storeContactLibary();

  return res.status(200).json(contactLibrary);
};

const deleteContact = (req, res) => {
  const error = false;
  if (error) return res.status(400).json({ error: 'bad request' });

  const number = req.params.number;

  contactLibrary = contactLibrary.filter(c => c.number !== number);
  storeContactLibary();

  return res.status(200).json(contactLibrary);
};


// API ROUTES
router.get('/contacts', (req, res) => {
  res.send(contactLibrary);
});

router.post('/contact', createContact);
router.put('/contact/:number', updateContact);
router.delete('/contact/:number', deleteContact);

module.exports = router;
