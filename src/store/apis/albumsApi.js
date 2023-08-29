import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

// DEV ONLY!!!
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

const albumsApi = createApi({
  reducerPath: 'albums',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005',
    fetchFn: async (...args) => {
      await pause(1000);
      return fetch(...args);
    },
  }),
  endpoints: builder => ({
    fetchAlbums: builder.query({
      providesTags: (result, error, user) => {
        const tags = result.map(album => ({
          type: 'album', id: album.id
        }));
        tags.push({ type: 'usersAlbums', id: user.id })

        return tags;
      },
      query: user => ({
        url: '/albums',
        params: {
          userId: user.id,
        },
        method: 'GET',
      }),
    }),
    addAlbum: builder.mutation({
      invalidatesTags: (result, error, user) =>
        [{ type: 'usersAlbums', id: user.id }],
      query: user => ({
        url: '/albums',
        method: 'POST',
        body: {
          userId: user.id,
          title: faker.commerce.productName(),
        },
      }),
    }),
    removeAlbum: builder.mutation({
      invalidatesTags: (result, error, album) =>
        [{ type: 'album', id: album.id }],
      query: album => ({
        url: `/albums/${album.id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } = albumsApi;
export { albumsApi };
