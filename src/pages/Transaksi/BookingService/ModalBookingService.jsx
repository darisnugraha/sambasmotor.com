import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import {
  ReanderField,
  ReanderSelect,
  RenderTime,
} from "../../../components/notification/notification";
import Stepper from "react-stepper-horizontal";
import NavigationStepper from "../../../components/content/NavigationStepper";

class ModalBookingService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      step1: "row",
      step2: "row d-none",
    };
  }
  handleChange(nama, data) {
    let split = data || "DEFAULT|DEFAULT";
    let hasil = split.split("|");
    this.props.change(nama, hasil[1]);
  }
  nextStep() {
    switch (this.state.step) {
      case 0:
        this.setState({
          step: this.state.step + 1,
          step1: "row d-none",
          step2: "row",
        });
        break;
      default:
        break;
    }
  }
  prevStep() {
    switch (this.state.step) {
      case 1:
        this.setState({
          step: this.state.step - 1,
          step1: "row ",
          step2: "row d-none",
        });
        break;
      default:
        break;
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <div className="col-lg-12">
            <div className="col-lg-12 mb-5">
              <Stepper
                steps={[
                  {
                    title: "Data Customer",
                    onClick: () => {
                      this.prevStep(1);
                    },
                  },
                  {
                    title: "Data Kendaraan",
                  },
                ]}
                activeStep={this.state.step}
              />
            </div>
            <div className={this.state.step1}>
              <div className="col-lg-3">
                <Field
                  name="nama"
                  component={ReanderField}
                  type="text"
                  label="Nama"
                  placeholder="Masukan Nama"
                />
              </div>
              <div className="col-lg-3">
                <Field
                  name="alamat"
                  component={ReanderField}
                  type="text"
                  label="Alamat"
                  placeholder="Masukan Alamat"
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
                  type="text"
                  label="Handphone"
                  placeholder="Masukan Handphone"
                />
              </div>
              <NavigationStepper first nextStep={() => this.nextStep(0)} />
            </div>
            <div className={this.state.step2}>
              <div className="col-lg-3">
                <Field
                  name="no_polisi"
                  component={ReanderField}
                  type="text"
                  label="Nomor Polisi"
                  placeholder="Masukan Nomor Polisi"
                />
              </div>
              <div className="col-lg-3">
                <Field
                  name="merk"
                  component={ReanderSelect}
                  options={[
                    { value: "MERK01", name: "MERK 01" },
                    { value: "MERK02", name: "MERK 02" },
                    { value: "MERK03", name: "MERK 03" },
                    { value: "MERK04", name: "MERK 04" },
                  ]}
                  type="text"
                  label="Merk"
                  placeholder="Masukan Merk"
                />
              </div>
              <div className="col-lg-3">
                <Field
                  name="model"
                  component={ReanderSelect}
                  options={[
                    { value: "MODEL01", name: "MODEL 01" },
                    { value: "MODEL02", name: "MODEL 02" },
                    { value: "MODEL03", name: "MODEL 03" },
                    { value: "MODEL04", name: "MODEL 04" },
                  ]}
                  type="text"
                  label="Model"
                  placeholder="Masukan Model"
                />
              </div>
              <div className="col-lg-3">
                <Field
                  name="warna"
                  component={ReanderSelect}
                  options={[
                    { value: "WARNA01", name: "WARNA 01" },
                    { value: "WARNA02", name: "WARNA 02" },
                    { value: "WARNA03", name: "WARNA 03" },
                    { value: "WARNA04", name: "WARNA 04" },
                  ]}
                  type="text"
                  label="Warna"
                  placeholder="Masukan Warna"
                />
              </div>
              <div className="col-lg-3">
                <Field
                  name="kategori_service"
                  component={ReanderSelect}
                  options={[
                    { value: "KATEGORI01", name: "KATEGORI 01" },
                    { value: "KATEGORI02", name: "KATEGORI 02" },
                    { value: "KATEGORI03", name: "KATEGORI 03" },
                    { value: "KATEGORI04", name: "KATEGORI 04" },
                  ]}
                  type="text"
                  label="Kategori Service"
                  placeholder="Masukan Kategori Service"
                />
              </div>
              <div className="col-lg-2">
                <Field
                  name="tanggal"
                  component={ReanderField}
                  type="date"
                  label="Tanggal Pelayanan"
                  placeholder="Masukan Tanggal Pelayanan"
                />
              </div>
              <div className="col-lg-1">
                <Field
                  name="jam"
                  component={RenderTime}
                  type="text"
                  label="Jam"
                  placeholder="Masukan Jam"
                />
              </div>
              <div className="col-lg-3">
                <Field
                  name="id_mekanik"
                  component={ReanderSelect}
                  options={[
                    { value: "MEKANIK01", name: "MEKANIK 01" },
                    { value: "MEKANIK02", name: "MEKANIK 02" },
                    { value: "MEKANIK03", name: "MEKANIK 03" },
                    { value: "MEKANIK04", name: "MEKANIK 04" },
                  ]}
                  type="text"
                  label="ID Mekanik"
                  placeholder="Masukan ID Mekanik"
                />
              </div>
              <div className="col-lg-12">
                <label htmlFor="">Catatan</label>
                <Field
                  name="catatan"
                  component="textarea"
                  type="text"
                  label="Catatan"
                  placeholder="Masukan Catatan"
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-12 mt-3">
            <div className="text-right">
              <button className="btn btn-primary">
                Simpan <i className="fa fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

ModalBookingService = reduxForm({
  form: "ModalBookingService",
  enableReinitialize: true,
})(ModalBookingService);
export default connect()(ModalBookingService);
