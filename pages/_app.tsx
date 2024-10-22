import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Provider } from 'react-redux';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { handleRequests } from '@redux-requests/core';
import { createDriver } from '@redux-requests/axios';
import axios from 'axios';

const axiosInstance = axios.create();

export default function App({ Component, pageProps }: AppProps) {
  const { requestsReducer, requestsMiddleware } = handleRequests({
    cache: true,
    driver: createDriver(axiosInstance),
  });

  const reducers = combineReducers({
    requests: requestsReducer,
  });

  const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }),
      ...requestsMiddleware,
    ],
  });

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
