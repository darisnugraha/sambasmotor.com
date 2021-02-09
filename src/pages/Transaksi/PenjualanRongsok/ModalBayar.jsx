import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, formValueSelector, reduxForm } from "redux-form";
import { ReanderField } from "../../../components/notification/notification";
import { createNumberMask } from "redux-form-input-masks";

const currencyMask = createNumberMask({
  prefix: "Rp. ",
  suffix: " ,-",
  decimalPlaces: 0,
  locale: "id-ID",
});

class ModalBayar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  setKembali() {
    this.props.change("kembali", this.props.kembali);
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="col-lg-12">
          <Field
            name="grand_total"
            component={ReanderField}
            type="text"
            label="Grand Total"
            placeholder="Masukan Grand Total"
            {...currencyMask}
            readOnly
          />
        </div>
        <div className="col-lg-12">
          <Field
            name="bayar"
            component={ReanderField}
            type="text"
            label="Bayar"
            placeholder="Masukan Bayar"
            autoFocus
            onChange={this.setKembali()}
            {...currencyMask}
          />
        </div>
        <div className="col-lg-12">
          <Field
            name="kembali"
            component={ReanderField}
            type="text"
            label="Kembali"
            placeholder="Masukan Kembali"
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
      </form>
    );
  }
}

ModalBayar = reduxForm({
  form: "ModalBayar",
  enableReinitialize: true,
})(ModalBayar);
const selector = formValueSelector("ModalBayar");
export default connect((state) => {
  const { grand_total, bayar } = selector(state, "grand_total", "bayar");
  return {
    kembali: parseFloat(grand_total || 0) - parseFloat(bayar || 0),
    initialValues: {
      grand_total: state.transaksi.sub_total,
    },
  };
})(ModalBayar);
