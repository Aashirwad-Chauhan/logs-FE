import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

//LOCALHOST -> http://localhost:3000/api/v1/logger

export const logsApi = createApi({
  reducerPath: 'logsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://logs-be-veej.onrender.com/api/v1/logger' }),
  endpoints: (builder) => ({
    getLogs: builder.query({
      query: (searchParams) => ({
        url: '/logs',
        params: searchParams,
      }),
    }),
    postLog: builder.mutation({
      query: (newLog) => ({
        url: '/logsetter',
        method: 'POST',
        body: newLog,
      }),
    }),
  }),
});

export const { useGetLogsQuery, usePostLogMutation } = logsApi;