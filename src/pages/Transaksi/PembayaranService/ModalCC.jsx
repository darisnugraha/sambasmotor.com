import React, { Component } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { connect } from "react-redux";
import { Field, formValueSelector, reduxForm } from "redux-form";
import { createNumberMask } from "redux-form-input-masks";
import { AxiosMasterGet } from "../../../axios";
import {
  ReanderField,
  ReanderSelect,
} from "../../../components/notification/notification";

const currencyMask = createNumberMask({
  prefix: "Rp. ",
  locale: "id-ID",
});

class ModalCC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cvc: "",
      expiry: "",
      focus: "",
      name: "",
      no_card: "",
      nav1: "nav-item nav-link active",
      nav2: "nav-item nav-link",
      nav3: "nav-item nav-link",
      listBank: [],
    };
  }
  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
    this.props.change(name, value);
  };

  componentDidMount() {
    AxiosMasterGet("bank/get/all").then((res) =>
      this.setState({
        listBank:
          res &&
          res.data.map((list) => {
            let data = {
              value: list.no_ac,
              name: `${list.atas_nama} / ${list.nama_bank}`,
            };
            return data;
          }),
      })
    );
  }

  setTotal() {
    this.props.change("fee_card", this.props.fee_card);
    this.props.change("total_card", this.props.total);
  }
  render() {
    return (
      <div className="col-lg-12">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.no_card}
        />
        <form onSubmit={this.props.handleSubmit} className="mt-3">
          <div className="row">
            <div className="col-lg-12">
              <nav className="nav nav-pills nav-fill">
                <a
                  className={this.state.nav1}
                  href="#"
                  onClick={() => {
                    this.setState({
                      nav1: "nav-item nav-link active",
                      nav2: "nav-item nav-link",
                      nav3: "nav-item nav-link",
                    });
                    this.props.change("jenis_trx", "DEBIT");
                  }}
                >
                  DEBIT
                </a>
                <a
                  className={this.state.nav2}
                  href="#"
                  onClick={() => {
                    this.setState({
                      nav1: "nav-item nav-link ",
                      nav2: "nav-item nav-link active",
                      nav3: "nav-item nav-link",
                    });
                    this.props.change("jenis_trx", "CARD");
                  }}
                >
                  CREDIT
                </a>
                <a
                  className={this.state.nav3}
                  href="#"
                  onClick={() => {
                    this.setState({
                      nav1: "nav-item nav-link ",
                      nav2: "nav-item nav-link",
                      nav3: "nav-item nav-link active",
                    });
                    this.props.change("jenis_trx", "TRANSFER");
                  }}
                >
                  TRANSFER
                </a>
              </nav>
            </div>
            <div className="col-lg-12 mb-2 mt-2">
              <h4>Data Kartu</h4>
            </div>
            <div className="col-lg-3">
              <div className="form-group">
                <label htmlFor="">No.Card</label>
                <input
                  type="tel"
                  className="form-control"
                  name="no_card"
                  placeholder="Card Number"
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
            </div>
            <div className="col-lg-3 d-none">
              <Field
                name="no_card"
                component={ReanderField}
                type="telp"
                label="No.Card"
                placeholder="Masukan No.Card"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div className="col-lg-3">
              <div className="form-group">
                <label htmlFor="">Valid Until</label>
                <input
                  type="tel"
                  className="form-control"
                  name="expiry"
                  placeholder="MM/YY"
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
            </div>
            <div className="col-lg-3 d-none">
              <Field
                name="expiry"
                component={ReanderField}
                type="telp"
                label="Valid until ( MM/YY )"
                placeholder="Masukan Valid until ( MM/YY )"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div className="col-lg-3">
              <div className="form-group">
                <label htmlFor="">Nama Pemilik</label>
                <input
                  type="tel"
                  className="form-control"
                  name="name"
                  placeholder="Nama Pemilik"
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
            </div>
            <div className="col-lg-3 d-none">
              <Field
                name="name"
                component={ReanderField}
                type="text"
                label="Nama Pemilik"
                placeholder="Masukan Nama Pemilik"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div className="col-lg-3">
              <div className="form-group">
                <label htmlFor="">CVC / CVV</label>
                <input
                  type="tel"
                  className="form-control"
                  name="cvc"
                  placeholder="Nama Pemilik"
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
            </div>
            <div className="col-lg-3 d-none">
              <Field
                name="cvc"
                component={ReanderField}
                type="text"
                label="Nama Pemilik"
                placeholder="Masukan Nama Pemilik"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div className="col-lg-12 mb-2">
              <h4>Data Pemilik</h4>
            </div>
            <div className="col-lg-3">
              <Field
                name="no_ktp"
                component={ReanderField}
                type="number"
                label="Nomor KTP"
                placeholder="Masukan Nomor KTP"
              />
            </div>
            <div className="col-lg-3">
              <Field
                name="alamat_ktp"
                component={ReanderField}
                type="text"
                label="Alamat KTP"
                placeholder="Masukan Alamat KTP"
              />
            </div>
            <div className="col-lg-3 d-none">
              <Field
                name="jenis_trx"
                component={ReanderField}
                type="text"
                label="Jenis Transaksi"
                placeholder="Masukan Jenis Transaksi"
              />
            </div>
            <div className="col-lg-3">
              <Field
                name="kota"
                component={ReanderField}
                type="text"
                label="Kota"
                placeholder="Masukan Kota"
              />
            </div>
            <div className="col-lg-3">
              <Field
                name="handphone"
                component={ReanderField}
                type="telp"
                label="Handphone"
                placeholder="Masukan Handphone"
              />
            </div>
            <div className="col-lg-12 mb-2">
              <h4>Data Harga</h4>
            </div>
            <div className="col-lg-3">
              <Field
                name="bank"
                component={ReanderSelect}
                options={this.state.listBank}
                label="Bank"
                placeholder="Masukan Bank"
              />
            </div>
            <div className="col-lg-3">
              <Field
                name="grand_total"
                component={ReanderField}
                type="telp"
                label="Grand Total"
                placeholder="Masukan Grand Total"
                {...currencyMask}
              />
            </div>
            <div className="col-lg-1">
              <Field
                name="fee_card_percent"
                component={ReanderField}
                type="number"
                label="% Card"
                placeholder="0"
                onChange={this.setTotal()}
              />
            </div>
            <div className="col-lg-2">
              <Field
                name="fee_card"
                component={ReanderField}
                type="telp"
                label="Fee Card"
                placeholder="0"
                {...currencyMask}
              />
            </div>
            <div className="col-lg-3">
              <Field
                name="total_card"
                component={ReanderField}
                type="telp"
                label="Card + Fee"
                placeholder="Masukan Card + Fee"
                {...currencyMask}
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
      </div>
    );
  }
}

ModalCC = reduxForm({
  form: "ModalCC",
  enableReinitialize: true,
})(ModalCC);
const selector = formValueSelector("ModalCC");
export default connect((state) => {
  const { grand_total, fee_card_percent } = selector(
    state,
    "grand_total",
    "fee_card_percent"
  );
  return {
    fee_card:
      parseFloat(grand_total || 0) * (parseFloat(fee_card_percent || 0) / 100),
    total:
      parseFloat(grand_total || 0) +
      parseFloat(grand_total || 0) * (parseFloat(fee_card_percent || 0) / 100),
  };
})(ModalCC);
