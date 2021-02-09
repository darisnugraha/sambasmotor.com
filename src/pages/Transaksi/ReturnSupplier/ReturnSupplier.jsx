import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Panel, PanelBody, PanelHeader } from "../../../components/panel/panel";
import ModalGlobal from "../../ModalGlobal";
import { reduxForm, reset } from "redux-form";
import { simpanLocal } from "../../../config/Helper";
import { getListReturnSupplier } from "../../../actions/transaksi_action";
import { connect } from "react-redux";
import CetakNota from "../../Stoking/CetakNota";
import HeadReturnSupplier from "../ReturnSupplier/HeadReturnSupplier";
import ModalReturnSupplier from "./ModalReturnSupplier";
import {
  NotifError,
  NotifSucces,
} from "../../../components/notification/notification";
import { AxiosMasterPost } from "../../../axios";

const maptostate = (state) => {
  return {
    listreturnsupplier: state.transaksi.listreturnsupplier,
    sub_total: state.transaksi.sub_total,
  };
};
class SupplierPenerimaan extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.dispatch(getListReturnSupplier());
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
      no_retur_supplier: hasil.kode_return,
      tanggal_retur: hasil.tanggal,
      no_bon: hasil.no_bon,
      kode_supplier: hasil.kode_supplier,
      keterangan: hasil.keterangan,
      diskon_rp: hasil.discount,
      detail_barang:
        JSON.parse(localStorage.getItem("ReturnSupplier_temp_kirim")) || [],
    };
    console.log(JSON.stringify(data));
    // return false;
    // INISIALISASI AUTOTABLE
    const tableRows = [];
    let table = JSON.parse(localStorage.getItem("ReturnSupplier_temp"));
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
    AxiosMasterPost("retur-barang-supplier/post-transaksi", data)
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
          "BUKTI RETURN BARANG SUPPLIER",
          tableRows,
          true
        )
      )
      .then(() => localStorage.removeItem("ReturnSupplier_temp"))
      .then(() => localStorage.removeItem("ReturnSupplier_temp_kirim"))
      .then(() => this.props.dispatch(reset("HeadSupplierPenerimaan")))
      .catch((err) => NotifError(err.response.data));
  }
  handleModal(hasil) {
    let local =
      JSON.parse(localStorage.getItem("ReturnSupplier_temp_kirim")) || [];
    let local2 = JSON.parse(localStorage.getItem("ReturnSupplier_temp")) || [];
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
      localStorage.setItem("ReturnSupplier_temp", JSON.stringify(local2));
      localStorage.setItem("ReturnSupplier_temp_kirim", JSON.stringify(local));
      NotifSucces("Berhasil");
      this.props.dispatch(reset("ModalReturnSupplier"));
      this.props.dispatch(getListReturnSupplier());
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
      simpanLocal("ReturnSupplier_temp", dataTable)
        .then(() => this.props.dispatch(reset("ModalReturnSupplier")))
        .then(() => this.props.dispatch(getListReturnSupplier()));
      simpanLocal("ReturnSupplier_temp_kirim", data)
        .then(() => this.props.dispatch(reset("ModalReturnSupplier")))
        .then(() => this.props.dispatch(getListReturnSupplier()));
    }
  }
  render() {
    return (
      <div>
        <ol className="breadcrumb float-xl-right">
          <li className="breadcrumb-item">
            <Link to="#">Transaksi</Link>
          </li>
          <li className="breadcrumb-item active">Return Barang Supplier</li>
        </ol>
        <h1 className="page-header">Return Barang Supplier</h1>
        <div className="row">
          <div className="col-lg-12">
            <Panel>
              <PanelHeader>Return Barang Supplier</PanelHeader>
              <PanelBody>
                <br />
                <div className="col-lg-12">
                  <HeadReturnSupplier
                    onSubmit={(data) => this.handleHead(data)}
                    listreturnsupplier={this.props.listreturnsupplier}
                    sub_total={this.props.sub_total}
                  />
                </div>
                <br />

                {/* End Tambah Master Kategori  */}
              </PanelBody>
            </Panel>
            <ModalGlobal
              title="Return Barang Supplier"
              content={
                <ModalReturnSupplier
                  onSubmit={(data) => this.handleModal(data)}
                />
              }
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
