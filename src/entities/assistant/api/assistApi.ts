import { baseApi } from '~shared/api/baseApi';
import { IChatRequest, IChatResponse } from '~entities/assistant/model/type.ts';


export const chatApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    sendMessage: build.mutation<IChatResponse, IChatRequest>({
      query: (payload) => ({
        url: '/assist',
        method: 'POST',
        body: payload,
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});

export const { useSendMessageMutation } = chatApi;
