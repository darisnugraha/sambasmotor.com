import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import {
  ReanderField,
  ReanderSelect,
} from "../../../components/notification/notification";

class HeadLihatLaporanStockOpname extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <Field
            name="tanggal"
            component={ReanderField}
            type="date"
            label="Tanggal"
            placeholder="Masukan Tanggal"
          />
        </div>
        <div className="col-lg-3"></div>
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <Field
            name="lokasi"
            component={ReanderSelect}
            options={[
              { value: "LOKASI01", name: "LOKASI 01" },
              { value: "LOKASI02", name: "LOKASI 02" },
              { value: "LOKASI03", name: "LOKASI 03" },
              { value: "LOKASI04", name: "LOKASI 04" },
            ]}
            type="text"
            label="Lokasi"
            placeholder="Masukan Lokasi"
          />
        </div>
        <div className="col-lg-3"></div>
        <div className="col-lg-12">
          <div className="text-right">
            <button className="btn btn-primary">
              Print <i className="fa fa-print ml-3"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

HeadLihatLaporanStockOpname = reduxForm({
  form: "HeadLihatLaporanStockOpname",
  enableReinitialize: true,
})(HeadLihatLaporanStockOpname);
export default connect()(HeadLihatLaporanStockOpname);
