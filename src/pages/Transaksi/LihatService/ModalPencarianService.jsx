import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { getCustomer } from "../../../actions/datamaster_action";
import { getToday } from "../../../components/notification/function";
import { ReanderField } from "../../../components/notification/notification";

class ModalPencarianService extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.change("tanggal_start", getToday());
    this.props.change("tanggal_end", getToday());
    this.props.dispatch(getCustomer());
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div>
          <div className="col-lg-12">
            <Field
              name="tanggal_awal"
              component={ReanderField}
              type="date"
              label="Tanggal Mulai"
              placeholder="Masukan Tanggal Mulai"
            />
          </div>
          <div className="col-lg-12">
            <Field
              name="tanggal_akhir"
              component={ReanderField}
              type="date"
              label="Tanggal Akhir"
              placeholder="Masukan Tanggal Akhir"
            />
          </div>
          <div className="col-lg-12 mt-4">
            <button className="btn btn-block btn-primary">CARI</button>
          </div>
        </div>
      </form>
    );
  }
}

ModalPencarianService = reduxForm({
  form: "ModalPencarianService",
  enableReinitialize: true,
})(ModalPencarianService);
export default connect((state) => {
  return {
    listcustomer: state.datamaster.listcustomer,
  };
})(ModalPencarianService);
