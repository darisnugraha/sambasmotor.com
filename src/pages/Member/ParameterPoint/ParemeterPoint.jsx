import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Panel, PanelBody, PanelHeader } from "../../../components/panel/panel";
import HeadParameterPoint from "./HeadParameterPoint";

class ParameterPoint extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <ol className="breadcrumb float-xl-right">
          <li className="breadcrumb-item">
            <Link to="#">Stock Opname</Link>
          </li>
          <li className="breadcrumb-item active">Parameter Point</li>
        </ol>
        <h1 className="page-header"> Parameter Point </h1>
        <Panel>
          <PanelHeader> Parameter Point</PanelHeader>
          <PanelBody>
            <div className="col-lg-12 mt-3">
              <HeadParameterPoint />
            </div>
          </PanelBody>
        </Panel>
      </div>
    );
  }
}

export default ParameterPoint;
