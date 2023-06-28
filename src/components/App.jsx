
import { Layout } from './Layout';
import { Route, Routes } from "react-router-dom";
import  Login  from './LoginForm/LoginForm';
import HomePage from './page/HomePage';
import RegisterForm from './RegisterForm/RegisterForm';
import AddContact from './AddContact/AddContact'
export function App() {
  // const [name, setName] = useState('');
  // const [phone, setPhone] = useState('');
  // const contacts = useSelector(selectContacts);
  // const dispatch = useDispatch();

  // const handleChangeName = (e) => {
  //   setName(e);
  // };

  // const handleChangeNumber = (e) => {
  //   setPhone(e);
  // };

  

  // return (
  //   <div>
  //     <h1>Phonebook</h1>
  //     <form onSubmit={handleSubmit}>
  //       <InFormName title="Name" />
  //       <NameInput onChange={handleChangeName} value={name}/>
  //       <InFormName title="Number" />
  //       <NumberInput onChange={handleChangeNumber} value={phone}/>
  //       <AddBtn />
  //     </form>
  //     <h2>Contacts</h2>
  //     <FilterСontacts/>
  //     <ContactList />
  //   </div>
  // );
  return(
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path='/register' element={<RegisterForm />} />
          <Route path='login' element={<Login />} />
          <Route path='/contacts' element={<AddContact/>} />
        </Route>
      </Routes>
  )
}
