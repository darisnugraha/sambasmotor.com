import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Panel, PanelBody, PanelHeader } from "../../../components/panel/panel";
import HeadTambahKas from "./HeadTambahKas";

class TambahKas extends Component {
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
            <Link to="#">Transaksi Kas</Link>
          </li>
          <li className="breadcrumb-item active">Tambah Uang Kas</li>
        </ol>
        <h1 className="page-header">Tambah Uang Kas </h1>
        <Panel>
          <PanelHeader>Tambah Uang Kas</PanelHeader>
          <PanelBody>
            <HeadTambahKas onSubmit={(data) => this.handleSubmit(data)} />
          </PanelBody>
        </Panel>
      </div>
    );
  }
}

export default TambahKas;
