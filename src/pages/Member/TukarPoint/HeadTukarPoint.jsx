import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { ReanderField } from "../../../components/notification/notification";

class HeadTukarPoint extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="row">
          <div className="col-lg-12 mt-3 mb-3">
            <div className="text-center">
              <h4>DATA MEMBER</h4>
            </div>
          </div>
          <div className="col-lg-4">
            <Field
              name="kode_member"
              component={ReanderField}
              type="text"
              label="Kode Member"
              placeholder="Masukan Kode Member"
            />
          </div>
          <div className="col-lg-4">
            <Field
              name="nama_member"
              component={ReanderField}
              type="text"
              label="Nama Member"
              placeholder="Masukan Nama Member"
            />
          </div>
          <div className="col-lg-4">
            <Field
              name="jumlah_point"
              component={ReanderField}
              type="text"
              label="Jumlah Point"
              placeholder="Masukan Jumlah Point"
            />
          </div>
          <div className="col-lg-12 mt-3 mb-3">
            <div className="text-center">
              <h4>TUKAR POINT</h4>
            </div>
          </div>
          <div className="col-lg-3">
            <Field
              name="hadiah"
              component={ReanderField}
              type="text"
              label="Hadiah"
              placeholder="Masukan Hadiah"
            />
          </div>
          <div className="col-lg-2">
            <Field
              name="point"
              component={ReanderField}
              type="text"
              label="Point"
              placeholder="Masukan Point"
            />
          </div>
          <div className="col-lg-2">
            <Field
              name="sisa_point"
              component={ReanderField}
              type="text"
              label="Sisa Point"
              placeholder="Masukan Sisa Point"
            />
          </div>
          <div className="col-lg-2">
            <Field
              name="sisa_hadiah"
              component={ReanderField}
              type="text"
              label="Sisa Hadiah"
              placeholder="Masukan Sisa Hadiah"
            />
          </div>
          <div className="col-lg-12">
            <div className="text-right">
              <button className="btn btn-primary">
                Simpan <i className="fa fa-paper-plane ml-3"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

HeadTukarPoint = reduxForm({
  form: "HeadTukarPoint",
  enableReinitialize: true,
})(HeadTukarPoint);
export default connect()(HeadTukarPoint);
