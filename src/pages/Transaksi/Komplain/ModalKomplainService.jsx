import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import {
  ReanderField,
  ReanderSelect,
} from "../../../components/notification/notification";

class ModalKomplainService extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-3">
              <Field
                name="kode_barcode"
                component={ReanderField}
                type="text"
                label="Barcode"
                placeholder="Masukan Barcode"
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
                component={ReanderSelect}
                options={[
                  { value: "MERK BARANG01", name: "MERK BARANG 01" },
                  { value: "MERK BARANG02", name: "MERK BARANG 02" },
                  { value: "MERK BARANG03", name: "MERK BARANG 03" },
                  { value: "MERK BARANG04", name: "MERK BARANG 04" },
                ]}
                type="text"
                label="Merk"
                placeholder="Masukan Merk"
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
                name="ukuran"
                component={ReanderSelect}
                options={[
                  { value: "UKURAN01", name: "UKURAN 01" },
                  { value: "UKURAN02", name: "UKURAN 02" },
                  { value: "UKURAN03", name: "UKURAN 03" },
                  { value: "UKURAN04", name: "UKURAN 04" },
                ]}
                type="text"
                label="Ukuran"
                placeholder="Masukan Ukuran"
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
                name="satuan"
                component={ReanderSelect}
                options={[
                  { value: "satuan01", name: "satuan 01" },
                  { value: "satuan02", name: "satuan 02" },
                  { value: "satuan03", name: "satuan 03" },
                  { value: "satuan04", name: "satuan 04" },
                ]}
                type="text"
                label="Satuan"
                placeholder="Masukan Satuan"
              />
            </div>
            <div className="col-lg-3">
              <Field
                name="harga_satuan"
                component={ReanderField}
                type="text"
                label="Harga Satuan"
                placeholder="Masukan Harga Satuan"
              />
            </div>
            <div className="col-lg-3">
              <Field
                name="total"
                component={ReanderField}
                type="text"
                label="Total"
                placeholder="Masukan Total"
              />
            </div>
            <div className="col-lg-12">
              <div className="text-right">
                <button className="btn btn-primary">
                  Simpan <i className="fa fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

ModalKomplainService = reduxForm({
  form: "ModalKomplainService",
  enableReinitialize: true,
})(ModalKomplainService);
export default connect()(ModalKomplainService);
