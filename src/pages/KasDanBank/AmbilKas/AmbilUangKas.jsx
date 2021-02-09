import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Panel, PanelBody, PanelHeader } from "../../../components/panel/panel";
import HeadAmbilUangKas from "./HeadAmbilUangKas";

class AmbilUangKas extends Component {
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
          <li className="breadcrumb-item active">Ambil Uang Kas</li>
        </ol>
        <h1 className="page-header">Ambil Uang Kas </h1>
        <Panel>
          <PanelHeader>Ambil Uang Kas</PanelHeader>
          <PanelBody>
            <HeadAmbilUangKas onSubmit={(data) => this.handleSubmit(data)} />
          </PanelBody>
        </Panel>
      </div>
    );
  }
}

export default AmbilUangKas;
