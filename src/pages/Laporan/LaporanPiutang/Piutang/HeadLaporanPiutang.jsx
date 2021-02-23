import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";

class HeadLaporanPiutang extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="row">
          <div className="col-lg-12">
            <div className="text-right">
              <button className="btn btn-primary">
                Lihat Data <i className="fa fa-print ml-3"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

HeadLaporanPiutang = reduxForm({
  form: "HeadLaporanPiutang",
  enableReinitialize: true,
})(HeadLaporanPiutang);
export default connect()(HeadLaporanPiutang);
