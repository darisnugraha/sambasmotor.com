import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AxiosMasterGet } from "../../../../axios";
import {
  Panel,
  PanelBody,
  PanelHeader,
} from "../../../../components/panel/panel";
import HeadLaporanPenjualanSales from "./HeadLaporanPenjualanSales";
import CetakPenjualanSales from "./CetakPenjualanSales";

class LaporanPenjualanSales extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getLaporan(hasil) {
    AxiosMasterGet(
      "laporan/penjualan/lap-penjualan-sales/" +
        `${hasil.tanggal_awal}&${hasil.tanggal_akhir}&${hasil.kode_sales}`
    )
      .then((res) =>
        this.setState({
          listLaporan: res.data,
        })
      )
      .then(() =>
        CetakPenjualanSales(
          hasil.tanggal_awal,
          hasil.tanggal_akhir,
          hasil.kode_sales,
          this.state.listLaporan
        )
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
            <HeadLaporanPenjualanSales
              onSubmit={(data) => this.getLaporan(data)}
            />
          </PanelBody>
        </Panel>
      </div>
    );
  }
}

export default LaporanPenjualanSales;
