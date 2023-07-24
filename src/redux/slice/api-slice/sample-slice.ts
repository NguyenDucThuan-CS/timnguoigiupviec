import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
//import { apiPostNewsFeed, apiSystem } from '../../../services/api';

const initialState = {
  
} as {};

export const doAsyncSampleAction = createAsyncThunk(
  'sample@get/getSamples',
  async (param: any) => {
    // const result: AxiosResponse = await apiPostNewsFeed.getDownloadableURL(param);
    // return result;
  },
);

const slice = createSlice({
  name: 'sample@',
  initialState: initialState,
  reducers: {},

 
  extraReducers: (builder) => {
    builder.addCase(doAsyncSampleAction.pending, (state) => {
      
    });
   
    builder.addCase(doAsyncSampleAction.rejected, (state, action) => {
    
    });
  },
});
const { reducer: sampleReducer, actions } = slice;
export const {} = actions;

export default sampleReducer;
