import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import {
  ReanderField,
  ReanderSelect,
} from "../../../components/notification/notification";

class HeadTambahPointManual extends Component {
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
              name="kode_member"
              component={ReanderField}
              type="text"
              label="Kode Member"
              placeholder="Masukan Kode Member"
            />
          </div>
          <div className="col-lg-3">
            <Field
              name="nama_member"
              component={ReanderField}
              type="text"
              label="Nama Member"
              placeholder="Masukan Nama Member"
            />
          </div>
          <div className="col-lg-3">
            <Field
              name="type"
              component={ReanderSelect}
              options={[
                { value: "Tambah Point", name: " Tambah Point" },
                { value: "Ambil Point", name: " Ambil Point" },
              ]}
              type="text"
              label="Type"
              placeholder="Masukan Type"
            />
          </div>
          <div className="col-lg-3">
            <Field
              name="point"
              component={ReanderField}
              type="text"
              label="Point"
              placeholder="Masukan Point"
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

HeadTambahPointManual = reduxForm({
  form: "HeadTambahPointManual",
  enableReinitialize: true,
})(HeadTambahPointManual);
export default connect()(HeadTambahPointManual);
