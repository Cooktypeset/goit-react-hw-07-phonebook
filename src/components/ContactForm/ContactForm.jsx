import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addContacts } from 'Redux/operations';
import {  selectContacts } from '../../Redux/selectors';

import css from "./ContactForm.module.css";

export const ContactForm = () => {

  const dispatch = useDispatch();
  const contacts = useSelector( selectContacts);
  
 const handleSubmit = event => {
    event.preventDefault();
    const newContact = {};

    if (event.currentTarget.name)
      newContact.name = event.currentTarget.name.value;
    if (event.currentTarget.number)
      newContact.number = event.currentTarget.number.value;

    const checkList = contacts.find(contact => {
      return (
        contact.name.toLowerCase() === newContact.name.toLowerCase() ||
        contact.number === newContact.number
      );
    });
    if (checkList) {
      alert(
        `${newContact.name}, number: ${newContact.number} is already in contacts !`
      );
      event.currentTarget.reset();
      return;
    }
   dispatch(addContacts({
     name: newContact.name,
     phone: newContact.number
   }));
    event.currentTarget.reset();
  };

    return(
     <form  className={css.form}  onSubmit={handleSubmit}>
        <label className={css.subTitle}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-ЯІіЇїҐґ' \-\u0400-\u04FF]+$"
            title="Name may contain only letters, apostrophe, dash and spaces. 
          For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Enter name"
            // value={name}
            // onChange={handleChange}
          />
        </label>

        <label className={css.subTitle}>
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Enter your number"
            // value={number}
                // onChange={handleChange}
             required
          />
        </label>

        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </form>
    );
  }