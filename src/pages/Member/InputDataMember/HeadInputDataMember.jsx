import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { ReanderFieldInline } from "../../../components/notification/notification";

class HeadInputDataMember extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <div className="col-lg-12">
              <Field
                name="nama_member"
                component={ReanderFieldInline}
                type="text"
                label="Nama Member"
                placeholder="Masukan Nama Member"
              />
            </div>
            <div className="col-lg-12">
              <Field
                name="alamat"
                component={ReanderFieldInline}
                type="text"
                label="Alamat"
                placeholder="Masukan Alamat"
              />
            </div>
            <div className="col-lg-12">
              <Field
                name="kota"
                component={ReanderFieldInline}
                type="text"
                label="Kota"
                placeholder="Masukan Kota"
              />
            </div>
            <div className="col-lg-12">
              <Field
                name="kode_pos"
                component={ReanderFieldInline}
                type="number"
                label="Kode Pos"
                placeholder="Masukan Kode Pos"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="col-lg-12">
              <Field
                name="no_ktp"
                component={ReanderFieldInline}
                type="number"
                label="No KTP"
                placeholder="Masukan No KTP"
              />
            </div>
            <div className="col-lg-12">
              <Field
                name="tanggal_lahir"
                component={ReanderFieldInline}
                type="date"
                label="Tanggal Lahir"
                placeholder="Masukan Tanggal Lahir"
              />
            </div>
            <div className="col-lg-12">
              <Field
                name="telepon"
                component={ReanderFieldInline}
                type="number"
                label="Telepon"
                placeholder="Masukan Telepon"
              />
            </div>
            <div className="col-lg-12">
              <Field
                name="handphone"
                component={ReanderFieldInline}
                type="number"
                label="Handphone"
                placeholder="Masukan Handphone"
              />
            </div>
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

HeadInputDataMember = reduxForm({
  form: "HeadInputDataMember",
  enableReinitialize: true,
})(HeadInputDataMember);
export default connect()(HeadInputDataMember);
