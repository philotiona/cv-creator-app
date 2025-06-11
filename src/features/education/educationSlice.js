import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchEducations = createAsyncThunk(
    'education/fetchEducations',
    async () => {
        try {
            const response = await fetch('/api/educations')
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json()
            return data.data
        } catch (error) {
            console.error("Fetch error:", error);
            throw error;
        }
    }
)

// Example for educationSlice.js
const initialState = {
  items: [],
  status: 'idle',
  error: null
};

const educationSlice = createSlice({
  name: 'education',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
            .addCase(fetchEducations.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchEducations.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.items = action.payload
            })
            .addCase(fetchEducations.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
  }
});

export default educationSlice.reducer;