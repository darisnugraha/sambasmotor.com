import {
  GET_LIST_BARANG_RONGSOK,
  GET_LIST_BAYAR_SERVICE,
  GET_LIST_RETURN_SUPPLIER,
  GET_LIST_TERIMA_SUPPLIER,
  SET_PEMBAYARAN_SUPPLIER,
  GET_LIST_PEMBAYARAN_TEMP,
  GET_LIST_BARANG_SPAREPART_TEMP,
} from "../actions/transaksi_action";

const initialState = {
  listbayar_service: false,
  listterimasupplier: false,
  listreturnsupplier: false,
  listbarangrongsok: false,
  listPembayaran: [],
  listpembayaran_temp: [],
  sum_pembayaran: 0,
  listBarangSparepart: [],
  totalTukar: 0,
};

const transaksi = (state = initialState, actions) => {
  switch (actions.type) {
    case GET_LIST_BAYAR_SERVICE:
      return {
        ...state,
        listbayar_service: actions.payload.data,
      };
    case GET_LIST_TERIMA_SUPPLIER:
      return {
        ...state,
        listterimasupplier: actions.payload.data,
        sub_total: actions.payload.sub_total,
      };
    case GET_LIST_RETURN_SUPPLIER:
      return {
        ...state,
        listreturnsupplier: actions.payload.data,
        sub_total: actions.payload.sub_total,
      };
    case GET_LIST_BARANG_RONGSOK:
      return {
        ...state,
        listbarangrongsok: actions.payload.data,
        sub_total: actions.payload.sub_total,
      };
    case GET_LIST_PEMBAYARAN_TEMP:
      return {
        ...state,
        listpembayaran_temp: actions.payload.data,
        sum_pembayaran: actions.payload.sub_total,
      };
    case SET_PEMBAYARAN_SUPPLIER:
      return {
        ...state,
        listPembayaran: actions.payload.data,
      };
    case GET_LIST_BARANG_SPAREPART_TEMP:
      return {
        ...state,
        listBarangSparepart: actions.payload.data,
        sub_total: actions.payload.sub_total,
        totalTukar: actions.payload.totalTukar,
      };
    default:
      return state;
  }
};

export default transaksi;
