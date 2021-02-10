import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AxiosMasterGet } from "../../../../axios";
import { getToday } from "../../../../components/helpers/function";
import {
  Panel,
  PanelBody,
  PanelHeader,
} from "../../../../components/panel/panel";
import CetakPenerimaanSupplier from "./CetakPenerimaanSupplier";
import CetakPenerimaanSupplierRekap from "./CetakPenerimaanSupplierRekap";
import HeadLaporanPenerimaanSupplier from "./HeadLaporanPenerimaanSupplier";

class LaporanPenerimaanSupplier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasilLaporan: [],
    };
  }

  handleSubmit(data) {
    AxiosMasterGet(
      "laporan/supplier/lap-terima-supplier/" +
        `${data.kode_supplier || "SEMUA"}&${data.tanggal_awal}&${
          data.tanggal_akhir
        }`
    )
      .then((res) =>
        this.setState({
          hasilLaporan: res.data,
        })
      )
      .then(() =>
        data.type === "DETAIL"
          ? CetakPenerimaanSupplier(
              data.kode_supplier || "SEMUA",
              getToday(),
              "ADMIN",
              getToday(),
              "ADMIN",
              this.state.hasilLaporan
            )
          : CetakPenerimaanSupplierRekap(
              data.kode_supplier || "SEMUA",
              getToday(),
              "ADMIN",
              getToday(),
              "ADMIN",
              this.state.hasilLaporan
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
          <li className="breadcrumb-item active">
            Laporan Penerimaan Supplier
          </li>
        </ol>
        <h1 className="page-header">Laporan Penerimaan Supplier </h1>
        <Panel>
          <PanelHeader>Laporan Penerimaan Supplier</PanelHeader>
          <PanelBody>
            <HeadLaporanPenerimaanSupplier
              onSubmit={(data) => this.handleSubmit(data)}
            />
          </PanelBody>
        </Panel>
      </div>
    );
  }
}

export default LaporanPenerimaanSupplier;
