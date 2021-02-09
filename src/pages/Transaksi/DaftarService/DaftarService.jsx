import React, { lazy } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { NotifSucces } from "../../../components/notification/notification.jsx";
import {
  Panel,
  PanelBody,
  PanelHeader,
} from "../../../components/panel/panel.jsx";
import { reset } from "redux-form";

const ModalDaftarService = lazy(() => import("./ModalDaftarService.jsx"));

const maptostate = (state) => {
  return {
    kunci_temp: state.stocking.kunci_temp,
  };
};

class BookingService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      modalDialog: false,
      isLoading: false,
    };
  }

  componentDidMount() {}
  handleSubmit(hasil) {
    console.log(hasil);
    let array = JSON.parse(localStorage.getItem("DaftarService")) || [];
    let data = {
      alamat: hasil.alamat,
      est_keluar: hasil.est_keluar,
      est_masuk: hasil.est_masuk,
      estimasi_accecories: hasil.estimasi_accecories,
      estimasi_electric: hasil.estimasi_electric,
      estimasi_ganti_oli: hasil.estimasi_ganti_oli,
      estimasi_kaki: hasil.estimasi_kaki,
      estimasi_lain_lain: hasil.estimasi_lain_lain,
      estimasi_sparepart_1: hasil.estimasi_sparepart_1,
      estimasi_sparepart_2: hasil.estimasi_sparepart_2,
      estimasi_tune_up: hasil.estimasi_tune_up,
      estimasi_turun_mesin: hasil.estimasi_turun_mesin,
      handphone: hasil.handphone,
      id_mekanik: hasil.id_mekanik,
      km_keluar: hasil.km_keluar,
      km_masuk: hasil.km_masuk,
      km_service_berikutnya: hasil.km_service_berikutnya,
      kota: hasil.kota,
      merk: hasil.merk,
      model: hasil.model,
      nama: hasil.nama,
      nama_mekanik: hasil.nama_mekanik,
      no_mesin: hasil.no_mesin,
      no_polisi: hasil.no_polisi,
      service_selanjutnya: hasil.service_selanjutnya,
      sparepart_1: hasil.sparepart_1,
      sparepart_2: hasil.sparepart_2,
      tanggal_keluar: hasil.tanggal_keluar,
      tanggal_masuk: hasil.tanggal_masuk,
      warna: hasil.warna,
    };

    array.push(data);
    localStorage.setItem("DaftarService", JSON.stringify(array));
    NotifSucces("Berhasil Menambahan Data Booking").then(() =>
      this.props.dispatch(reset("ModalBookingService"))
    );
  }

  render() {
    return (
      <div>
        <ol className="breadcrumb float-xl-right">
          <li className="breadcrumb-item">
            <Link to="#">Data Master</Link>
          </li>
          <li className="breadcrumb-item active">Daftar Service</li>
        </ol>
        <h1 className="page-header">Daftar Service </h1>
        <Panel>
          <PanelHeader>Daftar Service</PanelHeader>
          <PanelBody>
            <br />
            <ModalDaftarService onSubmit={(data) => this.handleSubmit(data)} />
            {/* End Tambah Master Kategori  */}
          </PanelBody>
        </Panel>
      </div>
    );
  }
}

export default connect(maptostate, null)(BookingService);
