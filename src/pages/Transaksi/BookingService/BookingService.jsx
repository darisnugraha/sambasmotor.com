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
import axios from "axios";

const ModalBookingService = lazy(() => import("./ModalBookingService.jsx"));

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

  componentDidMount() {
    axios.get("link").then((res) =>
      this.setState({
        listMerk: res.data,
      })
    );
  }
  handleSubmit(hasil) {
    let array = JSON.parse(localStorage.getItem("BookingService_temp")) || [];
    let data = {
      nama: hasil.nama,
      alamat: hasil.alamat,
      kota: hasil.kota,
      handphone: hasil.handphone,
      no_polisi: hasil.no_polisi,
      merk: hasil.merk,
      model: hasil.model,
      warna: hasil.warna,
      kategori_service: hasil.kategori_service,
      tanggal: hasil.tanggal,
      jam: hasil.jam,
      catatan: hasil.catatan,
    };

    array.push(data);
    localStorage.setItem("BookingService_temp", JSON.stringify(array));
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
          <li className="breadcrumb-item active">Booking Service</li>
        </ol>
        <h1 className="page-header">Booking Service </h1>
        <Panel>
          <PanelHeader>Booking Service</PanelHeader>
          <PanelBody>
            <br />
            <ModalBookingService
              onSubmit={(data) => this.handleSubmit(data)}
              listMerk={this.state.listMerk}
            />
            {/* End Tambah Master Kategori  */}
          </PanelBody>
        </Panel>
      </div>
    );
  }
}

export default connect(maptostate, null)(BookingService);
