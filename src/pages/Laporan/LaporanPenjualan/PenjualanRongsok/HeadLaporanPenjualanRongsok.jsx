import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import {
  ReanderField,
  ReanderSelect,
} from "../../../../components/notification/notification";
import CetakPenjualanRongsok from "./CetakPenjualanRongsok";

class HeadLaporanPenjualanRongsok extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="row">
        <div className="col-lg-3">
          <Field
            name="kriteria_sparepart"
            component={ReanderSelect}
            options={[
              { value: "OIL", name: "OIL" },
              { value: "ACCU", name: "ACCU" },
              { value: "UMUM", name: "UMUM" },
              { value: "BAN", name: "BAN" },
              { value: "RONGSOK", name: "RONGSOK" },
              { value: "SEMUA", name: "SEMUA" },
            ]}
            type="text"
            label="Kriteria Pencetakan"
            placeholder="Masukan Kriteria Pencetakan"
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
                CetakPenjualanRongsok(
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

HeadLaporanPenjualanRongsok = reduxForm({
  form: "HeadLaporanPenjualanRongsok",
  enableReinitialize: true,
})(HeadLaporanPenjualanRongsok);
export default connect()(HeadLaporanPenjualanRongsok);
