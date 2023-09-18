import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
    const response = await axios.get(
        'https://6507fbcc56db83a34d9b8a97.mockapi.io/contacts'
    );
    return response.data;
});

export const deleteContacts = createAsyncThunk(
    'contacts/deleteContact', async id => {
        const response = await axios.delete(
            'https://6507fbcc56db83a34d9b8a97.mockapi.io/contacts'
        );
        return response.data;
    }
);




// https://6507fbcc56db83a34d9b8a97.mockapi.io/contacts