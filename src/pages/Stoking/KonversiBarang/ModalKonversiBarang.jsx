import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import {
  ReanderField,
  ReanderSelect,
} from "../../../components/notification/notification";

class ModalKonversiBarang extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-12 mb-3 mt-3">
                <div className="text-center">
                  <h4>ASAL</h4>
                </div>
              </div>
              <div className="col-lg-3">
                <Field
                  name="kode_asal"
                  component={ReanderSelect}
                  options={[
                    { value: "BRNG001", name: "BARANG 1" },
                    { value: "BRNG002", name: "BARANG 2" },
                    { value: "BRNG003", name: "BARANG 3" },
                    { value: "BRNG004", name: "BARANG 4" },
                  ]}
                  type="text"
                  label="Kode Asal"
                  placeholder="Masukan Kode Asal"
                />
              </div>
              <div className="col-lg-3">
                <Field
                  name="nama_barang_asal"
                  component={ReanderField}
                  type="text"
                  label="Nama Barang"
                  placeholder="Masukan Nama Barang"
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
              <div className="col-lg-3">
                <Field
                  name="satuan_asal"
                  component={ReanderField}
                  type="text"
                  label="Satuan"
                  placeholder="Masukan Satuan"
                />
              </div>
              <div className="col-lg-12 mb-3 mt-3">
                <div className="text-center">
                  <h4>TUJUAN</h4>
                </div>
              </div>
              <div className="col-lg-3">
                <Field
                  name="kode_tujuan"
                  component={ReanderSelect}
                  options={[
                    { value: "BRNG001", name: "BARANG 1" },
                    { value: "BRNG002", name: "BARANG 2" },
                    { value: "BRNG003", name: "BARANG 3" },
                    { value: "BRNG004", name: "BARANG 4" },
                  ]}
                  type="text"
                  label="Kode Tujuan"
                  placeholder="Masukan Kode Tujuan"
                />
              </div>
              <div className="col-lg-3">
                <Field
                  name="nama_barang_tujuan"
                  component={ReanderField}
                  type="text"
                  label="Nama Barang"
                  placeholder="Masukan Nama Barang"
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
              <div className="col-lg-3">
                <Field
                  name="satuan_tujuan"
                  component={ReanderField}
                  type="text"
                  label="Satuan"
                  placeholder="Masukan Satuan"
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
