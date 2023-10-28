import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { isLoading, update } from "../redux/userSlice";

export const updateUser = async (user: { name: string, email: string }, dispatch: Dispatch<AnyAction>) => {
  try {
    const res = await axios.post('http://localhost:8080/api/users/1/update', user);
    dispatch(isLoading());
    dispatch(update(res.data));
  } catch (error: any) {
    console.log(error.message);
  }
}; 