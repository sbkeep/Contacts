# Contacts
This is a simple Contacts interface in React with an Express/Node server & api, compiled with Webpack.



Main Libraries used - Express, React, Babel, Webpack, Enzyme + Jest





### Install and Run
Build file is included `npm install`, then `npm start`


- Optionally to rebuild - `npm run build`

Navigate to http://localhost:5010 in browser to view app


### Run Tests
`npm test`

### Lint
`npm run lint`

---


Functionality
======

## Server API
- `GET` `/contacts` returns `contactLibrary` with all store contacts

- `POST` `/contact` receives a contact and stores the contact in `contactLibrary`

- `PUT` `/contact/:number` receives a contact and updates the associated record in `contactLibrary`

- `DELETE` `/contact/:number` receives a contact number and deletes the associated record in `contactLibrary`


## FrontEnd
  Single page react interface for displaying all contacts

  - `ContactsPage`
    Parent component that stores gets contacts from api and stores in state.  Creates a `Contact` child item for each contact.

     - `Contact` Receives and displays information for a contact.  Tracks state for editing and deleting the contact, with a child for each.

      - `EditContact` Displays inputs for each contact field and allows user to update.  Uses state to track changes in "draft" mode, and only uses parent/prop method to sync with api on 'save' action.  Also used in `NewContactModal`

      - `DeleteConfirmation` displays a confirmation step for permanently deleting a contact

    - `Flyouts` Displays either of two flyouts for Deleting and Creating or Restoring a contact.  When deleting there is also an option to Undo.

    - `Header` Contains a search bar to filter contacts by name, number, or context
      - `NewContactModal` Uses `EditContact` view to receive information for new contact and use api to create new contact and add to `ContactsPage`
