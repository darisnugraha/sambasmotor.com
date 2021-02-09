import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { showModal } from "../../../actions/datamaster_action";
import {
  ReanderField,
  ReanderSelect,
} from "../../../components/notification/notification";

class HeadKonversiBarang extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit} autoComplete={true}>
          <div className="row">
            <div className="col-lg-3">
              <Field
                name="no_pindah"
                component={ReanderField}
                type="text"
                label="Nomor Pindah"
                placeholder="Masukan Nomor Pindah"
              />
            </div>
            <div className="col-lg-3">
              <Field
                name="tanggal"
                component={ReanderField}
                type="date"
                label="Tanggal"
                placeholder="Masukan Tanggal"
              />
            </div>
            <div className="col-lg-3">
              <Field
                name="lokasi"
                component={ReanderSelect}
                options={[
                  { value: "LOKASI001", name: "LOKASI 1" },
                  { value: "LOKASI002", name: "LOKASI 2" },
                  { value: "LOKASI003", name: "LOKASI 3" },
                  { value: "LOKASI004", name: "LOKASI 4" },
                ]}
                label="LOKASI"
                placeholder="PILIH LOKASI"
              />
            </div>
          </div>
          <div className="col-lg-12 mb-5">
            <div className="row">
              <div className="col-lg-6">
                <div className="text-left">
                  <button type="submit" className="btn btn-primary">
                    Simpan <i className="fa fa-paper-plane"></i>
                  </button>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="text-right">
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => this.props.dispatch(showModal())}
                  >
                    Tambah Barang <i className="fa fa-plus ml-3"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
HeadKonversiBarang = reduxForm({
  form: "permintaanBarang",
  enableReinitialize: true,
})(HeadKonversiBarang);
export default connect()(HeadKonversiBarang);
