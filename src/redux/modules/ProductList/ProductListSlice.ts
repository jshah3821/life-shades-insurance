import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import makeRequest from "../../../utils/ApiHandler";
import { RootState } from "../../store";
// Define a type for the slice state

interface State {
  productList: any;
  status: string;
  productDetail:any;
  modifierDetails:any;
  msg: string | undefined;
  code: number;
}

// Define the initial state using that type
const initialState: State = {
  productList: [],
  productDetail:{},
  status: "",
  modifierDetails:{},
  msg: "",
  code: 0,
  
};
export const getProductListing = createAsyncThunk<any,any>(
  "ProductList/getProductListing",
  async (id) => {
    const response = await makeRequest("get", `get-product?category_id=${id}`);
    return response;
  }
);
export const getProductDetail = createAsyncThunk<any,any>(
  "ProductList/getProductDetail",
  async (slug) => {
    const response = await makeRequest("get", `get-product-detail?slug=${slug}`);
    return response;
  }
);

export const changeModifier = createAsyncThunk<any,any>(
  "ProductList/changeModifier",
  async (data) => {
    const response = await makeRequest("post", `get-product-combination`,data);
    return response;
  }
);

export const ProductListSlice = createSlice({
  name: "ProductList",
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
      .addCase(getProductListing.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getProductListing.fulfilled, (state, action) => {
        state.status = "success";
        if (action.payload.status === 200) {
          state.productList = action.payload.data;
           state.code = action.payload.status;
        }  else {
          state.msg = action.payload.msg;
        }
      })
      .addCase(getProductListing.rejected, (state, action) => {
        state.status = "failed";
        state.msg = action.error.message;
      })
      .addCase(getProductDetail.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getProductDetail.fulfilled, (state, action) => {
        state.status = "success";
        if (action.payload.status === 200) {
           state.productDetail = action.payload.data;
           state.code = action.payload.status;
        }  else {
          state.msg = action.payload.msg;
        }
      })
      .addCase(getProductDetail.rejected, (state, action) => {
        state.status = "failed";
        state.msg = action.error.message;
      })

      .addCase(changeModifier.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(changeModifier.fulfilled, (state, action) => {
        state.status = "success";
        if (action.payload.status === 200) {
           state.modifierDetails = action.payload.data;
           state.code = action.payload.status;
        }  else {
          state.msg = action.payload.msg;
        }
      })
      .addCase(changeModifier.rejected, (state, action) => {
        state.status = "failed";
        state.msg = action.error.message;
      });
  },
});
export const {clearState,clearMsg} = ProductListSlice.actions;

export const getProductList = (state: RootState) =>
  state.ProductList.productList.data;
  export const productDetail = (state: RootState) =>
  state?.ProductList?.productDetail?.data;
  export const appliedModifierDetail = (state: RootState) =>
  state?.ProductList?.modifierDetails?.data;
 export const productListApiStatus = (state: RootState) =>
  state.ProductList.status;
const ProductListingReducer = ProductListSlice.reducer;
export default ProductListingReducer;
