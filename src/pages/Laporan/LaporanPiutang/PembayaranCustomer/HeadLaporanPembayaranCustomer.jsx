import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import {
  ReanderField,
  ReanderSelect,
} from "../../../../components/notification/notification";
import CetakPembayaranCustomer from "./CetakPembayaranCustomer";

class HeadLaporanPembayaranCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="row">
        <div className="col-lg-3">
          <Field
            name="tanggal_awal"
            component={ReanderField}
            type="date"
            label="Dari Tanggal"
            placeholder="Masukan Tanggal Awal"
          />
        </div>
        <div className="col-lg-3">
          <Field
            name="tanggal_akhir"
            component={ReanderField}
            type="date"
            label="Sampai Tanggal"
            placeholder="Masukan Sampai Tanggal"
          />
        </div>
        <div className="col-lg-3">
          <Field
            name="nama_customer"
            component={ReanderSelect}
            options={[
              { value: "NAMA CUSTOMER01", name: "NAMA CUSTOMER 01" },
              { value: "NAMA CUSTOMER02", name: "NAMA CUSTOMER 02" },
              { value: "NAMA CUSTOMER03", name: "NAMA CUSTOMER 03" },
              { value: "NAMA CUSTOMER04", name: "NAMA CUSTOMER 04" },
            ]}
            label="Nama Customer / Semua"
            placeholder="Masukan Jenis"
          />
        </div>
        <div className="col-lg-12">
          <div className="text-right">
            <button
              className="btn btn-primary"
              onClick={() =>
                CetakPembayaranCustomer(
                  "2 Februari 2021",
                  "SEMUA",
                  "ADMIN",
                  "2 FEBRUARI 2021",
                  "ADMIN"
                )
              }
            >
              Lihat Data <i className="fa fa-print ml-3"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

HeadLaporanPembayaranCustomer = reduxForm({
  form: "HeadLaporanPembayaranCustomer",
  enableReinitialize: true,
})(HeadLaporanPembayaranCustomer);
export default connect()(HeadLaporanPembayaranCustomer);
