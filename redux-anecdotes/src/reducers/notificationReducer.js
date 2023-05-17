import { createSlice } from "@reduxjs/toolkit";

const initialState =  'NOTIFICATION'

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        setNotification: (state, action) => {
            return action.payload
        }
    }
})

export const { setNotification } = notificationSlice.actions
export default notificationSlice.reducer

export const selectNotification = state => state.notification