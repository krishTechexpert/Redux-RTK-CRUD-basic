import { configureStore} from '@reduxjs/toolkit'
import {countryApi} from '../api/CountrySlice'; 
const store = configureStore({
    reducer:{
        [countryApi.reducerPath]:countryApi.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(countryApi.middleware)

})

export default store;
