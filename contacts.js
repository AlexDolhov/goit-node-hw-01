const fs = require('fs').promises;
const path = require('node:path');

const contactsPath = path.basename('/db/contacts.json');

async function listContacts() {
  try {
    const contacts = await fs.readFile(contactsPath, 'utf-8');
    console.table(JSON.parce(contacts));
    return JSON.parce(contacts);
  } catch (error) {
    console.log(error);
  }
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}
