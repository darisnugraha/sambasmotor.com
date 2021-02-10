import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";

class HeadLaporanHutangSupplier extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
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

HeadLaporanHutangSupplier = reduxForm({
  form: "HeadLaporanHutangSupplier",
  enableReinitialize: true,
})(HeadLaporanHutangSupplier);
export default connect()(HeadLaporanHutangSupplier);
