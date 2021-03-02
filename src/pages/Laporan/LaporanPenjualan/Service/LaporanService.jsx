import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AxiosMasterGet } from "../../../../axios";
import { ToastError } from "../../../../components/notification/notification";
import {
  Panel,
  PanelBody,
  PanelHeader,
} from "../../../../components/panel/panel";
import CetakService from "./CetakService";
import HeadLaporanService from "./HeadLaporanService";

class LaporanService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listLaporan: [],
    };
  }
  getLaporan(hasil) {
    AxiosMasterGet(
      `laporan/service/lap-service/${hasil.tanggal_awal}&${
        hasil.tanggal_akhir
      }&${hasil.kode_jenis || "SEMUA"}`
    )
      .then((res) => {
        if (res.data) {
          ToastError("Data Laporan Kosong");
          return false;
        } else {
          this.setState({
            listLaporan: res && res.data,
          });
        }
      })
      .then(() =>
        this.state.listLaporan
          ? CetakService(
              hasil.tanggal_awal,
              hasil.kode_jenis,
              this.state.listLaporan
            )
          : ToastError("Data Laporan Kosong")
      );
  }
  render() {
    return (
      <div>
        <ol className="breadcrumb float-xl-right">
          <li className="breadcrumb-item">
            <Link to="#">Laporan</Link>
          </li>
          <li className="breadcrumb-item active">Laporan Penjualan Sales</li>
        </ol>
        <h1 className="page-header">Laporan Penjualan Sales </h1>
        <Panel>
          <PanelHeader>Laporan Penjualan Sales</PanelHeader>
          <PanelBody>
            <HeadLaporanService onSubmit={(data) => this.getLaporan(data)} />
          </PanelBody>
        </Panel>
      </div>
    );
  }
}

export default LaporanService;
