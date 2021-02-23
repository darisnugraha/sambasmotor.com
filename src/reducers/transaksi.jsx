import {
  GET_LIST_BARANG_RONGSOK,
  GET_LIST_BAYAR_SERVICE,
  GET_LIST_RETURN_SUPPLIER,
  GET_LIST_TERIMA_SUPPLIER,
  SET_PEMBAYARAN_SUPPLIER,
  GET_LIST_PEMBAYARAN_TEMP,
  GET_LIST_BARANG_SPAREPART_TEMP,
  GET_LIST_PIUTANG_CUSTOMER,
  SET_TOTAL_PIUTANG_CUSTOMER,
  GET_LIST_SERVICE,
  GET_LIST_BARANG_BAYAR,
  GET_LIST_BARANG_PEMBAYARAN,
  GET_LIST_BARANG_KIRIM_SERVICE,
  GET_LIST_KIRIM_SERVICE_LUAR,
  SET_GRAND_TOTAL,
} from "../actions/transaksi_action";

const initialState = {
  listbayar_service: [],
  listterimasupplier: false,
  listreturnsupplier: false,
  listbarangrongsok: false,
  listPembayaran: [],
  listpembayaran_temp: [],
  sum_pembayaran: 0,
  listBarangSparepart: [],
  totalTukar: 0,
  listpiutangcustomer: [],
  total_piutang: 0,
  totalbarang: 0,
  totalsparepart: 0,
  listdaftarservice: [],
  listbarangbayar: [],
  listbarangpembayaran: [],
  listkirimbarangservice: [],
  total_bayar: 0,
  listkirimserviceluar: [],
  grand_total: 0,
  no_bon_kirim: "",
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
        total_bayar: actions.payload.sub_total,
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
        total_bayar: actions.payload.sub_total,
        totalTukar: actions.payload.totalTukar,
      };
    case GET_LIST_PIUTANG_CUSTOMER:
      return {
        ...state,
        listpiutangcustomer: actions.payload.data,
      };
    case SET_TOTAL_PIUTANG_CUSTOMER:
      return {
        ...state,
        total_piutang: actions.payload.data,
      };
    case GET_LIST_BARANG_KIRIM_SERVICE:
      return {
        ...state,
        listkirimbarangservice: actions.payload.data,
        total_bayar: actions.payload.total_bayar,
      };
    case GET_LIST_BARANG_BAYAR:
      return {
        ...state,
        listbarangbayar: actions.payload.data,
      };
    case GET_LIST_BARANG_PEMBAYARAN:
      return {
        ...state,
        listbarangpembayaran: actions.payload.data,
        total_bayar: actions.payload.total_bayar,
      };
    case GET_LIST_SERVICE:
      return {
        ...state,
        listdaftarservice: actions.payload.data,
        totalbarang: actions.payload.totalbarang,
        totalsparepart: actions.payload.totalsparepart,
      };
    case GET_LIST_KIRIM_SERVICE_LUAR:
      return {
        ...state,
        listkirimserviceluar: actions.payload.data,
      };
    case SET_GRAND_TOTAL:
      return {
        ...state,
        total_bayar: actions.payload.data.grand_total,
        no_bon_kirim: actions.payload.data.no_bon,
      };
    default:
      return state;
  }
};

export default transaksi;
