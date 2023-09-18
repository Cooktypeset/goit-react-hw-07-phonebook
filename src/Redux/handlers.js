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