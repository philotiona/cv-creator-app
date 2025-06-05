import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    status: 'idle',
    error: null
}

export const fetchSkills = createAsyncThunk(
    'skills/fetchSkills',
    async () => {
        try {
            const response = await fetch('/api/skills')
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json()
            return data.skills
        } catch (error) {
            console.error("Fetch error:", error);
            throw error;
        }
    }
)

export const addSkill = createAsyncThunk(
    'skills/addSkill',
    async (skill) => {
        try {
            const response = await fetch('/api/skills', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(skill)
            })
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json()
            return data.skill
        } catch (error) {
            console.error("Fetch error:", error);
            throw error;
        }
    }
)

const skillsSlice = createSlice({
    name: 'skills',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSkills.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchSkills.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.items = action.payload
            })
            .addCase(fetchSkills.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.message
            })
            .addCase(addSkill.fulfilled, (state, action) => {
                state.items.push(action.payload)
            })
    }
})

export default skillsSlice.reducer