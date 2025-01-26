import { baseApi } from "~shared/api/baseApi";

const getCSRFToken = (): string | null => {
  const csrfToken = document.cookie.split(';').find(cookie => cookie.trim().startsWith('csrftoken='));
  return csrfToken ? csrfToken.split('=')[1].trim() : null;
};

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    registerUser: build.mutation<void, { username: string; email: string; password1: string; password2: string }>({
      query: (data) => {
        const csrfToken = getCSRFToken();

        return {
          url: '/dj-rest-auth/registration/',
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
    loginUser: build.mutation<void, { username: string, password: string }>({
      query: (data) => ({
        url: '/dj-rest-auth/login/',
        method: 'POST',
        body: data,
        credentials: 'include',
      }),
    }),
    loginWithGitHub: build.mutation<void, void>({
      query: () => ({
        url: '/dj-rest-auth/github/',
        method: 'POST',
        credentials: 'include',
      }),
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation, useLoginWithGitHubMutation } = authApi;
