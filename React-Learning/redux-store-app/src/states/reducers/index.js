import { createSlice } from '@reduxjs/toolkit'

export const incdecSlice = createSlice ({
    name: 'incdec',
    initialState: 10,
    reducers: { 
        Inc: (state, action) => {
            return state += 1;
        },
        Dec: (state, action) => {
            return state -= 1;
        },
        Add: (state, action) => {
            return state += action.payload;
        }
    }
})

export const {Inc, Dec, Add} = incdecSlice.actions;
export default incdecSlice.reducer;