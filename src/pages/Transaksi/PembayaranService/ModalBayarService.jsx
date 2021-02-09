import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import {
  ReanderField,
  ReanderFieldInline,
} from "../../../components/notification/notification";

class ModalBayarService extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="row">
        <div className="col-lg-12 mb-3">
          <div className="col-lg-12">
            <div className="text-left">
              <button
                className="btn btn-black text-white"
                onClick={this.props.backMenu}
              >
                <i className="fa fa-chevron-left mr-3"></i> Back
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="col-lg-12">
            <h5>Total Service</h5>
          </div>
          <div className="col-lg-12">
            <Field
              name="sub_total_service"
              component={ReanderFieldInline}
              type="text"
              label="Sub Total"
              placeholder="Masukan Sub Total"
            />
          </div>
          <div className="col-lg-12">
            <Field
              name="discount_service"
              component={ReanderFieldInline}
              type="text"
              label="Discount"
              placeholder="Masukan Discount"
            />
          </div>
          <div className="col-lg-12">
            <Field
              name="total_service"
              component={ReanderFieldInline}
              type="text"
              label="Total"
              placeholder="Masukan Total"
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="col-lg-12">
            <h5>Total Sparepart</h5>
          </div>
          <div className="col-lg-12">
            <Field
              name="sub_total_sparepart"
              component={ReanderFieldInline}
              type="text"
              label="Sub Total"
              placeholder="Masukan Sub Total"
            />
          </div>
          <div className="col-lg-12">
            <Field
              name="discount_sparepart"
              component={ReanderFieldInline}
              type="text"
              label="Sparepart"
              placeholder="Masukan Sparepart"
            />
          </div>
          <div className="col-lg-12">
            <Field
              name="total_sparepart"
              component={ReanderFieldInline}
              type="text"
              label="Total"
              placeholder="Masukan Total"
            />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="col-lg-12">
            <Field
              name="grand_total_all"
              component={ReanderField}
              type="text"
              label="Grand Total"
              placeholder="Masukan Grand Total"
            />
          </div>
          <div className="col-lg-12">
            <Field
              name="bayar"
              component={ReanderField}
              type="text"
              label="Bayar"
              placeholder="Masukan Bayar"
            />
          </div>
          <div className="col-lg-12">
            <Field
              name="kembali"
              component={ReanderField}
              type="text"
              label="Kembali"
              placeholder="Masukan Kembali"
            />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-4">
              <div className="text-center">
                <button className="btn btn-primary">Debit</button>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-center">
                <button className="btn btn-primary" onClick={this.props.showCC}>
                  Credit
                </button>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-center">
                <button className="btn btn-primary">Transfer</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 mt-3">
          <div className="col-lg-12">
            <BootstrapTable
              bootstrap4
              keyField="id"
              data={this.props.data}
              columns={this.props.columns}
            />
          </div>
        </div>
      </div>
    );
  }
}

ModalBayarService = reduxForm({
  form: "ModalBayarService",
  enableReinitialize: true,
})(ModalBayarService);
export default connect()(ModalBayarService);
