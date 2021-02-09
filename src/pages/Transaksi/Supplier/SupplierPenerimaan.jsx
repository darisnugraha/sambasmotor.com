import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Panel, PanelBody, PanelHeader } from "../../../components/panel/panel";
import HeadSupplierPenerimaan from "./HeadSupplierPenerimaan";

import ModalGlobal from "../../ModalGlobal";
import ModalSupplierPenerimaan from "./ModalSupplierPenerimaan";
import { reduxForm, reset } from "redux-form";
import { simpanLocal } from "../../../config/Helper";
import { getListTerimaSupplier } from "../../../actions/transaksi_action";
import { connect } from "react-redux";
import CetakNota from "../../Stoking/CetakNota";
import { AxiosMasterPost } from "../../../axios";
import {
  NotifError,
  NotifSucces,
} from "../../../components/notification/notification";

const maptostate = (state) => {
  return {
    listterimasupplier: state.transaksi.listterimasupplier,
    sub_total: state.transaksi.sub_total,
  };
};
class SupplierPenerimaan extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.dispatch(getListTerimaSupplier());
  }
  handleHead(hasil) {
    let data = {
      // keterangan: hasil.keterangan,
      // kode_supplier: hasil.kode_supplier,
      // no_bon: hasil.no_bon,
      // pembayaran: hasil.pembayaran,
      // tanggal_barang: hasil.tanggal_barang,
      // tanggal_invoice: hasil.tanggal_invoice,
      //
      no_terima: hasil.kode_terima,
      tanggal_terima: hasil.tanggal_barang,
      no_bon: hasil.no_bon,
      tanggal_bon: hasil.tanggal_invoice,
      kode_supplier: hasil.kode_supplier,
      pembayaran_cash: hasil.tunai || false,
      pembayaran_kredit: hasil.kredit || false,
      keterangan: hasil.keterangan,
      diskon_rp: hasil.discount,
      detail_barang:
        JSON.parse(localStorage.getItem("PenerimaanSupplier_temp_kirim")) || [],
    };

    // INISIALISASI AUTOTABLE
    const tableRows = [];
    let table = JSON.parse(localStorage.getItem("PenerimaanSupplier_temp"));
    table.forEach((data, i) => {
      const rows = [
        ++i,
        data.kode_barcode,
        data.nama_barang,
        data.merk,
        data.kwalitas,
        data.type,
        data.satuan,
        data.qty,
        data.harga_satuan,
        data.total,
      ];
      tableRows.push(rows);
    });
    const footer = [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "TOTAL TAGIHAN",
      table.map((data) => data.total).reduce((a, b) => a + b, 0),
    ];
    tableRows.push(footer);
    let columnTabel = [
      "NO",
      "BARCODE",
      "JENIS BARANG",
      "MERK",
      "KW",
      "TYPE",
      "SATUAN",
      "QTY",
      "HARGA SATUAN",
      "TOTAL",
    ];
    // INISIALISASI SELESAI -> PANGGIL AXIOS DAN PANGGIL PRINT SAAT AXIOS BERHASIL

    AxiosMasterPost("terima-barang-supplier/post-transaksi", data)
      .then(() => NotifSucces("Berhasil"))
      .then(() =>
        CetakNota(
          "NO TERIMA",
          "TERIMA0001",
          "TANGGAL",
          "02-02-2021",
          "NO BON",
          "MB01282021-0001",
          "SUPP",
          "PANCA JAYA",
          "ADMIN",
          "01-28-2021",
          "ADMIN",
          columnTabel,
          "BUKTI PENERIMAAN BARANG SUPPLIER",
          tableRows,
          true
        )
      )
      .then(() => localStorage.removeItem("PenerimaanSupplier_temp"))
      .then(() => localStorage.removeItem("PenerimaanSupplier_temp_kirim"))
      .then(() => this.props.dispatch(reset("HeadSupplierPenerimaan")))
      .catch((err) => NotifError(err.response.data));
  }

  handleModal(hasil) {
    let local =
      JSON.parse(localStorage.getItem("PenerimaanSupplier_temp_kirim")) || [];
    let local2 =
      JSON.parse(localStorage.getItem("PenerimaanSupplier_temp")) || [];
    let filtered = local.findIndex(
      (list) => list.kode_barcode === hasil.kode_barcode
    );
    let filtered2 = local2.findIndex(
      (list) => list.kode_barcode === hasil.kode_barcode
    );
    if (filtered !== -1) {
      let data = {
        kode_barcode: hasil.kode_barcode,
        qty: parseInt(hasil.qty) + parseFloat(local[filtered].qty),
        harga_satuan: parseFloat(hasil.harga_satuan),
        harga_total:
          parseFloat(hasil.total) + parseFloat(local[filtered].harga_total),
      };
      let dataTable = {
        harga_satuan: hasil.harga_satuan,
        kode_barcode: hasil.kode_barcode,
        kwalitas: hasil.kwalitas,
        merk: hasil.merk,
        nama_barang: hasil.nama_barang,
        qty: parseFloat(hasil.qty) + parseFloat(local2[filtered2].qty),
        satuan: hasil.satuan,
        total: parseFloat(hasil.total) + parseFloat(local2[filtered2].total),
        type: hasil.type,
      };
      local.splice(filtered, 1);
      local2.splice(filtered2, 1);
      local.push(data);
      local2.push(dataTable);
      localStorage.setItem("PenerimaanSupplier_temp", JSON.stringify(local2));
      localStorage.setItem(
        "PenerimaanSupplier_temp_kirim",
        JSON.stringify(local)
      );
      NotifSucces("Berhasil");
      this.props.dispatch(reset("ModalSupplierPenerimaan"));
      this.props.dispatch(getListTerimaSupplier());
    } else {
      let data = {
        kode_barcode: hasil.kode_barcode,
        qty: parseInt(hasil.qty),
        harga_satuan: parseFloat(hasil.harga_satuan),
        harga_total: parseFloat(hasil.total),
      };
      let dataTable = {
        harga_satuan: hasil.harga_satuan,
        kode_barcode: hasil.kode_barcode,
        kwalitas: hasil.kwalitas,
        merk: hasil.merk,
        nama_barang: hasil.nama_barang,
        qty: hasil.qty,
        satuan: hasil.satuan,
        total: hasil.total,
        type: hasil.type,
      };
      simpanLocal("PenerimaanSupplier_temp", dataTable)
        .then(() => this.props.dispatch(reset("ModalSupplierPenerimaan")))
        .then(() => this.props.dispatch(getListTerimaSupplier()));
      simpanLocal("PenerimaanSupplier_temp_kirim", data)
        .then(() => this.props.dispatch(reset("ModalSupplierPenerimaan")))
        .then(() => this.props.dispatch(getListTerimaSupplier()));
    }
  }
  render() {
    return (
      <div>
        <ol className="breadcrumb float-xl-right">
          <li className="breadcrumb-item">
            <Link to="#">Transaksi</Link>
          </li>
          <li className="breadcrumb-item active">Penerimaan Supplier</li>
        </ol>
        <h1 className="page-header">Penerimaan Supplier </h1>
        <div className="row">
          <div className="col-lg-12">
            <Panel>
              <PanelHeader>Penerimaan Supplier</PanelHeader>
              <PanelBody>
                <br />
                <div className="col-lg-12">
                  <HeadSupplierPenerimaan
                    onSubmit={(data) => this.handleHead(data)}
                    listterimasupplier={this.props.listterimasupplier}
                    sub_total={this.props.sub_total}
                  />
                </div>
                <br />

                {/* End Tambah Master Kategori  */}
              </PanelBody>
            </Panel>
            <ModalGlobal
              content={
                <ModalSupplierPenerimaan
                  onSubmit={(data) => this.handleModal(data)}
                />
              }
              title="Tambah Barang Penerimaan Supplier"
            />
          </div>
        </div>
      </div>
    );
  }
}

SupplierPenerimaan = reduxForm({
  form: "SupplierPenerimaan",
  enableReinitialize: true,
})(SupplierPenerimaan);
export default connect(maptostate, null)(SupplierPenerimaan);
