import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AxiosMasterGet } from "../../../../axios";
import {
  Panel,
  PanelBody,
  PanelHeader,
} from "../../../../components/panel/panel";
import CetakKartuStock from "./CetakKartuStock";
import HeadLaporanKartuStock from "./HeadLaporanKartuStock";

class LaporanKartuStock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Laporan: [],
    };
  }
  getLaporan() {
    AxiosMasterGet(
      "laporan/stocking/lap-kartu-barang/SPL01&2021-01-01&2021-02-30&s&SEMUA&SEMUA"
    )
      .then((res) =>
        this.setState({
          Laporan: res.data,
        })
      )
      .then(() =>
        CetakKartuStock(
          "2 Januari 2021",
          "2 Februari 2021",
          "ADMIN",
          "2 FEBRUARI 2021",
          "ADMIN",
          this.state.Laporan
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
          <li className="breadcrumb-item active">Laporan Kartu Stock</li>
        </ol>
        <h1 className="page-header">Laporan Kartu Stock </h1>
        <Panel>
          <PanelHeader>Laporan Kartu Stock</PanelHeader>
          <PanelBody>
            <HeadLaporanKartuStock onSubmit={(data) => this.getLaporan(data)} />
          </PanelBody>
        </Panel>
      </div>
    );
  }
}

export default LaporanKartuStock;
