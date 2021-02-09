import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { createNumberMask } from "redux-form-input-masks";
import { ReanderField } from "../../../components/notification/notification";

const currencyMask = createNumberMask({
  prefix: "Rp. ",
  suffix: " ,-",
  locale: "id-ID",
});
class HeadParameterPoint extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="row">
          <div className="col-lg-5">
            <Field
              name="total_rupiah"
              component={ReanderField}
              type="telp"
              label="Total Rupiah (Rp)"
              placeholder="Masukan Total Rupiah (Rp)"
              {...currencyMask}
            />
          </div>
          <div className="col-lg-2">
            <div className="text-center">
              <h3 className="mt-4">=</h3>
            </div>
          </div>
          <div className="col-lg-5">
            <Field
              name="total_point"
              component={ReanderField}
              type="number"
              label="Total Point"
              placeholder="Masukan Total Point"
            />
          </div>
          <div className="col-lg-12">
            <div className="text-right">
              <button className="btn btn-primary">
                Simpan <i className="fa fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

HeadParameterPoint = reduxForm({
  form: "HeadParameterPoint",
  enableReinitialize: true,
})(HeadParameterPoint);
export default connect()(HeadParameterPoint);
