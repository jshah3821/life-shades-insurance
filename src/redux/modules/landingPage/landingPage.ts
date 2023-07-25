import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import makeRequest from "../../../utils/ApiHandler";
import { RootState } from "../../store";
// Define a type for the slice state

interface LanadingPageState {
  menuItems: any;
  status: string;
  msg: string | undefined;
  code: number;
}

// Define the initial state using that type
const initialState: LanadingPageState = {
  menuItems: [],
  status: "",
  msg: "",
  code: 0,
};
export const megamenu = createAsyncThunk<any>(
  "landingPage/megamenu",
  async () => {
    const response = await makeRequest("get", "get-category");
    return response;
  }
);
export const landingPageSlice = createSlice({
  name: "landingPage",
  initialState,
  reducers: {
    clearMsg:(state) => {state.msg = ""},
    clearState: (state) => {
      state.msg = "";
      state.code = 0;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(megamenu.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(megamenu.fulfilled, (state, action) => {
        state.status = "success";
        if (action.payload.status === 200) {
          state.code = action.payload.status;
        state.menuItems = action.payload.data;
        } else {
          state.msg = action.payload.msg;
        }
      })
      .addCase(megamenu.rejected, (state, action) => {
        state.status = "failed";
        state.msg = action.error.message;
      });
  },
});
export const {clearState,clearMsg} = landingPageSlice.actions;
export const landingPageApiStatus = (state: RootState) => 
  state.landingPage.status;

export const getMenuItems = (state: RootState) =>
  state?.landingPage?.menuItems?.data;
const landingPageReducer = landingPageSlice.reducer;
export default landingPageReducer;
