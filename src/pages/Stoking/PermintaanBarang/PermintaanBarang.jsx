import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import Skeleton from "react-loading-skeleton";
import ModalGlobal from "../../ModalGlobal.jsx";
import { NotifSucces } from "../../../components/notification/notification.jsx";
import { Panel, PanelHeader } from "../../../components/panel/panel.jsx";
import HeadPermintaanBarang from "./HeadPermintaanBarang.jsx";
import { hideModal } from "../../../actions/datamaster_action.jsx";
import CetakNota from "../CetakNota.jsx";
import { getPermintaanTemp } from "../../../actions/stocking_action.jsx";
import { simpanLocal } from "../../../config/Helper.jsx";

const ModalPermintaanBarang = lazy(() => import("./ModalPermintaanBarang.jsx"));

const maptostate = (state) => {
  return {
    permintaan_temp: state.stocking.permintaan_temp,
  };
};

class PermintaanBarang extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      modalDialog: false,
      isLoading: false,
      datakategori: [
        {
          no_acc: "8200930213",
          nama_bank: "BCA",
          atas_nama: "OCTAVIAN",
        },
      ],
    };
  }

  componentDidMount() {
    this.props.dispatch(getPermintaanTemp());
  }
  handleSubmit(hasil) {
    let array = JSON.parse(localStorage.getItem("PermintaanBarang_temp")) || [];
    let data = {
      kode_barcode: hasil.kode_barcode,
      nama_barang: hasil.nama_barang,
      merk: hasil.merk,
      kwalitas: hasil.kwalitas,
      ukuran: hasil.ukuran,
      stock: hasil.stock,
      qty: hasil.qty,
    };

    array.push(data);
    localStorage.setItem("PermintaanBarang_temp", JSON.stringify(array));
    NotifSucces("Berhasil Menambahan Data")
      .then(() => this.props.dispatch(getPermintaanTemp()))
      .then(() => this.props.dispatch(hideModal()));
  }
  sendData(hasil) {
    let data = {
      no_permintaan: hasil.no_permintaan,
      nama_customer: hasil.nama_customer,
      divisi: hasil.divisi,
      tanggal: hasil.tanggal,
      list_barang: this.props.permintaan_temp,
    };
    simpanLocal("tt_permintaan_barang", data);
    // INISIALISASI AUTOTABLE
    const tableRows = [];
    let table = JSON.parse(localStorage.getItem("PermintaanBarang_temp"));
    table.forEach((data, i) => {
      const rows = [
        ++i,
        data.kode_barcode,
        data.nama_barang,
        data.merk,
        data.kwalitas,
        data.qty,
      ];
      tableRows.push(rows);
    });
    let columnTabel = ["NO", "BARCODE", "JENIS BARANG", "MERK", "KW", "QTY"];
    // INISIALISASI SELESAI -> PANGGIL AXIOS DAN PANGGIL PRINT SAAT AXIOS BERHASIL
    CetakNota(
      "Tanggal",
      "01-28-2021",
      "NAMA",
      "OCTAVIAN",
      "NO PERMINTAAN",
      "MB01282021-0001",
      "DIVISI",
      "SALES",
      "ADMIN",
      "01-28-2021",
      "ADMIN",
      columnTabel,
      "BUKTI PERMINTAAN BARANG",
      tableRows,
      true
    );
  }
  render() {
    return (
      <div>
        <ol className="breadcrumb float-xl-right">
          <li className="breadcrumb-item">
            <Link to="#">Data Master</Link>
          </li>
          <li className="breadcrumb-item active">Permintaan Barang</li>
        </ol>
        <h1 className="page-header">Permintaan Barang </h1>
        <Panel>
          <PanelHeader>Permintaan Barang</PanelHeader>
          <br />
          <div className="col-lg-12">
            <HeadPermintaanBarang
              onSubmit={(data) => this.sendData(data)}
              permintaan_temp={this.props.permintaan_temp}
            />
          </div>
          {/* Master Kategori */}

          <br />
          {/* End Master Kategori */}
          <ModalGlobal
            title={
              this.state.isEdit
                ? "Edit Data Permintaan Barang"
                : "Tambah Data Barang"
            }
            content={
              <Suspense
                fallback={<Skeleton width={"100%"} height={50} count={2} />}
              >
                <ModalPermintaanBarang
                  onSubmit={(data) => this.handleSubmit(data)}
                  onSend={this.props.onSend}
                  isEdit={this.state.isEdit}
                />
              </Suspense>
            }
          />

          {/* End Tambah Master Kategori  */}
        </Panel>
      </div>
    );
  }
}

export default connect(maptostate, null)(PermintaanBarang);
