
import { fetchContacts, removeContact } from "components/redux/contacts/contactsThunk";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import css from '../../Style/style.module.css'


export const ContactList = () => {
  
  const contacts = useSelector(s => s.contacts.items);
  const filter = useSelector(s => s.filter.filter)
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(fetchContacts())
  }, [dispatch])
  console.log(contacts)
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
    
    return(
        <ul className={css.contact_ul}>
          <div className={css.contact_container}>
      {filteredContacts.length ? (
        filteredContacts.map(({id, name, number}) => (
          <div className={css.li_container} key={id}>
          <li className={css.contact} key={id}>
            <span className={css.contact_name}>{name}: </span>
            <span className={css.contact_number}>{number}</span>
            <button
              className={css.del_contact_button}
              type="button"
              onClick={() => dispatch(removeContact(id))}
            >
              Delete
            </button>
          </li>
          </div>
        ))
      ) : (
        <h3 className={css.noContact}>There are no contacts</h3>
      )}
      </div>
    </ul>
    )
}
