import { api } from "../../services/api";

export const attendanceApi = api.injectEndpoints({
  endpoints: (builder) => ({

    punchIn: builder.mutation({
      query: (data) => ({
        url: "/attendance/punch-in",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Attendance"],
    }),

    punchOut: builder.mutation({
      query: () => ({
        url: "/attendance/punch-out",
        method: "POST",
      }),
      invalidatesTags: ["Attendance"],
    }),

    getMyAttendance: builder.query({
      query: () => "/attendance",
      providesTags: ["Attendance"],
    }),

    getAllAttendance: builder.query({
      query: () => "/attendance",
      providesTags: ["Attendance"],
    }),

    validateAttendance: builder.mutation({
      query: ({ id, status, remarks }) => ({
        url: `/attendance/validate/${id}`,
        method: "PUT",
        body: { status, remarks },
      }),
      invalidatesTags: ["Attendance"],
    }),

  }),
});

export const {
  usePunchInMutation,
  usePunchOutMutation,
  useGetMyAttendanceQuery,
  useGetAllAttendanceQuery,
  useValidateAttendanceMutation,
} = attendanceApi;