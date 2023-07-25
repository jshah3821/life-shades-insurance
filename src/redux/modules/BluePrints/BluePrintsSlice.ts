import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import makeRequest from "../../../utils/ApiHandler";
import { RootState } from "../../store";
// Define a type for the slice state

interface State {
  status: string;
  code:number;
  bluePrintList :any;
  addfileLoader:boolean;
  addedObj:{};
  msg: string | undefined;
  pdfCode:number;
  pdfStatus:string;
  pdfMsg:string | undefined,
  pdfPages:any[];
  editedPdfCode:number;
  addCartCode:number;
  uploadPdfCode:number;
}

// Define the initial state using that type
const initialState: State = {
  status: "",
  code:0,
  uploadPdfCode:0,
  bluePrintList :[],
  addfileLoader:false,
  addedObj:{},
  msg: "",
  pdfCode:0,
  pdfStatus:"",
  pdfMsg:"",
  pdfPages:[],
  editedPdfCode:0,
  addCartCode:0
};

export const addBluePrint = createAsyncThunk<any,any>(
  "blueprint/addBluePrint",
  async (body) => {
   const response = await makeRequest("post",`add-blueprint`,body,true);
    return response;
  }
);

export const editPrint = createAsyncThunk<any,any>(
  "blueprint/editPrint",
  async (body,{dispatch}) => {
   const response = await makeRequest("post",`edit-bluePrint`,body.payload);
   await response?.status === 200 && dispatch(getBluprintsList(body.data));
    return response;
  }
);

export const mergeBlueprint = createAsyncThunk<any,any>(
  "blueprint/mergeBlueprint",
  async (data,{dispatch}) => {
    const response = await makeRequest("post",`merge-blueprint`,data.payload);
    await response.status === 200 && dispatch(getBluprintsList(data.data));
    return response;
  }
);

export const getBluprintsList = createAsyncThunk<any,any>(
  "blueprint/getBluprintsList",
  async (data) => {
    const response = await makeRequest("get",`get-blueprint?page=${data.page}&size=${data.size}&name=${data.search}`);
    return response;
  }
);

export const deleteBlueprint = createAsyncThunk<any,any>(
  "blueprint/deleteBlueprint",
  async (body,{ dispatch }) => {
    const response = await makeRequest("delete",`delete-blueprint?bluePrintId=${body.id}`);
    await response.status === 200 && dispatch(getBluprintsList(body.data));
    return response;
  }
);

export const addCartBluePrint = createAsyncThunk<any,any>(
  "blueprint/addCartBluePrint",
  async (body) => {
   const response = await makeRequest("post",`add-to-cart-blue-print`,body);
    return response;
  }
);

export const getPdfsPages = createAsyncThunk<any,any>(
  "blueprint/getPdfsPages",
 
  async (body) => {
   const response = await makeRequest("post",`get-pdfs-pages`,body);
   
    return response;
  }
);

export const saveEditedBlueprint = createAsyncThunk<any,any>(
  "blueprint/saveEditedBlueprint",
 
  async (body) => {
   const response = await makeRequest("post",`save-edited-blue-print`,body);
    return response;
  }
);


export const BluePrintsSlice = createSlice({
  name: "blueprint",
  initialState,
  reducers: {
    clearMsg:(state) => {state.msg = ""},
    clearState: (state) => {
      state.status = "";
      state.msg = "";
      state.code = 0;
       state.uploadPdfCode = 0
      state.addCartCode = 0;
      state.addedObj = {};
    },
    clearUploadPdfState:(state) => { state.uploadPdfCode = 0},
    clearPdfState: (state) => {
      state.pdfStatus = "";
      state.pdfMsg = "";
      state.pdfCode = 0;
      state.editedPdfCode = 0;
    },
    clearCartApiStatus: (state) => {
      state.addCartCode = 0
    }
  },
  extraReducers(builder) {
    builder
      .addCase(addBluePrint.pending, (state, action) => {
        // state.status = "loading";
        state.addfileLoader = true
      })
      .addCase(addBluePrint.fulfilled, (state, action) => {
        state.status = "success";
        state.addfileLoader = false;
        if (action.payload.status === 200) {
          state.uploadPdfCode = action.payload.status;
        state.addedObj = action.payload.data.data
        } else {
          state.msg = action.payload.msg;
        }
        
      })
      .addCase(addBluePrint.rejected, (state, action) => {
        state.status = "failed";
        state.addfileLoader = false
        state.msg = action.error.message;
      })

      .addCase(editPrint.pending, (state, action) => {
       
      })
      .addCase(editPrint.fulfilled, (state, action) => {
        if (action.payload.status === 200) {
        }  
      })
      .addCase(editPrint.rejected, (state, action) => {
      })

      .addCase(mergeBlueprint.pending, (state, action) => {
       
      })
      .addCase(mergeBlueprint.fulfilled, (state, action) => {
        if (action.payload.status === 200) {
        }  
      })
      .addCase(mergeBlueprint.rejected, (state, action) => {
      })

       .addCase(getBluprintsList.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getBluprintsList.fulfilled, (state, action) => {
          state.status = "success";
          if (action.payload.status === 200) {
          state.code = action.payload.status;
          state.bluePrintList = action.payload.data.data} else {
          state.msg = action.payload.msg;
        }
      })
      .addCase(getBluprintsList.rejected, (state, action) => {
        state.status = "failed";
        state.msg = action.error.message;
      })

      .addCase(deleteBlueprint.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteBlueprint.fulfilled, (state, action) => {
        state.status = "success";
        if (action.payload.status === 200) {
          state.code = action.payload.status;
        } else {
          state.msg = action.payload.msg;
        }
        
      })
      .addCase(deleteBlueprint.rejected, (state, action) => {
        state.status = "failed";
        state.msg = action.error.message;
      })

        .addCase(addCartBluePrint.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addCartBluePrint.fulfilled, (state, action) => {
        state.status = "success";
         if (action.payload.status === 200) {
          state.addCartCode = action.payload.status;
        } else {
          state.msg = action.payload.msg;
        }
      })
      .addCase(addCartBluePrint.rejected, (state, action) => {
        state.status = "failed";
        state.msg = action.error.message;
      })

       .addCase(getPdfsPages.pending, (state, action) => {
        state.pdfStatus = "loading";
      })
      .addCase(getPdfsPages.fulfilled, (state, action) => {
        state.pdfStatus = "success";
         if (action.payload.status === 200) {
          state.pdfCode = action.payload.status;
          state.pdfPages = action.payload.data.data
        } else {
          state.pdfMsg = action.payload.msg;
        }
      })
      .addCase(getPdfsPages.rejected, (state, action) => {
        state.pdfStatus = "failed";
        state.pdfMsg = action.error.message;
      })

       .addCase(saveEditedBlueprint.pending, (state, action) => {
        state.pdfStatus = "loading";
      })
      .addCase(saveEditedBlueprint.fulfilled, (state, action) => {
        state.pdfStatus = "success";
         if (action.payload.status === 200) {
          state.editedPdfCode = action.payload.status;
          // state.pdfPages = action.payload.data.data
        } else {
          state.pdfMsg = action.payload.msg;
        }
      })
      .addCase(saveEditedBlueprint.rejected, (state, action) => {
        state.pdfStatus = "failed";
        state.pdfMsg = action.error.message;
      })
     
  },
});

export const {clearState,clearMsg,clearPdfState,clearCartApiStatus,clearUploadPdfState} =BluePrintsSlice.actions;

export const blueprintsApiStatus:any = (state: RootState) => 
  state.blueprint.status;

  export const  addedData = (state: RootState) => 
  state.blueprint.addedObj;

  export const List = (state: RootState) => 
  state.blueprint.bluePrintList;

  export const blueprintCode = (state: RootState) => 
  state.blueprint.code;

  export const addFileLoaderState = (state: RootState) => 
  state.blueprint.addfileLoader;

const BluePrintReducer = BluePrintsSlice.reducer;
export default BluePrintReducer;
