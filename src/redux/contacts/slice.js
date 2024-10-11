import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { logOut } from "../auth/operations";
import { selectNameFilter } from "../filters/selectors";
import { selectContacts } from "./selectors";

export const selectedFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(nameFilter.toLowerCase())
    );
  }
);

function handlePending(state) {
  state.loading = true;
  state.error = null;
}

function handleRejected(state, action) {
  state.loading = false;
  state.loadingFetch = false;
  state.error = action.payload;
}

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    loadingFetch: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loadingFetch = true;
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loadingFetch = false;
        state.loading = false;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.loading = false;
      })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(logOut.fulfilled, (state) => {
        state.items = [];
        state.loading = false;
        state.error = null;
      });
  },
});

export default slice.reducer;