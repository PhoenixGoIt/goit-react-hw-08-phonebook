import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, removeContact } from './contactsThunk';
const initialState = {
  items: [],
  loading: false,
  error: null,
};
const fetchContactsPending = (state, { payload }) => {
    state.loading = true;
    state.error = null;
}

const fetchContactsFulfilled = (state, { payload }) => {
    state.loading = false;
    state.items = payload;
}

const fetchContactsRejected = (state, { payload }) => {
    state.loading = false;
    state.error = payload;
}


const addContactPending = (state, { payload }) => {
    state.error = null;
    state.isLoad = true
}

const addContactFulfilled = (state, { payload }) => {
    state.loading = false;
    state.items = [...state.items, payload.data]
    
}

const addContactRejected = (state, { payload }) => {
    state.loading = false;
    state.error = payload;
}


const removeContactPending = (state, { payload }) => {
    state.loading = true;
    state.error = null;
}

const removeContactFulfilled = (state, { payload }) => {
    state.loading = false;
    state.items = state.items.filter(item => item.id !== payload);
}

const removeContactRejected = (state, { payload }) => {
    state.loading = false;
    state.error = payload;
}
const contactsSlice = createSlice({
    name: 'contactsList',
    initialState,
    extraReducers: builder => {
      builder
      .addCase(fetchContacts.pending, fetchContactsPending)
      .addCase(fetchContacts.fulfilled, fetchContactsFulfilled)
      .addCase(fetchContacts.rejected, fetchContactsRejected)
      .addCase(addContact.pending, addContactPending)
      .addCase(addContact.fulfilled, addContactFulfilled)
      .addCase(addContact.rejected, addContactRejected)
      .addCase(removeContact.pending, removeContactPending)
      .addCase(removeContact.fulfilled, removeContactFulfilled)
      .addCase(removeContact.rejected, removeContactRejected )
    },
  });
  
  export default contactsSlice.reducer;