// import {configureStore} from '@reduxjs/toolkit';
// import  userReducer  from './userSlice';
// const store = configureStore({
//     reducer:{
// app:userReducer
//     }

// })
// export default store;
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice.js';

const store = configureStore({
  reducer: {
    app: userReducer
  }
});

export default store;
