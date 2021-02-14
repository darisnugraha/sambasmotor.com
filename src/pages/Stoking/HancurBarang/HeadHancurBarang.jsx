import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { showModal } from "../../../actions/datamaster_action";
import { AxiosMasterGet } from "../../../axios";
import {
  ReanderField,
  ReanderSelect,
} from "../../../components/notification/notification";

class HeadHancurBarang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listGudang: [],
    };
  }
  componentDidMount() {
    AxiosMasterGet("hancur-barang/generate/no-trx").then((res) =>
      this.props.change("no_pindah", res.data[0].no_hancur)
    );
    AxiosMasterGet("lokasi-gudang/get/all").then((res) =>
      this.setState({
        listGudang:
          res &&
          res.data.map((list) => {
            let data = {
              value: list.kode_lokasi_gudang,
              name: list.nama_lokasi_gudang,
            };
            return data;
          }),
      })
    );
  }
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
                readOnly
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
                options={this.state.listGudang}
                label="Lokasi Gudang"
                placeholder="Pilih Lokasi Gudang"
                onChange={(e) => localStorage.setItem("lokasi_hancur", e)}
              />
            </div>
          </div>
          <div className="row mb-3">
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
        </form>
      </div>
    );
  }
}
HeadHancurBarang = reduxForm({
  form: "permintaanBarang",
  enableReinitialize: true,
})(HeadHancurBarang);
export default connect()(HeadHancurBarang);
