export const handlePending = state => {
  state.loading = true;
};

export const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.error;
};

export const handleFetchFulfilled = (state, action) => {
  state.loading = false;
  state.error = null;
  state.items = action.payload;
};
export const handleAddFulfilled = (state, action) => {
    state.items.push(action.payload);
    state.loading = false;
    state.error = null;
}

export const handleDellFulfilled = (state, action) => {
    state.items = state.items.filter(item => item.id !== action.payload.id);
    state.loading = false;
    state.error = null;
}