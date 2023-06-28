

import { useDispatch, useSelector } from 'react-redux';
import css from '../../Style/style.module.css'
import { useState } from 'react';
import { logIn } from '../redux/auth/operation';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectContacts } from 'components/redux/selectors';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    // const contacts = useSelector(selectContacts);
    const error = useSelector(state => state.auth.error)
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(s => s.auth.isLoggedIn)

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
        dispatch(logIn({email: email, password:password}))
      }
    return(
        <>
        {!isLoggedIn? <main className={css.main}>
       <>
       <form onSubmit={(e) => handleSubmit(e)} className={css.login_form}>
        <h2>{error}</h2>
        <h3 className={css.SectionName_h3}>Email</h3>
        <div className={css.input_container}><input
        className={css.input_form}
        onChange={(e) => onChangeEmail(e.currentTarget.value)}
        type="text"
        name="email"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        placeholder="example@gmail.com"
        required
      /></div>
         <h3 className={css.SectionName_h3}>Password</h3>
         <div className={css.input_container}><input
         className={css.input_form}
        onChange={(e) => onChangeInput(e.currentTarget.value)}
        type="tel"
        name="password"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        placeholder="password"
        required
      /></div>
        
      <div className={css.button_container}><button type="submit" className={css.btb_form_wait}>Sing in</button></div>
      </form>
        </>
            
        </main>:
        <h1 className={css.h1}>You are Login!</h1>}
       
        </>
    )
}
export default Login
