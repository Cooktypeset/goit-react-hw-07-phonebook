import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, deleteContacts, addContacts } from 'Redux/operations';
import {
    handleAddFulfilled,
    handleDellFulfilled,
    handleFetchFulfilled,
    handlePending,
    handleRejected,
} from 'Redux/handlers';


const ContactsSlice = createSlice({
    name: 'contact',
    initialState:{items: [], loading:false, error: null},
    extraReducers: builder => {
        builder 
         .addCase(fetchContacts.fulfilled, handleFetchFulfilled)
      .addCase(addContacts.fulfilled, handleAddFulfilled)
      .addCase(deleteContacts.fulfilled, handleDellFulfilled)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
    }
});

export const ContactsSliceReduser = ContactsSlice.reducer;