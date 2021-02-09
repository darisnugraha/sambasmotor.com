import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { ReanderField } from "../../../components/notification/notification";
import { createNumberMask } from "redux-form-input-masks";

const currencyMask = createNumberMask({
  prefix: "Rp. ",
  suffix: " ,-",
  decimalPlaces: 0,
  locale: "id-ID",
});
const maptostate = (state) => {
  return {
    initialValues: {
      total: state.transaksi.sub_total,
    },
  };
};
class HeadPenjualanRongsok extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          dataField: "nama_barang",
          text: "Nama Barang",
        },
        {
          dataField: "qty",
          text: "Qty",
        },
        {
          dataField: "satuan",
          text: "Satuan",
        },
        {
          dataField: "harga_satuan",
          text: "Harga Satuan",
          formatter: (data) =>
            "Rp. " + parseFloat(data).toLocaleString("id-ID"),
        },
        {
          dataField: "total",
          text: "Total",
          formatter: (data) =>
            "Rp. " + parseFloat(data).toLocaleString("id-ID"),
        },
      ],
    };
  }
  componentDidMount() {
    this.props.change("total", this.props.sub_total);
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="row">
          <div className="col-lg-4">
            <Field
              name="tanggal"
              component={ReanderField}
              type="text"
              label="Tanggal"
              placeholder="Masukan Tanggal"
            />
          </div>
          <div className="col-lg-4">
            <Field
              name="no_faktur"
              component={ReanderField}
              type="text"
              label="Nomor Faktur"
              placeholder="Masukan Nomor Faktur"
            />
          </div>
          <div className="col-lg-4"></div>
          <div className="col-lg-4">
            <Field
              name="kode_pelanggan"
              component={ReanderField}
              type="text"
              label="Pelanggan"
              placeholder="Masukan Pelanggan"
            />
          </div>
          <div className="col-lg-4">
            <Field
              name="alamat"
              component={ReanderField}
              type="text"
              label="Alamat"
              placeholder="Masukan Alamat"
            />
          </div>
          <div className="col-lg-4">
            <Field
              name="handphone"
              component={ReanderField}
              type="text"
              label="Handphone"
              placeholder="Masukan Handphone"
            />
          </div>
          <div className="col-lg-12">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <Field
                  name="total"
                  component={ReanderField}
                  type="text"
                  label="Total Harga"
                  placeholder="Rp."
                  readOnly
                  {...currencyMask}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-12 mb-3">
            <div className="text-right">
              <button
                type="button"
                className="btn btn-warning"
                onClick={this.props.showTambah}
              >
                Tambah Data <i className="fa fa-plus ml-3"></i>
              </button>
            </div>
          </div>
          <div className="col-lg-12">
            <BootstrapTable
              bootstrap4
              keyField="id"
              data={this.props.listbarangrongsok || []}
              columns={this.state.columns}
            />
          </div>
          <div className="col-lg-12">
            <div className="text-right">
              <button
                className="btn btn-primary"
                type="button"
                onClick={this.props.showBayar}
              >
                Bayar <i className="fa fa-paper-plane ml-3"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

HeadPenjualanRongsok = reduxForm({
  form: "HeadPenjualanRongsok",
  enableReinitialize: true,
})(HeadPenjualanRongsok);
export default connect(maptostate, null)(HeadPenjualanRongsok);
