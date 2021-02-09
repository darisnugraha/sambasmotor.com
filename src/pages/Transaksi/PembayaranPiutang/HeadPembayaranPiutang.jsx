import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Field, reduxForm } from "redux-form";
import { showModal } from "../../../actions/datamaster_action";
import { ReanderField } from "../../../components/notification/notification";

class HeadPembayaranPiutang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          dataField: "tanggal",
          text: "Tanggal",
        },
        {
          dataField: "nomor_bon",
          text: "Nomor bon",
        },
        {
          dataField: "kode_supplier",
          text: "Kode Supplier",
        },
        {
          dataField: "total",
          text: "Total",
          formatter: (data) => "Rp. " + data.toLocaleString("id-ID"),
        },
        {
          dataField: "action",
          text: "Action",
          csvExport: false,
          headerClasses: "text-center",
          formatter: (rowcontent, row) => {
            this.setState({});
            return (
              <div className="row text-center">
                <div className="col-12">
                  <button
                    type="button"
                    onClick={() => this.props.dispatch(showModal())}
                    className="btn btn-success mr-3"
                  >
                    Bayar
                    <i className="fa fa-money-bill-alt ml-2"></i>
                  </button>
                </div>
              </div>
            );
          },
        },
      ],
      data: [
        {
          tanggal: "01/30/2021",
          nomor_bon: "PS-00001",
          kode_supplier: "SP001",
          total: 1000000,
        },
      ],
    };
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-4">
              <Field
                name="nomor_bayar"
                component={ReanderField}
                type="text"
                label="Nomor Bayar"
                placeholder="Masukan Nomor Bayar"
                readOnly
              />
            </div>
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
                name="no_bon"
                component={ReanderField}
                type="text"
                label="Nomor Bon"
                placeholder="Masukan Nomor Bon"
              />
            </div>
            <div className="col-lg-4">
              <Field
                name="nama_customer"
                component={ReanderField}
                type="text"
                label="Nama Customer"
                placeholder="Masukan Nama Customer"
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
                name="no_polisi"
                component={ReanderField}
                type="text"
                label="Nomor Polisi"
                placeholder="Masukan Nomor Polisi"
              />
            </div>
            <div className="col-lg-12">
              <div className="text-right">
                <button className="btn btn-primary">
                  Cari <i className="fa fa-search ml-3"></i>
                </button>
              </div>
            </div>
            <div className="col-lg-12 mt-3">
              <BootstrapTable
                bootstrap4
                keyField="id"
                data={this.state.data}
                columns={this.state.columns}
              />
            </div>
          </div>
        </div>
      </form>
    );
  }
}

HeadPembayaranPiutang = reduxForm({
  form: "HeadPembayaranPiutang",
  enableReinitialize: true,
})(HeadPembayaranPiutang);
export default HeadPembayaranPiutang;
