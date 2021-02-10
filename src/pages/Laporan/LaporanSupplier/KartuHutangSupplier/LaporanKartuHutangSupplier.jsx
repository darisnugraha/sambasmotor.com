import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AxiosMasterGet } from "../../../../axios";
import { getToday } from "../../../../components/notification/function";
import {
  Panel,
  PanelBody,
  PanelHeader,
} from "../../../../components/panel/panel";
import CetakKartuHutangSupplier from "./CetakKartuHutangSupplier";
import HeadLaporanKartuHutangSupplier from "./HeadLaporanKartuHutangSupplier";

class LaporanKartuHutangSupplier extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleSubmit(data) {
    AxiosMasterGet(
      "laporan/supplier/lap-card-hutang-supplier/" +
        `${data.kode_supplier || "SEMUA"}&${data.tanggal_awal}&${
          data.tanggal_akhir
        }`
    ).then((res) =>
      CetakKartuHutangSupplier(
        getToday(),
        data.kode_supplier || "SEMUA",
        res.data
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
          <li className="breadcrumb-item active">Laporan Hutang Supplier</li>
        </ol>
        <h1 className="page-header">Laporan Hutang Supplier </h1>
        <Panel>
          <PanelHeader>Laporan Hutang Supplier</PanelHeader>
          <PanelBody>
            <HeadLaporanKartuHutangSupplier
              onSubmit={(data) => this.handleSubmit(data)}
            />
          </PanelBody>
        </Panel>
      </div>
    );
  }
}

export default LaporanKartuHutangSupplier;
