import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import {
  Panel,
  PanelBody,
  PanelHeader,
} from "../../../components/panel/panel.jsx";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search,
  CSVExport,
} from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import {
  NotifError,
  NotifSucces,
  reactive,
} from "../../../components/notification/notification.jsx";
import {
  editKategoriService,
  getKategoriService,
  hideModal,
  showModal,
} from "../../../actions/datamaster_action.jsx";
import ModalGlobal from "../../ModalGlobal.jsx";
import Skeleton from "react-loading-skeleton";
import {
  AxiosMasterDelete,
  AxiosMasterPost,
  AxiosMasterPut,
} from "../../../axios.js";
import { reset } from "redux-form";
const FormModalKategoriService = lazy(() =>
  import("./FormModalKategoriService.jsx")
);

const { SearchBar } = Search;
const { ExportCSVButton } = CSVExport;

const maptostate = (state) => {
  return {
    hideModal: state.datamaster.modalDialog,
    onSend: state.datamaster.onSend,
    listkategoriservice: state.datamaster.listkategoriservice,
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
      AxiosMasterDelete(
        "kategori-service/delete/by-id-kategori-service/" + params
      )
        .then(() => dispatch(hideModal()))
        .then(() => dispatch(getKategoriService()))
        .then(() => NotifSucces("Berhasil menghapus data"));
    }
  });
};
class MasterKategoriService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      modalDialog: false,
      isLoading: false,
      listParameter: [],
      columns: [
        {
          dataField: "id_kategori_service",
          text: "Jenis Kategori",
          sort: true,
        },
        {
          dataField: "kategori_service",
          text: "Jenis Service",
          sort: true,
        },
        {
          dataField: "jenis_service",
          text: "Jenis Service",
          sort: true,
        },
        {
          dataField: "action",
          text: "Action",
          csvExport: false,
          headerClasses: "text-center",
          formatter: (rowcontent, row) => {
            let dataEdit = {
              id_kategori_service: row.id_kategori_service,
              kategori_service: row.kategori_service,
              jenis_service: row.jenis_service,
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
                      hapusDataKategori(
                        row.id_kategori_service,
                        this.props.dispatch
                      )
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
      datakategori: [
        {
          jenis_service: "LISTRIK",
          jenis_kategori: "Kaki,Tune Up,Turun Mesin,Electric",
        },
      ],
    };
  }

  componentDidMount() {
    this.props.dispatch(getKategoriService());
  }
  editModal(data) {
    this.props.dispatch(showModal());
    this.props.dispatch(editKategoriService(data));
    this.setState({
      isEdit: true,
    });
  }
  tambahModal() {
    this.props.dispatch(showModal());
    this.props.dispatch(editKategoriService(""));
    this.setState({
      isEdit: false,
    });
  }
  handleSubmit(hasil) {
    let data = {
      id_kategori_service: hasil.id_kategori_service || "-",
      kategori_service: hasil.jenis_kategori || "-",
      jenis_service: hasil.jenis_service || "-",
    };
    let dataEdit = {
      jenis_service: hasil.jenis_service || "-",
    };
    this.state.isEdit
      ? AxiosMasterPut(
          "kategori-service/update/by-id-kategori-service/" +
            hasil.id_kategori_service || "-",
          dataEdit
        )
          .then(() => NotifSucces("Berhasil Dirubah"))
          .then(() => this.props.dispatch(reset("dataKategoriService")))
          .then(() => this.props.dispatch(hideModal()))
          .then(() => this.props.dispatch(getKategoriService()))
          .catch((err) =>
            NotifError(
              "Sepertinya ada gangguan, Mohon ulang beberapa saat lagi"
            )
          )
      : AxiosMasterPost("kategori-service/add", data)
          .then(() => NotifSucces("Berhasil Ditambahkan"))
          .then(() => this.props.dispatch(reset("dataKategoriService")))
          .then(() => this.props.dispatch(hideModal()))
          .then(() => this.props.dispatch(getKategoriService()))
          .catch((err) =>
            this.handleReactive(err, hasil.id_kategori_service, dataEdit)
          );
  }

  handleReactive(err, kode, data) {
    this.props.dispatch(hideModal());
    let error = err.response.data;
    let check = error.includes("hapus");
    check
      ? reactive(
          err,
          kode,
          "kategori-service/reactive/by-id-kategori-service/",
          data,
          "kategori-service/update/by-id-kategori-service/"
        ).then(() => this.props.dispatch(getKategoriService()))
      : NotifError("Data Gagal Ditambahkan");
  }

  render() {
    return (
      <div>
        <ol className="breadcrumb float-xl-right">
          <li className="breadcrumb-item">
            <Link to="#">Data Master</Link>
          </li>
          <li className="breadcrumb-item active">Master Kategori Service</li>
        </ol>
        <h1 className="page-header">Master Kategori Service </h1>
        <Panel>
          <PanelHeader>Master Kategori Service</PanelHeader>
          <PanelBody>
            <br />
            {/* Master Kategori */}
            <div className="col-lg-12">
              <ToolkitProvider
                keyField="no_acc"
                data={this.props.listkategoriservice || []}
                columns={this.state.columns}
                search
                exportCSV={{
                  fileName: "Export Master Kategori.csv",
                }}
              >
                {(props) => (
                  <div className="row">
                    <div className="col-6">
                      <button
                        onClick={() => this.tambahModal()}
                        className="btn btn-primary"
                      >
                        Tambah Data
                        <i className="fa fa-plus ml-3"></i>
                      </button>
                    </div>
                    <div className="col-6">
                      <div className="text-right">
                        <SearchBar {...props.searchProps} />
                      </div>
                    </div>
                    <hr />
                    <div className="col-12">
                      <BootstrapTable
                        pagination={paginationFactory()}
                        {...props.baseProps}
                      />
                      <br />
                      <ExportCSVButton {...props.csvProps}>
                        Export CSV!!
                      </ExportCSVButton>
                    </div>
                  </div>
                )}
              </ToolkitProvider>
            </div>
            <br />
            {/* End Master Kategori */}
          </PanelBody>
          <ModalGlobal
            title={
              this.state.isEdit
                ? "Edit Data Kategori Service"
                : "Tambah Data Kategori Service"
            }
            content={
              <Suspense
                fallback={<Skeleton width={"100%"} height={50} count={2} />}
              >
                <FormModalKategoriService
                  onSubmit={(data) => this.handleSubmit(data)}
                  onSend={this.props.onSend}
                  isEdit={this.state.isEdit}
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

export default connect(maptostate, null)(MasterKategoriService);
