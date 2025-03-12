import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import contactsDefault from '../data/contacts.json';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: contactsDefault // This is just for demo
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(contactData) {
        return {
          payload: {
            id: nanoid(),
            ...contactData
          }
        };
      }
    },
    deleteContact(state, action) {
      state.items = state.items.filter(contact =>
        contact.id !== action.payload
      );
    }
  }
});

// Selectors
export const selectContacts = state => state.contacts.items;

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
