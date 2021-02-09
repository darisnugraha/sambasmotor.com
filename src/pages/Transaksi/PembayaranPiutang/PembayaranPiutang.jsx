import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  Panel,
  PanelBody,
  PanelHeader,
} from "../../../components/panel/panel.jsx";
import HeadPembayaranPiutang from "./HeadPembayaranPiutang.jsx";
import ModalGlobal from "../../ModalGlobal.jsx";
import ModalPembayaranPiutang from "./ModalPembayaranPiutang.jsx";
import CetakNota from "../../Stoking/CetakNota.jsx";

const maptostate = (state) => {
  return {
    kunci_temp: state.stocking.kunci_temp,
  };
};

class PembayaranPiutang extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      modalDialog: false,
      isLoading: false,
    };
  }

  componentDidMount() {}
  handleSubmit(hasil) {
    if (hasil.cash !== undefined) {
      console.log("INI CAHS");
    } else {
      console.log("INI TRANSFER");
    }
    CetakNota(
      "Tanggal",
      "01/30/2021",
      "Nomor Bon",
      "BN001",
      "SUPPLIER",
      "PANCA INDRA",
      "",
      "",
      "ADMIN",
      "01/30/2021",
      "ADMIN",
      ["NO", "JENIS BAYAR", "TOTAL"],
      "BUKTI PEMBAYARAN HUTANG SUPPLIER",
      [
        ["1", "RETUR", "77.000.00"],
        ["2", "RETUR", "77.000.00"],
      ],
      false
    );
  }

  render() {
    return (
      <div>
        <ol className="breadcrumb float-xl-right">
          <li className="breadcrumb-item">
            <Link to="#">Transaksi</Link>
          </li>
          <li className="breadcrumb-item active">Pembayaran Supplier</li>
        </ol>
        <h1 className="page-header">Pembayaran Supplier </h1>
        <Panel>
          <PanelHeader>Pembayaran Supplier</PanelHeader>
          <PanelBody>
            <br />
            <HeadPembayaranPiutang
              onSubmit={(data) => this.handleSubmit(data)}
              listMerk={this.state.listMerk}
              bayar={true}
            />
            {/* End Tambah Master Kategori  */}
          </PanelBody>
        </Panel>
        <ModalGlobal
          content={
            <ModalPembayaranPiutang
              onSubmit={(data) => this.handleSubmit(data)}
            />
          }
          title="Pembayaran Supplier"
        />
      </div>
    );
  }
}

export default connect(maptostate, null)(PembayaranPiutang);
