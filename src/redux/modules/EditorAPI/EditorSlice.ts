import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import makeRequest from "../../../utils/ApiHandler";
import { RootState } from "../../store";
// Define a type for the slice state

interface State {
  removedBgImg: string;
  getMyProjectsData: any[];
   getCustomisationDetailsData: any;
   customisationDetailCode:number;
  status: string;
  addedCustomisationData: any;
  code: number;
  removeBgCode: number;
  msg: string | undefined;
  newImageURL: string;
}

// Define the initial state using that type
const initialState: State = {
  removedBgImg: "",
  status: "",
  getMyProjectsData: [],
  getCustomisationDetailsData: {},
  addedCustomisationData: {},
  customisationDetailCode:0,
  newImageURL: "",
  code: 0,
  removeBgCode: 0,
  msg: "",
};
export const getRemovedBgImage = createAsyncThunk<any, any>(
  "Editor/getRemovedBgImage",
  async (image) => {
    const response = await makeRequest("post", `remove-image-bg`, image);
    return response;
  }
);

export const sendCustomisationData = createAsyncThunk<any, any>(
  "Editor/sendCustomisationData",
  async (obj) => {
    const response = await makeRequest("post",`${obj.id ? `update-customized-product`:`add-customized-product`}`, obj);
    return response;
  }
);

export const getCustomisationData = createAsyncThunk<any>(
  "Editor/getCustomisationData",
  async () => {
    const response = await makeRequest("get", `get-customized-product`);
    return response;
  }
);

export const getCustomisationDetails = createAsyncThunk<any,any>(
  "Editor/getCustomisationDetails",
  async (id) => {
    const response = await makeRequest("get", `get-customized-product-detail?customizetion_id=${id}`);
    return response;
  }
);

export const removeCustomisationData = createAsyncThunk<any, any>(
  "Editor/removeCustomisationData",
  async (data, { dispatch }) => {
    const response = await makeRequest(
      "delete",
      `delete-customized-product?id=${data.id}&user_session_id=${data.user_session_id}`
    );
    (await response.status) === 200 && dispatch(getCustomisationData());
    return response;
  }
);

export const EditorSlice = createSlice({
  name: "Editor",
  initialState,
  reducers: {
    clearMsg: (state) => {
      state.msg = "";
    },
    clearState: (state) => {
      state.status = "";
      state.code = 0;
    },
    clearCustomisationState:(state) => {
      state.customisationDetailCode = 0
    },
    updateImageURL: (state, action) => {
      state.newImageURL = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getRemovedBgImage.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getRemovedBgImage.fulfilled, (state, action) => {
        state.status = "success";
        if (action.payload.status === 200) {
          state.removedBgImg = action.payload.data.data;
          state.removeBgCode = action.payload.status;
        } else {
          state.msg = action.payload.msg;
        }
      })
      .addCase(getRemovedBgImage.rejected, (state, action) => {
        state.status = "failed";
        state.msg = action.error.message;
      })
      .addCase(sendCustomisationData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(sendCustomisationData.fulfilled, (state, action) => {
        state.status = "success";
        if (action.payload.status === 200) {
          state.code = action.payload.status;
          state.addedCustomisationData = action.payload.data.data;
        }
      })
      .addCase(sendCustomisationData.rejected, (state, action) => {
        state.status = "failed";
        state.msg = action.error.message;
      })

      .addCase(getCustomisationData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getCustomisationData.fulfilled, (state, action) => {
        state.status = "success";
         if (action.payload.status === 200) {
            state.getMyProjectsData = action.payload.data.data;
        }
      })
      .addCase(getCustomisationData.rejected, (state, action) => {
        state.status = "failed";
        state.msg = action.error.message;
      })
      .addCase(getCustomisationDetails.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getCustomisationDetails.fulfilled, (state, action) => {
        state.status = "success";
         if (action.payload.status === 200) {
          state.getCustomisationDetailsData=action.payload.data.data;
          state.customisationDetailCode = 200
        }
      })
      .addCase(getCustomisationDetails.rejected, (state, action) => {
        state.status = "failed";
        state.msg = action.error.message;
      });
  },
});
export const { clearState, clearMsg, updateImageURL,clearCustomisationState } = EditorSlice.actions;
export const EditorApiStatus: any = (state: RootState) => state.Editor.status;
export const editorApiCode = (state: RootState) => state.Editor.code;
export const GetAddedCustomisationData = (state: RootState) =>
  state.Editor.addedCustomisationData;

export const getRemovedBgImageUrl = (state: RootState) =>
  state.Editor.removedBgImg;
const EditorReducer = EditorSlice.reducer;
export default EditorReducer;
