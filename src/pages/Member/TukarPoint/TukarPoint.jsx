import React, { Component } from "react";
import { Link } from "react-router-dom";
import { reset } from "redux-form";
import { Panel, PanelBody, PanelHeader } from "../../../components/panel/panel";
import { simpanLocal } from "../../../config/Helper";
import HeadTukarPoint from "./HeadTukarPoint";

class TukarPoint extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleSubmit(hasil) {
    let data = {
      kode_member: hasil.kode_member,
      nama_member: hasil.nama_member,
      jumlah: hasil.jumlah,
      hadiah: hasil.hadiah,
      point: hasil.point,
      sisa_point: hasil.sisa_point,
      sisa_hadiah: hasil.sisa_hadiah,
    };

    simpanLocal("TukarPoint", data);
    this.props.dispatch(reset("HeadTukarPoint"));
  }
  render() {
    return (
      <div>
        <ol className="breadcrumb float-xl-right">
          <li className="breadcrumb-item">
            <Link to="#">Member</Link>
          </li>
          <li className="breadcrumb-item active">Tukar Point</li>
        </ol>
        <h1 className="page-header"> Tukar Point </h1>
        <Panel>
          <PanelHeader> Tukar Point</PanelHeader>
          <PanelBody>
            <div className="col-lg-12 mt-3">
              <HeadTukarPoint onSubmit={(data) => this.handleSubmit(data)} />
            </div>
          </PanelBody>
        </Panel>
      </div>
    );
  }
}

export default TukarPoint;
