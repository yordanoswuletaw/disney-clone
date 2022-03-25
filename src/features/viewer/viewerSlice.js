import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hover: "",
  route: "/",
  title: ["disney", "pixar", "marvel", "starwars", "national"],
  images: [
    "/disney-clone/images/viewers-disney.png",
    "/disney-clone/images/viewers-pixar.png",
    "/disney-clone/images/viewers-marvel.png",
    "/disney-clone/images/viewers-starwars.png",
    "/disney-clone/images/viewers-national.png",
  ],
  videos: [
    "/disney-clone/videos/1564674844-disney.mp4",
    "/disney-clone/videos/1564676714-pixar.mp4",
    "/disney-clone/videos/1564676115-marvel.mp4",
    "/disney-clone/videos/1608229455-star-wars.mp4",
    "/disney-clone/videos/1564676296-national-geographic.mp4",
  ],
};

export const viewerSlice = createSlice({
  name: "viewer",
  initialState,
  reducers: {
    setHover: (state, action) => {
      state.hover = action.payload;
    },
    changeRoute: (state, action) => {
      state.route = action.payload;
    },
  },
});

export const { setHover, changeRoute } = viewerSlice.actions;

export const selectRoute = (state) => state.viewer.route;
export const selectHover = (state) => state.viewer.hover;
export const selectImages = (state) => state.viewer.images;
export const selectVideos = (state) => state.viewer.videos;
export const selectTitle = (state) => state.viewer.title;

export default viewerSlice.reducer;
