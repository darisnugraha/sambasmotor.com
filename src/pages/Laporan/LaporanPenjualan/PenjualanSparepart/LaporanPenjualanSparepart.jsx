import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Panel,
  PanelBody,
  PanelHeader,
} from "../../../../components/panel/panel";
import HeadLaporanPenjualanSparepart from "./HeadLaporanPenjualanSparepart";

class LaporanPenjualanSparepart extends Component {
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
          <li className="breadcrumb-item active">
            Laporan Penjualan Sparepart
          </li>
        </ol>
        <h1 className="page-header">Laporan Penjualan Sparepart </h1>
        <Panel>
          <PanelHeader>Laporan Penjualan Sparepart</PanelHeader>
          <PanelBody>
            <HeadLaporanPenjualanSparepart />
          </PanelBody>
        </Panel>
      </div>
    );
  }
}

export default LaporanPenjualanSparepart;
