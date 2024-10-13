import {api as index} from ".."


const ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

const api = index.injectEndpoints({
    endpoints: (builder) => ({
        getData: builder.query<DATA.GetDataResponse, DATA.GetDataRequest>({
            query: () => ({
                url: `${ENDPOINT}`,
                method: 'GET',
            }),
            providesTags: ["data"]
        }),

        postData: builder.mutation<DATA.PostDataResponse, DATA.PostDataRequest>({
            query: (data) => ({
                url: `${ENDPOINT}`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ["data"]
        }),

        putData: builder.mutation<DATA.PutDataResponse, DATA.PutDataRequest>({
            query: (data) => {
                const { _id, ...updateData } = data; 
                return {
                    url: `${ENDPOINT}/${_id}`, 
                    method: 'PUT',
                    body: updateData, 
                };
            },
            invalidatesTags: ["data"]
        }),

        deleteData: builder.mutation<DATA.DeleteDataResponse, DATA.DeleteDataRequest>({
            query: (_id) => ({
                url: `${ENDPOINT}/${_id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["data"]
        })
    })
})


export const {useGetDataQuery, usePostDataMutation, usePutDataMutation, useDeleteDataMutation} = api;


