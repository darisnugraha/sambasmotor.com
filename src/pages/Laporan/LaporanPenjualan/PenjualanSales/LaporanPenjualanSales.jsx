import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Panel,
  PanelBody,
  PanelHeader,
} from "../../../../components/panel/panel";
import HeadLaporanPenjualanSales from "./HeadLaporanPenjualanSales";

class LaporanPenjualanSales extends Component {
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
          <li className="breadcrumb-item active">Laporan Penjualan Sales</li>
        </ol>
        <h1 className="page-header">Laporan Penjualan Sales </h1>
        <Panel>
          <PanelHeader>Laporan Penjualan Sales</PanelHeader>
          <PanelBody>
            <HeadLaporanPenjualanSales />
          </PanelBody>
        </Panel>
      </div>
    );
  }
}

export default LaporanPenjualanSales;
