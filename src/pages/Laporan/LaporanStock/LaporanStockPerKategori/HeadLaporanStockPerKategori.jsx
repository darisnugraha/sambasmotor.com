import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { getBarang, getSupplier } from "../../../../actions/datamaster_action";
import {
  ReanderField,
  ReanderSelect,
} from "../../../../components/notification/notification";

class HeadLaporanPengeluaranBarang extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.dispatch(getSupplier());
    this.props.dispatch(getBarang());
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="row">
          <div className="col-lg-4">
            <Field
              name="tanggal_awal"
              component={ReanderField}
              type="date"
              label="Dari Tanggal"
              placeholder="Masukan Tanggal Awal"
            />
          </div>
          <div className="col-lg-4">
            <Field
              name="tanggal_akhir"
              component={ReanderField}
              type="date"
              label="Sampai Tanggal"
              placeholder="Masukan Sampai Tanggal"
            />
          </div>
          <div className="col-lg-4">
            <Field
              name="kode_supplier"
              component={ReanderSelect}
              options={this.props.listsupplier.map((list) => {
                let data = {
                  value: list.kode_supplier,
                  name: `${list.kode_supplier} - ${list.nama_supplier}`,
                };
                return data;
              })}
              type="text"
              label="Supplier"
              placeholder="Masukan Supplier"
            />
          </div>
          <div className="col-lg-4">
            <Field
              name="kode_barcode"
              component={ReanderSelect}
              options={this.props.listbarang.map((list) => {
                let data = {
                  value: list.kode_barcode,
                  name: `${list.kode_barcode} - ${list.nama_barang}`,
                };
                return data;
              })}
              type="text"
              label=" Nama Barang"
              placeholder="Masukan Nama Barang"
            />
          </div>
          <div className="col-lg-12">
            <div className="text-right">
              <button className="btn btn-primary">
                Lihat Data <i className="fa fa-print ml-3"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

HeadLaporanPengeluaranBarang = reduxForm({
  form: "HeadLaporanPengeluaranBarang",
  enableReinitialize: true,
})(HeadLaporanPengeluaranBarang);
export default connect((state) => {
  return {
    listsupplier: state.datamaster.listsupplier,
    listbarang: state.datamaster.listbarang,
  };
})(HeadLaporanPengeluaranBarang);
