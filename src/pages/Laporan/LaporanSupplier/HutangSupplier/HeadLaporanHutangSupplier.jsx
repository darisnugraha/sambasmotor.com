import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import {
  ReanderField,
  ReanderSelect,
} from "../../../../components/notification/notification";
import CetakHutangSupplier from "./CetakHutangSupplier";

class HeadLaporanHutangSupplier extends Component {
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
            component={ReanderSelect}
            options={[
              { value: "SUPPLIER01", name: "SUPPLIER 01" },
              { value: "SUPPLIER02", name: "SUPPLIER 02" },
              { value: "SUPPLIER03", name: "SUPPLIER 03" },
              { value: "SUPPLIER04", name: "SUPPLIER 04" },
            ]}
            type="text"
            label="Kode Supplier"
            placeholder="Masukan Kode Supplier"
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
            placeholder="Masukan Divisi"
          />
        </div>
        <div className="col-lg-12">
          <div className="text-right">
            <button
              className="btn btn-primary"
              onClick={() =>
                CetakHutangSupplier(
                  "GAJAH MADA",
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

HeadLaporanHutangSupplier = reduxForm({
  form: "HeadLaporanHutangSupplier",
  enableReinitialize: true,
})(HeadLaporanHutangSupplier);
export default connect()(HeadLaporanHutangSupplier);
