import { combineReducers } from '@reduxjs/toolkit';
import sampleReducer from '../slice/api-slice/sample-slice';

export const rootReducer = combineReducers({
    sampleReducer
});
