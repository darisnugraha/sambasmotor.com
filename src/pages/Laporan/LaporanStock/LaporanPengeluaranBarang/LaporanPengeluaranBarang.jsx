import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Panel,
  PanelBody,
  PanelHeader,
} from "../../../../components/panel/panel";
import HeadLaporanPengeluaranBarang from "./HeadLaporanPengeluaranBarang";

class LaporanPengeluaranBarang extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
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
            <HeadLaporanPengeluaranBarang />
          </PanelBody>
        </Panel>
      </div>
    );
  }
}

export default LaporanPengeluaranBarang;
