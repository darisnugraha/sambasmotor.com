import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { showModal } from "../../../actions/datamaster_action";
import {
  NotifSucces,
  ReanderField,
  ReanderSelect,
} from "../../../components/notification/notification";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search,
  CSVExport,
} from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import Skeleton from "react-loading-skeleton";
import Swal from "sweetalert2";

const { SearchBar } = Search;
const { ExportCSVButton } = CSVExport;

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
class HeadPermintaanBarang extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
                  {/* <button
                    type="button"
                    onClick={() => this.editModal(dataEdit)}
                    className="btn btn-warning mr-3"
                  >
                    Edit
                    <i className="fa fa-edit ml-2"></i>
                  </button> */}
                  <button
                    type="button"
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
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit} autoComplete={true}>
          <div className="row">
            <div className="col-lg-3">
              <Field
                name="no_permintaan"
                component={ReanderField}
                type="text"
                label="Nomor Permintaan"
                placeholder="Masukan Nomor Permintaan"
              />
            </div>
            <div className="col-lg-3">
              <Field
                name="nama_customer"
                component={ReanderSelect}
                options={[{ value: "nama customer", name: "nama customer" }]}
                type="text"
                label="Nama Customer"
                placeholder="Masukan Nama Customer"
              />
            </div>
            <div className="col-lg-3">
              <Field
                name="divisi"
                component={ReanderSelect}
                options={[{ value: "DIVISI", name: "DIVISI" }]}
                type="text"
                label="Divisi"
                placeholder="Masukan Divisi"
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
                <ToolkitProvider
                  keyField="no_acc"
                  data={this.props.permintaan_temp || []}
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
          </div>
          <div className="col-lg-12 mb-5 mt-3">
            <div className="text-right">
              <button className="btn btn-primary">
                Simpan <i className="fa fa-paper-plane ml-3"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
HeadPermintaanBarang = reduxForm({
  form: "permintaanBarang",
  enableReinitialize: true,
})(HeadPermintaanBarang);
export default connect()(HeadPermintaanBarang);
