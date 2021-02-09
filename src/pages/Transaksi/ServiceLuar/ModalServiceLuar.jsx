import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import {
  ReanderField,
  ReanderSelect,
} from "../../../components/notification/notification";

class ModalServiceLuar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="row">
        <div className="col-lg-4">
          <Field
            name="nama_barang"
            component={ReanderField}
            type="text"
            label="Nama Barang"
            placeholder="Masukan Nama Barang"
          />
        </div>
        <div className="col-8"></div>
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
            component={ReanderSelect}
            options={[
              { value: "SATUAN01", name: "SATUAN 01" },
              { value: "SATUAN02", name: "SATUAN 02" },
              { value: "SATUAN03", name: "SATUAN 03" },
              { value: "SATUAN04", name: "SATUAN 04" },
            ]}
            type="text"
            label="Satuan"
            placeholder="Masukan Satuan"
          />
        </div>
        <div className="col-lg-6">
          <Field
            name="keterangan_service"
            component={ReanderField}
            type="text"
            label="Keterangan Service"
            placeholder="Masukan Keterangan Service"
          />
        </div>
        <div className="col-lg-3">
          <Field
            name="harga"
            component={ReanderField}
            type="text"
            label="Harga"
            placeholder="Masukan Harga"
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
    );
  }
}

ModalServiceLuar = reduxForm({
  form: "ModalServiceLuar",
  enableReinitialize: true,
})(ModalServiceLuar);
export default ModalServiceLuar;
