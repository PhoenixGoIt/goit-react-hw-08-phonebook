
import { addContact } from "components/redux/contacts/contactsThunk";
import { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import css from '../../Style/style.module.css'
export const ContactForm = ({onClose}) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();
    const contacts = useSelector(s => s.contacts.items)
    const onChangeName = (e) => {
        setName(e)
    }
    const onChangeInput = (e) => {
        setNumber(e)
    }
    const onOverlayClose = e => {
      if (e.currentTarget === e.target) {
        onClose();
      }
    };
    const twinCheck = (name, number, newContact) => {
        let isTwin = false;
      
        const foundContact = contacts.find(prevContact => {
          if (prevContact.name.toLowerCase() === name.toLowerCase()) {
            isTwin = true;
            return true;
          } else if (prevContact.number.toLowerCase() === number.toLowerCase()) {
            isTwin = true;
            return true;
          }
          return false;
        });
      
        if (isTwin) {
          if (foundContact.name.toLowerCase() === name.toLowerCase()) {
            alert(`${name}: Already in contact!`);
          } else if (foundContact.number.toLowerCase() === number.toLowerCase()) {
            alert(`${number}: Already in contact!`);
          }
        } else {
          dispatch(addContact(newContact))
        }
      };
      
    
      const handleSubmit = (e) => {
         e.preventDefault();
        setName('')
        setNumber('')
        const newContact = {
          name,
          number,
        };
        twinCheck(name, number, newContact);
      };



    return(
        <form onSubmit={(e) => handleSubmit(e)}>
          <button type="button" onClick={onOverlayClose} className={css.modal_close_btn}>×</button>
            <h3 className={css.modal_title}>Name</h3>
        <input
        className={css.modal_input}
        onChange={(e) => onChangeName(e.currentTarget.value)}
        type="text"
        name="name"
        pattern="^[А-Яа-яЁёa-zA-Z\s]+$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
         <h3 className={css.modal_title}>Number</h3>
        <input
        className={css.modal_input}
        onChange={(e) => onChangeInput(e.currentTarget.value)}
        type="tel"
        name="number"
        pattern="\+?[0-9\s\-\(\)]+"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit" className={css.modal_add_btn}>Add contact</button>
      </form>
    )
}