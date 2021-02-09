import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { ReanderField } from "../../../components/notification/notification";

class ModalTerimaServiceLuar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-12">
              <Field
                name="sub_total"
                component={ReanderField}
                type="text"
                label="Sub Total"
                placeholder="Masukan Sub Total"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2">
              <Field
                name="margin"
                component={ReanderField}
                type="text"
                label="%"
                placeholder="Masukan %"
              />
            </div>
            <div className="col-lg-10">
              <Field
                name="margin"
                component={ReanderField}
                type="text"
                label="Margin"
                placeholder="Masukan Margin"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Field
                name="total"
                component={ReanderField}
                type="text"
                label="Total"
                placeholder="Masukan Total"
              />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="text-right">
              <button className="btn btn-primary">
                Simpan <i className="fa fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ModalTerimaServiceLuar = reduxForm({
  form: "ModalTerimaServiceLuar",
  enableReinitialize: true,
})(ModalTerimaServiceLuar);
export default connect()(ModalTerimaServiceLuar);
