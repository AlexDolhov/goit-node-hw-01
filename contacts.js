const fs = require('fs').promises;
const path = require('path');

// const contactsPath = path.resolve('./db/contacts.json');
// const contactsPath = `${__dirname}/db/contacts.json`;
const contactsPath = path.join(__dirname, '/db/contacts.json');

async function listContacts() {
  try {
    const contacts = await fs.readFile(contactsPath, 'utf-8');
    // console.table(JSON.parse(contacts));
    // return JSON.parse(contacts);
    console.table(JSON.parse(contacts));
  } catch (error) {
    console.log(error);
  }
}

async function getContactById(contactId) {
  try {
    const contacts = await fs.readFile(contactsPath, 'utf-8');
    const parcedContacts = JSON.parse(contacts);
    const contact = parcedContacts.find(contact => contact.id === contactId);
    console.table(contact);
  } catch (error) {
    console.log(error);
  }
}

async function removeContact(contactId) {
  try {
    const contacts = await fs.readFile(contactsPath, 'utf-8');
    const parcedContacts = JSON.parse(contacts);
    const leftContacts = parcedContacts.filter(
      contact => contact.id !== contactId
    );

    await fs.writeFile(contactsPath, JSON.stringify(leftContacts), 'utf-8');
    listContacts();
    // console.table(parcedContacts);
  } catch (error) {
    console.log(error);
  }
}

async function addContact(name, email, phone) {
  try {
    const contacts = await fs.readFile(contactsPath, 'utf-8');
    const parcedContacts = JSON.parse(contacts);
    const addContact = [
      ...parcedContacts,
      {
        id: (parcedContacts.length + 1).toString(),
        name,
        email,
        phone,
      },
    ];
    await fs.writeFile(contactsPath, JSON.stringify(addContact), 'utf-8');
    // console.table(parcedContacts);
    listContacts();
  } catch (error) {
    console.log(error);
  }
}

module.exports = { listContacts, getContactById, removeContact, addContact };
