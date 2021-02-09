import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { ReanderField } from "../../../components/notification/notification";

class ModalDaftarHadiah extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="row">
          <div className="col-lg-4">
            <Field
              name="nama_hadiah"
              component={ReanderField}
              type="text"
              label="Nama Hadiah"
              placeholder="Masukan Nama Hadiah"
            />
          </div>
          <div className="col-lg-4">
            <Field
              name="stock_hadiah"
              component={ReanderField}
              type="text"
              label="Stock Hadiah"
              placeholder="Masukan Stock Hadiah"
            />
          </div>
          <div className="col-lg-4">
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

ModalDaftarHadiah = reduxForm({
  form: "ModalDaftarHadiah",
  enableReinitialize: true,
})(ModalDaftarHadiah);
export default connect()(ModalDaftarHadiah);
