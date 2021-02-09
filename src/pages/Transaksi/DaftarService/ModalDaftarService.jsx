import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import {
  ReanderField,
  ReanderSelect,
  RenderFieldGroup,
  RenderCheckBox,
  renderTextArea,
} from "../../../components/notification/notification";
import Stepper from "react-stepper-horizontal";
import NavigationStepper from "../../../components/content/NavigationStepper";

class ModalDaftarService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      step1: "row",
      step2: "row d-none",
      step3: "row d-none",
      step4: "row d-none",
      step5: "row d-none",
      step6: "row d-none",
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
          step2: "row ",
          step3: "row d-none",
          step4: "row d-none",
          step5: "row d-none",
          step6: "row d-none",
        });
        break;
      case 1:
        this.setState({
          step: this.state.step + 1,
          step1: "row d-none",
          step2: "row d-none",
          step3: "row ",
          step4: "row d-none",
          step5: "row d-none",
          step6: "row d-none",
        });
        break;
      case 2:
        this.setState({
          step: this.state.step + 1,
          step1: "row d-none",
          step2: "row d-none",
          step3: "row d-none",
          step4: "row ",
          step5: "row d-none",
          step6: "row d-none",
        });
        break;
      case 3:
        this.setState({
          step: this.state.step + 1,
          step1: "row d-none",
          step2: "row d-none",
          step3: "row d-none",
          step4: "row d-none",
          step5: "row ",
          step6: "row d-none",
        });
        break;
      case 4:
        this.setState({
          step: this.state.step + 1,
          step1: "row d-none",
          step2: "row d-none",
          step3: "row d-none",
          step4: "row d-none",
          step5: "row d-none",
          step6: "row ",
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
          step3: "row d-none",
          step4: "row d-none",
          step5: "row d-none",
          step6: "row d-none",
        });
        break;
      case 2:
        this.setState({
          step: this.state.step - 1,
          step1: "row d-none",
          step2: "row ",
          step3: "row d-none",
          step4: "row d-none",
          step5: "row d-none",
          step6: "row d-none",
        });
        break;
      case 3:
        this.setState({
          step: this.state.step - 1,
          step1: "row d-none",
          step2: "row d-none",
          step3: "row ",
          step4: "row d-none",
          step5: "row d-none",
          step6: "row d-none",
        });
        break;
      case 4:
        this.setState({
          step: this.state.step - 1,
          step1: "row d-none",
          step2: "row d-none",
          step3: "row d-none",
          step4: "row ",
          step5: "row d-none",
          step6: "row d-none",
        });
        break;
      case 5:
        this.setState({
          step: this.state.step - 1,
          step1: "row d-none",
          step2: "row d-none",
          step3: "row d-none",
          step4: "row d-none",
          step5: "row ",
          step6: "row d-none",
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
                    title: "Data Dokument",
                  },
                  {
                    title: "Data Service List",
                  },
                  {
                    title: "Data Sparepart",
                  },
                  {
                    title: "Data Mekanik & Catatan",
                  },
                  {
                    title: "Data Review",
                  },
                ]}
                activeStep={this.state.step}
              />
            </div>
            <div className={this.state.step1}>
              <div className="col-lg-12">
                <h4>Sudah Booking ? Masukan kodenya di kolom bawah</h4>
              </div>
              <div className="col-lg-4">
                <Field
                  name="booking"
                  component={RenderFieldGroup}
                  type="text"
                  label="Nomor Booking"
                  placeholder="Masukan Nomor Booking "
                />
              </div>
              <div className="col-lg-8"></div>
              <div className="col-lg-12">
                <h4>Data Customer</h4>
              </div>
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
                  name="no_mesin"
                  component={ReanderField}
                  type="text"
                  label="Nomor Mesin"
                  placeholder="Masukan Nomor Mesin"
                />
              </div>
              <NavigationStepper first nextStep={() => this.nextStep(0)} />
            </div>
            <div className={this.state.step2}>
              <div className="col-lg-3">
                <Field
                  name="tanggal_masuk"
                  component={ReanderField}
                  type="date"
                  label="Tanggal Masuk"
                  placeholder="Masukan Tanggal Masuk"
                />
              </div>
              <div className="col-lg-3">
                <Field
                  name="km_masuk"
                  component={ReanderField}
                  type="number"
                  label="KM Masuk"
                  placeholder="Masukan KM Masuk"
                />
              </div>
              <div className="col-lg-3">
                <Field
                  name="service_selanjutnya"
                  component={ReanderField}
                  type="date"
                  label="Jadwal Service Selanjutnya"
                  placeholder="Masukan Jadwal Service Selanjutnya"
                />
              </div>
              <div className="col-lg-3">
                <Field
                  name="est_masuk"
                  component={ReanderField}
                  type="date"
                  label="Estimasi masuk"
                  placeholder="Masukan Estimasi masuk"
                />
              </div>
              <div className="col-lg-3">
                <Field
                  name="tanggal_keluar"
                  component={ReanderField}
                  type="date"
                  label="Tanggal Keluar"
                  placeholder="Masukan Tanggal Keluar"
                />
              </div>
              <div className="col-lg-3">
                <Field
                  name="km_keluar"
                  component={ReanderField}
                  type="number"
                  label="KM Keluar"
                  placeholder="Masukan KM Keluar"
                />
              </div>
              <div className="col-lg-3">
                <Field
                  name="km_service_berikutnya"
                  component={ReanderField}
                  type="number"
                  label="KM Service Berikutnya"
                  placeholder="Masukan KM Service Berikutnya"
                />
              </div>
              <div className="col-lg-3">
                <Field
                  name="est_keluar"
                  component={ReanderField}
                  type="date"
                  label="Estimasi Keluar"
                  placeholder="Masukan Estimasi Keluar"
                />
              </div>
              <NavigationStepper
                nextStep={() => this.nextStep(1)}
                prevStep={() => this.prevStep(1)}
              />
            </div>
            <div className={this.state.step3}>
              <div className="col-lg-3">
                <Field
                  name="kaki"
                  component={RenderCheckBox}
                  type="checkbox"
                  label="Kaki"
                  placeholder="Masukan Kaki"
                />
              </div>
              <div className="col-lg-9">
                <Field
                  name="estimasi_kaki"
                  component={ReanderField}
                  type="text"
                  label="Estimasi Harga"
                  placeholder="Masukan Estimasi Harga"
                />
              </div>
              <div className="col-lg-3">
                <Field
                  name="ganti_oli"
                  component={RenderCheckBox}
                  type="text"
                  label="Ganti Oli"
                  placeholder="Masukan Ganti Oli"
                />
              </div>
              <div className="col-lg-9">
                <Field
                  name="estimasi_ganti_oli"
                  component={ReanderField}
                  type="text"
                  label="Ganti Oil"
                  placeholder="Masukan Ganti Oil"
                />
              </div>
              <div className="col-lg-3">
                <Field
                  name="tune_up"
                  component={RenderCheckBox}
                  type="text"
                  label="Tune Up"
                  placeholder="Masukan Tune Up"
                />
              </div>
              <div className="col-lg-9">
                <Field
                  name="estimasi_tune_up"
                  component={ReanderField}
                  type="text"
                  label="Tune Up"
                  placeholder="Masukan Tune Up"
                />
              </div>
              <div className="col-lg-3">
                <Field
                  name="electric"
                  component={RenderCheckBox}
                  type="text"
                  label="Electric"
                  placeholder="Masukan Electric"
                />
              </div>
              <div className="col-lg-9">
                <Field
                  name="estimasi_electric"
                  component={ReanderField}
                  type="text"
                  label="Electric"
                  placeholder="Masukan Electric"
                />
              </div>
              <div className="col-lg-3">
                <Field
                  name="accecories"
                  component={RenderCheckBox}
                  type="text"
                  label="Accecories"
                  placeholder="Masukan Accecories"
                />
              </div>
              <div className="col-lg-9">
                <Field
                  name="estimasi_accecories"
                  component={ReanderField}
                  type="text"
                  label="Accecories"
                  placeholder="Masukan Accecories"
                />
              </div>
              <div className="col-lg-3">
                <Field
                  name="turun_mesin"
                  component={RenderCheckBox}
                  type="text"
                  label="Turun Mesin"
                  placeholder="Masukan Turun Mesin"
                />
              </div>
              <div className="col-lg-9">
                <Field
                  name="estimasi_turun_mesin"
                  component={ReanderField}
                  type="text"
                  label="Turun Mesin"
                  placeholder="Masukan Turun Mesin"
                />
              </div>
              <div className="col-lg-3">
                <Field
                  name="lain_lain"
                  component={RenderCheckBox}
                  type="text"
                  label="Lain-Lain"
                  placeholder="Masukan Lain-Lain"
                />
              </div>
              <div className="col-lg-9">
                <Field
                  name="estimasi_lain_lain"
                  component={ReanderField}
                  type="text"
                  label="Lain - Lain"
                  placeholder="Masukan Lain - Lain"
                />
              </div>
              <NavigationStepper
                nextStep={() => this.nextStep(2)}
                prevStep={() => this.prevStep(2)}
              />
            </div>
            <div className={this.state.step4}>
              <div className="col-lg-6">
                <Field
                  name="sparepart_1"
                  component={ReanderField}
                  type="text"
                  label="Sparepart 1"
                  placeholder="Masukan Sparepart 1"
                />
              </div>
              <div className="col-lg-6">
                <Field
                  name="estimasi_sparepart_1"
                  component={ReanderField}
                  type="text"
                  label="Estimasi Sparepart 1"
                  placeholder="Masukan Estimasi Sparepart 1"
                />
              </div>
              <div className="col-lg-6">
                <Field
                  name="sparepart_2"
                  component={ReanderField}
                  type="text"
                  label="Sparepart 2"
                  placeholder="Masukan Sparepart 2"
                />
              </div>
              <div className="col-lg-6">
                <Field
                  name="estimasi_sparepart_2"
                  component={ReanderField}
                  type="text"
                  label="Estimasi Sparepart 2"
                  placeholder="Masukan Estimasi Sparepart 2"
                />
              </div>
              <div className="col-lg-6">
                <Field
                  name="sparepart_3"
                  component={ReanderField}
                  type="text"
                  label="Sparepart 3"
                  placeholder="Masukan Sparepart 3"
                />
              </div>
              <div className="col-lg-6">
                <Field
                  name="estimasi_sparepart_3"
                  component={ReanderField}
                  type="text"
                  label="Estimasi Sparepart 3"
                  placeholder="Masukan Estimasi Sparepart 3"
                />
              </div>
              <div className="col-lg-6">
                <Field
                  name="sparepart_4"
                  component={ReanderField}
                  type="text"
                  label="Sparepart 4"
                  placeholder="Masukan Sparepart 4"
                />
              </div>
              <div className="col-lg-6">
                <Field
                  name="estimasi_sparepart_4"
                  component={ReanderField}
                  type="text"
                  label="Estimasi Sparepart 4"
                  placeholder="Masukan Estimasi Sparepart 4"
                />
              </div>
              <div className="col-lg-6">
                <Field
                  name="sparepart_5"
                  component={ReanderField}
                  type="text"
                  label="Sparepart 5"
                  placeholder="Masukan Sparepart 5"
                />
              </div>
              <div className="col-lg-6">
                <Field
                  name="estimasi_sparepart_5"
                  component={ReanderField}
                  type="text"
                  label="Estimasi Sparepart 5"
                  placeholder="Masukan Estimasi Sparepart 5"
                />
              </div>
              <div className="col-lg-6">
                <Field
                  name="sparepart_6"
                  component={ReanderField}
                  type="text"
                  label="Sparepart 6"
                  placeholder="Masukan Sparepart 6"
                />
              </div>
              <div className="col-lg-6">
                <Field
                  name="estimasi_sparepart_6"
                  component={ReanderField}
                  type="text"
                  label="Estimasi Sparepart 6"
                  placeholder="Masukan Estimasi Sparepart 6"
                />
              </div>
              <div className="col-lg-6">
                <Field
                  name="sparepart_7"
                  component={ReanderField}
                  type="text"
                  label="Sparepart 7"
                  placeholder="Masukan Sparepart 7"
                />
              </div>
              <div className="col-lg-6">
                <Field
                  name="estimasi_sparepart_7"
                  component={ReanderField}
                  type="text"
                  label="Estimasi Sparepart 7"
                  placeholder="Masukan Estimasi Sparepart 7"
                />
              </div>

              <NavigationStepper
                nextStep={() => this.nextStep(3)}
                prevStep={() => this.prevStep(3)}
              />
            </div>
            <div className={this.state.step5}>
              <div className="col-lg-6">
                <Field
                  name="keluhan_konsumen"
                  component={renderTextArea}
                  type="text"
                  label="Keluhan Konsumen"
                  placeholder="Masukan Keluhan Konsumen"
                />
              </div>
              <div className="col-lg-6"></div>
              <div className="col-lg-6">
                <Field
                  name="id_mekanik"
                  component={ReanderField}
                  type="text"
                  label="ID Mekanik"
                  placeholder="Masukan ID Mekanik"
                />
              </div>
              <div className="col-lg-6">
                <Field
                  name="nama_mekanik"
                  component={ReanderField}
                  type="text"
                  label="Nama Mekanik"
                  placeholder="Masukan Nama Mekanik"
                />
              </div>
              <NavigationStepper
                nextStep={() => this.nextStep(4)}
                prevStep={() => this.prevStep(4)}
              />
            </div>
            <div className={this.state.step6}>
              <NavigationStepper
                nextStep={() => this.props.handleSubmit}
                prevStep={() => this.prevStep(5)}
                simpan
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

ModalDaftarService = reduxForm({
  form: "ModalDaftarService",
  enableReinitialize: true,
})(ModalDaftarService);
export default connect()(ModalDaftarService);
