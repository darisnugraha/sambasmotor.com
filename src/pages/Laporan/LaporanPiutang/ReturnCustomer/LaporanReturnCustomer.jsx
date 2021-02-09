import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Panel,
  PanelBody,
  PanelHeader,
} from "../../../../components/panel/panel";
import HeadLaporanReturnCustomer from "./HeadLaporanReturnCustomer";

class LaporanReturnCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <ol className="breadcrumb float-xl-right">
          <li className="breadcrumb-item">
            <Link to="#">Laporan</Link>
          </li>
          <li className="breadcrumb-item active">Laporan ReturnCustomer</li>
        </ol>
        <h1 className="page-header">Laporan ReturnCustomer </h1>
        <Panel>
          <PanelHeader>Laporan ReturnCustomer</PanelHeader>
          <PanelBody>
            <HeadLaporanReturnCustomer />
          </PanelBody>
        </Panel>
      </div>
    );
  }
}

export default LaporanReturnCustomer;
