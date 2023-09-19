import { useDispatch } from 'react-redux';
import { setFilter } from '../../Redux/FilterSlice/FilterSlice';
import css from "./Filter.module.css";


export const Filter = () => {
    const dispatch = useDispatch();
    const handleChange = event => {
        dispatch(setFilter(event.currentTarget.value));
    }
    return (
         <div>
      <input
        className={css.inputfilter}
        type="text"
        onChange={handleChange}
      />
    </div>
    )
}