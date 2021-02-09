import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardBody } from "reactstrap";
import { Field, reduxForm } from "redux-form";
import Cash from "../../../assets/images/Cash.svg";
import Transfer from "../../../assets/images/Transfer.svg";
import { ReanderField } from "../../../components/notification/notification";

class ModalPembayaranPiutang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type_bayar: "row",
      cash: "col-lg-12 d-none",
      transfer: "col-lg-12 d-none",
    };
  }
  render() {
    return (
      <div className="col-lg-12">
        <div className={this.state.type_bayar}>
          <div className="col-lg-2"></div>
          <div className="col-lg-4">
            <Card
              onClick={() =>
                this.setState({
                  cash: "col-lg-12",
                  type_bayar: "row d-none",
                })
              }
            >
              <CardBody>
                <div className="col-lg-12">
                  <img src={Cash} alt="Cash" width={"100%"} />
                  <div className="text-center">
                    <h1>CASH</h1>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card
              onClick={() =>
                this.setState({
                  transfer: "col-lg-12",
                  type_bayar: "row d-none",
                })
              }
            >
              <CardBody>
                <div className="col-lg-12">
                  <img src={Transfer} alt="Transfer" width={"100%"} />
                  <div className="text-center">
                    <h1>Transfer</h1>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="col-lg-2"></div>
        </div>
        <div className={this.state.cash}>
          <form onSubmit={this.props.handleSubmit}>
            <div className="row">
              <div className="col-lg-12">
                <div className="text-left">
                  <button
                    type="button"
                    className="btn btn-default"
                    onClick={() =>
                      this.setState({
                        cash: "col-lg-12 d-none",
                        type_bayar: "row",
                      })
                    }
                  >
                    <i className="fa fa-chevron-left mr-3"></i>Back
                  </button>
                </div>
              </div>
              <div className="col-lg-4"></div>
              <div className="col-lg-4 align-self-center">
                <Field
                  name="cash"
                  component={ReanderField}
                  type="text"
                  label="Cash Rp"
                  placeholder="Masukan Cash Rp"
                />
              </div>
              <div className="col-lg-12">
                <div className="text-right">
                  <button className="btn btn-primary">
                    Simpan <i className="fa fa-paper-plane ml-3"></i>
                  </button>
                </div>
              </div>
              <div className="col-lg-4"></div>
            </div>
          </form>
        </div>
        <div className={this.state.transfer}>
          <form onSubmit={this.props.handleSubmit}>
            <div className="row">
              <div className="col-lg-12">
                <div className="text-left">
                  <button
                    type="button"
                    className="btn btn-default"
                    onClick={() =>
                      this.setState({
                        transfer: "col-lg-12 d-none",
                        type_bayar: "row",
                      })
                    }
                  >
                    <i className="fa fa-chevron-left mr-3"></i>Back
                  </button>
                </div>
              </div>
              <div className="col-lg-4"></div>
              <div className="col-lg-4 align-self-center">
                <Field
                  name="transfer"
                  component={ReanderField}
                  type="telp"
                  label="Transfer Rp"
                  placeholder="Masukan Transfer Rp"
                />
              </div>
              <div className="col-lg-4"></div>
              <div className="col-lg-4"></div>
              <div className="col-lg-4 align-self-center">
                <Field
                  name="ac_asal"
                  component={ReanderField}
                  type="text"
                  label="A/C Asal"
                  placeholder="Masukan A/C Asal"
                />
              </div>
              <div className="col-lg-4"></div>
              <div className="col-lg-4"></div>
              <div className="col-lg-4 align-self-center">
                <Field
                  name="ac_tujuan"
                  component={ReanderField}
                  type="text"
                  label="A/C Tujuan"
                  placeholder="Masukan A/C Tujuan"
                />
              </div>
              <div className="col-lg-4"></div>
              <div className="col-lg-12">
                <div className="text-right">
                  <button className="btn btn-primary">
                    Simpan <i className="fa fa-paper-plane ml-3"></i>
                  </button>
                </div>
              </div>
              <div className="col-lg-4"></div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

ModalPembayaranPiutang = reduxForm({
  form: "ModalPembayaranPiutang",
  enableReinitialize: true,
})(ModalPembayaranPiutang);
export default connect()(ModalPembayaranPiutang);
