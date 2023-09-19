import { ContactForm } from "./ContactForm/ContactForm"
import { Filter } from "./Filter/Filter";
import { Contacts } from "./ContactList/ContactList";
import { Loader } from './Loader/Loader';
import { useSelector } from 'react-redux';
import { selectLoading, selectError } from '../Redux/selectors';
import Notiflix from 'notiflix';


export const App = () => {
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  if (isError) Notiflix.Notify.warning(`${isError.message}`);
  return (
    <div>
      {isLoading && <Loader />}
      <h1>Phonebook</h1>
      <ContactForm />
      {!isError && (
        <>
          <h2>Contacts</h2>
          <Filter />
          <Contacts />
        </>
      )}
    </div>
  );
};