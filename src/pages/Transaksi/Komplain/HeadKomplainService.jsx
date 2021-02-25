import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, formValueSelector, reduxForm } from "redux-form";
import { showModal } from "../../../actions/datamaster_action";
import {
  ReanderField,
  ReanderSelect,
} from "../../../components/notification/notification";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

const { SearchBar } = Search;
class HeadKomplainService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          dataField: "kode_barcode",
          text: "Kode barcode",
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
          dataField: "type",
          text: "Type",
        },
        {
          dataField: "ukuran",
          text: "Ukuran",
        },
        {
          dataField: "qty",
          text: "Qty",
        },
        {
          dataField: "satuan",
          text: "Satuan",
        },
        {
          dataField: "harga_satuan",
          text: "Harga Satuan",
        },
        {
          dataField: "total",
          text: "Total",
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
                    onClick={() => console.log("PILIH")}
                    className="btn btn-primary mr-3"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          },
        },
      ],
    };
  }

  handleChange(nama, data) {
    let split = data || "DEFAULT|DEFAULT";
    let hasil = split.split("|");
    this.props.change(nama, hasil[1]);
  }

  onChange() {
    this.props.change("total", this.props.total);
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
              <div className="col-lg-12">
                <h4>
                  Silahkan isi No Polisi, data pemilik dan kendaraan akan
                  otomatis terisi
                </h4>
              </div>
              <div className="col-lg-4">
                <Field
                  name="no_komplain"
                  component={ReanderField}
                  type="text"
                  label="No Komplain"
                  placeholder="Masukan No Komplain"
                />
              </div>
              <div className="col-lg-4">
                <Field
                  name="no_polisi"
                  component={ReanderField}
                  type="text"
                  label="No Polisi"
                  placeholder="Masukan No Polisi"
                />
              </div>
              <div className="col-lg-4">
                <Field
                  name="tanggal"
                  component={ReanderField}
                  type="text"
                  label="Tanggal"
                  placeholder="Masukan Tanggal"
                />
              </div>
            </div>
            <div className="row mt-3">
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
                    component={ReanderField}
                    type="text"
                    label="Nama"
                    placeholder="Masukan Nama"
                  />
                </div>
                <div className="col-lg-12">
                  <Field
                    name="alamat"
                    component={ReanderField}
                    type="text"
                    label="Alamat"
                    placeholder="Masukan Alamat"
                  />
                </div>
                <div className="col-lg-12">
                  <Field
                    name="kota"
                    component={ReanderField}
                    type="text"
                    label="Kota"
                    placeholder="Masukan Kota"
                  />
                </div>
                <div className="col-lg-12">
                  <Field
                    name="handphone"
                    component={ReanderField}
                    type="text"
                    label="Handphone"
                    placeholder="Masukan Handphone"
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="col-lg-12">
                  <Field
                    name="no_polisi"
                    component={ReanderField}
                    type="text"
                    label="Nomor Polisi"
                    placeholder="Masukan Nomor Polisi"
                  />
                </div>
                <div className="col-lg-12">
                  <Field
                    name="merk"
                    component={ReanderSelect}
                    options={[
                      { value: "MERK01", name: "MERK 01" },
                      { value: "MERK02", name: "MERK 02" },
                      { value: "MERK012", name: "MERK 012" },
                      { value: "MERK04", name: "MERK 04" },
                    ]}
                    type="text"
                    label="Merk"
                    placeholder="Masukan Merk"
                  />
                </div>
                <div className="col-lg-12">
                  <Field
                    name="model"
                    component={ReanderSelect}
                    options={[
                      { value: "MODEL01", name: "MODEL 01" },
                      { value: "MODEL02", name: "MODEL 02" },
                      { value: "MODEL012", name: "MODEL 012" },
                      { value: "MODEL04", name: "MODEL 04" },
                    ]}
                    type="text"
                    label="Model"
                    placeholder="Masukan Model"
                  />
                </div>
                <div className="col-lg-12">
                  <Field
                    name="warna"
                    component={ReanderSelect}
                    options={[
                      { value: "WARNA01", name: "WARNA 01" },
                      { value: "WARNA02", name: "WARNA 02" },
                      { value: "WARNA012", name: "WARNA 012" },
                      { value: "WARNA04", name: "WARNA 04" },
                    ]}
                    type="text"
                    label="Warna"
                    placeholder="Masukan Warna"
                  />
                </div>
                <div className="col-lg-12">
                  <Field
                    name="no_mesin"
                    component={ReanderField}
                    type="text"
                    label="Nomor Mesin"
                    placeholder="Masukan Nomor Mesin"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="col-lg-12">
                  <label htmlFor="">Catatan Keluhan</label>
                  <Field
                    name="catatan_keluhan"
                    component="textarea"
                    type="text"
                    className="form-control"
                    label="Catatan Keluhan"
                    placeholder="Masukan Catatan Keluhan"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 mt-3">
            <div className="text-right">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => this.props.dispatch(showModal())}
              >
                Tambah Barang <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
          <div className="col-lg-12">
            <ToolkitProvider
              keyField="no_acc"
              data={this.state.data || []}
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
                  <hr />
                  <div className="col-12">
                    <BootstrapTable
                      pagination={paginationFactory()}
                      {...props.baseProps}
                    />
                    <br />
                  </div>
                </div>
              )}
            </ToolkitProvider>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <Field
                name="total_sparepart"
                component={ReanderField}
                type="text"
                label="Grand Total Sparepart"
                placeholder="Masukan Grand Total Sparepart"
              />
            </div>
            <div className="col-lg-3">
              <Field
                name="total_jasa"
                component={ReanderField}
                type="text"
                label="Grand Total Jasa"
                placeholder="Masukan Total Jasa"
              />
            </div>
            <div className="col-lg-1">
              <Field
                name="discount"
                component={ReanderField}
                type="number"
                label="Discount ( % )"
                placeholder="0"
                onChange={this.onChange()}
              />
            </div>
            <div className="col-lg-3">
              <Field
                name="total"
                component={ReanderField}
                type="text"
                label="Total Biaya"
                placeholder="Masukan Total Biaya"
              />
            </div>
          </div>
          <div className="col-lg-12 mt-3">
            <div className="text-right">
              <button type="submit" className="btn btn-primary">
                Simpan <i className="fa fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

HeadKomplainService = reduxForm({
  form: "HeadKomplainService",
  enableReinitialize: true,
})(HeadKomplainService);
const selector = formValueSelector("HeadKomplainService"); // <-- same as form name
export default connect((state) => {
  const { total_sparepart, total_jasa, discount } = selector(
    state,
    "total_sparepart",
    "total_jasa",
    "discount"
  );
  let discountnya = discount / 100;
  let totalnya = parseFloat(total_sparepart || 0) + parseFloat(total_jasa || 0);
  let discount_total = totalnya * discountnya || 0;
  return {
    total_sparepart: total_sparepart,
    total_jasa: total_jasa,
    total: totalnya - discount_total,
  };
})(HeadKomplainService);
