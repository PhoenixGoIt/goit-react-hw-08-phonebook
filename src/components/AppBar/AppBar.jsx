import React from 'react';
import { NavLink } from 'react-router-dom';
import css from '../../Style/style.module.css' 
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'components/redux/auth/operation';
export const AppBar = () => {
  const isLogin = useSelector(state => state.auth.isLoggedIn)
  const user = useSelector(sate => sate.auth.user.name)
  const token = useSelector(s => s.auth.token)
  const dispath = useDispatch()
  const handleClick = () => {
    dispath(logOut(token))
  }
  return (
    <>  {isLogin? <nav className={css.head}> 
    <div className={css.contacts_container}><NavLink to={'/contacts'} className={css.contacts}>Contacts</NavLink></div>
    <div className={css.l_r_link}><h4 className={css.SectionName_h4}>Welcome {user}!</h4> 
    <div className={css.logOut_container}><p type='button' onClick={handleClick} to={'login'} className={css.logOut}>Log out</p></div></div></nav> : 
    <header>
      <nav className={css.head}>
          <div className={css.contacts_container}><NavLink to={'/contacts'} className={css.contacts}>Contacts</NavLink></div>

       <div className={css.l_r_link}>
          <NavLink to={'register'} className={css.register}>Sing up</NavLink>
          <div className={css.login_container}><NavLink to={'login'} className={css.login}>Sing in</NavLink></div>
       </div>
      </nav>
      </header> }
        
        </> 
  );
};
