import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import {
  editBarang,
  getBarang,
  getSupplier,
} from "../../../actions/datamaster_action";
import {
  ReanderSelect,
  ToastWarning,
} from "../../../components/notification/notification";
import { required } from "../../../validasi/normalize";

class ModalPenjualanSparepart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      supplier: false,
      columns: [
        {
          dataField: "kode_barang",
          text: "Kode Barang",
        },
        {
          dataField: "nama_barang",
          text: "Nama Barang",
        },
        {
          dataField: "kode_merk_barang",
          text: "Merk",
        },
        {
          dataField: "kode_satuan",
          text: "Satuan",
        },
        {
          dataField: "harga_jual",
          text: "Harga",
        },
        {
          dataField: "action",
          text: "Action",
          csvExport: false,
          headerClasses: "text-center",
          formatter: (rowcontent, row) => {
            let data = {
              kode_barcode: row.kode_barcode,
              kode_barang: row.kode_barang,
              nama_barang: row.nama_barang,
              kode_kategori: row.kode_kategori,
              kode_jenis: row.kode_jenis,
              kode_merk_barang: row.kode_merk_barang,
              kode_kwalitas: row.kode_kwalitas,
              kode_lokasi_rak: row.kode_lokasi_rak,
              kode_lokasi_selving: row.kode_lokasi_selving,
              kode_ukuran: row.kode_ukuran,
              kode_satuan: row.kode_satuan,
              type: row.type,
              harga_jual: row.harga_jual,
            };
            return (
              <div className="row text-center">
                <div className="col-12">
                  <button className="btn btn-teal mr-3">
                    Pilih
                    <i className="fa fa-cart-arrow-down ml-2"></i>
                  </button>
                  <button
                    className="btn btn-warning mr-3"
                    onClick={() => this.detail(data)}
                  >
                    <i className="fa fa-eye"></i>
                  </button>
                </div>
              </div>
            );
          },
        },
      ],
    };
  }

  detail(data) {
    this.props.showDetail();
    this.props.dispatch(editBarang(data));
  }
  componentDidMount() {
    this.props.dispatch(getBarang());
    this.props.dispatch(getSupplier());
  }
  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="text-left">
            <button className="btn btn-black" onClick={this.props.setBack}>
              <i className="fa fa-chevron-left mr-3"></i> Back
            </button>
          </div>
        </div>
        <div className="col-lg-2"></div>
        <div className="col-lg-4">
          <Field
            name="kode_supplier"
            component={ReanderSelect}
            options={this.props.listsupplier.map((list) => {
              let data = {
                value: list.kode_supplier,
                name: list.nama_supplier,
              };
              return data;
            })}
            onChange={(e) => {
              this.setState({
                supplier: e,
              });
              this.props.change("search_value", "");
              localStorage.setItem("supplier_barang_sparepart", e);
            }}
            type="text"
            label="Kode Supplier"
            validate={required}
            placeholder="Masukan Kode Supplier"
          />
        </div>

        <div className="col-lg-4">
          <Field
            name="search_value"
            component={ReanderSelect}
            options={this.props.listbarang.map((list) => {
              let data = {
                value: list.kode_barang,
                name: list.nama_barang,
              };
              return data;
            })}
            onChange={(e) => {
              this.state.supplier
                ? this.setState({
                    kode_barang: e,
                  })
                : ToastWarning("Silahkan Pilih Supplier Terlebih Dahulu");
            }}
            type="text"
            label="Pencarian"
            placeholder="Masukan Pencarian"
          />
        </div>
        <div className="col-lg-12">
          <BootstrapTable
            bootstrap4
            keyField="id"
            data={this.props.listbarang.filter(
              (list) => list.kode_barang === this.state.kode_barang
            )}
            columns={this.state.columns}
            noDataIndication="Belum ada Data"
          />
        </div>
      </div>
    );
  }
}

ModalPenjualanSparepart = reduxForm({
  form: "ModalPenjualanSparepart",
  enableReinitialize: true,
})(ModalPenjualanSparepart);
export default connect((state) => {
  return {
    listbarang: state.datamaster.listbarang,
    listsupplier: state.datamaster.listsupplier,
  };
})(ModalPenjualanSparepart);
