import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import {
  ReanderField,
  ReanderSelect,
} from "../../../../components/notification/notification";
import CetakKartuStock from "./CetakKartuStock";

class HeadLaporanKartuStock extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="row">
        <div className="col-lg-3">
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
            name="jenis"
            component={ReanderField}
            type="text"
            label="Jenis"
            placeholder="Masukan Jenis"
          />
        </div>
        <div className="col-lg-3">
          <Field
            name="kdde_merk"
            component={ReanderField}
            type="text"
            label="Merk"
            placeholder="Masukan Merk"
          />
        </div>
        <div className="col-lg-3">
          <Field
            name="kode_lokasi"
            component={ReanderField}
            type="text"
            label="Lokasi"
            placeholder="Masukan Lokasi"
          />
        </div>
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
            name="divisi"
            component={ReanderSelect}
            options={[
              { value: "DIVISI01", name: "DIVISI 01" },
              { value: "DIVISI02", name: "DIVISI 02" },
              { value: "DIVISI03", name: "DIVISI 03" },
              { value: "DIVISI04", name: "DIVISI 04" },
            ]}
            type="text"
            label="Divisi"
            placeholder="Masukan Divisi"
          />
        </div>
        <div className="col-lg-12">
          <div className="text-right">
            <button
              className="btn btn-primary"
              onClick={() =>
                CetakKartuStock(
                  "2 Januari 2021",
                  "2 Februari 2021",
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

HeadLaporanKartuStock = reduxForm({
  form: "HeadLaporanKartuStock",
  enableReinitialize: true,
})(HeadLaporanKartuStock);
export default connect()(HeadLaporanKartuStock);
