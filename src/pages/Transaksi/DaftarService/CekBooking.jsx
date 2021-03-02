import React, { Component } from "react";
import { AxiosMasterGet } from "../../../axios";
import Tabel from "../../../components/Tabel/tabel";

class CekBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listBooking: [],
      columns: [
        {
          dataField: "no_booking",
          text: "No Booking",
        },
        {
          dataField: "tgl_booking",
          text: "Tanggal Booking",
        },
        {
          dataField: "nopol_kendaraan",
          text: "Nomor Polisi",
        },
        {
          dataField: "jenis_service",
          text: "Jenis Service",
        },
        {
          dataField: "tgl_layanan",
          text: "Tanggal",
        },
      ],
    };
  }

  componentDidMount() {
    AxiosMasterGet("service/booking/getDataBookingAll").then((res) =>
      this.setState({
        listBooking: res && res.data,
      })
    );
  }
  render() {
    return (
      <div>
        <Tabel
          data={this.state.listBooking || []}
          columns={this.state.columns}
          keyField="no_booking"
          empty={"true"}
          emptyText="Data Kosong"
        />
        <div className="col-lg-12">
          <p>
            Untuk Sementara, Silahkan Copy Nomor Booking dan Paste di Nomor
            Booking Pendaftaran
          </p>
          <p>Sedang Dalam Pengembangan agar bisa langsung copy</p>
        </div>
      </div>
    );
  }
}

export default CekBooking;
