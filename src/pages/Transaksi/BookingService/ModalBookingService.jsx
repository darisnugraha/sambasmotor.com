import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import {
  ReanderField,
  ReanderSelect,
} from "../../../components/notification/notification";
import {
  getCustomer,
  getKategoriService,
  getSales,
} from "../../../actions/datamaster_action";
import { required } from "../../../validasi/normalize";
import { getToday } from "../../../components/notification/function";

class ModalBookingService extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleChange(nama, data) {
    let split = data || "DEFAULT|DEFAULT";
    let hasil = split.split("|");
    this.props.change(nama, hasil[1]);
  }
  componentDidMount() {
    this.props.dispatch(getCustomer());
    this.props.dispatch(getKategoriService());
    this.props.dispatch(getSales());
    this.props.change("tanggal", getToday());
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit}
          onKeyPress={(e) => {
            e.key === "Enter" && e.preventDefault();
          }}
        >
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-3">
                <Field
                  name="pelaggan"
                  component={ReanderSelect}
                  options={this.props.listCustomer.map((list) => {
                    let data = {
                      value: `${list.kode_customer}||${list.nama_customer}||${list.alamat}||${list.handphone}||${list.nopol_kendaraan}||${list.merk_kendaraan}||${list.warna_kendaraann}`,
                      name: list.nama_customer,
                    };
                    return data;
                  })}
                  onChange={(data) =>
                    this.props.change("nopol_kendaraan", data.split("||")[4])
                  }
                  type="text"
                  label="Nama customer"
                  placeholder="Masukan Nama customer"
                  validate={required}
                  loading={this.props.listCustomer === [] ? true : false}
                />
              </div>
              <div className="col-lg-3 d-none">
                <Field
                  name="nopol_kendaraan"
                  component={ReanderField}
                  type="text"
                  label="nopol"
                  placeholder="Masukan nopol"
                />
              </div>
              <div className="col-lg-3">
                <Field
                  name="kategori_service"
                  component={ReanderSelect}
                  options={this.props.listkategoriservice.map((list) => {
                    let data = {
                      value: list.jenis_service,
                      name: list.jenis_service,
                    };
                    return data;
                  })}
                  type="text"
                  label="Jenis Service"
                  placeholder="Masukan Jenis Service"
                  validate={required}
                  loading={this.props.listkategoriservice === [] ? true : false}
                />
              </div>
              <div className="col-lg-2">
                <Field
                  name="tanggal"
                  component={ReanderField}
                  type="date"
                  label="Tanggal Pelayanan"
                  placeholder="Masukan Tanggal Pelayanan"
                  validate={required}
                />
              </div>
              <div className="col-lg-1">
                <Field
                  name="jam"
                  component={ReanderField}
                  type="text"
                  label="Jam"
                  placeholder="Masukan Jam"
                />
              </div>
              <div className="col-lg-3">
                <Field
                  name="id_mekanik"
                  component={ReanderSelect}
                  options={this.props.listsales
                    .filter((list) => list.kode_divisi === "MKN")
                    .map((list) => {
                      let data = {
                        value: list.kode_pegawai,
                        name: list.nama_pegawai,
                      };
                      return data;
                    })}
                  type="text"
                  label="ID Mekanik"
                  placeholder="Masukan ID Mekanik"
                  validate={required}
                  loading={this.props.listsales === [] ? true : false}
                />
              </div>
              <div className="col-lg-12">
                <label htmlFor="">Catatan</label>
                <Field
                  name="catatan"
                  component="textarea"
                  type="text"
                  label="Catatan"
                  placeholder="Masukan Catatan"
                  className="form-control"
                  validate={required}
                />
                <span>**Mohon Isi Catatan</span>
              </div>
            </div>
          </div>
          <div className="col-lg-12 mt-3">
            <div className="text-right">
              <button className="btn btn-primary" disabled={this.props.onSend}>
                {this.props.onSend ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> &nbsp; Sedang
                    Menyimpan
                  </>
                ) : (
                  <>
                    Simpan <i className="fa fa-paper-plane ml-3 "></i>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

ModalBookingService = reduxForm({
  form: "ModalBookingService",
  enableReinitialize: true,
})(ModalBookingService);
export default connect((state) => {
  return {
    listCustomer: state.datamaster.listcustomer,
    listkategoriservice: state.datamaster.listkategoriservice,
    listsales: state.datamaster.listsales,
    onSend: state.datamaster.onSend,
  };
})(ModalBookingService);
