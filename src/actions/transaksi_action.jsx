export const GET_LIST_BAYAR_SERVICE = "GET_LIST_BAYAR_SERVICE";
export const GET_LIST_TERIMA_SUPPLIER = "GET_LIST_TERIMA_SUPPLIER";
export const GET_LIST_RETURN_SUPPLIER = "GET_LIST_RETURN_SUPPLIER";
export const GET_LIST_BARANG_RONGSOK = "GET_LIST_BARANG_RONGSOK";
export const SET_PEMBAYARAN_SUPPLIER = "SET_PEMBAYARAN_SUPPLIER";

export const getListBayarService = () => {
  return (dispatch) => {
    dispatch({
      type: GET_LIST_BAYAR_SERVICE,
      payload: {
        data: [],
      },
    });
  };
};

export const getListTerimaSupplier = () => {
  let data = JSON.parse(localStorage.getItem("PenerimaanSupplier_temp")) || [];
  let total =
    data !== []
      ? data.map((data) => data.total).reduce((a, b) => a + b, 0)
      : null;
  return (dispatch) => {
    dispatch({
      type: GET_LIST_TERIMA_SUPPLIER,
      payload: {
        data: data,
        sub_total: total,
      },
    });
  };
};
export const getListReturnSupplier = () => {
  let data = JSON.parse(localStorage.getItem("ReturnSupplier_temp")) || [];
  let total =
    data !== []
      ? data.map((data) => data.total).reduce((a, b) => a + b, 0)
      : null;
  return (dispatch) => {
    dispatch({
      type: GET_LIST_RETURN_SUPPLIER,
      payload: {
        data: data,
        sub_total: total,
      },
    });
  };
};
export const setPembayaranSupplier = (data) => {
  return (dispatch) => {
    dispatch({
      type: SET_PEMBAYARAN_SUPPLIER,
      payload: {
        data: data,
      },
    });
  };
};
export const getListBarangRongsok = () => {
  let data = JSON.parse(localStorage.getItem("BarangRongsok_temp")) || [];
  let total =
    data !== []
      ? data.map((data) => parseFloat(data.total)).reduce((a, b) => a + b, 0)
      : null;
  return (dispatch) => {
    dispatch({
      type: GET_LIST_BARANG_RONGSOK,
      payload: {
        data: data,
        sub_total: total,
      },
    });
  };
};
