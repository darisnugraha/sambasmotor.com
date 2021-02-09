import React, { Component } from "react";
import { Link } from "react-router-dom";
import hakakses from "../../../assets/HakAkses.svg";
import { Panel, PanelBody, PanelHeader } from "../../../components/panel/panel";
import HeadHakAkses from "./HeadHakAkses";
import { simpanLocal } from "../../../config/Helper";
import { getListUser } from "../../../actions/supervisor_action";
import { connect } from "react-redux";
import { reset } from "redux-form";

const maptostate = (state) => {
  return {
    listuser: state.supervisor.listuser,
  };
};
class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          dataField: "user_id",
          text: "User ID",
        },
        {
          dataField: "nama_lengkap",
          text: "Nama Lengkap",
        },
        {
          dataField: "level",
          text: "Level",
        },
      ],
    };
  }
  componentDidMount() {
    this.props.dispatch(getListUser());
  }
  handleSubmit(hasil) {
    let data = {
      nama_lengkap: hasil.nama_lengkap,
      user_id: hasil.user_id,
      password: hasil.password,
      retype_password: hasil.retype_password,
      level: hasil.level,
    };
    simpanLocal("DataUser", data);
    this.props.dispatch(reset("HeadHakAkses"));
    this.props.dispatch(getListUser());
  }
  render() {
    return (
      <div>
        <ol className="breadcrumb float-xl-right">
          <li className="breadcrumb-item">
            <Link to="#">Supervisor</Link>
          </li>
          <li className="breadcrumb-item active">Hak Akses User</li>
        </ol>
        <h1 className="page-header">Hak Akses User </h1>
        <Panel>
          <PanelHeader>Hak Akses User</PanelHeader>
          <div className="col-lg-12">
            <div className="text-center">
              <img src={hakakses} alt="Add Logo" width={300} />
              <h5>
                Hak Akses Berguna untuk membatasi User didalam mengakses menu
                dan pengisian form
              </h5>
            </div>
          </div>
          <PanelBody>
            <div className="col-lg-12 mb-3">
              <HeadHakAkses onSubmit={(data) => this.handleSubmit(data)} />
            </div>
          </PanelBody>
        </Panel>
      </div>
    );
  }
}

export default connect(maptostate, null)(CreateUser);
