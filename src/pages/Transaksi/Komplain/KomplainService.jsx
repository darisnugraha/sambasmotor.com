import React, { lazy } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  Panel,
  PanelBody,
  PanelHeader,
} from "../../../components/panel/panel.jsx";
import ModalGlobal from "../../ModalGlobal.jsx";
import ModalKomplainService from "./ModalKomplainService.jsx";

const HeadKomplainService = lazy(() => import("./HeadKomplainService.jsx"));

const maptostate = (state) => {
  return {
    listbayar_service: state.stocking.listbayar_service,
  };
};

class KomplainService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      modalDialog: false,
      isLoading: false,
      bayar: true,
      jumlah_discount: 0,
      total_jasa: 0,
      total_sparepart: 0,
      jenisModal: "",
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
          <li className="breadcrumb-item active">Komplain Service</li>
        </ol>
        <h1 className="page-header">Komplain Service </h1>
        <Panel>
          <PanelHeader>Komplain Service</PanelHeader>
          <PanelBody>
            <br />
            <HeadKomplainService onSubmit={(data) => this.handleSubmit(data)} />

            {/* End Tambah Master Kategori  */}
          </PanelBody>
        </Panel>
        <ModalGlobal
          title="Tambah Data Barang"
          content={<ModalKomplainService />}
        />
      </div>
    );
  }
}

export default connect(maptostate, null)(KomplainService);
