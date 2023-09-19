import { useDispatch } from 'react-redux';
import { setFilter } from '../../Redux/FilterSlice/FilterSlice';
import css from "./Filter.module.css";


export const Filter = () => {
    const dispatch = useDispatch();
    const handleChange = event => {
        dispatch(setFilter(event.currentTarget.value));
    }
    return (
        <>
            <h5 className={css.titlefilter}>Find contacts by name</h5>
            <input className={css.inputfilter} type ='text' onChange = {handleChange}/>
        </>
    )
}