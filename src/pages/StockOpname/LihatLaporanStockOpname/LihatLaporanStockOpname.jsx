import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Panel, PanelBody, PanelHeader } from "../../../components/panel/panel";
import HeadLihatLaporanStockOpname from "./HeadLihatLaporanStockOpname";

class StockOpname extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit(hasil) {
    console.log(hasil);
  }
  render() {
    return (
      <div>
        <ol className="breadcrumb float-xl-right">
          <li className="breadcrumb-item">
            <Link to="#">Stock Opname</Link>
          </li>
          <li className="breadcrumb-item active">
            Lihat Laporan Stock Opname Barang
          </li>
        </ol>
        <h1 className="page-header"> Lihat Laporan Stock Opname Barang </h1>
        <Panel>
          <PanelHeader> Lihat Laporan Stock Opname Barang</PanelHeader>
          <PanelBody>
            <HeadLihatLaporanStockOpname
              onSubmit={(data) => this.handleSubmit(data)}
            />
          </PanelBody>
        </Panel>
      </div>
    );
  }
}

export default connect()(StockOpname);
