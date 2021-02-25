//Mendaftarkan reducer / Menggabungkan
import { combineReducers } from "redux";
import datamaster from "./datamaster";
import stocking from "./stocking";
import transaksi from "./transaksi";
import supervisor from "./supervisor";
import member from "./member";
import { reducer as formReducer } from "redux-form";
export default combineReducers({
  datamaster,
  stocking,
  transaksi,
  supervisor,
  member,
  form: formReducer,
});
