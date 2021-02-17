import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import {
  Panel,
  PanelBody,
  PanelHeader,
} from "../../../components/panel/panel.jsx";
import { connect } from "react-redux";
import {
  NotifError,
  NotifSucces,
} from "../../../components/notification/notification.jsx";
import {
  editCustomer,
  getCustomer,
  getFaktur,
  hideModal,
  showModal,
} from "../../../actions/datamaster_action.jsx";
import ModalGlobal from "../../ModalGlobal.jsx";
import Skeleton from "react-loading-skeleton";
import { reset } from "redux-form";
import { AxiosMasterPost, AxiosMasterPut } from "../../../axios.js";
import Tabel from "../../../components/Tabel/tabel.jsx";
const FormModalCustomer = lazy(() => import("./FormModalCustomer.jsx"));

const maptostate = (state) => {
  return {
    hideModal: state.datamaster.modalDialog,
    onSend: state.datamaster.onSend,
    listcustomer: state.datamaster.listcustomer,
    noFaktur: state.datamaster.noFaktur,
  };
};
class MasterCustomer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      modalDialog: false,
      isLoading: false,
      columns: [
        {
          dataField: "nama_customer",
          text: "Nama",
          sort: true,
        },
        {
          dataField: "alamat",
          text: "Alamat",
        },
        {
          dataField: "kota",
          text: "Kota",
        },
        {
          dataField: "handphone",
          text: "Handphone",
        },
        {
          dataField: "nopol_kendaraan",
          text: "Nomor Polisi",
        },
        {
          dataField: "merk_kendaraan",
          text: "Merk",
        },
        {
          dataField: "warna_kendaraan",
          text: "Warna",
        },
        {
          dataField: "action",
          text: "Action",
          csvExport: false,
          headerClasses: "text-center",
          formatter: (rowcontent, row) => {
            let dataEdit = {
              kode_customer: row.kode_customer,
              nama_customer: row.nama_customer,
              alamat: row.alamat,
              kota: row.kota,
              handphone: row.handphone,
              nopol_kendaraan: row.nopol_kendaraan,
              merk_kendaraan: row.merk_kendaraan,
              type_kendaraan: row.type_kendaraan,
              nomesin_kendaraan: row.nomesin_kendaraan,
              warna_kendaraan: row.warna_kendaraan,
            };
            this.setState({});
            return (
              <div className="row text-center">
                <div className="col-12">
                  <button
                    onClick={() => this.editModal(dataEdit)}
                    className="btn btn-warning mr-3"
                  >
                    Edit
                    <i className="fa fa-edit ml-2"></i>
                  </button>
                </div>
              </div>
            );
          },
        },
      ],
      datakategori: [
        {
          nama_customer: "Octa",
          alamat_customer: "ARIA GRAHA",
          kota_customer: "BANDUNG",
          handphone_customer: "0988888",
          no_polisi: "D 4093 AAP",
          merk: "NMAX",
          type: "MATIC",
          no_mesin: "QWERT1234ASDFG",
          warna: "HITAM",
        },
      ],
    };
  }

  componentDidMount() {
    this.props.dispatch(getCustomer());
    this.props.dispatch(getFaktur());
  }
  editModal(data) {
    this.props.dispatch(showModal());
    this.props.dispatch(editCustomer(data));
    this.setState({
      isEdit: true,
    });
  }
  tambahModal() {
    this.props.dispatch(showModal());
    this.props.dispatch(editCustomer(""));
    this.setState({
      isEdit: false,
    });
  }
  handleSubmit(hasil) {
    let data = {
      kode_customer: this.props.noFaktur || "-",
      nama_customer: hasil.nama_customer || "-",
      alamat: hasil.alamat_customer || "-",
      kota: hasil.kota_customer || "-",
      handphone: hasil.handphone_customer || "-",
      nopol_kendaraan: hasil.no_polisi || "-",
      merk_kendaraan: hasil.merk || "-",
      type_kendaraan: hasil.type || "-",
      nomesin_kendaraan: hasil.no_mesin || "-",
      warna_kendaraan: hasil.warna || "-",
    };
    let dataEdit = {
      nama_customer: hasil.nama_customer || "-",
      alamat: hasil.alamat_customer || "-",
      kota: hasil.kota_customer || "-",
      handphone: hasil.handphone_customer || "-",
      nopol_kendaraan: hasil.no_polisi || "-",
      merk_kendaraan: hasil.merk || "-",
      type_kendaraan: hasil.type || "-",
      nomesin_kendaraan: hasil.no_mesin || "-",
      warna_kendaraan: hasil.warna || "-",
    };
    this.state.isEdit
      ? AxiosMasterPut(
          "customer/update/by-kode-customer/" + hasil.kode_customer,
          dataEdit
        )
          .then(() => NotifSucces("Berhasil Dirubah"))
          .then(() => this.props.dispatch(reset("dataBarang")))
          .then(() => this.props.dispatch(hideModal()))
          .then(() => this.props.dispatch(getCustomer()))
          .then(() => this.props.dispatch(getFaktur()))
          .catch(() =>
            NotifError(
              "Sepertinya ada gangguan, Mohon ulang beberapa saat lagi"
            )
          )
      : AxiosMasterPost("customer/add", data)
          .then(() => NotifSucces("Berhasil Ditambahkan"))
          .then(() => this.props.dispatch(reset("dataBarang")))
          .then(() => this.props.dispatch(hideModal()))
          .then(() => this.props.dispatch(getCustomer()))
          .then(() => this.props.dispatch(getFaktur()))
          .catch(() =>
            NotifError(
              "Sepertinya ada gangguan, Mohon ulang beberapa saat lagi"
            )
          );
  }

  render() {
    return (
      <div>
        <ol className="breadcrumb float-xl-right">
          <li className="breadcrumb-item">
            <Link to="#">Data Master</Link>
          </li>
          <li className="breadcrumb-item active">Master Customer</li>
        </ol>
        <h1 className="page-header">Master Customer </h1>
        <Panel>
          <PanelHeader>Master Customer</PanelHeader>
          <PanelBody>
            <br />
            {/* Master Kategori */}
            <div className="col-lg-12">
              <Tabel
                keyField="kode_customer"
                data={this.props.listcustomer || []}
                columns={this.state.columns}
                CSVExport
                tambahData={true}
                handleClick={() => this.tambahModal()}
              />
            </div>
            <br />
            {/* End Master Kategori */}
          </PanelBody>
          <ModalGlobal
            title={
              this.state.isEdit ? "Edit Data Customer" : "Tambah Data Customer"
            }
            content={
              <Suspense
                fallback={<Skeleton width={"100%"} height={50} count={2} />}
              >
                <FormModalCustomer
                  onSubmit={(data) => this.handleSubmit(data)}
                  onSend={this.props.onSend}
                  isEdit={this.state.isEdit}
                  noFaktur={this.props.noFaktur}
                />
              </Suspense>
            }
          />

          {/* End Tambah Master Kategori  */}
        </Panel>
      </div>
    );
  }
}

export default connect(maptostate, null)(MasterCustomer);
