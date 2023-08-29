import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

// DEV ONLY!!!
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

const photosApi = createApi({
  reducerPath: 'photos',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005',
    fetchFn: async (...args) => {
      await pause(1000);
      return fetch(...args);
    },
  }),
  endpoints: builder => ({
    fetchPhotos: builder.query({
      providesTags: (result, error, album) => {
        const tags = result.map(photo => ({
          type: 'photo', id: photo.id
        }));
        tags.push({ type: 'albumsPhoto', id: album.id })

        return tags;
      },
      query: album => ({
        url: '/photos',
        params: {
          albumId: album.id,
        },
        method: 'GET',
      }),
    }),
    addPhoto: builder.mutation({
      invalidatesTags: (result, error, album) =>
        [{ type: 'albumsPhoto', id: album.id }],
      query: album => ({
        url: '/photos',
        method: 'POST',
        body: {
          albumId: album.id,
          url: faker.image.url(150, 150, true),
        },
      }),
    }),
    removePhoto: builder.mutation({
      invalidatesTags: (result, error, photo) =>
        [{ type: 'photo', id: photo.id }],
      query: photo => ({
        url: `/photos/${photo.id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useFetchPhotosQuery, useAddPhotoMutation, useRemovePhotoMutation } = photosApi;
export { photosApi };
