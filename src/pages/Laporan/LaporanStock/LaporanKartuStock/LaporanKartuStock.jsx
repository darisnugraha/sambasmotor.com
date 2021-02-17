import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AxiosMasterGet } from "../../../../axios";
import { getToday } from "../../../../components/notification/function";
import { getUserData } from "../../../../components/notification/notification";
import {
  Panel,
  PanelBody,
  PanelHeader,
} from "../../../../components/panel/panel";
import CetakStockPerKategori from "../LaporanStockPerKategori/CetakStockPerKategori";
import CetakKartuStock from "./CetakKartuStock";
import HeadLaporanKartuStock from "./HeadLaporanKartuStock";

class LaporanKartuStock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Laporan: [],
    };
  }
  getLaporan(hasil) {
    AxiosMasterGet(
      "laporan/stocking/lap-saldo-barang/" +
        `${hasil.tanggal_awal}&${hasil.kode_kategori}&${hasil.kode_jenis}&${hasil.kode_lokasi}`
    )
      .then((res) =>
        this.setState({
          Laporan: res.data,
        })
      )
      .then(() =>
        CetakStockPerKategori(
          hasil.tanggal_awal,
          getUserData().user_name,
          getToday(),
          getUserData().user_name,
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
          <li className="breadcrumb-item active">Laporan Stock Per Kategori</li>
        </ol>
        <h1 className="page-header">Laporan Stock Per Kategori </h1>
        <Panel>
          <PanelHeader>Laporan Stock Per Kategori</PanelHeader>
          <PanelBody>
            <HeadLaporanKartuStock onSubmit={(data) => this.getLaporan(data)} />
          </PanelBody>
        </Panel>
      </div>
    );
  }
}

export default LaporanKartuStock;
