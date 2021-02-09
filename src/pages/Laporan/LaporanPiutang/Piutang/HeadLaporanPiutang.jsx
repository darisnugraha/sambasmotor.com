import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import {
  ReanderField,
  ReanderSelect,
} from "../../../../components/notification/notification";
import CetakPiutang from "./CetakPiutang";

class HeadLaporanPiutang extends Component {
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
            name="jenis"
            component={ReanderSelect}
            options={[
              { value: "JENIS01", name: "JENIS 01" },
              { value: "JENIS02", name: "JENIS 02" },
              { value: "JENIS03", name: "JENIS 03" },
              { value: "JENIS04", name: "JENIS 04" },
            ]}
            type="text"
            label="Jenis"
            placeholder="Masukan Jenis"
          />
        </div>
        <div className="col-lg-3">
          <Field
            name="type"
            component={ReanderSelect}
            options={[
              { value: "TYPE01", name: "TYPE 01" },
              { value: "TYPE02", name: "TYPE 02" },
              { value: "TYPE03", name: "TYPE 03" },
              { value: "TYPE04", name: "TYPE 04" },
            ]}
            type="text"
            label="Type"
            placeholder="Masukan Jenis"
          />
        </div>
        <div className="col-lg-12">
          <div className="text-right">
            <button
              className="btn btn-primary"
              onClick={() =>
                CetakPiutang(
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

HeadLaporanPiutang = reduxForm({
  form: "HeadLaporanPiutang",
  enableReinitialize: true,
})(HeadLaporanPiutang);
export default connect()(HeadLaporanPiutang);
