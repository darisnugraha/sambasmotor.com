import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { AxiosMasterGet } from "../../../axios";
import { ReanderField } from "../../../components/notification/notification";

class ModalKonversiBarang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listBarang: [],
      hasilBarcode: [],
    };
  }

  getBarcode(hasil) {
    let lokasi = localStorage.getItem("lokasi_pilihan") || "";
    let supplier = localStorage.getItem("supplier_pilihan") || "";
    AxiosMasterGet(
      "konversi-barang/get/ByLokasiSupplier/" +
        `${supplier}&${lokasi}&${hasil.target.value}`
    )
      .then((res) => this.setState({ hasilBarcode: res.data }))
      .then(() => this.setDetail())
      .catch((err) => console.log(err));
  }

  setDetail() {
    console.log(this.state.hasilBarcode[0].kode_jenis);
    this.props.change(
      "kode_jenis_asal",
      this.state.hasilBarcode[0].nama_barang
    );
    this.props.change("stock_asal", this.state.hasilBarcode[0].stock);
  }
  getBarcodeTujuan(hasil) {
    let lokasi = localStorage.getItem("lokasi_pilihan") || "";
    let supplier = localStorage.getItem("supplier_pilihan") || "";
    AxiosMasterGet(
      "konversi-barang/get/ByLokasiSupplier/" +
        `${supplier}&${lokasi}&${hasil.target.value}`
    )
      .then((res) => this.setState({ hasilBarcode: res.data }))
      .then(() => this.setDetailTujuan())
      .catch((err) => console.log(err));
  }

  setDetailTujuan() {
    console.log(this.state.hasilBarcode[0].kode_jenis);
    this.props.change(
      "kode_jenis_tujuan",
      this.state.hasilBarcode[0].nama_barang
    );
    this.props.change("stock_tujuan", this.state.hasilBarcode[0].stock);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-12 mb-3 mt-3">
                <div className="text-center">
                  <h4>Barang Asal</h4>
                </div>
              </div>
              <div className="col-lg-3">
                <Field
                  name="kode_asal"
                  component={ReanderField}
                  type="text"
                  label="Kode Asal"
                  placeholder="Masukan Kode Asal"
                  onChange={(e) => this.getBarcode(e)}
                  onBlur={(e) => this.getBarcode(e)}
                />
              </div>
              <div className="col-lg-3">
                <Field
                  name="kode_jenis_asal"
                  component={ReanderField}
                  type="text"
                  label="Kode Jenis"
                  placeholder="Masukan Kode Jenis"
                  readOnly
                />
              </div>
              <div className="col-lg-3">
                <Field
                  name="stock_asal"
                  component={ReanderField}
                  type="text"
                  label="Stock"
                  placeholder="Masukan Stock"
                  readOnly
                />
              </div>
              <div className="col-lg-3">
                <Field
                  name="qty_asal"
                  component={ReanderField}
                  type="text"
                  label="Qty"
                  placeholder="Masukan Qty"
                />
              </div>
              <div className="col-lg-12 mb-3 mt-3">
                <div className="text-center">
                  <h4>Barang Tujuan</h4>
                </div>
              </div>
              <div className="col-lg-3">
                <Field
                  name="kode_tujuan"
                  component={ReanderField}
                  type="text"
                  label="Kode Tujuan"
                  placeholder="Masukan Kode Tujuan"
                  onChange={(e) => this.getBarcodeTujuan(e)}
                  onBlur={(e) => this.getBarcodeTujuan(e)}
                />
              </div>
              <div className="col-lg-3">
                <Field
                  name="kode_jenis_tujuan"
                  component={ReanderField}
                  type="text"
                  label="Nama Barang"
                  placeholder="Masukan Nama Barang"
                  readOnly
                />
              </div>
              <div className="col-lg-3">
                <Field
                  name="stock_tujuan"
                  component={ReanderField}
                  type="text"
                  label="Qty"
                  placeholder="Masukan Qty"
                  readOnly
                />
              </div>
              <div className="col-lg-3">
                <Field
                  name="qty_tujuan"
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
      </div>
    );
  }
}

ModalKonversiBarang = reduxForm({
  form: "ModalKonversiBarang",
  enableReinitialize: true,
})(ModalKonversiBarang);
export default ModalKonversiBarang;
