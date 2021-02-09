import React, { Component } from "react";
import { Link } from "react-router-dom";
import Gift from "../../../assets/Gift.svg";
import { Panel, PanelBody, PanelHeader } from "../../../components/panel/panel";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search,
  CSVExport,
} from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import ModalGlobal from "../../ModalGlobal";
import ModalDaftarHadiah from "./ModalDaftarHadiah";
import { showModal } from "../../../actions/datamaster_action";
import { connect } from "react-redux";

const { SearchBar } = Search;
const { ExportCSVButton } = CSVExport;
class DaftarHadiah extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          dataField: "nama_hadiah",
          text: "Nama Hadiah",
        },
        {
          dataField: "stock_hadiah",
          text: "Stock",
        },
        {
          dataField: "point",
          text: "Point",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <ol className="breadcrumb float-xl-right">
          <li className="breadcrumb-item">
            <Link to="#">Stock Opname</Link>
          </li>
          <li className="breadcrumb-item active">Daftar Hadiah</li>
        </ol>
        <h1 className="page-header"> Daftar Hadiah </h1>
        <Panel>
          <PanelHeader> Daftar Hadiah</PanelHeader>
          <PanelBody>
            <div className="col-lg-12">
              <div className="text-center">
                <img src={Gift} alt="Gift" width={300} />
              </div>
            </div>
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
                  <div className="row">
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
                    <div className="col-12">
                      <BootstrapTable
                        noDataIndication="Belum Ada Data"
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
          title="Simpan Data Hadiah"
          content={<ModalDaftarHadiah />}
        />
      </div>
    );
  }
}

export default connect()(DaftarHadiah);
