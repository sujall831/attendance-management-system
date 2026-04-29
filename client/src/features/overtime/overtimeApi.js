import { api } from "../../services/api";

export const overtimeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    
    getOvertime: builder.query({
      query: () => "/overtime",
      providesTags: ["Overtime"],
    }),

    requestOvertime: builder.mutation({
      query: (data) => ({
        url: "/overtime",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Overtime"],
    }),

    updateOvertime: builder.mutation({
      query: ({ id, status }) => ({
        url: `/overtime/${id}`,
        method: "PUT",
        body: { status },
      }),
      invalidatesTags: ["Overtime"],
    }),
  }),
});

export const {
  useGetOvertimeQuery,
  useRequestOvertimeMutation,
  useUpdateOvertimeMutation,
} = overtimeApi;