import { useDispatch } from "react-redux"
import { setFilter } from '../redux/filterSlice'
import css from '../../Style/style.module.css'
export const FilterСontacts = () => {
    const dispatch = useDispatch()
    const handleChange = e => {
        dispatch(setFilter(e.target.value.toLowerCase().trim()));
      };
    return(
        <div className={css.filter_container}>
        <input 
        className={css.filter_input}
        onChange={(e) => handleChange(e)}
        type="text"
        name="filter"
        />
        </div>
        
    )
}