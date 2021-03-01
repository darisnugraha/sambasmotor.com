import React, { Component } from "react";
import { Link } from "react-router-dom";
import { onFinish } from "../../../actions/datamaster_action";
import { AxiosMasterGet } from "../../../axios";
import { ToastError } from "../../../components/notification/notification";
import { Panel, PanelBody, PanelHeader } from "../../../components/panel/panel";
import CetakMedicalReport from "./CetakMedicalReport";
import HeadLaporanMedicalReport from "./HeadLaporanMedicalReport";

class LaporanMedicalReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listLaporan: [],
    };
  }
  getLaporan(hasil) {
    this.props.dispatch(onprogress());
    AxiosMasterGet("")
      .then((res) =>
        this.setState({
          listLaporan: res && res.data,
        })
      )
      .then(() =>
        CetakMedicalReport(
          hasil.tanggal_awal,
          hasil.taggal_akhir,
          hasil.nopol_kendaraan,
          this.state.listLaporan
        )
      )
      .then(() => this.props.dispatch(onFinish()))
      .catch((err) =>
        ToastError(
          `Gagal Mengambil Data, Detail : ${err.response.data}`
        ).then(() => this.props.dispatch(onFinish()))
      );
  }
  render() {
    return (
      <div>
        <ol className="breadcrumb float-xl-right">
          <li className="breadcrumb-item">
            <Link to="#">Laporan</Link>
          </li>
          <li className="breadcrumb-item active">Laporan Medical Report</li>
        </ol>
        <h1 className="page-header">Laporan Medical Report </h1>
        <Panel>
          <PanelHeader>Laporan Medical Report</PanelHeader>
          <PanelBody>
            <HeadLaporanMedicalReport
              onSubmit={(data) => this.getLaporan(data)}
            />
          </PanelBody>
        </Panel>
      </div>
    );
  }
}

export default LaporanMedicalReport;
