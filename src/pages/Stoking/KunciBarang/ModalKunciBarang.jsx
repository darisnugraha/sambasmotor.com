import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import {
  ReanderField,
  ReanderSelect,
} from "../../../components/notification/notification";

class ModalKonversiBarang extends Component {
  handleChange(nama, data) {
    let split = data || "DEFAULT|DEFAULT";
    let hasil = split.split("|");
    this.props.change(nama, hasil[1]);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-3">
                <Field
                  name="id_mekanik"
                  component={ReanderSelect}
                  options={[
                    { value: "MEKANIK1|MEKANIK 01", name: "MEKANIK 01" },
                    { value: "MEKANIK2|MEKANIK 02", name: "MEKANIK 02" },
                    { value: "MEKANIK3|MEKANIK 03", name: "MEKANIK 03" },
                    { value: "MEKANIK4|MEKANIK 04", name: "MEKANIK 04" },
                  ]}
                  type="text"
                  label="ID Mekanik"
                  placeholder="Masukan ID Mekanik"
                  onChange={(data) => this.handleChange("nama_mekanik", data)}
                />
              </div>
              <div className="col-lg-3">
                <Field
                  name="nama_mekanik"
                  component={ReanderField}
                  type="text"
                  label="Nama Mekanik"
                  placeholder="Masukan Nama Mekanik"
                />
              </div>
              <div className="col-lg-3">
                <Field
                  name="kode_kunci"
                  component={ReanderSelect}
                  options={[
                    { value: "KUNCI01|KUNCI 01", name: "KUNCI 01" },
                    { value: "KUNCI02|KUNCI 02", name: "KUNCI 02" },
                    { value: "KUNCI03|KUNCI 03", name: "KUNCI 03" },
                    { value: "KUNCI04|KUNCI 04", name: "KUNCI 04" },
                  ]}
                  type="text"
                  label="Kode Kunci"
                  placeholder="Masukan Kode Kunci"
                  onChange={(data) => this.handleChange("nama_kunci", data)}
                />
              </div>
              <div className="col-lg-3">
                <Field
                  name="nama_kunci"
                  component={ReanderField}
                  type="text"
                  label="Nama KUnci"
                  placeholder="Masukan Nama KUnci"
                />
              </div>
              <div className="col-lg-3">
                <Field
                  name="tanggal"
                  component={ReanderField}
                  type="date"
                  label="Tanggal"
                />
              </div>
              <div className="col-lg-3">
                <Field
                  name="qty"
                  component={ReanderField}
                  type="text"
                  label="Jumlah"
                  placeholder="Masukan Jumlah"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="text-right">
              <button className="btn btn-primary">
                Simpan <i className="fa fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

ModalKonversiBarang = reduxForm({
  form: "ModalKonversiBarang",
  enableReinitialize: true,
})(ModalKonversiBarang);
export default connect()(ModalKonversiBarang);
