import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Panel,
  PanelBody,
  PanelHeader,
} from "../../../../components/panel/panel";
import HeadLaporanHutangSupplier from "./HeadLaporanHutangSupplier";

class LaporanHutangSupplier extends Component {
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
          <li className="breadcrumb-item active">Laporan Hutang Supplier</li>
        </ol>
        <h1 className="page-header">Laporan Hutang Supplier </h1>
        <Panel>
          <PanelHeader>Laporan Hutang Supplier</PanelHeader>
          <PanelBody>
            <HeadLaporanHutangSupplier />
          </PanelBody>
        </Panel>
      </div>
    );
  }
}

export default LaporanHutangSupplier;
