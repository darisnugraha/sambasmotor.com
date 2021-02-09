import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Panel,
  PanelBody,
  PanelHeader,
} from "../../../../components/panel/panel";
import HeadLaporanKeuanganKas from "./HeadLaporanKeuanganKas";

class LaporanKeuanganKas extends Component {
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
          <li className="breadcrumb-item active">Laporan KeuanganKas</li>
        </ol>
        <h1 className="page-header">Laporan KeuanganKas </h1>
        <Panel>
          <PanelHeader>Laporan KeuanganKas</PanelHeader>
          <PanelBody>
            <HeadLaporanKeuanganKas />
          </PanelBody>
        </Panel>
      </div>
    );
  }
}

export default LaporanKeuanganKas;
