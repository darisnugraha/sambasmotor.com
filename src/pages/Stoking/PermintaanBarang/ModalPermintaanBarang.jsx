import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { ReanderField } from "../../../components/notification/notification";

class ModalPermintaanBarang extends Component {
  render() {
    return (
      <div>
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
                />
              </div>
              <div className="col-lg-6">
                <Field
                  name="nama_barang"
                  component={ReanderField}
                  type="text"
                  label="Nama Barang"
                  placeholder="Masukan Nama Barang"
                />
              </div>
              <div className="col-lg-3">
                <Field
                  name="merk"
                  component={ReanderField}
                  type="text"
                  label="Merk"
                  placeholder="Masukan Merk"
                />
              </div>
              <div className="col-lg-3">
                <Field
                  name="kwalitas"
                  component={ReanderField}
                  type="text"
                  label="Kwalitas"
                  placeholder="Masukan Kwalitas"
                />
              </div>
              <div className="col-lg-3">
                <Field
                  name="ukuran"
                  component={ReanderField}
                  type="text"
                  label="Ukuran"
                  placeholder="Masukan Ukuran"
                />
              </div>
              <div className="col-lg-3">
                <Field
                  name="stock"
                  component={ReanderField}
                  type="text"
                  label="Stock"
                  placeholder="Masukan Stock"
                />
              </div>
              <div className="col-lg-4">
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
      </div>
    );
  }
}

ModalPermintaanBarang = reduxForm({
  form: "ModalPermintaanBarang",
  enableReinitialize: true,
})(ModalPermintaanBarang);
export default ModalPermintaanBarang;
