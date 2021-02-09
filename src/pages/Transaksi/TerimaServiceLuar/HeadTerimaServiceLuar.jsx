import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import {
  ReanderField,
  RenderFieldGroup,
} from "../../../components/notification/notification";

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
            name="no_service_kirim"
            component={RenderFieldGroup}
            type="text"
            label="Nomor Service Kirim"
            placeholder="Masukan Nomor Service Kirim"
          />
        </div>
        <div className="col-lg-4">
          <Field
            name="tanggal"
            component={ReanderField}
            type="date"
            label="Tanggal"
            placeholder="Masukan Tanggal"
          />
        </div>
        <div className="col-lg-4"></div>
      </div>
    );
  }
}

HeadServiceLuar = reduxForm({
  form: "HeadServiceLuar",
  enableReinitialize: true,
})(HeadServiceLuar);
export default connect()(HeadServiceLuar);
