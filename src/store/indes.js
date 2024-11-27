import { configureStore } from '@reduxjs/toolkit'
import bagSlice from './bag'

const shopstore = configureStore({
  reducer:{
    bag : bagSlice.reducer ,
  }
  })
  
  export default shopstore;