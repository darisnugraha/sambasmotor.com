import React, { Component } from "react";
import { Link } from "react-router-dom";
import { onFinish, onProgress } from "../../../../actions/datamaster_action";
import { AxiosMasterGet } from "../../../../axios";
import { getToday } from "../../../../components/notification/function";
import {
  getUserData,
  ToastError,
} from "../../../../components/notification/notification";
import {
  Panel,
  PanelBody,
  PanelHeader,
} from "../../../../components/panel/panel";
import CetakMekanik from "./CetakMekanik";
import HeadLaporanMekanik from "./HeadLaporanMekanik";

class LaporanMekanik extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getLaporan(hasil) {
    this.props.dispatch(onProgress());
    AxiosMasterGet(
      `laporan/service/lap-mekanik/${hasil.tanggal_awal}&${hasil.tanggal_akhir}&${hasil.kode_mekanik}`
    )
      .then((res) =>
        this.setState({
          listLaporan: res && res.data,
        })
      )
      .then(() =>
        CetakMekanik(
          hasil.tanggal_awal,
          hasil.kode_mekanik,
          getUserData().user_name,
          getToday(),
          getUserData().user_name,
          this.state.listLaporan
        )
      )
      .then(() => this.props.dispatch(onFinish()))
      .catch((err) =>
        ToastError(`Error get data, Error : ${err.response.data}`).then(() =>
          this.props.dispatch(onFinish())
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
          <li className="breadcrumb-item active">Laporan Mekanik</li>
        </ol>
        <h1 className="page-header">Laporan Mekanik </h1>
        <Panel>
          <PanelHeader>Laporan Mekanik</PanelHeader>
          <PanelBody>
            <HeadLaporanMekanik onSubmit={(data) => this.getLaporan(data)} />
          </PanelBody>
        </Panel>
      </div>
    );
  }
}

export default LaporanMekanik;
