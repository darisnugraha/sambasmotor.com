import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { ReanderField } from "../../../components/notification/notification";

class ModalStockOpname extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
              label="Kode barcode"
              placeholder="Masukan Kode barcode"
            />
          </div>
          <div className="col-lg-4">
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
              name="type"
              component={ReanderField}
              type="text"
              label="Type"
              placeholder="Masukan Type"
            />
          </div>
          <div className="col-lg-1">
            <Field
              name="qty"
              component={ReanderField}
              type="text"
              label="Qty"
              placeholder="Masukan Qty"
            />
          </div>
          <div className="col-lg-2">
            <Field
              name="satuan"
              component={ReanderField}
              type="text"
              label="Satuan"
              placeholder="Masukan Satuan"
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

ModalStockOpname = reduxForm({
  form: "ModalStockOpname",
  enableReinitialize: true,
})(ModalStockOpname);
export default connect()(ModalStockOpname);
