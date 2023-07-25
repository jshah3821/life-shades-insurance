import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import makeRequest from "../../../utils/ApiHandler";
import { RootState } from "../../store";
// Define a type for the slice state

interface State {
  status: string;
  code:number;
  myorderList :any;
  
}

// Define the initial state using that type
const initialState: State = {
  status: "",
  code:0,
  myorderList :[],
};

export const placeOrder = createAsyncThunk<any,any>(
  "checkout/placeOrder",
  async (body) => {
   const response = await makeRequest("post",`order-place`,body);
    return response;
  }
);

export const getOrders = createAsyncThunk<any>(
  "checkout/getOrders",
  async () => {
    const response = await makeRequest("get",`get-orders`);
    return response;
  }
);

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    clearState: (state) => {
      state.status = "";
      state.code = 0;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getOrders.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.status = "success";
        if (action.payload.status === 200) {
          state.code = action.payload.status;
        state.myorderList = action.payload.data.data
        }
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(placeOrder.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(placeOrder.fulfilled, (state, action) => {
        state.status = "success";
        if (action.payload.status === 200) {
        }
      })
      .addCase(placeOrder.rejected, (state, action) => {
        state.status = "failed";
      })

  },
});

export const {clearState} =checkoutSlice.actions;

export const ApiStatus:any = (state: RootState) => 
  state.checkout.status;

  export const myordersList = (state: RootState) => 
  state.checkout.myorderList;

  export const Code = (state: RootState) => 
  state.checkout.code;

const checkoutReducer = checkoutSlice.reducer;
export default checkoutReducer;
