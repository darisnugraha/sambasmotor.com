import {
  GET_HANCUR_BARANG_TEMP,
  GET_KONVERSI_BARANG_TEMP,
  GET_KUNCI_BARANG_TEMP,
  GET_PENGELUARAN_BARANG_SELECTED,
  GET_PERMINTAAN_TEMP,
} from "../actions/stocking_action";

const initialState = {
  permintaan_temp: false,
  pengeluaran_selected: false,
  konversi_temp: false,
  hancur_temp: false,
  kunci_temp: false,
};

const stocking = (state = initialState, actions) => {
  switch (actions.type) {
    // Permintaan
    case GET_PERMINTAAN_TEMP:
      return {
        ...state,
        permintaan_temp: actions.payload.data,
      };
    case GET_PENGELUARAN_BARANG_SELECTED:
      return {
        ...state,
        pengeluaran_selected: actions.payload.data,
      };
    case GET_KONVERSI_BARANG_TEMP:
      return {
        ...state,
        konversi_temp: actions.payload.data,
      };
    case GET_HANCUR_BARANG_TEMP:
      return {
        ...state,
        hancur_temp: actions.payload.data,
      };
    case GET_KUNCI_BARANG_TEMP:
      return {
        ...state,
        kunci_temp: actions.payload.data,
      };
    default:
      return state;
  }
};

export default stocking;
