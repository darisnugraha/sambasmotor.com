import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Panel,
  PanelBody,
  PanelHeader,
} from "../../../../components/panel/panel";
import HeadLaporanKartuStock from "./HeadLaporanKartuStock";

class LaporanKartuStock extends Component {
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
          <li className="breadcrumb-item active">Laporan Kartu Stock</li>
        </ol>
        <h1 className="page-header">Laporan Kartu Stock </h1>
        <Panel>
          <PanelHeader>Laporan Kartu Stock</PanelHeader>
          <PanelBody>
            <HeadLaporanKartuStock />
          </PanelBody>
        </Panel>
      </div>
    );
  }
}

export default LaporanKartuStock;
