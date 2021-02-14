import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AxiosMasterGet } from "../../../../axios";
import {
  Panel,
  PanelBody,
  PanelHeader,
} from "../../../../components/panel/panel";
import CetakStockPerKategori from "./CetakStockPerKategori";
import HeadLaporanStockPerKategori from "./HeadLaporanStockPerKategori";

class LaporanStockPerKategori extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listLaporan: [],
    };
  }

  getLaporan(hasil) {
    AxiosMasterGet(
      "laporan/stocking/lap-saldo-barang/2021-02-13&SEMUA&SEMUA&SEMUA"
    )
      .then((res) =>
        this.setState({
          listLaporan: res.data,
        })
      )
      .then(() =>
        CetakStockPerKategori(
          "2 Januari 2021",
          "2 Februari 2021",
          "ADMIN",
          "2 FEBRUARI 2021",
          "ADMIN",
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
          <li className="breadcrumb-item active">Laporan Stock PerKategori</li>
        </ol>
        <h1 className="page-header">Laporan Stock PerKategori </h1>
        <Panel>
          <PanelHeader>Laporan Stock PerKategori</PanelHeader>
          <PanelBody>
            <HeadLaporanStockPerKategori
              onSubmit={(data) => this.getLaporan(data)}
            />
          </PanelBody>
        </Panel>
      </div>
    );
  }
}

export default LaporanStockPerKategori;
