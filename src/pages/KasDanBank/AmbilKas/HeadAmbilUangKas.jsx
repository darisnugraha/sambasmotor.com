import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { createNumberMask } from "redux-form-input-masks";
import {
  ReanderField,
  ReanderSelect,
  renderTextArea,
} from "../../../components/notification/notification";

const currencyMask = createNumberMask({
  prefix: "Rp. ",
  suffix: " ,-",
  locale: "id-ID",
});
class HeadAmbilUangKas extends Component {
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
              name="tanggal"
              component={ReanderField}
              type="date"
              label="Tanggal"
              placeholder="Masukan Tanggal"
            />
          </div>
          <div className="col-lg-4">
            <Field
              name="jumlah"
              component={ReanderField}
              type="telp"
              label="Jumlah"
              placeholder="Masukan Jumlah"
              {...currencyMask}
            />
          </div>
          <div className="col-lg-4">
            <Field
              name="kategori"
              component={ReanderSelect}
              options={[
                { value: "KATEGORI01", name: "KATEGORI 01" },
                { value: "KATEGORI02", name: "KATEGORI 02" },
                { value: "KATEGORI03", name: "KATEGORI 03" },
                { value: "KATEGORI04", name: "KATEGORI 04" },
              ]}
              type="text"
              label="Kategori"
              placeholder="Masukan Kategori"
            />
          </div>
          <div className="col-lg-12">
            <Field
              name="keterangan"
              component={renderTextArea}
              type="text"
              label="Keterangan"
              placeholder="Masukan Keterangan"
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

HeadAmbilUangKas = reduxForm({
  form: "HeadAmbilUangKas",
  enableReinitialize: true,
})(HeadAmbilUangKas);
export default connect()(HeadAmbilUangKas);
