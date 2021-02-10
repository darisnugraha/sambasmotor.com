import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, formValueSelector, reduxForm } from "redux-form";
import {
  ReanderField,
  ReanderSelect,
} from "../../../components/notification/notification";

import { showModal } from "../../../actions/datamaster_action";
import { createNumberMask } from "redux-form-input-masks";
import { AxiosMasterGet } from "../../../axios";
import { formatDateISO } from "../../../components/notification/function";
import { TabelGlobal } from "../TabelGlobal";

const currencyMask = createNumberMask({
  prefix: "Rp. ",
  suffix: " ,-",
  decimalPlaces: 0,
  locale: "id-ID",
});

class HeadReturnSupplier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listSupplier: [],
      hasilTerimaBarang: [],
      columns: [
        {
          dataField: "kode_barcode",
          text: "Barcode",
        },
        {
          dataField: "nama_barang",
          text: "Nama Barang",
        },
        {
          dataField: "merk",
          text: "Merk",
        },
        {
          dataField: "kwalitas",
          text: "Kwalitas",
        },
        {
          dataField: "satuan",
          text: "Satuan",
        },
        {
          dataField: "qty",
          text: "Qty",
        },
        {
          dataField: "harga_satuan",
          text: "Harga Satuan",
          formatter: (data) => {
            return "Rp. " + data.toLocaleString("id-ID");
          },
        },
        {
          dataField: "total",
          text: "Total",
          formatter: (data) => {
            return "Rp. " + data.toLocaleString("id-ID");
          },
        },
      ],
    };
  }
  componentDidMount() {
    AxiosMasterGet("supplier/get/all").then((res) =>
      this.setState({
        listSupplier: res.data,
      })
    );
  }
  setTotal() {
    this.props.change("total", this.props.total);
  }
  getTerimaBarang(hasil) {
    AxiosMasterGet(
      "terima-barang-supplier/lihat-bukti-terima/" + hasil.target.value
    )
      .then((res) => this.setLocal(res))
      .then(() => localStorage.setItem("return_kode", hasil.target.value))
      .then(() => this.setPenjualan())
      .catch((err) => console.log(err));
  }
  setLocal(res) {
    console.log("INI LOCAL");
    this.setState({
      hasilTerimaBarang: res.data,
    });
    localStorage.setItem("return_supplier", res.data.kode_supplier);
    localStorage.setItem(
      "return_tanggal_bon",
      formatDateISO(res.data.tanggal_bon)
    );
    localStorage.setItem("return_keterangan", res.data.keterangan);
  }
  setPenjualan() {
    console.log(this.state.hasilTerimaBarang);
    this.props.change(
      "kode_supplier",
      this.state.hasilTerimaBarang.kode_supplier
    );
    this.props.change("keterangan", this.state.hasilTerimaBarang.keterangan);
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="row">
          <div className="col-lg-3">
            <Field
              name="kode_return"
              component={ReanderField}
              type="text"
              label="Kode Return"
              placeholder="Masukan Kode Return"
              readOnly
            />
          </div>
          <div className="col-lg-3">
            <Field
              name="no_bon"
              component={ReanderField}
              type="text"
              label="Nomor Bon"
              placeholder="Masukan Nomor Bon"
              onChange={(hasil) => this.getTerimaBarang(hasil)}
              onBlur={(hasil) => this.getTerimaBarang(hasil)}
            />
          </div>
          <div className="col-lg-3">
            <Field
              name="kode_supplier"
              component={ReanderSelect}
              options={this.state.listSupplier.map((list) => {
                let data = {
                  value: list.kode_supplier,
                  name: list.nama_supplier,
                };
                return data;
              })}
              type="text"
              label="Supplier"
              placeholder="Masukan Supplier"
            />
          </div>
          <div className="col-lg-3">
            <Field
              name="tanggal"
              component={ReanderField}
              type="date"
              label="Tanggal"
              placeholder="Masukan Tanggal"
            />
          </div>
          <div className="col-lg-3">
            <Field
              name="keterangan"
              component={ReanderField}
              type="text"
              label="Keterangan"
              placeholder="Masukan Keterangan"
            />
          </div>

          <div className="col-lg-12">
            <div className="text-right">
              <button
                className="btn btn-warning"
                type="button"
                onClick={() => this.props.dispatch(showModal())}
              >
                Tambah Data <i className="fa fa-plus ml-3"></i>
              </button>
            </div>
          </div>
          <div className="col-lg-12">
            <TabelGlobal
              data={this.props.listreturnsupplier}
              columns={this.state.columns}
            />
          </div>
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-4">
                <Field
                  name="sub_total"
                  component={ReanderField}
                  type="text"
                  label="Sub Total"
                  placeholder="Masukan Sub Total"
                  readOnly
                  {...currencyMask}
                />
              </div>
              <div className="col-lg-4">
                <Field
                  name="discount"
                  component={ReanderField}
                  type="text"
                  label="Discount"
                  placeholder="Masukan Discount"
                  onChange={this.setTotal()}
                  {...currencyMask}
                />
              </div>
              <div className="col-lg-4">
                <Field
                  name="total"
                  component={ReanderField}
                  type="text"
                  label="Total"
                  placeholder="Masukan Total"
                  {...currencyMask}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="text-right">
              <button className="btn btn-primary">
                Simpan <i className="fa fa-paper-plane ml-3"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

HeadReturnSupplier = reduxForm({
  form: "HeadReturnSupplier",
  enableReinitialize: true,
})(HeadReturnSupplier);
const selector = formValueSelector("HeadReturnSupplier"); // <-- same as form name
export default connect((state) => {
  const { sub_total, discount } = selector(state, "sub_total", "discount");
  return {
    total: parseFloat(sub_total || 0) - parseFloat(discount || 0),
    initialValues: {
      sub_total: state.transaksi.sub_total,
      no_bon: localStorage.getItem("return_kode") || "",
      kode_return: localStorage.getItem("kode_return") || "",
      kode_supplier: localStorage.getItem("return_supplier") || "",
      keterangan: localStorage.getItem("return_keterangan") || "",
      tanggal: localStorage.getItem("return_tanggal_bon") || "",
    },
  };
})(HeadReturnSupplier);
