import {createSlice}from "@reduxjs/toolkit" 
const initialAuthState = {
    isAuthenticated: false
}
const authSlice = createSlice({
    name: 'Auth',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true
        },
        logout(state) {
            state.isAuthenticated = false
        }
    }

})


export const actionAuth = authSlice.actions

export default authSlice.reducer