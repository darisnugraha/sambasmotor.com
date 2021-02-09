import React, { Component } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { Field, reduxForm } from "redux-form";
import {
  ReanderField,
  ReanderSelect,
} from "../../../components/notification/notification";

class ModalCC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cvc: "",
      expiry: "",
      focus: "",
      name: "",
      no_card: "",
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
            <div className="col-lg-12 mb-2">
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
                options={[
                  { value: "BANK01", name: "BANK 01" },
                  { value: "BANK02", name: "BANK 02" },
                  { value: "BANK03", name: "BANK 03" },
                  { value: "BANK04", name: "BANK 04" },
                ]}
                label="Bank"
                placeholder="Masukan Bank"
              />
            </div>
            <div className="col-lg-3">
              <Field
                name="grand_total"
                component={ReanderField}
                type="number"
                label="Grand Total"
                placeholder="Masukan Grand Total"
              />
            </div>
            <div className="col-lg-1">
              <Field
                name="fee_card_percent"
                component={ReanderField}
                type="number"
                label="% Card"
                placeholder="0"
              />
            </div>
            <div className="col-lg-2">
              <Field
                name="fee_card"
                component={ReanderField}
                type="number"
                label="Fee Card"
                placeholder="0"
              />
            </div>
            <div className="col-lg-3">
              <Field
                name="total_card"
                component={ReanderField}
                type="number"
                label="Card + Fee"
                placeholder="Masukan Card + Fee"
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
export default ModalCC;
