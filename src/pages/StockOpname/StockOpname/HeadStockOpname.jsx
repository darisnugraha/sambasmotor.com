import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { showModal } from "../../../actions/datamaster_action";
import {
  ReanderField,
  ReanderSelect,
} from "../../../components/notification/notification";

class HeadStockOpname extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          dataField: "kode_barcode",
          text: "Kode Barcode",
        },
        {
          dataField: "nama_barang",
          text: "Nama Barang",
        },
        {
          dataField: "merk",
          text: "Merk",
        },
        {
          dataField: "kwalitas",
          text: "Kualitas",
        },
        {
          dataField: "type",
          text: "Type",
        },
        {
          dataField: "satuan",
          text: "Satuan",
        },
      ],
    };
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="row">
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
                { value: "LOKASI01", name: "LOKASI 01" },
                { value: "LOKASI02", name: "LOKASI 02" },
                { value: "LOKASI03", name: "LOKASI 03" },
                { value: "LOKASI04", name: "LOKASI 04" },
              ]}
              type="text"
              label="Lokasi"
              placeholder="Masukan Lokasi"
            />
          </div>
          <div className="col-lg-12 mb-3">
            <div className="text-right">
              <button
                className="btn btn-warning"
                onClick={() => this.props.dispatch(showModal())}
              >
                Tambah Data <i className="fa fa-plus ml-3"></i>
              </button>
            </div>
          </div>
          <div className="col-lg-12">
            <BootstrapTable
              bootstrap4
              keyField="id"
              data={this.props.liststockopname || []}
              columns={this.state.columns}
            />
          </div>
          <div className="col-lg-12">
            <div className="text-right">
              <button className="btn btn-primary">
                Simpan <i className="fa fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

HeadStockOpname = reduxForm({
  form: "HeadStockOpname",
  enableReinitialize: true,
})(HeadStockOpname);
export default connect()(HeadStockOpname);
