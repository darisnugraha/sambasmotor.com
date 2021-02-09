import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { showModal } from "../../../actions/datamaster_action";
import { getListBarangRongsok } from "../../../actions/transaksi_action";
import { Panel, PanelBody, PanelHeader } from "../../../components/panel/panel";
import { simpanLocal } from "../../../config/Helper";
import ModalGlobal from "../../ModalGlobal";
import ModalBayarService from "../PembayaranService/ModalBayarService";
import ModalCC from "../PembayaranService/ModalCC";
import HeadPenjualanRongsok from "./HeadPenjualanRongsok";
import ModalPenjualanRongsok from "./ModalPenjualanRongsok";

const maptostate = (state) => {
  return {
    listbarangrongsok: state.transaksi.listbarangrongsok,
    sub_total: state.transaksi.sub_total,
  };
};

class PenjualanRongsok extends Component {
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

  componentDidMount() {
    this.props.dispatch(getListBarangRongsok());
  }

  handleSubmit(hasil) {
    let data = {
      nama_barang: hasil.nama_barang,
      qty: hasil.qty,
      satuan: hasil.satuan,
      harga_satuan: hasil.harga_satuan,
      total: hasil.total,
    };
    simpanLocal("BarangRongsok_temp", data);
    this.props.dispatch(getListBarangRongsok());
  }

  showBayar() {
    this.setState({
      bayar: true,
    });
  }
  showTambah() {
    this.props.dispatch(showModal());
    this.setState({
      bayar: false,
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
  render() {
    return (
      <div>
        <ol className="breadcrumb float-xl-right">
          <li className="breadcrumb-item">
            <Link to="#">Transaksi</Link>
          </li>
          <li className="breadcrumb-item active">Penjualan Barang Rongsok</li>
        </ol>
        <h1 className="page-header">Penjualan Barang Rongsok </h1>
        <div className="row">
          <div className="col-lg-12">
            <Panel>
              <PanelHeader>Penjualan Barang Rongsok</PanelHeader>
              <PanelBody>
                <br />
                {this.state.bayar ? (
                  <ModalBayarService
                    showCC={() => this.showCC()}
                    columns={this.state.columnsListBayar}
                    data={this.state.dataListBayar}
                    backMenu={() =>
                      this.setState({
                        bayar: false,
                      })
                    }
                  />
                ) : (
                  <HeadPenjualanRongsok
                    listbarangrongsok={this.props.listbarangrongsok}
                    sub_total={this.props.sub_total}
                    showBayar={() => this.showBayar()}
                    showTambah={() => this.showTambah()}
                  />
                )}

                <br />

                {/* End Tambah Master Kategori  */}
              </PanelBody>
            </Panel>
            <ModalGlobal
              title={this.state.bayar ? "Credit Card" : "Tambah Data Rongsok"}
              content={
                this.state.bayar ? (
                  <ModalCC onSubmit={(data) => this.handleSimpanCC(data)} />
                ) : (
                  <ModalPenjualanRongsok
                    onSubmit={(data) => this.handleSubmit(data)}
                  />
                )
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(maptostate, null)(PenjualanRongsok);
