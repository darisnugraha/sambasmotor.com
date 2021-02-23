import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, formValueSelector, reduxForm } from "redux-form";
import {
  NotifError,
  ReanderField,
  ReanderSelect,
} from "../../../components/notification/notification";
import { createNumberMask } from "redux-form-input-masks";
import { AxiosMasterGet } from "../../../axios";

const currencyMask = createNumberMask({
  prefix: "Rp. ",
  suffix: " ,-",
  decimalPlaces: 0,
  locale: "id-ID",
});
class ModalSupplierPenerimaan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasilBarcode: [],
      listMerk: [],
      listKwalitas: [],
      listSatuan: [],
    };
  }

  setTotal() {
    this.props.change("total", this.props.total);
  }
  getBarcode(hasil) {
    AxiosMasterGet("/barang/get/by-kode-barcode/" + hasil.target.value)
      .then((res) => this.setState({ hasilBarcode: res.data }))
      .then(() => this.setDetail())
      .catch((err) => console.log(err));
  }
  setDetail() {
    console.log(this.state.hasilBarcode[0].nama_barang);
    this.props.change("nama_barang", this.state.hasilBarcode[0].nama_barang);
    this.props.change("merk", this.state.hasilBarcode[0].kode_merk_barang);
    this.props.change("kwalitas", this.state.hasilBarcode[0].kode_kwalitas);
    this.props.change("type", this.state.hasilBarcode[0].type);
    this.props.change("satuan", this.state.hasilBarcode[0].kode_satuan);
    this.props.change("harga_satuan", this.state.hasilBarcode[0].harga_jual);
  }

  componentDidMount() {
    AxiosMasterGet("merk-barang/get/all")
      .then((res) =>
        this.setState({
          listMerk: res.data,
        })
      )
      .catch((err) => NotifError(err));
    AxiosMasterGet("kwalitas/get/all")
      .then((res) =>
        this.setState({
          listKwalitas: res.data,
        })
      )
      .catch((err) => NotifError(err));
    AxiosMasterGet("satuan/get/all")
      .then((res) =>
        this.setState({
          listSatuan: res.data,
        })
      )
      .catch((err) => NotifError(err));
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="row">
          <div className="col-lg-4">
            <Field
              name="kode_barcode"
              component={ReanderField}
              type="text"
              label="Kode Barcode"
              placeholder="Masukan Kode Barang"
              onChange={(hasil) => this.getBarcode(hasil)}
              onBlur={(hasil) => this.getBarcode(hasil)}
              autoFocus
            />
          </div>
          <div className="col-lg-8"></div>
          <div className="col-lg-3">
            <Field
              name="nama_barang"
              component={ReanderField}
              type="text"
              label="Nama Barang"
              placeholder="Masukan Nama Barang"
              readOnly
            />
          </div>
          <div className="col-lg-3">
            <Field
              name="merk"
              component={ReanderSelect}
              options={this.state.listMerk.map((list) => {
                let data = {
                  value: list.kode_merk_barang,
                  name: list.nama_merk_barang,
                };
                return data;
              })}
              type="text"
              label="Merk"
              placeholder="Masukan Merk"
              readOnly
            />
          </div>
          <div className="col-lg-3">
            <Field
              name="kwalitas"
              component={ReanderSelect}
              options={this.state.listKwalitas.map((list) => {
                let data = {
                  value: list.kode_kwalitas,
                  name: list.nama_kwalitas,
                };
                return data;
              })}
              type="text"
              label="Kualitas"
              placeholder="Masukan Kualitas"
              readOnly
            />
          </div>
          <div className="col-lg-3">
            <Field
              name="type"
              component={ReanderField}
              type="text"
              label="Type"
              placeholder="Masukan Type"
              readOnly
            />
          </div>
          <div className="col-lg-3">
            <Field
              name="satuan"
              component={ReanderSelect}
              options={this.state.listSatuan.map((list) => {
                let data = {
                  value: list.kode_satuan,
                  name: list.nama_satuan,
                };
                return data;
              })}
              type="text"
              label="Satuan"
              placeholder="Masukan Satuan"
              readOnly
            />
          </div>
          <div className="col-lg-3">
            <Field
              name="qty"
              component={ReanderField}
              type="text"
              label="Qty"
              placeholder="Masukan Qty"
              onChange={this.setTotal()}
            />
          </div>
          <div className="col-lg-3">
            <Field
              name="harga_satuan"
              component={ReanderField}
              type="text"
              label="Harga Satuan"
              placeholder="Masukan Harga Satuan"
              onChange={this.setTotal()}
              {...currencyMask}
            />
          </div>
          <div className="col-lg-3">
            <Field
              name="total"
              component={ReanderField}
              type="telp"
              label="Total"
              placeholder="Masukan Total"
              {...currencyMask}
              readOnly
            />
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

ModalSupplierPenerimaan = reduxForm({
  form: "ModalSupplierPenerimaan",
  enableReinitialize: true,
})(ModalSupplierPenerimaan);
const selector = formValueSelector("ModalSupplierPenerimaan"); // <-- same as form name

export default connect((state) => {
  const { harga_satuan, qty } = selector(state, "harga_satuan", "qty");
  return {
    total: parseFloat(harga_satuan || 0) * parseFloat(qty || 0),
  };
})(ModalSupplierPenerimaan);
