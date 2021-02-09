import React, { lazy } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
  Panel,
  PanelBody,
  PanelHeader,
} from "../../../components/panel/panel.jsx";
import ModalGlobal from "../../ModalGlobal.jsx";

import HeadServiceLuar from "./HeadServiceLuar.jsx";
import BootstrapTable from "react-bootstrap-table-next";

const ModalServiceLuar = lazy(() => import("./ModalServiceLuar.jsx"));

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
          dataField: "nama_baran",
          text: "Nama Barang",
        },
        {
          dataField: "qty",
          text: "Qty",
        },
        {
          dataField: "satuan",
          text: "Satuan",
        },
        {
          dataField: "keterangan_service",
          text: "Keterangan service",
        },
        {
          dataField: "harga",
          text: "Harga",
        },
      ],
      data: [
        {
          nama_baran: "CREDIT CARD",
          qty: "BCA",
          satuan: 100000000,
          keterangan_service: 100000000,
          harga: 100000000,
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
                <HeadServiceLuar />
                <br />
                <BootstrapTable
                  bootstrap4
                  keyField="id"
                  data={this.state.data}
                  columns={this.state.columns}
                />
                {/* End Tambah Master Kategori  */}
              </PanelBody>
            </Panel>
          </div>
        </div>
        <ModalGlobal
          title="Tambah Data Service Luar"
          content={
            <ModalServiceLuar onSubmit={(data) => this.handleSubmit(data)} />
          }
        />
      </div>
    );
  }
}

export default connect(maptostate, null)(ServiceLuar);
