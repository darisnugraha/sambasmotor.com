import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import {
  ReanderField,
  ReanderSelect,
} from "../../../components/notification/notification";

class ModalHancurBarang extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-3">
                <Field
                  name="kode_barcode"
                  component={ReanderField}
                  type="text"
                  label="Kode Barcode"
                  placeholder="Masukan Kode Barcode"
                />
              </div>
              <div className="col-lg-3">
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
                  component={ReanderSelect}
                  options={[
                    { value: "KWALITAS01", name: "KWALITAS 01" },
                    { value: "KWALITAS02", name: "KWALITAS 02" },
                    { value: "KWALITAS03", name: "KWALITAS 03" },
                    { value: "KWALITAS04", name: "KWALITAS 04" },
                  ]}
                  label="Kwalitas"
                  placeholder="Masukan Kwalitas"
                />
              </div>
              <div className="col-lg-3">
                <Field
                  name="type"
                  component={ReanderField}
                  type="text"
                  label="Type"
                  placeholder="Masukan Type"
                />
              </div>
              <div className="col-lg-3">
                <Field
                  name="satuan"
                  component={ReanderField}
                  type="text"
                  label="Satuan"
                  placeholder="Masukan Satuan"
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
              <div className="col-lg-3">
                <Field
                  name="kondisi"
                  component={ReanderField}
                  type="text"
                  label="Kondisi"
                  placeholder="Masukan Kondisi"
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

ModalHancurBarang = reduxForm({
  form: "ModalHancurBarang",
  enableReinitialize: true,
})(ModalHancurBarang);
export default ModalHancurBarang;
