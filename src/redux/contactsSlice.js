import { addContact, deleteContact, fetchContacts } from "./contactsApi.js";
import { createSelector, createSlice } from "@reduxjs/toolkit";

// Початковий стан
const initialState = {
  items: [],
  loading: false,
  error: null,
};

// Утилітна функція для обробки стану завантаження та помилок
const setLoadingState = (state) => {
  state.loading = true;
  state.error = null;
};

const setErrorState = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      // fetchContacts
      .addCase(fetchContacts.pending, setLoadingState)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.rejected, setErrorState)

      // addContact
      .addCase(addContact.pending, setLoadingState)
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(addContact.rejected, setErrorState)

      // deleteContact
      .addCase(deleteContact.pending, setLoadingState)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload,
        );
        state.loading = false;
      })
      .addCase(deleteContact.rejected, setErrorState);
  },
});

export default contactsSlice.reducer;

// Селектори
export const selectContacts = (state) => state.contacts.items;
export const selectIsLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectFilter = (state) => state.filters.name;

// Мемоізований селектор для відфільтрованих контактів
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) =>
    contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    ),
);
