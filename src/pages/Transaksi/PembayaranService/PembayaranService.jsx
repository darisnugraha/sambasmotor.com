import React, { lazy } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { NotifSucces } from "../../../components/notification/notification.jsx";
import {
  Panel,
  PanelBody,
  PanelHeader,
} from "../../../components/panel/panel.jsx";
import { reset } from "redux-form";
import { getListBayarService } from "../../../actions/transaksi_action.jsx";
import ModalGlobal from "../../ModalGlobal.jsx";
import ModalTambahSparepart from "./ModalTambahSparepart.jsx";
import { showModal } from "../../../actions/datamaster_action.jsx";
import ModalBayarService from "./ModalBayarService.jsx";
import ModalCC from "./ModalCC.jsx";

const HeadPembayaranService = lazy(() => import("./HeadPembayaranService.jsx"));

const maptostate = (state) => {
  return {
    listbayar_service: state.stocking.listbayar_service,
  };
};

class PembayaranService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      modalDialog: false,
      isLoading: false,
      bayar: true,
      jenisModal: "",
      columns: [
        {
          dataField: "jenis_Kendaraan",
          text: "Jenis Kendaran",
        },
        {
          dataField: "no_polisi",
          text: "Nomor Polisi",
        },
        {
          dataField: "nama_pemilik",
          text: "Nama Pemilik",
        },
        {
          dataField: "alamat",
          text: "Alamat",
        },
        {
          dataField: "jenis_service",
          text: "Jenis Service",
        },
        {
          dataField: "sparepart",
          text: "Sparepart",
        },
        {
          dataField: "harga_sparepart",
          text: "Harga",
        },
        {
          dataField: "ongkos",
          text: "Ongkos",
        },
        {
          dataField: "harga_ongkos",
          text: "Harga",
        },
        {
          dataField: "action",
          text: "Action",
          csvExport: false,
          headerClasses: "text-center",
          formatter: (rowcontent, row) => {
            this.setState({});
            return (
              <div className="row text-center">
                <div className="col-12">
                  <button
                    onClick={() => console.log("PILIH")}
                    className="btn btn-primary mr-3"
                  >
                    Pilih
                  </button>
                </div>
              </div>
            );
          },
        },
      ],
      columnsSparepart: [
        {
          dataField: "kode_barcode",
          text: "Barcode",
        },
        {
          dataField: "nama_barang",
          text: "Nama Barang",
        },
        {
          dataField: "merk",
          text: "Merk",
        },
        {
          dataField: "type",
          text: "Type",
        },
        {
          dataField: "qty",
          text: "Qty",
        },
        {
          dataField: "satuan",
          text: "Satuan",
        },
        {
          dataField: "harga",
          text: "harga",
        },
        {
          dataField: "total",
          text: "Total",
        },
      ],
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
      dataSparepart: [
        {
          kode_barcode: "barcode",
          nama_barang: "nama_barang",
          merk: "merk",
          type: "type",
          qty: 3,
          satuan: "PCS",
          harga: 100000,
          total: 300000,
        },
      ],
      data: [
        {
          jenis_Kendaraan: "ADA",
          no_polisi: "ADA",
          nama_pemilik: "ADA",
          alamat: "ADA",
          jenis_service: "ADA",
          sparepart: "ADA",
          harga_sparepart: "ADA",
          ongkos: "ADA",
          harga_ongkos: "ADA",
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

  componentDidMount() {
    this.props.dispatch(getListBayarService());
  }
  handleSubmit(hasil) {
    console.log(hasil);
    let array = JSON.parse(localStorage.getItem("DaftarService")) || [];
    let data = {
      alamat: hasil.alamat,
      est_keluar: hasil.est_keluar,
      est_masuk: hasil.est_masuk,
      estimasi_accecories: hasil.estimasi_accecories,
      estimasi_electric: hasil.estimasi_electric,
      estimasi_ganti_oli: hasil.estimasi_ganti_oli,
      estimasi_kaki: hasil.estimasi_kaki,
      estimasi_lain_lain: hasil.estimasi_lain_lain,
      estimasi_sparepart_1: hasil.estimasi_sparepart_1,
      estimasi_sparepart_2: hasil.estimasi_sparepart_2,
      estimasi_tune_up: hasil.estimasi_tune_up,
      estimasi_turun_mesin: hasil.estimasi_turun_mesin,
      handphone: hasil.handphone,
      id_mekanik: hasil.id_mekanik,
      km_keluar: hasil.km_keluar,
      km_masuk: hasil.km_masuk,
      km_service_berikutnya: hasil.km_service_berikutnya,
      kota: hasil.kota,
      merk: hasil.merk,
      model: hasil.model,
      nama: hasil.nama,
      nama_mekanik: hasil.nama_mekanik,
      no_mesin: hasil.no_mesin,
      no_polisi: hasil.no_polisi,
      service_selanjutnya: hasil.service_selanjutnya,
      sparepart_1: hasil.sparepart_1,
      sparepart_2: hasil.sparepart_2,
      tanggal_keluar: hasil.tanggal_keluar,
      tanggal_masuk: hasil.tanggal_masuk,
      warna: hasil.warna,
    };

    array.push(data);
    localStorage.setItem("DaftarService", JSON.stringify(array));
    NotifSucces("Berhasil Menambahan Data Booking").then(() =>
      this.props.dispatch(reset("HeadPembayaranService"))
    );
  }
  showBayar() {
    this.setState({
      bayar: false,
    });
  }
  showSparepart() {
    this.props.dispatch(showModal());
    this.setState({
      jenisModal: "SPAREPART",
    });
  }
  showJasa() {
    this.props.dispatch(showModal());
    this.setState({
      jenisModal: "JASA",
    });
  }
  showCC() {
    this.props.dispatch(showModal());
    this.setState({
      jenisModal: "CC",
    });
  }
  handleSimpanCC(hasil) {
    let data = {
      alamat_ktp: hasil.alamat_ktp,
      bank: hasil.bank,
      cvc: hasil.cvc,
      expiry: hasil.expiry,
      fee_card: hasil.fee_card,
      fee_card_percent: hasil.fee_card_percent,
      grand_total: hasil.grand_total,
      handphone: hasil.handphone,
      kota: hasil.kota,
      name: hasil.name,
      no_card: hasil.no_card,
      no_ktp: hasil.no_ktp,
      total_card: hasil.total_card,
    };

    let array = JSON.parse(localStorage.getItem("listPembayaran")) || [];
    array.push(data);
    localStorage.setItem("listPembayaran", JSON.stringify(array));
    NotifSucces("Simpan Berhasil");
  }
  render() {
    return (
      <div>
        <ol className="breadcrumb float-xl-right">
          <li className="breadcrumb-item">
            <Link to="#">Transaksi</Link>
          </li>
          <li className="breadcrumb-item active">Bayar Service</li>
        </ol>
        <h1 className="page-header">Bayar Service </h1>
        <Panel>
          <PanelHeader>Bayar Service</PanelHeader>
          <PanelBody>
            <br />
            {this.state.bayar ? (
              <HeadPembayaranService
                onSubmit={(data) => this.handleSubmit(data)}
                listbayar_service={this.props.listbayar_service}
                columns={this.state.columns}
                data={this.state.data}
                showBayar={() => this.showBayar()}
                showSparepart={() => this.showSparepart()}
                showJasa={() => this.showJasa()}
              />
            ) : (
              <ModalBayarService
                showCC={() => this.showCC()}
                columns={this.state.columnsListBayar}
                data={this.state.dataListBayar}
                backMenu={() =>
                  this.setState({
                    bayar: true,
                  })
                }
              />
            )}
            {/* End Tambah Master Kategori  */}
          </PanelBody>
          <ModalGlobal
            content={
              this.state.jenisModal === "SPAREPART" ? (
                <ModalTambahSparepart
                  columns={this.state.columnsSparepart}
                  data={this.state.dataSparepart}
                />
              ) : this.state.jenisModal === "JASA" ? (
                <ModalTambahSparepart
                  columns={this.state.columnsSparepart}
                  data={this.state.dataSparepart}
                />
              ) : this.state.jenisModal === "CC" ? (
                <ModalCC onSubmit={(data) => this.handleSimpanCC(data)} />
              ) : null
            }
            title={
              this.state.jenisModal === "SPAREPART"
                ? "Tambah Data Sparepart"
                : this.state.jenisModal === "JASA"
                ? "Tambah Data Jasa"
                : this.state.jenisModal === "BAYAR"
                ? "Tambah pembayaran"
                : null
            }
          />
        </Panel>
      </div>
    );
  }
}

export default connect(maptostate, null)(PembayaranService);
