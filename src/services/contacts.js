import { ContactsCollection } from '../db/models/contacts.js';

export const getAllContacts = () => ContactsCollection.find();

export const getContactById = (contactId) =>
  ContactsCollection.findById(contactId);

export const createContact = (payload) => ContactsCollection.create(payload);

export const patchContact = (contactId, payload) =>
  ContactsCollection.findOneAndUpdate(
    { _id: contactId },
    { $set: payload },
    { new: true, runValidators: true },
  );

export const deleteContact = (contactId) =>
  ContactsCollection.findOneAndDelete({ _id: contactId });
