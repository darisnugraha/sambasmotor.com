import React, { Component } from "react";
import { Link } from "react-router-dom";
import { reset } from "redux-form";
import { Panel, PanelBody, PanelHeader } from "../../../components/panel/panel";
import { simpanLocal } from "../../../config/Helper";
import HeadTambahPointManual from "./HeadTambahPointManual";

class TambahPointManual extends Component {
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

    simpanLocal("TambahPointManual", data);
    this.props.dispatch(reset("HeadTambahPointManual"));
  }
  render() {
    return (
      <div>
        <ol className="breadcrumb float-xl-right">
          <li className="breadcrumb-item">
            <Link to="#">Member</Link>
          </li>
          <li className="breadcrumb-item active">
            Tambah / Ambil Point Manual
          </li>
        </ol>
        <h1 className="page-header"> Tambah / Ambil Point Manual </h1>
        <Panel>
          <PanelHeader> Tambah / Ambil Point Manual</PanelHeader>
          <PanelBody>
            <div className="col-lg-12 mt-3">
              <HeadTambahPointManual
                onSubmit={(data) => this.handleSubmit(data)}
              />
            </div>
          </PanelBody>
        </Panel>
      </div>
    );
  }
}

export default TambahPointManual;
