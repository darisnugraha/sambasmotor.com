import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import {
  ReanderField,
  ReanderSelect,
} from "../../../../components/notification/notification";
import CetakPenjualanSales from "./CetakPenjualanSales";

class HeadLaporanPenjualanSales extends Component {
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
            name="kode_sales"
            component={ReanderSelect}
            options={[
              { value: "SALES01", name: "SALES 01" },
              { value: "SALES02", name: "SALES 02" },
              { value: "SALES03", name: "SALES 03" },
              { value: "SALES04", name: "SALES 04" },
            ]}
            type="text"
            label="Kode Sales"
            placeholder="Masukan Kode Sales"
          />
        </div>
        <div className="col-lg-12">
          <div className="text-right">
            <button
              className="btn btn-primary"
              onClick={() =>
                CetakPenjualanSales(
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

HeadLaporanPenjualanSales = reduxForm({
  form: "HeadLaporanPenjualanSales",
  enableReinitialize: true,
})(HeadLaporanPenjualanSales);
export default connect()(HeadLaporanPenjualanSales);
