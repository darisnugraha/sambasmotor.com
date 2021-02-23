import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import {
  ReanderField,
  ReanderFieldInline,
  ReanderSelect,
  RenderFieldGroup,
  ToastError,
} from "../../../components/notification/notification";
import Stepper from "react-stepper-horizontal";
import NavigationStepper from "../../../components/content/NavigationStepper";
import {
  getCustomer,
  getKendaraan,
  getSales,
  getWarna,
} from "../../../actions/datamaster_action";
import { AxiosMasterGet } from "../../../axios";
import { getToday } from "../../../components/notification/function";
import Tabel from "../../../components/Tabel/tabel";

class ModalDaftarService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataBooking: [],
      customer: "col-lg-12 row",
      step: 0,
      step1: "row",
      step2: "row d-none",
      step3: "row d-none",
      step4: "row d-none",
      step5: "row d-none",
      step6: "row d-none",
      columns: [
        {
          dataField: "jenis_barang",
          text: "Jenis barang",
        },
        {
          dataField: "nama",
          text: "Nama",
        },
        {
          dataField: "harga_total",
          text: "Harga",
        },
        {
          dataField: "keterangan",
          text: "Keterangan",
        },
      ],
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
      default:
        break;
    }
  }
  componentDidMount() {
    this.props.dispatch(getCustomer());
    this.props.dispatch(getWarna());
    this.props.dispatch(getKendaraan());
    this.props.dispatch(getSales());
    this.props.change("tanggal_masuk", getToday());
    AxiosMasterGet("daftar-service/generate/no-trx").then((res) =>
      this.props.change("no_faktur", res.data[0].no_daftar_service)
    );
  }
  cariBooking(e) {
    AxiosMasterGet("service/booking/" + e.target.value)
      .then((res) => {
        if (res.data.length === 0) {
          ToastError("Nomor Booking Tidak Ada");
          return false;
        } else {
          this.setState({
            dataBooking: res.data,
          });
          this.props.change("booking_customer", res.data.kode_customer);
          this.props.change("booking_nopol", res.data.nopol_kendaraan);
          this.props.change("kode_mekanik", res.data.kode_pegawai);
          this.setState({
            customer: "col-lg-12 row d-none",
          });
        }
      })
      .catch((err) => {
        ToastError("Booking Tidak Ditemukan.. Mohon Periksa Kembali");
        this.setState({
          customer: "col-lg-12 row",
        });
      });
  }
  setCustomer(data) {
    let hasil = data.split("||");
    this.props.change("alamat", hasil[1]);
    this.props.change("kota", hasil[2]);
    this.props.change("handphone", hasil[3]);
    this.props.change("nopol_kendaraan", hasil[4]);
    this.props.change("merk_kendaraan", hasil[5]);
    this.props.change("type_kendaraan", hasil[6]);
    this.props.change("warna_kendaraan", hasil[7]);
    this.props.change("nomesin_kendaraan", hasil[8]);
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
                    title: "Data Dokumen",
                  },
                  {
                    title: "Data Service List",
                  },
                  {
                    title: "Data Mekanik & Catatan",
                  },
                ]}
                activeStep={this.state.step}
              />
            </div>
            <div className={this.state.step1}>
              <div className="col-lg-12">
                <h5>Sudah Booking ? Masukan kodenya di kolom bawah</h5>
              </div>
              <div className="col-lg-4">
                <Field
                  name="booking"
                  component={RenderFieldGroup}
                  type="text"
                  label="Nomor Booking"
                  placeholder="Masukan Nomor Booking "
                  handleClick={this.props.showBooking}
                  onChange={(e) => this.cariBooking(e)}
                />
              </div>
              <div className="col-lg-4">
                <Field
                  name="booking_customer"
                  component={ReanderSelect}
                  options={this.props.listcustomer.map((list) => {
                    let data = {
                      value: list.kode_customer,
                      name: list.nama_customer,
                    };
                    return data;
                  })}
                  type="text"
                  label="Nama Customer"
                  placeholder="Masukan Nama Customer"
                  readOnly
                />
                <span>Otomatis Terisi Saat nomor Booking diisi</span>
              </div>
              <div className="col-lg-4">
                <Field
                  name="booking_nopol"
                  component={ReanderField}
                  type="text"
                  label="Nomor Polisi"
                  placeholder="Masukan Nomor Polisi"
                  readOnly
                />
                <span>Otomatis Terisi Saat nomor Booking diisi</span>
              </div>
              <div className="col-lg-12">
                <h4>Data Customer</h4>
              </div>
              <div className={this.state.customer}>
                <div className="col-lg-3">
                  <Field
                    name="nama"
                    component={ReanderSelect}
                    options={this.props.listcustomer.map((list) => {
                      let data = {
                        value: `${list.kode_customer}||${list.alamat}||${list.kota}||${list.handphone}||${list.nopol_kendaraan}||${list.merk_kendaraan}||${list.type_kendaraan}||${list.warna_kendaraan}||${list.nomesin_kendaraan}`,
                        name: list.nama_customer,
                      };
                      return data;
                    })}
                    type="text"
                    label="Nama"
                    placeholder="Masukan Nama"
                    onChange={(e) => this.setCustomer(e)}
                  />
                </div>
                <div className="col-lg-3">
                  <Field
                    name="alamat"
                    component={ReanderField}
                    type="text"
                    label="Alamat"
                    placeholder="Masukan Alamat"
                    readOnly
                  />
                </div>
                <div className="col-lg-3 d-none">
                  <Field
                    name="no_faktur"
                    component={ReanderField}
                    type="text"
                    label="Alamat"
                    placeholder="Masukan Alamat"
                    readOnly
                  />
                </div>
                <div className="col-lg-3">
                  <Field
                    name="kota"
                    component={ReanderField}
                    type="text"
                    label="Kota"
                    placeholder="Masukan Kota"
                    readOnly
                  />
                </div>
                <div className="col-lg-3">
                  <Field
                    name="handphone"
                    component={ReanderField}
                    type="text"
                    label="Handphone"
                    placeholder="Masukan Handphone"
                    readOnly
                  />
                </div>
                <div className="col-lg-3">
                  <Field
                    name="nopol_kendaraan"
                    component={ReanderField}
                    type="text"
                    label="Nomor Polisi"
                    placeholder="Masukan Nomor Polisi"
                    readOnly
                  />
                </div>

                <div className="col-lg-3">
                  <Field
                    name="type_kendaraan"
                    component={ReanderField}
                    type="text"
                    label="Type"
                    placeholder="Masukan Type"
                    readOnly
                  />
                </div>

                <div className="col-lg-3">
                  <Field
                    name="nomesin_kendaraan"
                    component={ReanderField}
                    type="text"
                    label="Nomor Mesin"
                    placeholder="Masukan Nomor Mesin"
                    readOnly
                  />
                </div>
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

              <NavigationStepper
                nextStep={() => this.nextStep(1)}
                prevStep={() => this.prevStep(1)}
              />
            </div>
            <div className={this.state.step3}>
              <Tabel
                columns={this.state.columns}
                keyField="kategori_service"
                data={this.props.listdaftarservice || []}
                tambahData={true}
                handleClick={this.props.showBarang}
              />
              <NavigationStepper
                nextStep={() => this.nextStep(2)}
                prevStep={() => this.prevStep(2)}
              />
            </div>
            <div className={this.state.step4}>
              <div className="col-lg-12">
                <Field
                  name="keluhan_konsumen"
                  component={ReanderFieldInline}
                  type="text"
                  label="Keluhan Konsumen"
                  placeholder="Masukan Keluhan Konsumen"
                />
              </div>

              <div className="col-lg-6">
                <Field
                  name="kode_mekanik"
                  component={ReanderSelect}
                  options={this.props.listsales
                    .filter((fill) => fill.kode_divisi === "MKN")
                    .map((list) => {
                      let data = {
                        value: `${list.kode_pegawai}`,
                        name: `${list.kode_pegawai} - ${list.nama_pegawai}`,
                      };
                      return data;
                    })}
                  onChange={(data) => this.setMekanik(data)}
                  type="text"
                  label="ID Mekanik"
                  placeholder="Masukan ID Mekanik"
                />
              </div>
              <NavigationStepper
                nextStep={() =>
                  this.setState({
                    step1: "row",
                    step2: "row d-none",
                    step3: "row d-none",
                    step4: "row d-none",
                    step5: "row d-none",
                    step6: "row d-none",
                  })
                }
                prevStep={() => this.prevStep(3)}
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
export default connect((state) => {
  return {
    listcustomer: state.datamaster.listcustomer,
    listkendaraan: state.datamaster.listkendaraan,
    listwarna: state.datamaster.listwarna,
    listdaftarservice: state.transaksi.listdaftarservice,
    listsales: state.datamaster.listsales,
    no_faktur: localStorage.getItem("no_daftar_service") || "",
  };
})(ModalDaftarService);

// DRAFT
// {
/* <div className="col-lg-3">
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
              </div> */
// }
