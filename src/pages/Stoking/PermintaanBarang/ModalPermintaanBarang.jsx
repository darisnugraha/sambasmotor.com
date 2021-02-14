import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { AxiosMasterGet } from "../../../axios";
import {
  ReanderField,
  ReanderSelect,
} from "../../../components/notification/notification";

const validate = (values) => {
  const errors = {};
  if (parseInt(values.stock) < parseInt(values.qty)) {
    errors.qty = "Jumlah Melebihi stock, mohon kuragi";
  }
  return errors;
};
class ModalPermintaanBarang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasilBarcode: [],
      listSupplier: [],
      stock: 0,
    };
  }

  getBarcode(hasil) {
    AxiosMasterGet(
      "permintaan-barang/get/BarangByBarcode/" + hasil.target.value
    )
      .then((res) => this.setState({ hasilBarcode: res.data }))
      .then(() => this.setDetail())
      .catch((err) => console.log(err));
  }

  setDetail() {
    this.props.change("nama_barang", this.state.hasilBarcode[0].nama_barang);
    this.props.change("merk", this.state.hasilBarcode[0].merk_barang);
    this.props.change("kwalitas", this.state.hasilBarcode[0].kwalitas);
    this.props.change("ukuran", this.state.hasilBarcode[0].ukuran);
    let listSupplier = this.state.hasilBarcode[0].data_supplier.map((list) => {
      let data = {
        value: list.kode_supplier + "||" + list.stock,
        name: `${list.nama_supplier} ( ${list.kode_supplier})`,
      };
      return data;
    });
    this.setState({
      listSupplier: listSupplier,
    });
  }
  setStock(e) {
    let data = e || "0||0";
    let hasil = data.split("||");
    this.setState({
      stock: hasil[1],
    });
    this.props.change("kode_supplier", hasil[0]);
    this.props.change("stock", hasil[1]);
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-6">
              <Field
                name="kode_barcode"
                component={ReanderField}
                type="text"
                label="Kode Barcode"
                placeholder="Masukan Kode Barcode"
                onChange={(e) => this.getBarcode(e)}
                onBlur={(e) => this.getBarcode(e)}
              />
            </div>
            <div className="col-lg-6"></div>
            <div className="col-lg-6">
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
                component={ReanderField}
                type="text"
                label="Merk"
                placeholder="Masukan Merk"
                readOnly
              />
            </div>
            <div className="col-lg-3">
              <Field
                name="kwalitas"
                component={ReanderField}
                type="text"
                label="Kwalitas"
                placeholder="Masukan Kwalitas"
                readOnly
              />
            </div>
            <div className="col-lg-3">
              <Field
                name="ukuran"
                component={ReanderField}
                type="text"
                label="Ukuran"
                placeholder="Masukan Ukuran"
                readOnly
              />
            </div>
            <div className="col-lg-3">
              <Field
                name="kode_supplier1"
                component={ReanderSelect}
                options={this.state.listSupplier || []}
                onChange={(e) => this.setStock(e)}
                type="text"
                label="Kode Supplier"
                placeholder="Masukan Kode Supplier"
              />
            </div>
            <div className="col-lg-3 d-none">
              <Field
                name="kode_supplier"
                component={ReanderField}
                type="text"
                label="Kode Supplier"
                placeholder="Masukan Kode Supplier"
              />
            </div>
            <div className="col-lg-3">
              <Field
                name="stock"
                component={ReanderField}
                type="text"
                label="Stock"
                placeholder="Masukan Stock"
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
              />
            </div>
          </div>
        </div>

        <div className="col-lg-12">
          <div className="text-right">
            <button className="btn btn-primary">
              Simpan <i className="fa fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </form>
    );
  }
}

ModalPermintaanBarang = reduxForm({
  form: "ModalPermintaanBarang",
  enableReinitialize: true,
  validate,
})(ModalPermintaanBarang);
export default connect()(ModalPermintaanBarang);
