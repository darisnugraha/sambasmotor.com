import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, formValueSelector, reduxForm } from "redux-form";
import {
  ReanderField,
  ReanderSelect,
} from "../../../components/notification/notification";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { showModal } from "../../../actions/datamaster_action";
import { createNumberMask } from "redux-form-input-masks";
import { AxiosMasterGet } from "../../../axios";

const { SearchBar } = Search;
const currencyMask = createNumberMask({
  prefix: "Rp. ",
  decimalPlaces: 0,
  locale: "id-ID",
});

class HeadSupplierPenerimaan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listSupplier: [],
      columns: [
        {
          dataField: "kode_barcode",
          text: "Barcode",
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
          text: "Kwalitas",
        },
        {
          dataField: "satuan",
          text: "Satuan",
        },
        {
          dataField: "qty",
          text: "Qty",
        },
        {
          dataField: "harga_satuan",
          text: "Harga Satuan",
          formatter: (data) => {
            return "Rp. " + parseFloat(data).toLocaleString("id-ID");
          },
        },
        {
          dataField: "total",
          text: "Total",
          formatter: (data) => {
            return "Rp. " + parseFloat(data).toLocaleString("id-ID");
          },
        },
      ],
    };
  }

  componentDidMount() {
    AxiosMasterGet("supplier/get/all").then((res) =>
      this.setState({
        listSupplier: res.data,
      })
    );
  }
  setTotal() {
    this.props.change("total", this.props.total);
  }
  setLocal(nama, data) {
    localStorage.setItem(nama, data);
  }
  setCheckbox(nama) {
    let data = localStorage.getItem(nama);
    if (data) {
      let hasil = data === "true" ? true : false;
      localStorage.setItem(nama, !hasil);
    } else {
      localStorage.setItem(nama, true);
    }
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="row">
          <div className="col-lg-3">
            <Field
              name="kode_terima"
              component={ReanderField}
              type="text"
              label="Kode Terima"
              placeholder="Masukan Kode Terima"
              readOnly
            />
          </div>
          <div className="col-lg-3">
            <Field
              name="kode_supplier"
              component={ReanderSelect}
              options={this.state.listSupplier.map((list) => {
                let data = {
                  value: list.kode_supplier,
                  name: list.nama_supplier,
                };
                return data;
              })}
              type="text"
              label="Supplier"
              placeholder="Masukan Supplier"
              onChange={(e) => this.setLocal("penerimaan_kode_supplier", e)}
            />
          </div>
          <div className="col-lg-3">
            <Field
              name="tanggal_invoice"
              component={ReanderField}
              type="date"
              label="Tanggal Invoice"
              placeholder="Masukan Tanggal Invoice"
              onChange={(e) =>
                this.setLocal("penerimaan_tanggal_invoice", e.target.value)
              }
            />
          </div>
          <div className="col-lg-3">
            <Field
              name="tanggal_barang"
              component={ReanderField}
              type="date"
              label="Tanggal Barang"
              placeholder="Masukan Tanggal Barang"
              onChange={(e) =>
                this.setLocal("penerimaan_tanggal_barang", e.target.value)
              }
            />
          </div>
          <div className="col-lg-3">
            <Field
              name="keterangan"
              component={ReanderField}
              type="text"
              label="Keterangan"
              placeholder="Masukan Keterangan"
              onChange={(e) =>
                this.setLocal("penerimaan_keterangan", e.target.value)
              }
            />
          </div>
          <div className="col-lg-3">
            <Field
              name="no_bon"
              component={ReanderField}
              type="text"
              label="Nomor Bon"
              placeholder="Masukan Nomor Bon"
              onChange={(e) =>
                this.setLocal("penerimaan_no_bon", e.target.value)
              }
            />
          </div>
          <div className="col-lg-3">
            <label className="mb-4">Pembayaran</label>
            <div>
              <label className="mr-3">
                <Field
                  name="tunai"
                  component="input"
                  type="checkbox"
                  value="tunai"
                  className="mr-3"
                  onClick={() => this.setCheckbox("penerimaan_tunai")}
                />
                Tunai
              </label>
              <label className="mr-3">
                <Field
                  name="kredit"
                  component="input"
                  type="checkbox"
                  value="kredit"
                  className="mr-3"
                  onClick={() => this.setCheckbox("penerimaan_kredit")}
                />
                Kredit
              </label>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="text-right">
              <button
                className="btn btn-warning"
                type="button"
                onClick={() => this.props.dispatch(showModal())}
              >
                Tambah Data <i className="fa fa-plus ml-3"></i>
              </button>
            </div>
          </div>
          <div className="col-lg-12">
            <ToolkitProvider
              keyField="kode_barcode"
              data={this.props.listterimasupplier || []}
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
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-4">
                <Field
                  name="sub_total"
                  component={ReanderField}
                  type="text"
                  label="Sub Total"
                  placeholder="Masukan Sub Total"
                  readOnly
                  {...currencyMask}
                />
              </div>
              <div className="col-lg-4">
                <Field
                  name="discount"
                  component={ReanderField}
                  type="text"
                  label="Discount"
                  placeholder="Masukan Discount"
                  {...currencyMask}
                  onChange={this.setTotal()}
                />
              </div>
              <div className="col-lg-4">
                <Field
                  name="total"
                  component={ReanderField}
                  type="text"
                  label="Total"
                  placeholder="Masukan Total"
                  {...currencyMask}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="text-right">
              <button className="btn btn-primary">
                Simpan <i className="fa fa-paper-plane ml-3"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

HeadSupplierPenerimaan = reduxForm({
  form: "HeadSupplierPenerimaan",
  enableReinitialize: true,
})(HeadSupplierPenerimaan);
const selector = formValueSelector("HeadSupplierPenerimaan"); // <-- same as form name
export default connect((state) => {
  const { sub_total, discount } = selector(state, "sub_total", "discount");
  return {
    total: parseFloat(sub_total || 0) - parseFloat(discount || 0),
    initialValues: {
      sub_total: state.transaksi.sub_total,
      kode_terima: localStorage.getItem("penerimaan_kode_terima") || null,
      kode_supplier: localStorage.getItem("penerimaan_kode_supplier") || null,
      tanggal_invoice:
        localStorage.getItem("penerimaan_tanggal_invoice") || null,
      tanggal_barang: localStorage.getItem("penerimaan_tanggal_barang") || null,
      keterangan: localStorage.getItem("penerimaan_keterangan") || null,
      no_bon: localStorage.getItem("penerimaan_no_bon") || null,
      // tunai: localStorage.getItem("penerimaan_tunai") || false,
      // kredit: localStorage.getItem("penerimaan_kredit") || false,
    },
  };
})(HeadSupplierPenerimaan);
