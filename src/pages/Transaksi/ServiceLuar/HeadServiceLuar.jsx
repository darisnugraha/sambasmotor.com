import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { showModal } from "../../../actions/datamaster_action";
import { ReanderField } from "../../../components/notification/notification";

class HeadServiceLuar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="row">
        <div className="col-lg-4">
          <Field
            name="no_service"
            component={ReanderField}
            type="text"
            label="Nomor Service"
            placeholder="Masukan Nomor Service"
          />
        </div>
        <div className="col-lg-4">
          <Field
            name="tanggal"
            component={ReanderField}
            type="text"
            label="Tanggal"
            placeholder="Masukan Tanggal"
          />
        </div>
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <Field
            name="partner"
            component={ReanderField}
            type="text"
            label="Partner"
            placeholder="Masukan Partner"
          />
        </div>
        <div className="col-lg-4">
          <Field
            name="alamat"
            component={ReanderField}
            type="text"
            label="Alamat"
            placeholder="Masukan Alamat"
          />
        </div>
        <div className="col-lg-4">
          <Field
            name="handphone"
            component={ReanderField}
            type="text"
            label="Handphone"
            placeholder="Masukan Handphone"
          />
        </div>
        <div className="col-lg-12">
          <div className="text-right">
            <button
              className="btn btn-primary"
              onClick={() => this.props.dispatch(showModal())}
            >
              Tambah Data <i className="fa fa-plus ml-3"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

HeadServiceLuar = reduxForm({
  form: "HeadServiceLuar",
  enableReinitialize: true,
})(HeadServiceLuar);
export default connect()(HeadServiceLuar);
