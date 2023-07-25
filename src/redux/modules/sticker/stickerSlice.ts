import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import makeRequest from "../../../utils/ApiHandler";
import { RootState } from "../../store";

interface stickerState {
  status?: string;
  msg: string | undefined;
  code: number;
  stickerDetailsData: any;
  stickersListData: any;
  fileUrl: string;
  fonts: [];
  cartItems: any;
  updateCartData: [];
}

const initialState: stickerState = {
  status: "",
  msg: "",
  code: 0,
  stickerDetailsData: {},
  stickersListData: [],
  fileUrl: "",
  fonts: [],
  cartItems: [],
  updateCartData: [],
};

export const stickersList = createAsyncThunk<any>("stickerList", async () => {
  const response = await makeRequest("get", `sticker-type`);
  return response;
});

export const stickerDetails = createAsyncThunk<any, any>(
  "stickerDetails",
  async (id) => {
    const response = await makeRequest(
      "get",
      `sticker-type-details?stickerTypeId=${id}`
    );
    return response;
  }
);

export const uploadArtWorkFile = createAsyncThunk<any, any>(
  "uploadArtWorkFile",
  async (body) => {
    const makeFileUpload = async (body?: any) => {
      return axios
        .post("https://testyourapp.online/jet-print-php/api/image", body, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          const data = {
            status: response.status,
            data: response.data,
          };
          return data;
        })
        .catch((error) => {
          if (error.response.status === 401) {
            localStorage.clear();
            window.location.replace("/login");
          } else {
            return error.response.data;
          }
        });
    };

    const response = await makeFileUpload(body);
    return response;
  }
);

export const addToCart = createAsyncThunk<any, any>(
  "addToCart",
  async (body) => {
    const response = await makeRequest("post", `sticker-add-to-cart`, body);
    return response;
  }
);

export const getCart = createAsyncThunk<any>("getCart", async () => {
  const response = await makeRequest("get", `get-cart`);
  return response;
});

export const updateCart = createAsyncThunk<any, any>(
  "updateCart",
  async (body) => {
    const response = await makeRequest("post", `update-cart-item`, body);
    return response;
  }
);

export const deleteCart = createAsyncThunk<any, number>(
  "deleteCart",
  async (id, { dispatch }) => {
    const response = await makeRequest(
      "get",
      `delete-cart-item?CartItemId=${id}`
    );
    // (await response.status) === 200 && dispatch(getCart());
    return response;
  }
);

const stickerSlice = createSlice({
  name: "sticker",
  initialState,
  reducers: {
    clearState: (state) => {
      state.msg = "";
      state.code = 0;
    },
  },
  extraReducers(builder) {
    builder
      //getStickersList
      .addCase(stickersList.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(stickersList.fulfilled, (state, action) => {
        if (action.payload.status === 200) {
          state.status = "succeeded";
          state.msg = action.payload.data.msg;
          state.code = action.payload.status;
          state.stickersListData = action.payload.data;
        } else {
          state.msg = action.payload.msg;
        }
      })
      .addCase(stickersList.rejected, (state, action) => {
        state.status = "failed";
        state.msg = action.error.message;
      })
      //getStickerDetails
      .addCase(stickerDetails.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(stickerDetails.fulfilled, (state, action) => {
        if (action.payload.status === 200) {
          state.status = "succeeded";
          state.msg = action.payload.data.msg;
          state.code = action.payload.status;
          state.stickerDetailsData = action.payload.data;
        } else {
          state.msg = action.payload.msg;
        }
      })
      .addCase(stickerDetails.rejected, (state, action) => {
        state.status = "failed";
        state.msg = action.error.message;
      })
      .addCase(uploadArtWorkFile.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(uploadArtWorkFile.fulfilled, (state, action) => {
        if (action.payload.status === 200) {
          state.status = "succeeded";
          state.msg = action.payload.data.msg;
          state.code = action.payload.status;
          state.fileUrl = action.payload.data.file;
        } else {
          state.msg = action.payload.msg;
        }
      })
      .addCase(uploadArtWorkFile.rejected, (state, action) => {
        state.status = "failed";
        state.msg = action.error.message;
      })
      .addCase(addToCart.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        if (action.payload.status === 200) {
          state.status = "succeeded";
          state.msg = action.payload.data.msg;
          state.code = action.payload.status;
        } else {
          state.msg = action.payload.msg;
        }
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.status = "failed";
        state.msg = action.error.message;
      })
      .addCase(getCart.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getCart.fulfilled, (state, action) => {
        if (action.payload.status === 200) {
          state.status = "succeeded";
          state.msg = action.payload.data.msg;
          state.code = action.payload.status;
          state.cartItems = action.payload.data.data;
        } else {
          state.msg = action.payload.msg;
        }
      })
      .addCase(getCart.rejected, (state, action) => {
        state.status = "failed";
        state.msg = action.error.message;
      })
      .addCase(updateCart.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(updateCart.fulfilled, (state, action) => {
        const tempData: Array<any> = state.cartItems.filter(
          (obj: any) => obj.id !== action.payload.data.data.id
        );
        if (action.payload.status === 200) {
          state.status = "succeeded";
          state.msg = action.payload.data.msg;
          state.code = action.payload.status;
          state.updateCartData = action.payload.data.data;
          state.cartItems = [...tempData, action.payload.data.data];
        } else {
          state.msg = action.payload.msg;
        }
      })
      .addCase(updateCart.rejected, (state, action) => {
        state.status = "failed";
        state.msg = action.error.message;
      })
      .addCase(deleteCart.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteCart.fulfilled, (state, action) => {
        if (action.payload.status === 200) {
          state.status = "succeeded";
          state.msg = action.payload.data.msg;
          state.code = action.payload.status;
          // state.cartItems = state.cartItems.filter((obj:any)=>obj.id !== action.payload.data.data.id)
        } else {
          state.msg = action.payload.msg;
        }
      })
      .addCase(deleteCart.rejected, (state, action) => {
        state.status = "failed";
        state.msg = action.error.message;
      });
  },
});

// export const { clearState } = stickerSlice.actions;

// Selectors
export const getStickersList = (state: RootState) =>
  state.sticker.stickersListData.data;
export const getStickerDetails = (state: RootState) =>
  state.sticker.stickerDetailsData;
export const getStickerState = (state: RootState) => state.sticker;
// Reducer
const stickerReducer = stickerSlice.reducer;
export default stickerReducer;
