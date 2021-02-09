import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { reset } from "redux-form";
import { getListStockOpname } from "../../../actions/supervisor_action";
import { Panel, PanelBody, PanelHeader } from "../../../components/panel/panel";
import { simpanLocal } from "../../../config/Helper";
import ModalGlobal from "../../ModalGlobal";
import HeadStockOpname from "./HeadStockOpname";
import ModalStockOpname from "./ModalStockOpname";

const maptostate = (state) => {
  return {
    liststockopname: state.supervisor.liststockopname,
  };
};
class StockOpname extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.dispatch(getListStockOpname());
  }
  handleHead(hasil) {
    let data = {
      tanggal: hasil.tanggal,
      lokasi: hasil.lokasi,
      listBarang: JSON.parse(localStorage.getItem("StockOpname_temp")) || [],
    };
    console.log(data);
  }
  handleModal(hasil) {
    let data = {
      kode_barcode: hasil.kode_barcode,
      nama_barang: hasil.nama_barang,
      merk: hasil.merk,
      kwalitas: hasil.kwalitas,
      type: hasil.type,
      qty: hasil.qty,
      satuan: hasil.satuan,
    };
    simpanLocal("StockOpname_temp", data);
    this.props.dispatch(getListStockOpname());
    this.props.dispatch(reset("ModalStockOpname"));
  }
  render() {
    return (
      <div>
        <ol className="breadcrumb float-xl-right">
          <li className="breadcrumb-item">
            <Link to="#">Stock Opname</Link>
          </li>
          <li className="breadcrumb-item active">Stock Opname Barang</li>
        </ol>
        <h1 className="page-header">Stock Opname Barang </h1>
        <Panel>
          <PanelHeader>Stock Opname Barang</PanelHeader>
          <PanelBody>
            <div className="col-lg-12">
              <HeadStockOpname
                onSubmit={(data) => this.handleHead(data)}
                liststockopname={this.props.liststockopname}
              />
            </div>
          </PanelBody>
        </Panel>
        <ModalGlobal
          title="Tambah Data Barang"
          content={
            <ModalStockOpname onSubmit={(data) => this.handleModal(data)} />
          }
        />
      </div>
    );
  }
}

export default connect(maptostate, null)(StockOpname);
