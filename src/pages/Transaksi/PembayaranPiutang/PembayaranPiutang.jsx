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
import { AxiosMasterGet, AxiosMasterPost } from "../../../axios.js";
import {
  getUserData,
  NotifSucces,
  ToastError,
} from "../../../components/notification/notification.jsx";
import CetakPiutang from "./CetakPiutang.jsx";
import {
  getToday,
  multipleDeleteLocal,
} from "../../../components/notification/function.jsx";
import {
  getFaktur,
  onFinish,
  onProgress,
} from "../../../actions/datamaster_action.jsx";

const maptostate = (state) => {
  return {
    kunci_temp: state.stocking.kunci_temp,
    noFaktur: state.datamaster.noFaktur,
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

  componentDidMount() {
    this.props.dispatch(getFaktur());
    AxiosMasterGet("bayar-piutang-customer/generate/no-trx")
      .then((res) =>
        localStorage.setItem(
          "nomor_bayar_piutang",
          res.data[0].no_bayar_customer
        )
      )
      .catch((err) =>
        ToastError(`Error Get Nomor bayar \nError : ${err.response.data}`)
      );
  }
  handleSubmit(hasil) {
    if (hasil.cash !== undefined) {
      console.log("INI CAHS");
    } else {
      console.log("INI TRANSFER");
    }
    this.props.dispatch(onProgress());
    let data = {
      no_bayar_customer: localStorage.getItem("nomor_bayar_piutang"),
      tanggal: hasil.tanggal,
      no_bon: hasil.no_bon,
      kode_customer: hasil.kode_customer,
      total_pembayaran: parseFloat(hasil.cash) + parseFloat(hasil.transfer),
      cash_rp: hasil.cash,
      no_ref_cash: this.props.noFaktur,
      transfer_rp: hasil.transfer,
      no_ref: this.props.noFaktur,
      no_ac_asal: hasil.ac_asal,
      no_ac_tujuan: `${hasil.ac_tujuan}`,
    };
    console.log(JSON.stringify(data));
    AxiosMasterPost(
      this.props.dispatch,
      "bayar-piutang-customer/post-transaksi",
      data
    )
      .then(() => NotifSucces("Pembayaran Berhasl"))
      .then(() =>
        CetakPiutang(
          "Tanggal",
          getToday(),
          "Nomor Bon",
          localStorage.getItem("nomor_bayar_piutang"),
          "",
          "",
          "",
          "",
          getUserData().user_name,
          getToday(),
          getUserData().user_name,
          ["NO", "JENIS BAYAR", "TOTAL"],
          "BUKTI PEMBAYARAN PIUTANG",
          [
            [
              "1",
              "Cash",
              `${parseFloat(hasil.cash).toLocaleString("id-ID") || 0}`,
            ],
            [
              "2",
              "Transfer",
              `${parseFloat(hasil.transfer).toLocaleString("id-ID") || 0}`,
            ],
          ],
          [
            [
              "",
              "Total Bayar",
              `${(
                parseFloat(hasil.transfer || 0) + parseFloat(hasil.cash || 0)
              ).toLocaleString("id-ID")}`,
            ],
          ]
        )
      )
      .then(() =>
        multipleDeleteLocal([
          "nomor_bayar_piutang",
          "noFaktur",
          "kode_customer_piutang",
        ])
      )
      .then(() => this.props.dispatch(getFaktur()))
      .then(() => this.props.dispatch(onFinish()))

      .catch((err) =>
        ToastError(`Gagal, Error : ${err.response.data}`).then(() =>
          this.props.dispatch(onFinish())
        )
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
