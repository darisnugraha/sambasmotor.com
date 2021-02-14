import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AxiosMasterGet } from "../../../../axios";
import { getToday } from "../../../../components/notification/function";
import {
  Panel,
  PanelBody,
  PanelHeader,
} from "../../../../components/panel/panel";
import CetakPengeluaranBarang from "./CetakPengeluaranBarang";
import HeadLaporanPengeluaranBarang from "./HeadLaporanPengeluaranBarang";

class LaporanPengeluaranBarang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listLaporan: [],
    };
  }
  getLaporan(hasil) {
    AxiosMasterGet(
      "laporan/stocking/lap-pengeluaran-barang/" +
        `${hasil.tanggal_awal}&${hasil.tanggal_akhir}`
    )
      .then((res) =>
        this.setState({
          listLaporan: res.data,
        })
      )
      .then(() =>
        CetakPengeluaranBarang(
          hasil.tanggal_awal,
          hasil.tanggal_akhir,
          "ADMIN",
          getToday(),
          "ADMIN",
          this.state.listLaporan
        )
      );
  }
  panggilLaporan() {}
  render() {
    return (
      <div>
        <ol className="breadcrumb float-xl-right">
          <li className="breadcrumb-item">
            <Link to="#">Laporan</Link>
          </li>
          <li className="breadcrumb-item active">Laporan Pengeluaran Barang</li>
        </ol>
        <h1 className="page-header">Laporan Pengeluaran Barang </h1>
        <Panel>
          <PanelHeader>Laporan Pengeluaran Barang</PanelHeader>
          <PanelBody>
            <HeadLaporanPengeluaranBarang
              onSubmit={(data) => this.getLaporan(data)}
            />
          </PanelBody>
        </Panel>
      </div>
    );
  }
}

export default LaporanPengeluaranBarang;
