import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = `https://${import.meta.env.VITE_MOCK_API_ID}.mockapi.io/`;

// Функція для імітації затримки
const delayDefaultValue = Number(import.meta.env.VITE_DELAY_MS) || 0;
const delay = (ms = delayDefaultValue) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      await delay();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", contact);
      await delay();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      await delay();
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
