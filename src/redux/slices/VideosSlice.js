import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 watching:[],
 bookmark:[],
 viewed:[],
 currentVideo:{},
}

export const VideosSlice = createSlice({
  name: 'Videos',
  initialState,
  reducers: {
    SetCurrentVideo: (state, action) => {
      state.currentVideo=action.payload
  },
    SetWatching: (state, action) => {
        state.watching=action.payload
    },
    AddWatching: (state, action) => {
      state.watching.push(action.payload)
  },
    SetBookmark: (state, action) => {
      state.bookmark=action.payload
  },
  SetViewed: (state, action) => {
    state.viewed=action.payload
},
  },
})

export const {SetCurrentVideo, SetWatching, 
  SetBookmark, SetViewed, AddWatching } = VideosSlice.actions

export default VideosSlice.reducer