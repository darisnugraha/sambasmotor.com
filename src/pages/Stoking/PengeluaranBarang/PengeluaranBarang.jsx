import React from "react";
import { Link } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search,
  CSVExport,
} from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { connect } from "react-redux";
import Skeleton from "react-loading-skeleton";
import { NotifError } from "../../../components/notification/notification.jsx";
import {
  Panel,
  PanelBody,
  PanelHeader,
} from "../../../components/panel/panel.jsx";
import {
  getPengeluaranBarang,
  getPengeluaranBarangSelected,
} from "../../../actions/stocking_action.jsx";
import Stepper from "react-stepper-horizontal/lib/Stepper";
import NavigationStepper from "../../../components/content/NavigationStepper.jsx";
import CetakNota from "../CetakNota.jsx";
import { simpanLocal } from "../../../config/Helper.jsx";

const { SearchBar } = Search;
const { ExportCSVButton } = CSVExport;

const maptostate = (state) => {
  return {
    permintaan_temp: state.stocking.permintaan_temp,
    pengeluaran_selected: state.stocking.pengeluaran_selected,
  };
};

class PengeluaranBarang extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      modalDialog: false,
      isLoading: false,
      step: 0,
      step1: "row",
      step2: "row d-none",
      columns: [
        {
          dataField: "kode_barcode",
          text: "Kode barcode",
          sort: true,
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
          text: "kwalitas",
        },
        {
          dataField: "ukuran",
          text: "Ukuran",
        },
        {
          dataField: "stock",
          text: "Stock",
        },
        {
          dataField: "qty",
          text: "Qty",
        },
      ],
      dataPermintaan: [
        {
          no_permintaan: "PB-01282021-0001",
          kode_barcode: "BARCODE1234",
          nama_barang: "BARANG1",
          merk: "YAMAHA",
          kwalitas: "ORI",
          ukuran: "20L",
          stock: 100,
          qty: 80,
        },
        {
          no_permintaan: "PB-01282021-0002",
          kode_barcode: "BARCODE12345",
          nama_barang: "BARANG2",
          merk: "YAMAHA",
          kwalitas: "ORI",
          ukuran: "20L",
          stock: 100,
          qty: 80,
        },
      ],
    };
  }

  componentDidMount() {
    this.props.dispatch(getPengeluaranBarang());
    localStorage.removeItem("FakturTerpilih");
    this.props.dispatch(getPengeluaranBarangSelected());
  }
  nextStep() {
    switch (this.state.step) {
      case 0:
        this.setState({
          step: this.state.step + 1,
          step1: "row d-none",
          step2: "row",
        });
        this.props.dispatch(getPengeluaranBarangSelected());
        break;
      default:
        break;
    }
  }
  prevStep() {
    switch (this.state.step) {
      case 1:
        this.setState({
          step: this.state.step - 1,
          step1: "row ",
          step2: "row d-none",
        });
        break;
      default:
        break;
    }
  }
  handleValidasi(hasil) {
    if (localStorage.getItem("FakturTerpilih") === null) {
      NotifError("Faktur Terpilih Kosong");
      return false;
    }
    let data = JSON.parse(localStorage.getItem("FakturTerpilih")) || [];
    let array = {
      nomor_pengeluaran: this.state.nomor_pengeluaran,
      tanggal: this.state.tanggal,
      nomor_pb: this.state.nomor_pb,
      list_barang: data,
    };
    simpanLocal("tt_pengeluaran_barang", array);
    let tableRows = [];
    data.forEach((list, index) => {
      let rows = [
        ++index,
        list.kode_barcode,
        list.nama_barang,
        list.merk,
        list.kwalitas,
        list.qty,
      ];
      tableRows.push(rows);
    });
    let columnTabel = ["NO", "BARCODE", "JENIS BARANG", "MERK", "KW", "QTY"];
    CetakNota(
      "Tanggal",
      "01-28-2021",
      "NAMA",
      "OCTAVIAN",
      "NO PERMINTAAN",
      "MB01282021-0001",
      "DIVISI",
      "SALES",
      "ADMIN",
      "01-28-2021",
      "ADMIN",
      columnTabel,
      "BUKTI PERMINTAAN BARANG",
      tableRows,
      true
    );
  }
  render() {
    const selectRow = {
      mode: "checkbox",
      clickToSelect: true,
      onSelect: (row, isSelect, rowIndex, e) => {
        console.log(row.noFaktur);
        let array = JSON.parse(localStorage.getItem("FakturTerpilih")) || [];
        const data = {
          nomor_permintaan: row.no_permintaan,
          kode_barcode: row.kode_barcode,
          nama_barang: row.nama_barang,
          merk: row.merk,
          kwalitas: row.kwalitas,
          ukuran: row.ukuran,
          stock: row.stock,
          qty: row.qty,
        };
        if (isSelect) {
          var index1 = array.findIndex((item, i) => {
            return item.no_permintaan === row.no_permintaan;
          });
          if (index1 < 0) {
            array.push(data);
          } else {
            array.splice(index1, 1);
          }
          localStorage.setItem("FakturTerpilih", JSON.stringify(array));
        } else {
          var index = array.findIndex((item, i) => {
            return item.no_permintaan === row.no_permintaan;
          });
          array.splice(index, 1);
          localStorage.setItem("FakturTerpilih", JSON.stringify(array));
        }
      },
      onSelectAll: (isSelect, rows, e) => {
        var array = [];
        rows.forEach(function (list) {
          const data = {
            no_permintaan: list.no_permintaan,
            kode_barcode: list.kode_barcode,
            nama_barang: list.nama_barang,
            merk: list.merk,
            kwalitas: list.kwalitas,
            ukuran: list.ukuran,
            stock: list.stock,
            qty: list.qty,
          };
          array.push(data);
        });
        if (isSelect) {
          localStorage.setItem("FakturTerpilih", JSON.stringify(array));
        } else {
          localStorage.removeItem("FakturTerpilih");
        }
      },
    };
    return (
      <div>
        <ol className="breadcrumb float-xl-right">
          <li className="breadcrumb-item">
            <Link to="#">Stocking</Link>
          </li>
          <li className="breadcrumb-item active">Pengeluaran Barang</li>
        </ol>
        <h1 className="page-header">Pengeluaran Barang </h1>
        <Panel>
          <PanelHeader>Pengeluaran Barang</PanelHeader>
          <br />
          <PanelBody>
            <div className="mb-3">
              <Stepper
                steps={[{ title: "Pilih Faktur" }, { title: "Data Terpilih" }]}
                activeStep={0}
              />
            </div>
            <div className={this.state.step1}>
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label htmlFor="">No Pengeluaran</label>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) =>
                          this.setState({
                            nomor_pengeluaran: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label htmlFor="">Tanggal</label>
                      <input
                        type="date"
                        className="form-control"
                        onChange={(e) =>
                          this.setState({
                            tanggal: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label htmlFor="">Nomor PB</label>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) =>
                          this.setState({
                            nomor_pb: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="text-right">
                    <button className="btn btn-primary">CARI DATA</button>
                  </div>
                </div>
              </div>
              {/* Master Kategori */}
              {this.state.dataPermintaan ? (
                <div className="col-lg-12">
                  <ToolkitProvider
                    keyField="no_permintaan"
                    data={this.state.dataPermintaan || []}
                    columns={this.state.columns}
                    search
                    exportCSV={{
                      fileName: "Export Master Kategori.csv",
                    }}
                  >
                    {(props) => (
                      <div className="row">
                        <div className="col-6">
                          <div className="text-left">
                            <SearchBar {...props.searchProps} />
                          </div>
                        </div>
                        <div className="col-6"></div>
                        <hr />
                        <div className="col-12">
                          <BootstrapTable
                            pagination={paginationFactory()}
                            selectRow={selectRow}
                            {...props.baseProps}
                          />
                          <br />
                          <ExportCSVButton {...props.csvProps}>
                            Export CSV!!
                          </ExportCSVButton>
                        </div>
                      </div>
                    )}
                  </ToolkitProvider>
                </div>
              ) : (
                <Skeleton width={"100%"} height={400} />
              )}
              <br />
              {/* End Master Kategori */}
              <NavigationStepper
                nextName="Next"
                first
                nextStep={() => this.nextStep(0)}
              />
              {/* End Tambah Master Kategori  */}
            </div>
            <div className={this.state.step2}>
              {/* Master Kategori */}
              {this.props.pengeluaran_selected ? (
                <div className="col-lg-12">
                  <ToolkitProvider
                    keyField="no_permintaan"
                    data={this.props.pengeluaran_selected || []}
                    columns={this.state.columns}
                    search
                    exportCSV={{
                      fileName: "Export Master Kategori.csv",
                    }}
                  >
                    {(props) => (
                      <div className="row">
                        <div className="col-6">
                          <div className="text-left">
                            <SearchBar {...props.searchProps} />
                          </div>
                        </div>
                        <div className="col-6"></div>
                        <hr />
                        <div className="col-12">
                          <BootstrapTable
                            pagination={paginationFactory()}
                            {...props.baseProps}
                          />
                          <br />
                          <ExportCSVButton {...props.csvProps}>
                            Export CSV!!
                          </ExportCSVButton>
                        </div>
                      </div>
                    )}
                  </ToolkitProvider>
                </div>
              ) : (
                <Skeleton width={"100%"} height={400} />
              )}
              <br />
              <NavigationStepper
                nextName="Simpan"
                prevStep={() => this.prevStep(1)}
                nextStep={() => this.handleValidasi()}
                simpan
              />
              {/* End Master Kategori */}
            </div>
          </PanelBody>
        </Panel>
      </div>
    );
  }
}

export default connect(maptostate, null)(PengeluaranBarang);
