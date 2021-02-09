import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { connect } from "react-redux";

class ModalLihatService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          dataField: "no_service",
          text: "No Service",
        },
        {
          dataField: "no_polisi",
          text: "No polisi",
        },
        {
          dataField: "nama_pelanggan",
          text: "Nama Pelanggan",
        },
        {
          dataField: "alamat",
          text: "Alamat",
        },
        {
          dataField: "handphone",
          text: "Handphone",
        },
        {
          dataField: "type",
          text: "Type",
        },
        {
          dataField: "tanggal_masuk",
          text: "Tanggal Masuk",
        },
        {
          dataField: "harga_sparepart",
          text: "Hrg. Sparepart",
        },
        {
          dataField: "harga_jasa",
          text: "Hrg. Jasa",
        },
        {
          dataField: "total",
          text: "Total",
        },
        {
          dataField: "action",
          text: "Action",
          csvExport: false,
          headerClasses: "text-center",
          formatter: (rowcontent, row) => {
            this.setState({});
            return (
              <div className="text-center">
                <div className="col-12">
                  <button className="btn btn-warning ">
                    <i className="fa fa-print"></i>
                  </button>
                  <button
                    className="btn btn-success mt-2"
                    onClick={this.props.setBayar}
                  >
                    <i className="fa fa-credit-card"></i>
                  </button>
                </div>
              </div>
            );
          },
        },
      ],
      products: [
        {
          no_service: "2000",
          no_polisi: "2000",
          nama_pelanggan: "2000",
          alamat: "2000",
          handphone: "2000",
          type: "2000",
          tanggal_masuk: "2000",
          harga_sparepart: "2000",
          harga_jasa: "2000",
          total: "2000",
        },
      ],
    };
  }
  render() {
    return (
      <div className="col-lg-12">
        <BootstrapTable
          bootstrap4
          keyField="id"
          data={this.state.products}
          columns={this.state.columns}
        />
      </div>
    );
  }
}

export default connect()(ModalLihatService);
