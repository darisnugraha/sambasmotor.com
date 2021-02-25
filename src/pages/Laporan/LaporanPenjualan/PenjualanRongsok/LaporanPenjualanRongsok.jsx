import React, { Component } from "react";
import { Link } from "react-router-dom";
import { onFinish, onProgress } from "../../../../actions/datamaster_action";
import { AxiosMasterGet } from "../../../../axios";
import { ToastError } from "../../../../components/notification/notification";
import {
  Panel,
  PanelBody,
  PanelHeader,
} from "../../../../components/panel/panel";
import CetakPenjualanRongsok from "./CetakPenjualanRongsok";
import HeadLaporanPenjualanRongsok from "./HeadLaporanPenjualanRongsok";

class LaporanPenjualanRongsok extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getLaporan(hasil) {
    this.props.dispatch(onProgress());
    AxiosMasterGet(
      "laporan/penjualan-rosok/lap-penjualan-rosok/" +
        `${hasil.tanggal_awal}&${hasil.tanggal_akhir}`
    )
      .then((res) =>
        this.setState({
          listLaporan: res.data,
        })
      )
      .then(() =>
        CetakPenjualanRongsok(
          hasil.tanggal_awal,
          hasil.tanggal_akhir,
          this.state.listLaporan
        )
      )
      .then(() => this.props.dispatch(onFinish()))
      .catch((err) => ToastError(`Error Get Data, Error: ${err.response.data}`))
      .then(() => this.props.dispatch(onFinish()));
  }
  render() {
    return (
      <div>
        <ol className="breadcrumb float-xl-right">
          <li className="breadcrumb-item">
            <Link to="#">Laporan</Link>
          </li>
          <li className="breadcrumb-item active">Laporan Penjualan Rongsok</li>
        </ol>
        <h1 className="page-header">Laporan Penjualan Rongsok </h1>
        <Panel>
          <PanelHeader>Laporan Penjualan Rongsok</PanelHeader>
          <PanelBody>
            <HeadLaporanPenjualanRongsok
              onSubmit={(data) => this.getLaporan(data)}
            />
          </PanelBody>
        </Panel>
      </div>
    );
  }
}

export default LaporanPenjualanRongsok;
