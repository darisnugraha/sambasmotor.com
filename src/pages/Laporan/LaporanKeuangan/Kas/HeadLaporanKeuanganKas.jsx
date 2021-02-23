import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { ReanderField } from "../../../../components/notification/notification";

class HeadLaporanKeuanganKas extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
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
          <div className="col-lg-12">
            <div className="text-right">
              <button className="btn btn-primary">
                Lihat Data <i className="fa fa-print ml-3"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

HeadLaporanKeuanganKas = reduxForm({
  form: "HeadLaporanKeuanganKas",
  enableReinitialize: true,
})(HeadLaporanKeuanganKas);
export default connect()(HeadLaporanKeuanganKas);
