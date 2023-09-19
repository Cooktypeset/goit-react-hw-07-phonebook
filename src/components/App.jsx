import { ContactForm } from "./ContactForm/ContactForm"
import { Filter } from "./Filter/Filter";
import { Contacts } from "./ContactList/ContactList";
import { Loader } from './Loader/Loader';
import { useSelector } from 'react-redux';
import { selectLoading, selectError } from '../Redux/selectors';
import Notiflix from 'notiflix';
import { Container } from './container/Container';
import { Section } from './section/Section';


export const App = () => {
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  if (isError) Notiflix.Notify.warning(`${isError.message}`);
  return (
    <Container>
      {isLoading && <Loader />}

      <Section>
        <h1>Phonebook</h1>
        <ContactForm />
        {!isError && (
          <>
            <h2>Contacts</h2>
            <Filter />
            <Contacts />
          </>
        )}
      </Section>
    </Container>
  );
};