import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { showModal } from "../../../actions/datamaster_action";
import {
  deleteLocalItemBarcode,
  ReanderField,
  ReanderSelect,
} from "../../../components/notification/notification";
import Skeleton from "react-loading-skeleton";
import Swal from "sweetalert2";
import { getPermintaanTemp } from "../../../actions/stocking_action";
import { AxiosMasterGet } from "../../../axios";
import Tabel from "../../../components/Tabel/tabel";

const maptostate = (state) => {
  return {
    initialValues: {
      no_permintaan: localStorage.getItem("kode_permintaan_barang") || "",
    },
  };
};
class HeadPermintaanBarang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listDivisi: [],
      listSales: [],
      listSupplier: [],
      columns: [
        {
          dataField: "kode_barcode",
          text: "Kode barcode",
          sort: true,
        },
        {
          dataField: "nama_barang",
          text: "Nama Barang",
        },
        {
          dataField: "merk",
          text: "Merk",
        },
        {
          dataField: "kwalitas",
          text: "kwalitas",
        },
        {
          dataField: "ukuran",
          text: "Ukuran",
        },
        {
          dataField: "stock",
          text: "Stock",
        },
        {
          dataField: "qty",
          text: "Qty",
        },

        {
          dataField: "action",
          text: "Action",
          csvExport: false,
          headerClasses: "text-center",
          formatter: (rowcontent, row) => {
            this.setState({});
            return (
              <div className="row text-center">
                <div className="col-12">
                  <button
                    type="button"
                    onClick={() => this.deleteBarang(row)}
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
  deleteBarang(row) {
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
        deleteLocalItemBarcode("PermintaanBarang_temp", row.kode_barcode);
        // deleteLocalItemBarcode("PermintaanBarang_temp", row.kode_barcode);
        this.props.dispatch(getPermintaanTemp());
      }
    });
  }
  componentDidMount() {
    AxiosMasterGet("divisi/get/all").then((res) =>
      this.setState({
        listDivisi: res.data.map((list) => {
          let data = {
            value: list.kode_divisi,
            name: list.nama_divisi,
          };
          return data;
        }),
      })
    );
    AxiosMasterGet("supplier/get/all").then((res) =>
      this.setState({
        listSupplier: res.data.map((list) => {
          let data = {
            value: list.kode_supplier,
            name: `${list.nama_supplier} ( ${list.kode_supplier} )`,
          };
          return data;
        }),
      })
    );
    AxiosMasterGet("permintaan-barang/generate/no-trx").then((res) =>
      this.props.change("no_permintaan", res.data[0].no_permintaan)
    );
  }
  getSales(hasil) {
    AxiosMasterGet("pegawai/get/by-kode-divisi/" + hasil).then((res) =>
      this.setState({
        listSales: res.data.map((list) => {
          let data = {
            value: list.kode_pegawai,
            name: list.nama_pegawai,
          };
          return data;
        }),
      })
    );
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit} autoComplete={true}>
        <div className="col-lg-12">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-2">
                <Field
                  name="no_permintaan"
                  component={ReanderField}
                  type="text"
                  label="Nomor Permintaan"
                  placeholder="Masukan Nomor Permintaan"
                  readOnly
                />
              </div>
              <div className="col-lg-3">
                <Field
                  name="divisi"
                  component={ReanderSelect}
                  options={this.state.listDivisi}
                  type="text"
                  label="Divisi"
                  placeholder="Masukan Divisi"
                  onChange={(e) => this.getSales(e)}
                />
              </div>
              <div className="col-lg-3">
                <Field
                  name="pegawai"
                  component={ReanderSelect}
                  options={this.state.listSales}
                  type="text"
                  label="Pegawai"
                  placeholder="Masukan Pegawai"
                />
              </div>
              <div className="col-lg-3">
                <Field
                  name="tanggal"
                  component={ReanderField}
                  type="date"
                  label="Tanggal"
                  placeholder="Masukan Tanggal"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 mb-5">
          <div className="text-right">
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => this.props.dispatch(showModal())}
            >
              Tambah Barang <i className="fa fa-plus ml-3"></i>
            </button>
          </div>
        </div>
        <div className="col-lg-12">
          {this.props.permintaan_temp ? (
            <div className="col-lg-12">
              <Tabel
                keyField="kode_barcode"
                data={this.props.permintaan_temp || []}
                columns={this.state.columns}
                CSVExport
                textEmpty="Silahkan Tekan Tombol Kuning Untuk Tambah Barang"
              />
            </div>
          ) : (
            <Skeleton width={"100%"} height={400} />
          )}
        </div>
        <div className="col-lg-12 mb-5 mt-3">
          <div className="text-right">
            <button className="btn btn-primary">
              Simpan <i className="fa fa-paper-plane ml-3"></i>
            </button>
          </div>
        </div>
      </form>
    );
  }
}
HeadPermintaanBarang = reduxForm({
  form: "permintaanBarang",
  enableReinitialize: true,
})(HeadPermintaanBarang);
export default connect(maptostate, null)(HeadPermintaanBarang);
