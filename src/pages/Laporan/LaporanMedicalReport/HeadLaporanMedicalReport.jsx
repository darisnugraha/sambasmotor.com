import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { ReanderField } from "../../../components/notification/notification";
import CetakMedicalReport from "./CetakMedicalReport";

class HeadLaporanMedicalReport extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="row">
        <div className="col-lg-3">
          <Field
            name="nopol_kendaran"
            component={ReanderField}
            type="text"
            label="Nomor Polisi"
            placeholder="Masukan Nomor Polisi"
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
        <div className="col-lg-12">
          <div className="text-right">
            <button
              className="btn btn-primary"
              onClick={() =>
                CetakMedicalReport(
                  "5 Februari 2021",
                  "D4083AAP",
                  "ADMIN",
                  "5 FEBRUARI 2021",
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

HeadLaporanMedicalReport = reduxForm({
  form: "HeadLaporanMedicalReport",
  enableReinitialize: true,
})(HeadLaporanMedicalReport);
export default connect()(HeadLaporanMedicalReport);
