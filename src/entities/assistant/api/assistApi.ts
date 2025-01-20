import { baseApi } from '~shared/api/baseApi';
import { IChatRequest, IChatResponse } from '../model/types';


export const chatApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    sendMessage: build.mutation<IChatResponse, IChatRequest>({
      query: (payload) => ({
        url: '/assist',
        method: 'POST',
        body: payload,
        credentials: 'include',
      }),
    }),
  }),
});

export const { useSendMessageMutation } = chatApi;
