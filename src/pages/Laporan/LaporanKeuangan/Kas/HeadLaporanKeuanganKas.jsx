import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import {
  ReanderField,
  ReanderSelect,
} from "../../../../components/notification/notification";
import CetakKeuanganKas from "./CetakKeuanganKas";

class HeadLaporanKeuanganKas extends Component {
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
            name="type"
            component={ReanderSelect}
            options={[
              { value: "Type01", name: "Type 01" },
              { value: "Type02", name: "Type 02" },
              { value: "Type03", name: "Type 03" },
              { value: "Type04", name: "Type 04" },
            ]}
            label="Type"
            placeholder="Masukan Jenis"
          />
        </div>
        <div className="col-lg-12">
          <div className="text-right">
            <button
              className="btn btn-primary"
              onClick={() =>
                CetakKeuanganKas(
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

HeadLaporanKeuanganKas = reduxForm({
  form: "HeadLaporanKeuanganKas",
  enableReinitialize: true,
})(HeadLaporanKeuanganKas);
export default connect()(HeadLaporanKeuanganKas);
