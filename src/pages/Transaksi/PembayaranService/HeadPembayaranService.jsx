import React, { Component } from "react";
import Skeleton from "react-loading-skeleton";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import {
  ReanderField,
  ReanderSelect,
  RenderFieldGroup,
} from "../../../components/notification/notification";
import ToolkitProvider, {
  Search,
  CSVExport,
} from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

const { SearchBar } = Search;
const { ExportCSVButton } = CSVExport;
class HeadPembayaranService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      step1: "row",
      step2: "row d-none",
    };
  }

  handleChange(nama, data) {
    let split = data || "DEFAULT|DEFAULT";
    let hasil = split.split("|");
    this.props.change(nama, hasil[1]);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-4">
                <Field
                  name="tanggal"
                  label="Tanggal"
                  type="text"
                  component={ReanderField}
                />
              </div>
              <div className="col-lg-4">
                <label>Kriteria</label>
                <div className="mt-3">
                  <label className="mr-5">
                    <Field
                      name="kriteria"
                      component="input"
                      type="radio"
                      value="no_polisi"
                      className="mr-3"
                    />
                    No Polisi
                  </label>
                  <label className="mr-5">
                    <Field
                      name="kriteria"
                      component="input"
                      type="radio"
                      value="nama_pemilik"
                      className="mr-3"
                    />
                    Nama Pemilik
                  </label>
                  <label className="mr-5">
                    <Field
                      name="kriteria"
                      component="input"
                      type="radio"
                      value="no_service"
                      className="mr-3"
                    />
                    No Service
                  </label>
                </div>
              </div>
              <div className="col-lg-4">
                <Field
                  name="pencarian"
                  label="Pencarian"
                  type="text"
                  component={RenderFieldGroup}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 mb-3">
                <h4>Data Pemilik</h4>
              </div>
              <div className="col-lg-6 mb-3">
                <h4>Data Kendaraan</h4>
              </div>
              <div className="col-lg-6">
                <div className="col-lg-12">
                  <Field
                    name="nama"
                    component={ReanderField}
                    type="text"
                    label="Nama"
                    placeholder="Masukan Nama"
                  />
                </div>
                <div className="col-lg-12">
                  <Field
                    name="alamat"
                    component={ReanderField}
                    type="text"
                    label="Alamat"
                    placeholder="Masukan Alamat"
                  />
                </div>
                <div className="col-lg-12">
                  <Field
                    name="kota"
                    component={ReanderField}
                    type="text"
                    label="Kota"
                    placeholder="Masukan Kota"
                  />
                </div>
                <div className="col-lg-12">
                  <Field
                    name="handphone"
                    component={ReanderField}
                    type="text"
                    label="Handphone"
                    placeholder="Masukan Handphone"
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="col-lg-12">
                  <Field
                    name="no_polisi"
                    component={ReanderField}
                    type="text"
                    label="Nomor Polisi"
                    placeholder="Masukan Nomor Polisi"
                  />
                </div>
                <div className="col-lg-12">
                  <Field
                    name="merk"
                    component={ReanderSelect}
                    options={[
                      { value: "MERK01", name: "MERK 01" },
                      { value: "MERK02", name: "MERK 02" },
                      { value: "MERK012", name: "MERK 012" },
                      { value: "MERK04", name: "MERK 04" },
                    ]}
                    type="text"
                    label="Merk"
                    placeholder="Masukan Merk"
                  />
                </div>
                <div className="col-lg-12">
                  <Field
                    name="model"
                    component={ReanderSelect}
                    options={[
                      { value: "MODEL01", name: "MODEL 01" },
                      { value: "MODEL02", name: "MODEL 02" },
                      { value: "MODEL012", name: "MODEL 012" },
                      { value: "MODEL04", name: "MODEL 04" },
                    ]}
                    type="text"
                    label="Model"
                    placeholder="Masukan Model"
                  />
                </div>
                <div className="col-lg-12">
                  <Field
                    name="warna"
                    component={ReanderSelect}
                    options={[
                      { value: "WARNA01", name: "WARNA 01" },
                      { value: "WARNA02", name: "WARNA 02" },
                      { value: "WARNA012", name: "WARNA 012" },
                      { value: "WARNA04", name: "WARNA 04" },
                    ]}
                    type="text"
                    label="Warna"
                    placeholder="Masukan Warna"
                  />
                </div>
                <div className="col-lg-12">
                  <Field
                    name="no_mesin"
                    component={ReanderField}
                    type="text"
                    label="Nomor Mesin"
                    placeholder="Masukan Nomor Mesin"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              {this.props.data ? (
                <ToolkitProvider
                  keyField="no_acc"
                  data={this.props.data || []}
                  columns={this.props.columns}
                  search
                  exportCSV={{
                    fileName: "Export Master Kategori.csv",
                  }}
                >
                  {(props) => (
                    <div className="row">
                      <div className="col-12 mb-2">
                        <div className="row">
                          <div className="col-3">
                            <button
                              type="button"
                              onClick={this.props.showBayar}
                              className="btn btn-primary"
                            >
                              Bayar
                              <i className="fa fa-paper-plane ml-3"></i>
                            </button>
                          </div>
                          <div className="col-3">
                            <div className="text-right">
                              <button
                                type="button"
                                className="btn btn-primary"
                                onClick={this.props.showSparepart}
                              >
                                + Sparepart
                                <i className="fa fa-cogs ml-3"></i>
                              </button>
                            </div>
                          </div>
                          <div className="col-3">
                            <button
                              type="button"
                              className="btn btn-primary"
                              onClick={this.props.showJasa}
                            >
                              + Jasa
                              <i className="fa fa-wrench ml-3"></i>
                            </button>
                          </div>
                          <div className="col-3">
                            <div className="text-right">
                              <button type="button" className="btn btn-primary">
                                Batal
                                <i className="fa fa-times ml-3"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="text-right">
                          <SearchBar {...props.searchProps} />
                        </div>
                      </div>
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
              ) : (
                <Skeleton width={"100%"} height={400} />
              )}
            </div>
          </div>
          <div className="col-lg-12 mt-3">
            <div className="text-right">
              <button className="btn btn-primary">
                Simpan <i className="fa fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

HeadPembayaranService = reduxForm({
  form: "HeadPembayaranService",
  enableReinitialize: true,
})(HeadPembayaranService);
export default connect()(HeadPembayaranService);
