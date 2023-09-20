import {createSlice} from '@reduxjs/toolkit';

export const initialState = {
  id: null,
  token: null,
  name: '',
  email: '',
  about_me:'',
  occupation:'',
  city:'',
  state:'',
  postcode:'',
  fav_source:'',
  fav_author:'',
  fav_category:''
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateUserData: (state, action) => {
      const {data, token} = action.payload;
      if (data) {
        state.id = data.id;
        state.token = token;
        state.name = data.name;
        state.name = data.name;
        state.email = data.email;
        state.about_me = data.about_me;
        state.occupation = data.occupation;
        state.city = data.city;
        state.state = data.state;
        state.postcode = data.postcode;
        state.fav_source = data.fav_source;
        state.fav_author = data.fav_author;
        state.fav_category = data.fav_category;
      }
    },
    updateUserFevData: (state, action) => {
      if (action.payload) {
        (state),
            (state.fav_source = action.payload.fav_source),
            (state.fav_author = action.payload.fav_author),
            (state.fav_category = action.payload.fav_category)
      }
    },
    logOut: (state, action) => {
      state,
          (state.token = null)
    },
  },
});
export const {updateUserData,updateUserFevData, logOut} =
  AuthSlice.actions;

export default AuthSlice.reducer;
