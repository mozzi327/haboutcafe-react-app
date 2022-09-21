import { createSlice } from "@reduxjs/toolkit";

export const TOKEN_TIME_OUT = 1800 * 1000;

export const tokenSlice = createSlice({
    name : 'authToken',
    initialState: {
        authenticated : false,
        accessToken : null,
        expireTime : null
    },
    reducers: {
        SET_TOKEN : (state, actions) => {
            state.authenticated = true;
            state.accessToken = actions.payload;
            state.expireTime = new Date().getTime() + TOKEN_TIME_OUT;
        },
        DELETE_TOKEN : (state) => {
            state.authenticated = false;
            state.accessToken = null;
            state.expireTime = null;
        },
    }
})

export const { SET_TOKEN, DELETE_TOKEN } = tokenSlice.actions;

export default tokenSlice.reducer;