import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import {
  ReanderField,
  ReanderSelect,
} from "../../../../components/notification/notification";
import CetakStockPerKategori from "./CetakStockPerKategori";

class HeadLaporanPengeluaranBarang extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="row">
        <div className="col-lg-4">
          <Field
            name="tanggal_awal"
            component={ReanderField}
            type="date"
            label="Dari Tanggal"
            placeholder="Masukan Tanggal Awal"
          />
        </div>
        <div className="col-lg-4">
          <Field
            name="tanggal_akhir"
            component={ReanderField}
            type="date"
            label="Sampai Tanggal"
            placeholder="Masukan Sampai Tanggal"
          />
        </div>
        <div className="col-lg-4">
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
                CetakStockPerKategori(
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

HeadLaporanPengeluaranBarang = reduxForm({
  form: "HeadLaporanPengeluaranBarang",
  enableReinitialize: true,
})(HeadLaporanPengeluaranBarang);
export default connect()(HeadLaporanPengeluaranBarang);
