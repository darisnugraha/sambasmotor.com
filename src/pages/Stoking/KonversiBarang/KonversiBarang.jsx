import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search,
  CSVExport,
} from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import Skeleton from "react-loading-skeleton";
import ModalGlobal from "../../ModalGlobal.jsx";
import { NotifSucces } from "../../../components/notification/notification.jsx";
import {
  Panel,
  PanelBody,
  PanelHeader,
} from "../../../components/panel/panel.jsx";
import HeadKonversiBarang from "./HeadKonversiBarang.jsx";
import { hideModal } from "../../../actions/datamaster_action.jsx";
import CetakNota from "../CetakNota.jsx";
import { getKonversiTemp } from "../../../actions/stocking_action.jsx";

const ModalKonversiBarang = lazy(() => import("./ModalKonversiBarang.jsx"));
const { SearchBar } = Search;
const { ExportCSVButton } = CSVExport;

const maptostate = (state) => {
  return {
    konversi_temp: state.stocking.konversi_temp,
  };
};
const hapusDataKategori = (params, dispatch) => {
  Swal.fire({
    title: "Anda Yakin !!",
    text: "Ingin Menghapus Data Ini ?",
    icon: "warning",
    position: "top-center",
    cancelButtonText: "Tidak",
    showCancelButton: true,
    confirmButtonText: "OK",
    showConfirmButton: true,
  }).then((result) => {
    if (result.isConfirmed) {
      NotifSucces("Data Berhasil Di Hapus");
    }
  });
};
class KonversiBarang extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      modalDialog: false,
      isLoading: false,
      columns: [
        {
          dataField: "kode_asal",
          text: "Kode Asal",
          sort: true,
        },
        {
          dataField: "nama_barang_asal",
          text: "Nama Barang",
        },
        {
          dataField: "qty_asal",
          text: "Qty",
        },
        {
          dataField: "satuan_asal",
          text: "Satuan",
        },
        {
          dataField: "kode_tujuan",
          text: "Kode Tujuan",
        },
        {
          dataField: "nama_barang_tujuan",
          text: "Nama Barang",
        },
        {
          dataField: "qty_tujuan",
          text: "Qty",
        },
        {
          dataField: "satuan_tujuan",
          text: "Satuan",
        },

        {
          dataField: "action",
          text: "Action",
          csvExport: false,
          headerClasses: "text-center",
          formatter: (rowcontent, row) => {
            let dataEdit = {
              kode_asal: row.kode_asal,
              nama_barang_asal: row.nama_barang,
              qty_asal: row.qty,
              satuan_asal: row.satuan,
              kode_tujuan: row.kode_tujuan,
              nama_barang_tujuan: row.nama_barang,
              qty_tujuan: row.qty,
              satuan_tujuan: row.satuan,
            };
            this.setState({});
            return (
              <div className="row text-center">
                <div className="col-12">
                  <button
                    onClick={() => this.editModal(dataEdit)}
                    className="btn btn-warning mr-3"
                  >
                    Edit
                    <i className="fa fa-edit ml-2"></i>
                  </button>
                  <button
                    onClick={() =>
                      hapusDataKategori(row.kodeProvinsi, this.props.dispatch)
                    }
                    className="btn btn-danger"
                  >
                    Hapus
                    <i className="fa fa-trash ml-2"></i>
                  </button>
                </div>
              </div>
            );
          },
        },
      ],
    };
  }

  componentDidMount() {
    this.props.dispatch(getKonversiTemp());
  }
  handleSubmit(hasil) {
    let array = JSON.parse(localStorage.getItem("KonversiBarang_temp")) || [];
    let data = {
      kode_asal: hasil.kode_asal,
      nama_barang_asal: hasil.nama_barang_asal,
      qty_asal: hasil.qty_asal,
      satuan_asal: hasil.satuan_asal,
      kode_tujuan: hasil.kode_tujuan,
      nama_barang_tujuan: hasil.nama_barang_tujuan,
      qty_tujuan: hasil.qty_tujuan,
      satuan_tujuan: hasil.satuan_tujuan,
    };

    array.push(data);
    localStorage.setItem("KonversiBarang_temp", JSON.stringify(array));
    NotifSucces("Berhasil Menambahan Data")
      .then(() => this.props.dispatch(getKonversiTemp()))
      .then(() => this.props.dispatch(hideModal()));
  }
  sendData(hasil) {
    let data = {
      no_pindah: hasil.no_pindah,
      tanggal: hasil.tanggal,
      lokasi: hasil.lokasi,
      list_barang: this.props.permintaan_temp,
    };
    console.log(data);
    // INISIALISASI AUTOTABLE
    const tableRows = [];
    let table = JSON.parse(localStorage.getItem("KonversiBarang_temp"));
    table.forEach((data, i) => {
      const rows = [
        ++i,
        data.kode_asal,
        data.nama_barang_asal,
        data.qty_asal,
        data.satuan_asal,
        data.kode_tujuan,
        data.nama_barang_tujuan,
        data.qty_tujuan,
        data.satuan_tujuan,
      ];
      tableRows.push(rows);
    });
    let columnTabel = [
      "NO",
      "KODE ASAL",
      "NAMA BARANG",
      "QTY",
      "SAT",
      "KODE TUJUAN",
      "NAMA BARANG",
      "QTY",
      "SAT",
    ];
    // INISIALISASI SELESAI -> PANGGIL AXIOS DAN PANGGIL PRINT SAAT AXIOS BERHASIL
    CetakNota(
      "Tanggal",
      hasil.tanggal,
      "",
      "",
      "No Bukti",
      hasil.no_pindah,
      "",
      "",
      "ADMIN",
      "01-28-2021",
      "ADMIN",
      columnTabel,
      "BUKTI PERMINTAAN BARANG",
      tableRows,
      false
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
          <PanelBody>
            <br />
            <div className="col-lg-12">
              <HeadKonversiBarang onSubmit={(data) => this.sendData(data)} />
            </div>
            {/* Master Kategori */}
            {this.props.konversi_temp ? (
              <div className="col-lg-12">
                <ToolkitProvider
                  keyField="no_acc"
                  data={this.props.konversi_temp || []}
                  columns={this.state.columns}
                  search
                  exportCSV={{
                    fileName: "Export Master Kategori.csv",
                  }}
                >
                  {(props) => (
                    <div className="row">
                      <div className="col-6">
                        <div className="text-left">
                          <SearchBar {...props.searchProps} />
                        </div>
                      </div>
                      <div className="col-6"></div>
                      <hr />
                      <div className="col-12">
                        <BootstrapTable
                          pagination={paginationFactory()}
                          {...props.baseProps}
                        />
                        <br />
                        <ExportCSVButton {...props.csvProps}>
                          Export CSV!!
                        </ExportCSVButton>
                      </div>
                    </div>
                  )}
                </ToolkitProvider>
              </div>
            ) : (
              <Skeleton width={"100%"} height={400} />
            )}
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
                  <ModalKonversiBarang
                    onSubmit={(data) => this.handleSubmit(data)}
                    onSend={this.props.onSend}
                    isEdit={this.state.isEdit}
                  />
                </Suspense>
              }
            />

            {/* End Tambah Master Kategori  */}
          </PanelBody>
        </Panel>
      </div>
    );
  }
}

export default connect(maptostate, null)(KonversiBarang);
