import React, { useState } from "react";
import { useSelector } from "react-redux";
import css from "../../Style/style.module.css";
import Modal from "components/Modal/Modal";
import HomePage from "components/page/HomePage";
import { ContactList } from "components/ContactList/ContactList";
import { FilterСontacts } from "components/FilterСontacts/FilterСontacts";

export const AddContact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

    const isLoggedIn = useSelector(s => s.auth.isLoggedIn)
  return (
    
    <><HomePage />
    {isLoggedIn && <><div className={css.addContact_btn}><div onClick={openModal} className={css.addContact_container}>
    <p className={css.addContact}>
      Add Contact
    </p>
  </div></div>
  <FilterСontacts />
  <ContactList /></>}
      {isModalOpen && <Modal onClose={closeModal} />}
      
      
    </>
  );
};

export default AddContact;
