import { AxiosMasterGet } from "../axios";

export const GET_PERMINTAAN_TEMP = "GET_PERMINTAAN_TEMP";
export const GET_HANCUR_BARANG_TEMP = "GET_HANCUR_BARANG_TEMP";
export const GET_KUNCI_BARANG_TEMP = "GET_KUNCI_BARANG_TEMP";
export const GET_KONVERSI_BARANG_TEMP = "GET_KONVERSI_BARANG_TEMP";
export const GET_PENGELUARAN_BARANG_TEMP = "GET_PENGELUARAN_BARANG_TEMP";
export const GET_PENGELUARAN_BARANG_SELECTED =
  "GET_PENGELUARAN_BARANG_SELECTED";

// Modal
export const getPermintaanTemp = () => {
  let data = JSON.parse(localStorage.getItem("PermintaanBarang_temp")) || [];
  return (dispatch) => {
    dispatch({
      type: GET_PERMINTAAN_TEMP,
      payload: {
        data: data,
      },
    });
  };
};
export const getKonversiTemp = () => {
  let data = JSON.parse(localStorage.getItem("KonversiBarang_temp")) || [];
  return (dispatch) => {
    dispatch({
      type: GET_KONVERSI_BARANG_TEMP,
      payload: {
        data: data,
      },
    });
  };
};
export const getHancurTemp = () => {
  let data = JSON.parse(localStorage.getItem("HancurBarang_temp")) || [];
  return (dispatch) => {
    dispatch({
      type: GET_HANCUR_BARANG_TEMP,
      payload: {
        data: data,
      },
    });
  };
};
export const getKunciBarang = () => {
  let data = JSON.parse(localStorage.getItem("KunciBarang_temp")) || [];
  return (dispatch) => {
    dispatch({
      type: GET_KUNCI_BARANG_TEMP,
      payload: {
        data: data,
      },
    });
  };
};

export const getPengeluaranBarang = (kode) => {
  return (dispatch) => {
    AxiosMasterGet("pengeluaran-barang/get/FakturByNoPermintaan/" + kode)
      .then((res) => {
        let data = res.data;
        let arrayBaru = [];
        for (let i = 0; i < data.length; i++) {
          arrayBaru.push(data[i].detail);
        }
        dispatch({
          type: GET_PENGELUARAN_BARANG_TEMP,
          payload: {
            data: arrayBaru,
          },
        });
      })
      .catch((err) => console.log(err));
  };
};
export const getPengeluaranBarangSelected = () => {
  let data = JSON.parse(localStorage.getItem("FakturTerpilih_detail")) || [];
  return (dispatch) => {
    dispatch({
      type: GET_PENGELUARAN_BARANG_SELECTED,
      payload: {
        data: data,
      },
    });
  };
};

// export const getPengeluaranBarang = (kode) => {
//   return (dispatch) => {
//     AxiosMasterGet("pengeluaran-barang/get/FakturByNoPermintaan/" + kode)
//       .then((res) =>
//         dispatch({
//           type: GET_PENGELUARAN_BARANG_TEMP,
//           payload: {
//             data: res.data,
//           },
//         })
//       )
//       .catch((err) => console.log(err));
//   };
// };
