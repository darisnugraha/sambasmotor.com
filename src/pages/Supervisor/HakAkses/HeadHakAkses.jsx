import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import DualListBox from "react-dual-listbox";

const options = [
  { value: "/master-kategori", label: "master-kategori" },
  { value: "/master-jenis", label: "master-jenis" },
  { value: "/master-kendaraan", label: "master-kendaraan" },
  { value: "/master-merk-barang", label: "master-merk-barang" },
  { value: "/master-gudang", label: "master-gudang" },
  { value: "/master-rak", label: "master-rak" },
  { value: "/master-selfing", label: "master-selfing" },
  { value: "/master-satuan", label: "master-satuan" },
  { value: "/master-kwalitas", label: "master-kwalitas" },
  { value: "/master-ukuran", label: "master-ukuran" },
  { value: "/master-warna", label: "master-warna" },
  { value: "/master-jenis-kunci", label: "master-jenis-kunci" },
  { value: "/master-data-kunci", label: "master-data-kunci" },
  { value: "/master-bank", label: "master-bank" },
  { value: "/master-barang", label: "master-barang" },
  { value: "/master-divisi", label: "master-divisi" },
  { value: "/master-sales", label: "master-sales" },
  { value: "/master-parameter-transaksi", label: "master-parameter-transaksi" },
  { value: "/master-kategori-service", label: "master-kategori-service" },
  { value: "/master-customer", label: "master-customer" },
  { value: "/master-discount", label: "master-discount" },
  { value: "/master-harga-service", label: "master-harga-service" },
  { value: "/master-supplier", label: "master-supplier" },
  { value: "/stocking-permintaan", label: "stocking-permintaan" },
  { value: "/stocking-pengeluaran", label: "stocking-pengeluaran" },
  { value: "/stocking-konversi", label: "stocking-konversi" },
  { value: "/stocking-hancur", label: "stocking-hancur" },
  { value: "/stocking-kunci", label: "stocking-kunci" },
  { value: "/service-booking", label: "service-booking" },
  { value: "/service-daftar", label: "service-daftar" },
  { value: "/service-bayar", label: "service-bayar" },
  { value: "/service-lihat", label: "service-lihat" },
  { value: "/service-luar", label: "service-luar" },
  { value: "/service-terima-luar", label: "service-terima-luar" },
  { value: "/service-komplain", label: "service-komplain" },
  { value: "/supplier-terima", label: "supplier-terima" },
  { value: "/supplier-return", label: "supplier-return" },
  { value: "/pembayaran-supplier", label: "pembayaran-supplier" },
  { value: "/penjualan-sparepart", label: "penjualan-sparepart" },
  { value: "/penjualan-rongsok", label: "penjualan-rongsok" },
  { value: "/penjualan-return", label: "penjualan-return" },
  { value: "/penjualan-pembayaran", label: "penjualan-pembayaran" },
  { value: "/tambah-kas", label: "tambah-kas" },
  { value: "/ambil-kas", label: "ambil-kas" },
  { value: "/tambah-bank", label: "tambah-bank" },
  { value: "/ambil-bank", label: "ambil-bank" },
  { value: "/laporan-permintaan-barang", label: "laporan-permintaan-barang" },
  { value: "/laporan-pengeluaran-barang", label: "laporan-pengeluaran-barang" },
  { value: "/laporan-stock-perkategori", label: "laporan-stock-perkategori" },
  { value: "/laporan-kartu-stock", label: "laporan-kartu-stock" },
  {
    value: "laporan-penerimaan-supplier",
    label: "la/poran-penerimaan-supplier",
  },
  { value: "/laporan-return-supplier", label: "laporan-return-supplier" },
  { value: "/laporan-hutang-supplier", label: "laporan-hutang-supplier" },
  {
    value: "laporan-pembayaran-supplier",
    label: "la/poran-pembayaran-supplier",
  },
  {
    value: "laporan-penjualan-sparepart",
    label: "la/poran-penjualan-sparepart",
  },
  { value: "/laporan-penjualan-sales", label: "laporan-penjualan-sales" },
  { value: "/laporan-mekanik", label: "laporan-mekanik" },
  { value: "/laporan-penjualan-rongsok", label: "laporan-penjualan-rongsok" },
  { value: "/laporan-penjualan-service", label: "laporan-penjualan-service" },
  { value: "/laporan-piutang", label: "laporan-piutang" },
  { value: "/laporan-return-customer", label: "laporan-return-customer" },
  {
    value: "laporan-pembayaran-customer",
    label: "la/poran-pembayaran-customer",
  },
  { value: "/laporan-keuangan-kas", label: "laporan-keuangan-kas" },
  { value: "/laporan-keuangan-bank", label: "laporan-keuangan-bank" },
  { value: "/laporan-medical", label: "laporan-medical" },
  { value: "/add-user", label: "add-user" },
  { value: "/hak-akses", label: "hak-akses" },
  { value: "/stockopname-tambah", label: "stockopname-tambah" },
  { value: "/laporan-stockopname", label: "laporan-stockopname" },
  { value: "/input-data-member", label: "input-data-member" },
  { value: "/parameter-point", label: "parameter-point" },
  { value: "/parameter-hadiah", label: "parameter-hadiah" },
  { value: "/parameter-tukar", label: "parameter-tukar" },
  { value: "/parameter-tambah-manual", label: "parameter-tambah-manual" },
];
class HeadHakAkses extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onChange = (selected) => {
    this.setState({ selected });
  };
  render() {
    const { selected } = this.state;
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <div className="text-center">
              <h4>Daftar Menu Yang Ada</h4>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text-center">
              <h4>Daftar Menu Yang Diberi Akses</h4>
            </div>
          </div>
          <div className="col-lg-12">
            <DualListBox
              options={options}
              selected={selected}
              onChange={this.onChange}
            />
          </div>
          <div className="col-lg-12 mt-3">
            <div className="text-right">
              <button className="btn btn-primary">
                Simpan <i className="fa fa-paper-plane ml-3"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

HeadHakAkses = reduxForm({
  form: "HeadHakAkses",
  enableReinitialize: true,
})(HeadHakAkses);
export default connect()(HeadHakAkses);
