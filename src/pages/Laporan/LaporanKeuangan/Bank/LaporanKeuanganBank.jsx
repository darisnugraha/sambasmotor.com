import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AxiosMasterGet } from "../../../../axios";
import {
  Panel,
  PanelBody,
  PanelHeader,
} from "../../../../components/panel/panel";
import HeadLaporanKeuanganBank from "./HeadLaporanKeuanganBank";
import CetakKeuanganBank from "./CetakKeuanganBank";

class LaporanKeuanganBank extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getLaporan(hasil) {
    AxiosMasterGet(
      "laporan/keuangan/lap-bank/" +
        `${hasil.tanggal_awal}&${hasil.tanggal_akhir}&${hasil.no_ac}`
    )
      .then((res) =>
        this.setState({
          listLaporan: res.data,
        })
      )
      .then(() =>
        CetakKeuanganBank(
          hasil.tanggal_awal,
          hasil.tanggal_akhir,
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
          <li className="breadcrumb-item active">Laporan Keuangan Bank</li>
        </ol>
        <h1 className="page-header">Laporan Keuangan Bank </h1>
        <Panel>
          <PanelHeader>Laporan Keuangan Bank</PanelHeader>
          <PanelBody>
            <HeadLaporanKeuanganBank
              onSubmit={(data) => this.getLaporan(data)}
            />
          </PanelBody>
        </Panel>
      </div>
    );
  }
}

export default LaporanKeuanganBank;
