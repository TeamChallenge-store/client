import { baseApi } from "~shared/api/baseApi";

const getCSRFToken = (): string | null => {
  const csrfToken = document.cookie.split(';').find(cookie => cookie.trim().startsWith('csrftoken='));
  return csrfToken ? csrfToken.split('=')[1].trim() : null;
};

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    registerUser: build.mutation<void, { username: string; email: string; password: string; re_password: string }>({
      query: (data) => {
        const csrfToken = getCSRFToken();

        return {
          url: '/auth/users/',
          method: 'POST',
          body: data,
          credentials: 'include',
          headers: csrfToken
            ? {
              'X-CSRFToken': csrfToken,
            }
            : {},
        };
      },
    }),
    loginUser: build.mutation<{ access: string, refresh: string }, { email: string, password: string }>({
      query: (data) => ({
        url: '/auth/jwt/jwt/create/',
        method: 'POST',
        body: data,
        credentials: 'include',
      }),
    }),
    fetchGitHubTokens: build.mutation<{ access: string}, { code: string }>({
      query: ({ code }) => ({
        url: '/dj-rest-auth/github/',
        method: 'POST',
        body: { code },
        credentials: 'include',
      }),
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation, useFetchGitHubTokensMutation } = authApi;
