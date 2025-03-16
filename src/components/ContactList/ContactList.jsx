import { useDispatch, useSelector } from "react-redux";

import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { deleteContact } from "../../redux/contactsApi.js";
import { selectFilteredContacts } from "../../redux/contactsSlice";

export default function ContactList() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className={css.contactList}>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} onDelete={handleDeleteContact} />
        </li>
      ))}
    </ul>
  );
}
