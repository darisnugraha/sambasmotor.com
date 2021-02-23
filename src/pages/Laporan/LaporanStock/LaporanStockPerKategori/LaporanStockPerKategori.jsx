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
import CetakKartuStock from "../LaporanKartuStock/CetakKartuStock";
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
      `laporan/stocking/lap-kartu-barang/${hasil.kode_supplier}&${hasil.tanggal_awal}&${hasil.tanggal_akhir}&${hasil.kode_barcode}`
    )
      .then((res) =>
        this.setState({
          listLaporan: res.data,
        })
      )
      .then(() =>
        CetakKartuStock(
          hasil.tanggal_awal,
          hasil.tanggal_akhir,
          getUserData().user_name,
          getToday(),
          getUserData().user_name,
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
          <li className="breadcrumb-item active">Laporan Kartu Stock</li>
        </ol>
        <h1 className="page-header">Laporan Kartu Stock </h1>
        <Panel>
          <PanelHeader>Laporan Kartu Stock</PanelHeader>
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
