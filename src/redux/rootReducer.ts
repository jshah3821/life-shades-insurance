import { combineReducers } from "@reduxjs/toolkit";
import BluePrintReducer from "./modules/BluePrints/BluePrintsSlice";
import checkoutReducer from "./modules/checkout/checkoutSlice";
import EditorReducer from "./modules/EditorAPI/EditorSlice";
import landingPageReducer from "./modules/landingPage/landingPage";
import layoutReducer from "./modules/layout/layoutSlice";
import ProductListingReducer from "./modules/ProductList/ProductListSlice";
import stickerReducer from "./modules/sticker/stickerSlice";

const rootReducer = combineReducers({
  layout: layoutReducer,
  landingPage: landingPageReducer,
  ProductList:ProductListingReducer,
  sticker: stickerReducer,
  Editor:EditorReducer,
  blueprint:BluePrintReducer,
  checkout:checkoutReducer
});

export default rootReducer;
