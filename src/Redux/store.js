import { configureStore } from '@reduxjs/toolkit';
import { ContactsSliceReduser } from './ContactsSlice/ContactsSlice';
import { FilterReduser } from './FilterSlice/FilterSlice';

export const store = configureStore({
  reducer: {
    contacts: ContactsSliceReduser,
    filter: FilterReduser,
  },
});