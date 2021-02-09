import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Panel,
  PanelBody,
  PanelHeader,
} from "../../../../components/panel/panel";
import HeadLaporanStockPerKategori from "./HeadLaporanStockPerKategori";

class LaporanStockPerKategori extends Component {
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
          <li className="breadcrumb-item active">Laporan Stock PerKategori</li>
        </ol>
        <h1 className="page-header">Laporan Stock PerKategori </h1>
        <Panel>
          <PanelHeader>Laporan Stock PerKategori</PanelHeader>
          <PanelBody>
            <HeadLaporanStockPerKategori />
          </PanelBody>
        </Panel>
      </div>
    );
  }
}

export default LaporanStockPerKategori;
