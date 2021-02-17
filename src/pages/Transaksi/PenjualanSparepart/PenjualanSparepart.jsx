import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Panel, PanelBody, PanelHeader } from "../../../components/panel/panel";
import ModalGlobal from "../../ModalGlobal";
import HeadPenjualanSparepart from "./HeadPenjualanSparepart";
import ModalDetailBarangSparepart from "./ModalDetailBarangSparepart";
import ModalPenjualanSparepart from "./ModalPenjualanSparepart";
import { showModal } from "../../../actions/datamaster_action";
import { connect } from "react-redux";
import ModalCC from "../PembayaranService/ModalCC";
import {
  AxiosMasterGet,
  AxiosMasterPost,
  AxiosMasterPut,
} from "../../../axios";
import {
  ToastError,
  ToastSucces,
  ToastWarning,
} from "../../../components/notification/notification";
import { getListBarang } from "../../../actions/transaksi_action";
import ModalBayarSparepart from "./ModalBayarSparepart";
import { reset } from "redux-form";

class PenjualanSparepart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cari_barang: false,
      bayar: false,
      columnsListBayar: [
        {
          dataField: "jenis_bayar",
          text: "Jenis Bayar",
        },
        {
          dataField: "nama_bank",
          text: "Bank",
        },
        {
          dataField: "jumlah",
          text: "Jumlah",
        },
      ],
      dataListBayar: [
        {
          jenis_bayar: "CREDIT CARD",
          bank: "BCA",
          jumlah: 100000000,
        },
      ],
    };
  }

  handleSubmit(hasil) {
    this.setState({
      bayar: true,
    });
    let data = {
      no_faktur_jual: hasil.no_faktur,
      tanggal: hasil.tanggal,
      sales_id: hasil.kode_sales,
      nama_customer: hasil.nama_customer,
      alamat: hasil.alamat,
      telepon: hasil.telepon,
      grand_total: hasil.no_faktur,
      cash_rp: hasil.no_faktur,
      tukar_rp: hasil.no_faktur,
      status_masuk_piutang: hasil.no_faktur,
      grand_total: this.props.grand_total_all,
      tukar_rp: this.props.totalTukar,
      detail_barang: JSON.parse(localStorage.getItem("barangSparepart_temp")),
      detail_tukar: JSON.parse(localStorage.getItem("tukarSparepart_temp")),
    };
    localStorage.setItem("headSparepart", JSON.stringify(data));
  }
  sendData(hasil) {
    let array = JSON.parse(localStorage.getItem("headSparepart")) || [];
    array["cash_rp"] = hasil.bayar;
    array["status_masuk_piutang"] = hasil.piutang;
    array["detail_non_tunai"] =
      localStorage.getItem("listPembayaran_temp") === "[]"
        ? [
            {
              no_ref: "-",
              no_ac: "-",
              bayar_rp: 0,
              fee_rp: 0,
              no_card: "-",
              valid_until: "-",
              nama_pemilik: "-",
              no_ktp: "-",
              alamat_ktp: "-",
              kota_ktp: "-",
              telepon_ktp: "-",
              jenis_trx: "-",
            },
          ]
        : localStorage.getItem("listPembayaran_temp") !== null
        ? JSON.parse(localStorage.getItem("listPembayaran_temp"))
        : [
            {
              no_ref: "-",
              no_ac: "-",
              bayar_rp: 0,
              fee_rp: 0,
              no_card: "-",
              valid_until: "-",
              nama_pemilik: "-",
              no_ktp: "-",
              alamat_ktp: "-",
              kota_ktp: "-",
              telepon_ktp: "-",
              jenis_trx: "-",
            },
          ];
    AxiosMasterPost("penjualan/post-transaksi", array).then(() =>
      ToastSucces("Berhasil Menambah Data").catch((err) =>
        ToastError("Gagal Menambah Data")
      )
    );
  }
  setCariBarang(data) {
    console.log(data);
    this.setState({
      cari_barang: true,
      jenis_barang: data,
    });
  }
  setBack() {
    this.setState({
      cari_barang: false,
    });
  }

  showCC() {
    this.props.dispatch(showModal());
    this.setState({
      jenisModal: "CC",
    });
  }
  handleSimpanCC(data) {
    console.log(data);
  }
  showDetail() {
    this.props.dispatch(showModal());
    this.setState({
      jenisModal: "DETAIL",
    });
  }
  componentDidMount() {
    AxiosMasterGet("penjualan/generate/no-trx")
      .then((res) =>
        localStorage.setItem(
          "no_penjualan_sparepart",
          res.data[0].no_faktur_jual
        )
      )
      .catch((err) => {
        ToastWarning("Gagal Ambil Faktur, Mohon Refresh");
        console.log(err);
      });
    this.props.dispatch(getListBarang());
  }
  handleTambahBarang(hasil) {
    let nama_local = "";
    if (this.state.jenis_barang === "TAMBAH") {
      nama_local = "barangSparepart_temp";
      let array = JSON.parse(localStorage.getItem(nama_local)) || [];
      let indexnya = array.findIndex(
        (list) => list.kode_barcode === hasil.kode_barcode
      );
      if (indexnya !== -1) {
        let data = {
          kode_supplier:
            localStorage.getItem("supplier_barang_sparepart") || "",
          kode_barcode: hasil.kode_barcode,
          qty: parseFloat(hasil.jumlah) + parseFloat(array[indexnya].qty),
          harga_satuan: parseFloat(hasil.harga_satuan),
          diskon_rp: parseFloat(hasil.discount),
          harga_total:
            parseFloat(hasil.grand_total) +
            parseFloat(array[indexnya].harga_total),
        };
        array.splice(indexnya, 1);
        array.push(data);
        localStorage.setItem(nama_local, JSON.stringify(array));
        ToastSucces("Barang Berhasil Ditambahkan");
        this.props.dispatch(getListBarang());
        this.props.dispatch(reset("HeadPenjualanSparepart"));
      } else {
        let data = {
          kode_supplier:
            localStorage.getItem("supplier_barang_sparepart") || "",
          kode_barcode: hasil.kode_barcode,
          qty: parseFloat(hasil.jumlah),
          harga_satuan: parseFloat(hasil.harga_satuan),
          diskon_rp: parseFloat(hasil.discount),
          harga_total: parseFloat(hasil.grand_total),
        };
        array.push(data);
        localStorage.setItem(nama_local, JSON.stringify(array));
        ToastSucces("Barang Berhasil Ditambahkan");
        this.props.dispatch(getListBarang());
        this.props.dispatch(reset("HeadPenjualanSparepart"));
      }
    } else {
      nama_local = "tukarSparepart_temp";
      let array = JSON.parse(localStorage.getItem(nama_local)) || [];
      let indexnya = array.findIndex(
        (list) => list.kode_barcode === hasil.kode_barcode
      );
      if (indexnya !== -1) {
        let data = {
          kode_supplier:
            localStorage.getItem("supplier_barang_sparepart") || "",
          kode_barcode: hasil.kode_barcode,
          qty: parseFloat(hasil.jumlah) + parseFloat(array[indexnya].qty),
          harga_satuan: parseFloat(hasil.harga_satuan),
          potongan: parseFloat(hasil.discount),
          harga_total:
            parseFloat(hasil.grand_total) +
            parseFloat(array[indexnya].harga_total),
        };
        array.splice(indexnya, 1);
        array.push(data);
        localStorage.setItem(nama_local, JSON.stringify(array));
        ToastSucces("Barang Berhasil Ditambahkan");
        this.props.dispatch(getListBarang());
        this.props.dispatch(reset("HeadPenjualanSparepart"));
      } else {
        let data = {
          kode_supplier:
            localStorage.getItem("supplier_barang_sparepart") || "",
          kode_barcode: hasil.kode_barcode,
          qty: parseFloat(hasil.jumlah),
          harga_satuan: parseFloat(hasil.harga_satuan),
          potongan: parseFloat(hasil.discount),
          harga_total: parseFloat(hasil.grand_total),
        };
        array.push(data);
        localStorage.setItem(nama_local, JSON.stringify(array));
        ToastSucces("Barang Berhasil Ditambahkan");
        this.props.dispatch(getListBarang());
        this.props.dispatch(reset("HeadPenjualanSparepart"));
      }
    }
  }
  render() {
    return (
      <div>
        <ol className="breadcrumb float-xl-right">
          <li className="breadcrumb-item">
            <Link to="#">Transaksi</Link>
          </li>
          <li className="breadcrumb-item active">Penjualan Sparepart</li>
        </ol>
        <h1 className="page-header">Penjualan Sparepart </h1>
        <div className="row">
          <div className="col-lg-12">
            <Panel>
              <PanelHeader>Penjualan Sparepart</PanelHeader>
              <PanelBody>
                <br />
                {this.state.cari_barang ? (
                  <ModalPenjualanSparepart
                    setBack={() => this.setBack()}
                    showDetail={() => this.showDetail()}
                  />
                ) : this.state.bayar ? (
                  <ModalBayarSparepart
                    showCC={() => this.showCC()}
                    columns={this.state.columnsListBayar}
                    data={this.state.dataListBayar}
                    backMenu={() =>
                      this.setState({
                        bayar: false,
                      })
                    }
                    onSubmit={(data) => this.sendData(data)}
                  />
                ) : (
                  <HeadPenjualanSparepart
                    onSubmit={(data) => this.handleSubmit(data)}
                    setCariBarang={(data) => this.setCariBarang(data)}
                    setBayar={() => this.setBayar()}
                  />
                )}
                <br />

                {/* End Tambah Master Kategori  */}
              </PanelBody>
            </Panel>
            <ModalGlobal
              title={
                this.state.jenisModal === "DETAIL"
                  ? "Detail Barang"
                  : this.state.jenisModal === "CC"
                  ? "Credit Card"
                  : null
              }
              content={
                this.state.jenisModal === "DETAIL" ? (
                  <ModalDetailBarangSparepart
                    jenis_barang={this.state.jenis_barang}
                    onSubmit={(data) => this.handleTambahBarang(data)}
                  />
                ) : this.state.jenisModal === "CC" ? (
                  <ModalCC onSubmit={(data) => this.handleSimpanCC(data)} />
                ) : null
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    listBarangSparepart: state.transaksi.listBarangSparepart,
    grand_total_all: state.transaksi.sub_total,
    sum_pembayaran: state.transaksi.sum_pembayaran,
    totalTukar: state.transaksi.totalTukar,
  };
})(PenjualanSparepart);
