import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import {
  ReanderField,
  ReanderSelect,
} from "../../../components/notification/notification";

class HeadCreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="row">
          <div className="col-lg-12 mb-3">
            <h4>Tambah Data User</h4>
          </div>
          <div className="col-lg-3">
            <Field
              name="nama_lengkap"
              component={ReanderField}
              type="text"
              label="Nama Lengkap"
              placeholder="Masukan Nama Lengkap"
            />
          </div>
          <div className="col-lg-3">
            <Field
              name="user_id"
              component={ReanderField}
              type="text"
              label="User ID"
              placeholder="Masukan User ID"
            />
          </div>
          <div className="col-lg-3">
            <Field
              name="password"
              component={ReanderField}
              type="text"
              label="Password"
              placeholder="Masukan Password"
            />
          </div>
          <div className="col-lg-3">
            <Field
              name="retype_password"
              component={ReanderField}
              type="text"
              label="Retype Password"
              placeholder="Masukan Retype Password"
            />
          </div>
          <div className="col-lg-3">
            <Field
              name="level"
              component={ReanderSelect}
              options={[
                { value: "ADMIN", name: "ADMIN" },
                { value: "OWNER", name: "OWNER" },
                { value: "MARKETING", name: "MARKETING" },
                { value: "KEUANGAN", name: "KEUANGAN" },
              ]}
              type="text"
              label="Level"
              placeholder="Masukan Level"
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

HeadCreateUser = reduxForm({
  form: "HeadCreateUser",
  enableReinitialize: true,
})(HeadCreateUser);
export default connect()(HeadCreateUser);
