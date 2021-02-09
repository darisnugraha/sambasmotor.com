import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  Panel,
  PanelBody,
  PanelHeader,
} from "../../../components/panel/panel.jsx";
import HeadTerimaServiceLuar from "./HeadTerimaServiceLuar.jsx";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search,
  CSVExport,
} from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import ModalGlobal from "../../ModalGlobal.jsx";
import ModalTerimaServiceLuar from "./ModalTerimaServiceLuar.jsx";
import { showModal } from "../../../actions/datamaster_action.jsx";

const { SearchBar } = Search;
const { ExportCSVButton } = CSVExport;

const maptostate = (state) => {
  return {
    kunci_temp: state.stocking.kunci_temp,
  };
};

class ServiceLuar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      modalDialog: false,
      isLoading: false,
      bayar: false,
      columns: [
        {
          dataField: "nama_partner",
          text: "Nama Partner",
        },
        {
          dataField: "alamat",
          text: "Alamat",
        },
        {
          dataField: "nama_barang",
          text: "Nama Barang",
        },
        {
          dataField: "qty",
          text: "Qty",
        },
        {
          dataField: "keterangan_service",
          text: "Keterangan Service",
        },
        {
          dataField: "harga_satuan",
          text: "Harga Satuan",
        },
        {
          dataField: "total",
          text: "Total",
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
                    onClick={() => this.props.dispatch(showModal())}
                    className="btn btn-primary mr-3"
                  >
                    Simpan
                  </button>
                </div>
              </div>
            );
          },
        },
      ],
      data: [
        {
          nama_partner: "Nagatech Motor",
          alamat: "ARIA GRAHA",
          nama_barang: "BAN FIRELLI",
          qty: 4,
          keterangan_service: "GANTI BAN",
          harga_satuan: 500000,
          total: 2000000,
        },
      ],
    };
  }

  componentDidMount() {}
  handleSubmit(data) {
    console.log(data);
  }

  render() {
    return (
      <div>
        <ol className="breadcrumb float-xl-right">
          <li className="breadcrumb-item">
            <Link to="#">Transaksi</Link>
          </li>
          <li className="breadcrumb-item active">Service Luar</li>
        </ol>
        <h1 className="page-header">Service Luar </h1>
        <div className="row">
          <div className="col-lg-12">
            <Panel>
              <PanelHeader>Service Luar</PanelHeader>
              <PanelBody>
                <br />
                <div className="col-lg-12">
                  <HeadTerimaServiceLuar />
                </div>
                <br />
                <div className="col-lg-12">
                  <ToolkitProvider
                    keyField="no_acc"
                    data={this.state.data || []}
                    columns={this.state.columns}
                    search
                    exportCSV={{
                      fileName: "Export Master Kategori.csv",
                    }}
                  >
                    {(props) => (
                      <div className="row">
                        <div className="col-6">
                          <div className="text-left">
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
                {/* End Tambah Master Kategori  */}
              </PanelBody>
            </Panel>
            <ModalGlobal
              title="Simpan Data Harga"
              content={<ModalTerimaServiceLuar />}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(maptostate, null)(ServiceLuar);
