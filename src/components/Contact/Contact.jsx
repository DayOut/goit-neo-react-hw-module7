import Button from '../Button/Button';
import css from './Contact.module.css';
import { IoIosContact, IoIosCall } from 'react-icons/io';

export default function Contact({ contact, onDelete }) {
  return (
    <div className={css.contactCard}>
      <ul className={css.contactInfo}>
        <li className={css.contactInfoItem}>
          <IoIosContact className={css.icon} size={24} />
          <span className={css.contactValue}>{contact.name}</span>
        </li>
        <li className={css.contactInfoItem}>
          <IoIosCall className={css.icon} size={24} />
          <span className={css.contactValue}>{contact.number}</span>
        </li>
      </ul>
      <Button
        onClick={() => onDelete(contact.id)}
        color="warn"
        aria-label="Delete Contact"
      >
        Delete
      </Button>
    </div>
  );
}
