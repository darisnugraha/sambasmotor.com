import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Panel,
  PanelBody,
  PanelHeader,
} from "../../../../components/panel/panel";
import HeadLaporanPermintaanBarang from "./HeadLaporanPermintaanBarang";

class LaporanPermintaanBarang extends Component {
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
          <li className="breadcrumb-item active">Laporan Permintaan Barang</li>
        </ol>
        <h1 className="page-header">Laporan Permintaan Barang </h1>
        <Panel>
          <PanelHeader>Laporan Permintaan Barang</PanelHeader>
          <PanelBody>
            <HeadLaporanPermintaanBarang />
          </PanelBody>
        </Panel>
      </div>
    );
  }
}

export default LaporanPermintaanBarang;
