

import { useDispatch, useSelector } from 'react-redux';
import css from '../../Style/style.module.css'
import { useState } from 'react';
import { regist } from '../redux/auth/operation';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectContacts } from 'components/redux/selectors';
const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const isLoggedIn = useSelector(s => s.auth.isLoggedIn)
    const dispatch = useDispatch();

    const onChangeName = (e) => {
        setName(e)
    }
    const onChangeInput = (e) => {
        setPassword(e)
    }
    const onChangeEmail = (e) => {
      setEmail(e)
    }
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setEmail('')
        setPassword('')
        dispatch(regist({name: name, email: email, password:password}))
      }
    return(
        <>{!isLoggedIn? <main className={css.main}>
        <>
        <form onSubmit={(e) => handleSubmit(e)} className={css.regist_form}>
         <h3 className={css.SectionName_h3}>Name</h3>
         <div className={css.input_container}><input
         onChange={(e) => onChangeName(e.currentTarget.value)}
         className={css.input_form}
         type="text"
         name="name"
         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
         placeholder="Name"
         required
       /></div>
         <h3 className={css.SectionName_h3}>Email</h3>
         <div className={css.input_container}><input
         onChange={(e) => onChangeEmail(e.currentTarget.value)}
         className={css.input_form}
         type="text"
         name="email"
         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
         placeholder="example@gmail.com"
         required
       /></div>
          <h3 className={css.SectionName_h3}>Password</h3>
          <div><input
         onChange={(e) => onChangeInput(e.currentTarget.value)}
         className={css.input_form}
         type="tel"
         name="password"
         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
         placeholder="password"
         required
       /></div>
         
      <div className={css.button_container}><button type="submit" className={css.btb_form_wait}>Sing up</button></div> 
       </form>
         </>
             
         </main>:
         <h1 className={css.h1}>You are Login!</h1>}
       
        </>
    )
}
export default RegisterForm
