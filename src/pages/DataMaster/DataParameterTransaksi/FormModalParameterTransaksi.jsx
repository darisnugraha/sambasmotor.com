import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm, submit } from "redux-form";
import { ReanderField } from "../../../components/notification/notification";
import { required } from "../../../validasi/normalize";
import ValidasiMasterKategori from "../../../validasi/ValidasiMasterKategori";

const maptostate = (state) => {
  if (state.datamaster.dataparameter !== undefined) {
    return {
      initialValues: {
        id_kategori: state.datamaster.dataparameter.id_kategori,
        kategori: state.datamaster.dataparameter.kategori,
      },
      onSend: state.datamaster.onSend,
    };
  } else {
    return {
      onSend: state.datamaster.onSend,
    };
  }
};

class FormModalParameterTransaksi extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.change("id_kategori", this.props.noFaktur);
  }
  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit}
        onKeyPress={(e) => {
          e.key === "Enter" && e.preventDefault();
        }}
      >
        <Field
          name="id_kategori"
          component={ReanderField}
          type="text"
          label="Nama Parameter"
          placeholder="Masukan Nama Parameter"
          readOnly
          validate={required}
        />
        <Field
          name="kategori"
          component={ReanderField}
          type="text"
          label="Nama Parameter"
          placeholder="Masukan Nama Parameter"
          validate={required}
        />

        <button
          className="btn btn-primary"
          disabled={this.props.onSend}
          onClick={() => this.props(submit("dataParameterTransaksi"))}
        >
          {this.props.onSend ? (
            <>
              <i className="fas fa-spinner fa-spin"></i> &nbsp; Sedang Menyimpan
            </>
          ) : (
            <>
              Simpan <i className="fa fa-paper-plane ml-3 "></i>
            </>
          )}
        </button>
      </form>
    );
  }
}

FormModalParameterTransaksi = reduxForm({
  form: "dataParameterTransaksi",
  enableReinitialize: true,
  validate: ValidasiMasterKategori,
})(FormModalParameterTransaksi);
export default connect(maptostate, null)(FormModalParameterTransaksi);
