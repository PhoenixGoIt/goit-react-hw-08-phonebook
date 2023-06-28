import css from '../../Style/style.module.css'
import { useSelector } from 'react-redux';

const HomePage = () => {
    const isLogin = useSelector(state => state.auth.isLoggedIn)
    return(
        <>
        {isLogin? <h1 className={css.h1}>PhoneBook</h1>:
        <main className={css.main}>
        <h1 className={css.label}>Please, Login or Register!</h1>
        <div className={css.img_container}><img src='https://cdn-icons-png.flaticon.com/512/3455/3455271.png' alt='auth' className={css.book_img}></img></div>
        
    </main>}
       
        </>
    )
}
export default HomePage
