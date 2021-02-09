import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import {
  ReanderField,
  ReanderFieldInline,
} from "../../../components/notification/notification";

class ModalTambahSparepart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="col-lg-12">
        <form onSubmit={this.props.handleSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <Field
                name="kode_barcode"
                component={ReanderField}
                type="text"
                label="Kode Barcode"
                placeholder="Masukan Kode Barcode"
              />
            </div>
            <div className="col-lg-4">
              <Field
                name="nama_barang"
                component={ReanderField}
                type="text"
                label="Nama Barang"
                placeholder="Masukan Nama Barang"
              />
            </div>
            <div className="col-lg-3">
              <Field
                name="merk"
                component={ReanderField}
                type="text"
                label="Merk"
                placeholder="Masukan Merk"
              />
            </div>
            <div className="col-lg-3">
              <Field
                name="type"
                component={ReanderField}
                type="text"
                label="Type"
                placeholder="Masukan Type"
              />
            </div>
            <div className="col-lg-3">
              <Field
                name="qty"
                component={ReanderField}
                type="text"
                label="Qty"
                placeholder="Masukan Qty"
              />
            </div>
            <div className="col-lg-3">
              <Field
                name="satuan"
                component={ReanderField}
                type="text"
                label="Satuan"
                placeholder="Masukan Satuan"
              />
            </div>
            <div className="col-lg-3">
              <Field
                name="harga"
                component={ReanderField}
                type="text"
                label="Harga"
                placeholder="Masukan Harga"
              />
            </div>
            <div className="col-lg-3">
              <Field
                name="total"
                component={ReanderField}
                type="text"
                label="Total"
                placeholder="Masukan Total"
              />
            </div>
            <div className="col-lg-12">
              <BootstrapTable
                bootstrap4
                keyField="id"
                data={this.props.data}
                columns={this.props.columns}
              />
            </div>

            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-5">
                  <div className="text-left">
                    <Field
                      name="grand_total"
                      component={ReanderFieldInline}
                      type="text"
                      label="Grand Total"
                      placeholder="0"
                      readOnly
                    />

                    <Field
                      name="discount"
                      component={ReanderFieldInline}
                      type="text"
                      label="Discount"
                      placeholder="Masukan Discount"
                    />

                    <Field
                      name="total"
                      component={ReanderFieldInline}
                      type="text"
                      label="Total"
                      placeholder="0"
                      readOnly
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="text-right">
                    <button className="btn btn-primary">
                      Simpan <i className="fa fa-paper-plane ml-3"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

ModalTambahSparepart = reduxForm({
  form: "ModalTambahSparepart",
  enableReinitialize: true,
})(ModalTambahSparepart);
export default connect()(ModalTambahSparepart);
