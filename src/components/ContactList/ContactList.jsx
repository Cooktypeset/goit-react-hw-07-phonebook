import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { selectVisibleContacts } from '../../Redux/selectors';
import { fetchContacts, deleteContacts } from 'Redux/operations';
import css from './ContactList.module.css'

const Contacts = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectVisibleContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <ul>
        {contacts?.map(({ id, name, phone }) => {
          return (
            <li key={id} className={css.contactItem}>
              <p>
                {name} {phone}
              </p>
              <button
                className={css.listContainer}
                onClick={() => dispatch(deleteContacts(id))}>
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Contacts