import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import Skeleton from "react-loading-skeleton";
import ModalGlobal from "../../ModalGlobal.jsx";
import { NotifSucces } from "../../../components/notification/notification.jsx";
import {
  Panel,
  PanelBody,
  PanelHeader,
} from "../../../components/panel/panel.jsx";
import { hideModal } from "../../../actions/datamaster_action.jsx";
import { getKunciBarang } from "../../../actions/stocking_action.jsx";
import access from "../../../assets/accessDenied.svg";

const ModalKunciBarang = lazy(() => import("./ModalKunciBarang.jsx"));

const maptostate = (state) => {
  return {
    kunci_temp: state.stocking.kunci_temp,
  };
};
const hapusDataKategori = (params, dispatch) => {
  Swal.fire({
    title: "Anda Yakin !!",
    text: "Ingin Menghapus Data Ini ?",
    icon: "warning",
    position: "top-center",
    cancelButtonText: "Tidak",
    showCancelButton: true,
    confirmButtonText: "OK",
    showConfirmButton: true,
  }).then((result) => {
    if (result.isConfirmed) {
      NotifSucces("Data Berhasil Di Hapus");
    }
  });
};
class KunciBarang extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      modalDialog: false,
      isLoading: false,
      columns: [
        {
          dataField: "id_mekanik",
          text: "ID Mekanik",
          sort: true,
        },
        {
          dataField: "nama_mekanik",
          text: "Nama Mekanik",
        },
        {
          dataField: "kode_kunci",
          text: "Kode kunci",
        },
        {
          dataField: "nama_kunci",
          text: "Nama Kunci",
        },
        {
          dataField: "qty",
          text: "Qty",
        },

        {
          dataField: "action",
          text: "Action",
          csvExport: false,
          headerClasses: "text-center",
          formatter: (rowcontent, row) => {
            let dataEdit = {
              id_mekanik: row.id_mekanik,
              nama_mekanik: row.nama_mekanik,
              kode_kunci: row.kode_kunci,
              nama_kunci: row.nama_kunci,
              qty: row.qty,
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
                  <button
                    onClick={() =>
                      hapusDataKategori(row.kodeProvinsi, this.props.dispatch)
                    }
                    className="btn btn-danger"
                  >
                    Hapus
                    <i className="fa fa-trash ml-2"></i>
                  </button>
                </div>
              </div>
            );
          },
        },
      ],
    };
  }

  componentDidMount() {
    this.props.dispatch(getKunciBarang());
  }
  handleSubmit(hasil) {
    let array = JSON.parse(localStorage.getItem("KunciBarang_temp")) || [];
    let data = {
      id_mekanik: hasil.id_mekanik,
      nama_mekanik: hasil.nama_mekanik,
      kode_kunci: hasil.kode_kunci,
      nama_kunci: hasil.nama_kunci,
      qty: hasil.qty,
      tanggal: hasil.tanggal,
    };

    array.push(data);
    localStorage.setItem("KunciBarang_temp", JSON.stringify(array));
    NotifSucces("Berhasil Menambahan Data")
      .then(() => this.props.dispatch(getKunciBarang()))
      .then(() => this.props.dispatch(hideModal()));
  }

  render() {
    return (
      <div>
        <ol className="breadcrumb float-xl-right">
          <li className="breadcrumb-item">
            <Link to="#">Data Master</Link>
          </li>
          <li className="breadcrumb-item active">Kunci Barang</li>
        </ol>
        <h1 className="page-header">Kunci Barang </h1>
        <Panel>
          <PanelHeader>Kunci Barang</PanelHeader>
          <PanelBody>
            <div className="container text-center mt-5 ">
              <div className="align-item-center">
                <img src={access} alt="Access" width="30%" />
                <h1> Mohon Maaf</h1>
                <h1 className="f-w-900">Akses Di Menu Ini Tidak Di Izinkan</h1>
                <h5>Hubungi Admin Jika Ingin Memakai Menu Ini</h5>
                <div>
                  <Link to="/dashboard">
                    <button className="btn btn-primary mt-3">
                      <i className="fa fa-chevron-left mr-3"></i> Go Home
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* End Master Kategori */}
            <ModalGlobal
              title={
                this.state.isEdit ? "Edit Data Kunci" : "Tambah Data Kunci"
              }
              content={
                <Suspense
                  fallback={<Skeleton width={"100%"} height={50} count={2} />}
                >
                  <ModalKunciBarang
                    onSubmit={(data) => this.handleSubmit(data)}
                    onSend={this.props.onSend}
                    isEdit={this.state.isEdit}
                  />
                </Suspense>
              }
            />

            {/* End Tambah Master Kategori  */}
          </PanelBody>
        </Panel>
      </div>
    );
  }
}

export default connect(maptostate, null)(KunciBarang);
