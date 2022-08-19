import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 watching:[],
 bookmark:[],
 viewed:[],
}

export const VideosSlice = createSlice({
  name: 'Videos',
  initialState,
  reducers: {
    SetVideos: (state, action) => {
     return {
        watching:action.payload.watch,
        bookmark:action.payload.bookmark,
        viewed:action.payload.viewed,
      }
  },
    SetWatching: (state, action) => {
        state.watching=action.payload
    },
    SetBookmark: (state, action) => {
      state.bookmark=action.payload
  },
  SetViewed: (state, action) => {
    state.viewed=action.payload
},
  },
})

export const {SetVideos, SetWatching, SetBookmark, SetViewed } = VideosSlice.actions

export default VideosSlice.reducer