import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../api/userApi";
import storageKey from "../../constants/storage-keys";


export const register = createAsyncThunk('user/register', async (payload) => {
    const data = await userApi.register(payload);
    localStorage.setItem(storageKey.TOKEN, data.jwt);
    localStorage.setItem(storageKey.USER, JSON.stringify(data.user))

    return data.user;
});

export const login = createAsyncThunk('user/login', async (payload) => {
    const data = await userApi.login(payload);
    localStorage.setItem(storageKey.TOKEN, data.jwt);
    localStorage.setItem(storageKey.USER, JSON.stringify(data.user))

    return data.user;
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: JSON.parse(localStorage.getItem(storageKey.USER)) || {},
        setting: {},
    },
    reducers: {
        logout(state){
            //xoá localStoge
            localStorage.removeItem(storageKey.USER);
            localStorage.removeItem(storageKey.TOKEN);
            //cập nhật current thành rỗng
            state.current = {}; 
        }
    },
    extraReducers:{
        [register.fulfilled]: (state, action) =>{
            state.current = action.payload;
        },
        [login.fulfilled]: (state, action) =>{
            state.current = action.payload;
        },
    },
});

const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;