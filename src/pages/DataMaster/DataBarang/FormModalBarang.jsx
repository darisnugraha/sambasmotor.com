import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { createNumberMask } from "redux-form-input-masks";
import { AxiosMasterGet } from "../../../axios";
import {
  NotifError,
  ReanderField,
  ReanderSelect,
} from "../../../components/notification/notification";
import { required } from "../../../validasi/normalize";
import ValidasiMasterKategori from "../../../validasi/ValidasiMasterKategori";

const maptostate = (state) => {
  if (state.datamaster.databarang !== undefined) {
    return {
      initialValues: {
        kode_kategori: state.datamaster.databarang.kode_kategori,
        jenis_barang: state.datamaster.databarang.kode_jenis,
        kode_barang: state.datamaster.databarang.kode_barang,
        kode_barcode: state.datamaster.databarang.kode_barcode,
        nama_barang: state.datamaster.databarang.nama_barang,
        merk: state.datamaster.databarang.kode_merk_barang,
        ukuran: state.datamaster.databarang.kode_ukuran,
        kwalitas: state.datamaster.databarang.kode_kwalitas,
        type: state.datamaster.databarang.type,
        rak: state.datamaster.databarang.kode_lokasi_rak,
        selving: state.datamaster.databarang.kode_lokasi_selving,
        harga: state.datamaster.databarang.harga_jual,
        satuan: state.datamaster.databarang.kode_satuan,
      },
      onSend: state.datamaster.onSend,
    };
  } else {
    return {
      onSend: state.datamaster.onSend,
    };
  }
};

const currencyMask = createNumberMask({
  prefix: "Rp. ",
  suffix: " ,-",
  locale: "id-ID",
});
class FormModalBarang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listJenis: [],
      listKategori: [],
      listMerk: [],
      listUkuran: [],
      listKwalitas: [],
      listRak: [],
      listSelving: [],
      listSatuan: [],
    };
  }
  componentDidMount() {
    if (!this.props.isEdit) {
      this.props.change("kode_barang", this.props.idbarang);
    }
    AxiosMasterGet("kategori/get/all")
      .then((res) =>
        this.setState({
          listKategori: res.data,
        })
      )
      .catch(() =>
        NotifError("Sepertinya ada gangguan, coba check koneksi anda")
      );
    AxiosMasterGet("jenis/get/all")
      .then((res) =>
        this.setState({
          listJenis: res.data,
        })
      )
      .catch(() =>
        NotifError("Sepertinya ada gangguan, coba check koneksi anda")
      );
    AxiosMasterGet("merk-barang/get/all")
      .then((res) =>
        this.setState({
          listMerk: res.data,
        })
      )
      .catch(() =>
        NotifError("Sepertinya ada gangguan, coba check koneksi anda")
      );
    AxiosMasterGet("ukuran/get/all")
      .then((res) =>
        this.setState({
          listUkuran: res.data,
        })
      )
      .catch(() =>
        NotifError("Sepertinya ada gangguan, coba check koneksi anda")
      );
    AxiosMasterGet("kwalitas/get/all")
      .then((res) =>
        this.setState({
          listKwalitas: res.data,
        })
      )
      .catch(() =>
        NotifError("Sepertinya ada gangguan, coba check koneksi anda")
      );
    AxiosMasterGet("lokasi-rak/get/all")
      .then((res) =>
        this.setState({
          listRak: res.data,
        })
      )
      .catch(() =>
        NotifError("Sepertinya ada gangguan, coba check koneksi anda")
      );
    AxiosMasterGet("lokasi-selving/get/all")
      .then((res) =>
        this.setState({
          listSelving: res.data,
        })
      )
      .catch(() =>
        NotifError("Sepertinya ada gangguan, coba check koneksi anda")
      );
    AxiosMasterGet("satuan/get/all")
      .then((res) =>
        this.setState({
          listSatuan: res.data,
        })
      )
      .catch(() =>
        NotifError("Sepertinya ada gangguan, coba check koneksi anda")
      );
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <Field
              name="kode_kategori"
              component={ReanderSelect}
              options={this.state.listKategori.map((list) => {
                let data = {
                  value: list.kode_kategori,
                  name: list.nama_kategori,
                };
                return data;
              })}
              type="text"
              label="Kode Kategori"
              placeholder="Masukan kode Kategori"
              readOnly={this.props.isEdit}
            />
          </div>
          <div className="col-lg-6">
            <Field
              name="jenis_barang"
              component={ReanderSelect}
              options={this.state.listJenis.map((list) => {
                let data = {
                  value: list.kode_jenis,
                  name: list.nama_jenis,
                };
                return data;
              })}
              label="Jenis Barang"
              placeholder="Masukan Jenis Barang"
            />
          </div>
          <div className="col-lg-6">
            <Field
              name="kode_barcode"
              component={ReanderField}
              type="text"
              label="Kode Barcode"
              placeholder="Masukan Kode Barcode"
              validate={required}
            />
          </div>
          <div className="col-lg-6">
            <Field
              name="kode_barang"
              component={ReanderField}
              type="text"
              label="Kode Barang"
              placeholder="Masukan Kode Barang"
              readOnly
              validate={required}
            />
          </div>

          <div className="col-lg-12">
            <Field
              name="nama_barang"
              component={ReanderField}
              type="text"
              label="Nama Barang"
              placeholder="Masukan Nama Barang"
              validate={required}
            />
          </div>
          <div className="col-lg-6">
            <Field
              name="merk"
              component={ReanderSelect}
              options={this.state.listMerk.map((list) => {
                let data = {
                  value: list.kode_merk_barang,
                  name: list.nama_merk_barang,
                };
                return data;
              })}
              label="Merk Barang"
              placeholder="Masukan Merk"
            />
          </div>
          <div className="col-lg-6">
            <Field
              name="ukuran"
              component={ReanderSelect}
              options={this.state.listUkuran.map((list) => {
                let data = {
                  value: list.kode_ukuran,
                  name: list.nama_ukuran,
                };
                return data;
              })}
              label="Ukuran"
              placeholder="Masukan Ukuran"
            />
          </div>
          <div className="col-lg-6">
            <Field
              name="kwalitas"
              component={ReanderSelect}
              options={this.state.listKwalitas.map((list) => {
                let data = {
                  value: list.kode_kwalitas,
                  name: list.nama_kwalitas,
                };
                return data;
              })}
              label="Kualitas"
              placeholder="Masukan Kualitas"
            />
          </div>
          <div className="col-lg-6">
            <Field
              name="type"
              component={ReanderField}
              options={[]}
              label="Type"
              placeholder="Masukan Type"
            />
          </div>
          <div className="col-lg-6">
            <Field
              name="rak"
              component={ReanderSelect}
              options={this.state.listRak.map((list) => {
                let data = {
                  value: list.kode_lokasi_rak,
                  name: list.nama_lokasi_rak,
                };
                return data;
              })}
              label="Rak"
              placeholder="Masukan Rak"
            />
          </div>
          <div className="col-lg-6">
            <Field
              name="selving"
              component={ReanderSelect}
              options={this.state.listSelving.map((list) => {
                let data = {
                  value: list.kode_lokasi_selving,
                  name: list.nama_lokasi_selving,
                };
                return data;
              })}
              label="Selfing"
              placeholder="Masukan Selfing"
            />
          </div>
          <div className="col-lg-6">
            <Field
              name="satuan"
              component={ReanderSelect}
              options={this.state.listSatuan.map((list) => {
                let data = {
                  value: list.kode_satuan,
                  name: list.nama_satuan,
                };
                return data;
              })}
              type="text"
              label="Satuan"
              placeholder="Masukan Satuan"
            />
          </div>
          <div className="col-lg-6">
            <Field
              name="harga"
              component={ReanderField}
              type="telp"
              label="Harga"
              placeholder="Masukan Harga"
              validate={required}
              {...currencyMask}
            />
          </div>
        </div>
        <div className="col-lg-12">
          <button className="btn btn-primary" disabled={this.props.onSend}>
            {this.props.onSend ? (
              <>
                <i className="fas fa-spinner fa-spin"></i> &nbsp; Sedang
                Menyimpan
              </>
            ) : (
              <>
                Simpan <i className="fa fa-paper-plane ml-3 "></i>
              </>
            )}
          </button>
        </div>
      </form>
    );
  }
}

FormModalBarang = reduxForm({
  form: "dataBarang",
  enableReinitialize: true,
  validate: ValidasiMasterKategori,
})(FormModalBarang);
export default connect(maptostate, null)(FormModalBarang);
