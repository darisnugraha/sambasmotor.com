import {
  GET_LIST_BARANG_RONGSOK,
  GET_LIST_BAYAR_SERVICE,
  GET_LIST_RETURN_SUPPLIER,
  GET_LIST_TERIMA_SUPPLIER,
  SET_PEMBAYARAN_SUPPLIER,
} from "../actions/transaksi_action";

const initialState = {
  listbayar_service: false,
  listterimasupplier: false,
  listreturnsupplier: false,
  listbarangrongsok: false,
  listPembayaran: [],
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
    case SET_PEMBAYARAN_SUPPLIER:
      return {
        ...state,
        listPembayaran: actions.payload.data,
      };
    default:
      return state;
  }
};

export default transaksi;
