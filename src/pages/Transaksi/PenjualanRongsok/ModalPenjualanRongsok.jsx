import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, formValueSelector, reduxForm } from "redux-form";
import {
  ReanderField,
  ReanderSelect,
} from "../../../components/notification/notification";
import { createNumberMask } from "redux-form-input-masks";

const currencyMask = createNumberMask({
  prefix: "Rp. ",
  suffix: " ,-",
  decimalPlaces: 0,
  locale: "id-ID",
});
class ModalPenjualanRongsok extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  setTotal() {
    this.props.change("total", this.props.total);
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="row">
          <div className="col-lg-4">
            <Field
              name="nama_barang"
              component={ReanderField}
              type="text"
              label="Nama Barang"
              placeholder="Masukan Nama Barang"
            />
          </div>
          <div className="col-lg-2">
            <Field
              name="qty"
              component={ReanderField}
              type="text"
              label="Qty"
              placeholder="Masukan Qty"
              onChange={this.setTotal()}
            />
          </div>
          <div className="col-lg-3">
            <Field
              name="satuan"
              component={ReanderSelect}
              options={[
                { value: "SATUAN01", name: "SATUAN 01" },
                { value: "SATUAN02", name: "SATUAN 02" },
                { value: "SATUAN03", name: "SATUAN 03" },
                { value: "SATUAN04", name: "SATUAN 04" },
              ]}
              type="text"
              label="Satuan"
              placeholder="Masukan "
            />
          </div>
          <div className="col-lg-3">
            <Field
              name="harga_satuan"
              component={ReanderField}
              type="text"
              label="Harga Satuan"
              placeholder="Masukan Harga Satuan"
              onChange={this.setTotal()}
              {...currencyMask}
            />
          </div>
          <div className="col-lg-3">
            <Field
              name="total"
              component={ReanderField}
              type="text"
              label="Total"
              placeholder="Masukan Total"
              {...currencyMask}
            />
          </div>
          <div className="col-lg-12">
            <div className="text-right">
              <button className="btn btn-primary">
                Simpan <i className="fa fa-paper-plane ml-3"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

ModalPenjualanRongsok = reduxForm({
  form: "ModalPenjualanRongsok",
  enableReinitialize: true,
})(ModalPenjualanRongsok);
const select = formValueSelector("ModalPenjualanRongsok");
export default connect((state) => {
  const { harga_satuan, qty } = select(state, "harga_satuan", "qty");
  return {
    total: parseFloat(harga_satuan || 0) * parseFloat(qty || 0),
  };
})(ModalPenjualanRongsok);
