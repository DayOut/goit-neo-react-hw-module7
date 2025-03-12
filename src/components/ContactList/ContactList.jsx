import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, deleteContact } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import Contact from '../Contact/Contact';

import css from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.trim().toLowerCase())
  );

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          <Contact contact={contact} onDelete={handleDeleteContact} />
        </li>
      ))}
    </ul>
  );
}
