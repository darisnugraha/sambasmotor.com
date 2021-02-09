import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Panel, PanelBody, PanelHeader } from "../../../components/panel/panel";
import HeadInputDataMember from "./HeadInputDataMember";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search,
  CSVExport,
} from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import ModalGlobal from "../../ModalGlobal";
import { showModal } from "../../../actions/datamaster_action";
import { connect } from "react-redux";
import { simpanLocal } from "../../../config/Helper";

const { SearchBar } = Search;
const { ExportCSVButton } = CSVExport;
class InputDataMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          dataField: "kode_member",
          text: "Kode Member",
        },
        {
          dataField: "nama_member",
          text: "Nama Member",
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
          dataField: "kode_pos",
          text: "Kode Pos",
        },
        {
          dataField: "no_ktp",
          text: "Nomor KTP",
        },
        {
          dataField: "tanggal_lahir",
          text: "Tangga Lahir",
        },
        {
          dataField: "telepon",
          text: "Telepon",
        },
        {
          dataField: "handphone",
          text: "Handphone",
        },
      ],
    };
  }
  handleSubmit(hasil) {
    let data = {
      kode_member: hasil.kode_member,
      nama_member: hasil.nama_member,
      alamat: hasil.alamat,
      kota: hasil.kota,
      kode_pos: hasil.kode_pos,
      nomor_ktp: hasil.nomor_ktp,
      tanggal_lahir: hasil.tanggal_lahir,
      telepon: hasil.telepon,
      handphone: hasil.handphone,
    };

    simpanLocal("DataMember_temp", data);
  }
  render() {
    return (
      <div>
        <ol className="breadcrumb float-xl-right">
          <li className="breadcrumb-item">
            <Link to="#">Member</Link>
          </li>
          <li className="breadcrumb-item active">Input Data Member</li>
        </ol>
        <h1 className="page-header">Input Data Member </h1>
        <Panel>
          <PanelHeader>Input Data Member</PanelHeader>
          <PanelBody>
            <div className="col-lg-12">
              <ToolkitProvider
                keyField="no_acc"
                data={this.state.datakategori || []}
                columns={this.state.columns}
                search
                exportCSV={{
                  fileName: "Export Master Kategori.csv",
                }}
              >
                {(props) => (
                  <div className="row mt-3">
                    <div className="col-6">
                      <button
                        onClick={() => this.props.dispatch(showModal())}
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
                    <div className="col-12 mt-3">
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
          </PanelBody>
        </Panel>
        <ModalGlobal
          title="Tambah Data Member"
          content={
            <HeadInputDataMember onSubmit={(data) => this.handleSubmit(data)} />
          }
        />
      </div>
    );
  }
}

export default connect()(InputDataMember);
