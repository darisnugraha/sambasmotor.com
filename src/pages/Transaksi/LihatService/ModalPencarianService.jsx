import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { ReanderField } from "../../../components/notification/notification";

class ModalPencarianService extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="col-lg-12">
          <Field
            name="tanggal_start"
            component={ReanderField}
            type="date"
            label="Tanggal Mulai"
            placeholder="Masukan Tanggal Mulai"
          />
        </div>
        <div className="col-lg-12">
          <Field
            name="tanggal_end"
            component={ReanderField}
            type="date"
            label="Tanggal Akhir"
            placeholder="Masukan Tanggal Akhir"
          />
        </div>
        <div className="col-lg-12 mt-5">
          <h5>Pencarian berdasarkan :</h5>
        </div>
        <div className="col-lg-12">
          <Field
            name="no_service"
            component={ReanderField}
            type="text"
            label="No.Service"
            placeholder="Masukan No.Service"
          />
        </div>
        <div className="col-lg-12">
          <Field
            name="nama_pelanggan"
            component={ReanderField}
            type="text"
            label="Nama Pelanggan"
            placeholder="Masukan Nama Pelanggan"
          />
        </div>
        <div className="col-lg-12">
          <Field
            name="alamat"
            component={ReanderField}
            type="text"
            label="Alamat"
            placeholder="Masukan Alamat"
          />
        </div>
        <div className="col-lg-12">
          <Field
            name="jenis_kendaraan"
            component={ReanderField}
            type="text"
            label="Jenis Kendaraan"
            placeholder="Masukan Jenis Kendaraan"
          />
        </div>
        <div className="col-lg-12">
          <Field
            name="no_polisi"
            component={ReanderField}
            type="text"
            label="No Polisi"
            placeholder="Masukan No Polisi"
          />
        </div>
        <div className="col-lg-12">
          <Field
            name="handphone"
            component={ReanderField}
            type="text"
            label="Handphone"
            placeholder="Masukan Handphone"
          />
        </div>
        <div className="col-lg-12 mt-4">
          <button className="btn btn-block btn-primary">CARI</button>
        </div>
      </div>
    );
  }
}

ModalPencarianService = reduxForm({
  form: "ModalPencarianService",
  enableReinitialize: true,
})(ModalPencarianService);
export default ModalPencarianService;
