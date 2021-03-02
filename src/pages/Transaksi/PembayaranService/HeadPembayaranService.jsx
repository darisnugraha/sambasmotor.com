import React, { Component } from "react";
import Skeleton from "react-loading-skeleton";
import { connect } from "react-redux";
import { Field, formValueSelector, reduxForm } from "redux-form";
import {
  ReanderField,
  ReanderFieldInline,
  ReanderSelect,
} from "../../../components/notification/notification";
import ToolkitProvider, {
  Search,
  CSVExport,
} from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { getToday } from "../../../components/helpers/function";
import {
  getListBarangPembayaran,
  ListBarangBayar,
} from "../../../actions/transaksi_action";

const { SearchBar } = Search;
const { ExportCSVButton } = CSVExport;
class HeadPembayaranService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      step1: "row",
      step2: "row d-none",
      hasil: [],
    };
  }

  componentDidMount() {
    this.props.change("tanggal", getToday());
  }
  handleChange(nama, data) {
    let split = data || "DEFAULT|DEFAULT";
    let hasil = split.split("|");
    this.props.change(nama, hasil[1]);
  }
  setCustomer(e) {
    let hasil = [];
    this.props.listbayar_service.map((list) =>
      list.no_daftar === e ? hasil.push(list) : null
    );
    console.log(hasil);
    localStorage.setItem("no_daftar", hasil[0].no_daftar);
    this.props.change("nama", hasil[0].nama_customer);
    this.props.change("alamat", hasil[0].alamat);
    this.props.change("kota", hasil[0].kota);
    this.props.change("handphone", hasil[0].handphone);
    this.props.change("nopol_kendaraan", hasil[0].nopol_kendaraan);
    this.props.change("merk_kendaraan", hasil[0].merk_kendaraan);
    this.props.change("warna_kendaraan", hasil[0].warna_kendaraan);
    this.props.change("nomesin_kendaraan", hasil[0].nomesin_kendaraan);
    this.props.change("type_kendaraan", hasil[0].type_kendaraan);
    this.props.dispatch(ListBarangBayar(hasil[0].detail_barang));
    localStorage.setItem(
      "list_barang_bayar",
      JSON.stringify(hasil[0].detail_barang)
    );
    this.props.dispatch(getListBarangPembayaran());
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit}
          onKeyPress={(e) => {
            e.key === "Enter" && e.preventDefault();
          }}
        >
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-4">
                <Field
                  name="tanggal"
                  label="Tanggal"
                  type="text"
                  component={ReanderField}
                  readOnly
                />
              </div>

              <div className="col-lg-4">
                <Field
                  name="pencarian"
                  label="Pencarian"
                  type="text"
                  component={ReanderSelect}
                  options={this.props.listbayar_service.map((list) => {
                    let data = {
                      value: `${list.no_daftar}`,
                      name: `${list.no_daftar} - ${list.nopol_kendaraan} - ${list.nama_customer}`,
                    };
                    return data;
                  })}
                  placeholder="Silahkan Pilih"
                  onChange={(e) => this.setCustomer(e)}
                />
              </div>
              {/* <div className="col-lg-4">
                <button
                  type="button"
                  className="btn btn-block btn-primary"
                  onClick={() => CetakFaktur("123", "123")}
                >
                  Print
                </button>
              </div> */}
            </div>
            <div className="row">
              <div className="col-lg-6 mb-3">
                <h4>Data Pemilik</h4>
              </div>
              <div className="col-lg-6 mb-3">
                <h4>Data Kendaraan</h4>
              </div>
              <div className="col-lg-6">
                <div className="col-lg-12">
                  <Field
                    name="nama"
                    component={ReanderFieldInline}
                    type="text"
                    label="Nama"
                    placeholder="Masukan Nama"
                    readOnly
                  />
                </div>
                <div className="col-lg-12">
                  <Field
                    name="alamat"
                    component={ReanderFieldInline}
                    type="text"
                    label="Alamat"
                    placeholder="Masukan Alamat"
                    readOnly
                  />
                </div>
                <div className="col-lg-12">
                  <Field
                    name="kota"
                    component={ReanderFieldInline}
                    type="text"
                    label="Kota"
                    placeholder="Masukan Kota"
                    readOnly
                  />
                </div>
                <div className="col-lg-12">
                  <Field
                    name="handphone"
                    component={ReanderFieldInline}
                    type="text"
                    label="Handphone"
                    placeholder="Masukan Handphone"
                    readOnly
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="col-lg-12">
                  <Field
                    name="nopol_kendaraan"
                    component={ReanderFieldInline}
                    type="text"
                    label="Nomor Polisi"
                    placeholder="Masukan Nomor Polisi"
                    readOnly
                  />
                </div>
                <div className="col-lg-12">
                  <Field
                    name="merk_kendaraan"
                    component={ReanderFieldInline}
                    type="text"
                    label="Merk"
                    readOnly
                    placeholder="Masukan Merk"
                  />
                </div>
                <div className="col-lg-12">
                  <Field
                    name="type_kendaraan"
                    component={ReanderFieldInline}
                    type="text"
                    label="Model"
                    placeholder="Masukan Model"
                    readOnly
                  />
                </div>
                <div className="col-lg-12">
                  <Field
                    name="warna_kendaraan"
                    component={ReanderFieldInline}
                    type="text"
                    label="Warna"
                    placeholder="Masukan Warna"
                    readOnly
                  />
                </div>
                <div className="col-lg-12">
                  <Field
                    name="nomesin_kendaraan"
                    component={ReanderFieldInline}
                    type="text"
                    label="Nomor Mesin"
                    placeholder="Masukan Nomor Mesin"
                    readOnly
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              {this.props.data ? (
                <ToolkitProvider
                  keyField="kode_suppier"
                  data={this.props.listbarangpembayaran || []}
                  columns={this.props.columns}
                  search
                >
                  {(props) => (
                    <div className="row">
                      <div className="col-12 mb-2">
                        <div className="row">
                          <div className="col-4">
                            <button
                              type="button"
                              onClick={this.props.showBayar}
                              className="btn btn-primary"
                            >
                              Bayar
                              <i className="fa fa-paper-plane ml-3"></i>
                            </button>
                          </div>

                          <div className="col-4 text-center">
                            <button
                              type="button"
                              className="btn btn-primary"
                              onClick={this.props.showJasa}
                            >
                              + Jasa / Barang
                              <i className="fa fa-wrench ml-3"></i>
                            </button>
                          </div>
                          {/* <div className="col-4">
                            <div className="text-right">
                              <button type="button" className="btn btn-primary">
                                Batal
                                <i className="fa fa-times ml-3"></i>
                              </button>
                            </div>
                          </div> */}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="text-right">
                          <SearchBar {...props.searchProps} />
                        </div>
                      </div>
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
              ) : (
                <Skeleton width={"100%"} height={400} />
              )}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

HeadPembayaranService = reduxForm({
  form: "HeadPembayaranService",
  enableReinitialize: true,
})(HeadPembayaranService);
const selector = formValueSelector("HeadPembayaranService");
export default connect((state) => {
  return {
    listbayar_service: state.transaksi.listbayar_service,
    kriteria: selector(state, "kriteria"),
    pencarian: selector(state, "pencarian"),
    listbarangpembayaran: state.transaksi.listbarangpembayaran,
  };
})(HeadPembayaranService);
