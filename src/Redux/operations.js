import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = "https://6507fbcc56db83a34d9b8a97.mockapi.io"

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
    const response = await axios.get(
        `${API_URL}/contacts`
    );
    return response.data;
});

export const deleteContacts = createAsyncThunk(
    'contacts/deleteContact', async id => {
        const response = await axios.delete(
            `${API_URL}/contacts/${id}`
        );
        return response.data;
    }
);

export const addContacts = createAsyncThunk(
    'contacts/addContacts',
    async contact => {
        const response = await axios.post(
            `${API_URL}/contacts`,
            contact
        );
        return response.data;
    }
);