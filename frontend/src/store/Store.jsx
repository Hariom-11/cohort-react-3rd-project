import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './User_slice'

export const store = configureStore({
  reducer: {
    user: UserSlice
  },
})