import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { token } from "@/lib/config/constant";

// const apiUrl = "http://127.0.0.1:8000";
const apiUrl = "https://femstech.wamasolution.com/api/public";
export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  tagTypes: ["user", "contact"],
  endpoints: (builder) => ({
    StoreContact: builder.mutation({
      query: (payload) => ({
        url: "v1/contact",
        method: "POST",
        body: payload,
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      }),
      invalidatesTags: ["contact"], // Ensure 'Contact' matches the tag used in other parts of your RTK Query setup
    }),
    StoreSubscriber: builder.mutation({
      query: (payload) => ({
        url: "/subscribe",
        method: "POST",
        body: payload,
      }),
    }),
    getStoryList: builder.query({
      query: ({
        page_num = 1,
        page_size = 12,
        order_by = "id",
        order_direction = "desc",
      }) => ({
        url: "/stories",
        method: "GET",
        params: {
          page_num,
          page_size,
          order_by,
          order_direction,
        },
      }),
    }),
    getSingleStory: builder.query({
      query: (id) => ({
        url: `story/${id}`,
        method: "GET",
      }),
    }),
    getBlogList: builder.query({
      query: ({ page_num = 1, page_size = 12, order_by = "id" }) => ({
        url: "/blogs",
        method: "GET",
        params: {
          page_num,
          page_size,
          order_by,
        },
      }),
    }),
    getSingleBlog: builder.query({
      query: (id) => ({
        url: `blog/${id}`,
        method: "GET",
      }),
    }),
    getCommentList: builder.query({
      query: ({
        page_num = 1,
        page_size = 12,
        order_by = "id",
        order_direction = "desc",
        entity_id = 1,
        entity_type = "BLOG",
      }) => ({
        url: `/comments`,
        method: "GET",
        params: {
          page_num,
          page_size,
          order_by,
          order_direction,
          entity_id,
          entity_type,
        },
      }),
    }),
    getSingleComment: builder.query({
      query: (id) => ({
        url: `/comment/${id}`,
        method: "GET",
      }),
    }),
    getEventList: builder.query({
      query: ({
        page_num = 1,
        page_size = 12,
        order_by = "id",
        order_direction = "desc",
      }) => ({
        url: "/activites",
        method: "GET",
        params: { page_num, page_size, order_by, order_direction },
      }),
    }),
    getSingleEvent: builder.query({
      query: (id) => ({
        url: `activity/${id}`,
        method: "GET",
      }),
    }),
    getJobList: builder.query({
      query: ({
        page_num = 1,
        page_size = 12,
        order_by = "id",
        order_direction = "desc",
      }) => ({
        url: "/jobs",
        method: "GET",
        params: {
          page_num,
          page_size,
          order_by,
          order_direction,
        },
      }),
    }),
    getSingleJob: builder.query({
      query: (id) => ({
        url: `/job/${id}`,
        method: "GET",
      }),
    }),
    getSpeakersList: builder.query({
      query: ({
        page_num = 1,
        page_size = 12,
        order_by = "id",
        order_direction = "desc",
        activity_id = 1,
        activity_type = "EVENT",
      }) => ({
        url: "/speakers",
        method: "GET",
        params: {
          page_num,
          page_size,
          order_by,
          order_direction,
          activity_id,
          activity_type,
        },
      }),
    }),
    getSingleSpeaker: builder.query({
      query: (id) => ({
        url: `/activity-speaker/${id}`,
        method: "GET",
      }),
    }),
    getStudyHubList: builder.query({
      query: ({
        page_num = 1,
        page_size = 12,
        order_by = "id",
        order_direction = "desc",
      }) => ({
        url: "/studyhubs",
        method: "GET",
        params: {
          page_num,
          page_size,
          order_by,
          order_direction,
        },
      }),
    }),
    getSignleStudyHub: builder.query({
      query: (id) => ({
        url: `/studyhub/${id}`,
        method: "GET",
      }),
    }),
    getAwardList: builder.query({
      query: ({
        page_num = 1,
        page_size = 12,
        order_by = "id",
        order_direction = "desc",
      }) => ({
        url: "/awards",
        method: "GET",
        params: {
          page_num,
          page_size,
          order_by,
          order_direction,
        },
      }),
    }),
    getSingleAward: builder.query({
      query: (id) => ({
        url: `/award/${id}`,
        method: "GET",
      }),
    }),
    submitContactForm: builder.mutation({
      query: (data) => ({
        url: "/contact",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useStoreContactMutation,

  // comment
  useGetCommentListQuery,
  useGetSingleCommentQuery,

  // the subscribe

  useStoreSubscriberMutation,
  // single story

  useGetSingleStoryQuery,
  useGetStoryListQuery,

  // single blog
  useGetBlogListQuery,
  useGetSingleBlogQuery,

  // event

  useGetEventListQuery,
  useGetSingleEventQuery,

  // joblist
  useGetJobListQuery,
  useGetSingleJobQuery,

  // speakers
  useGetSpeakersListQuery,
  useGetSingleSpeakerQuery,

  // study Hub

  useGetStudyHubListQuery,
  useGetSignleStudyHubQuery,

  //  Award
  useGetAwardListQuery, 
  useGetSingleAwardQuery,

  // contact form 
  useSubmitContactFormMutation,
} = apiSlice;
