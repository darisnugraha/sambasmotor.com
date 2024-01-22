import React, { Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, Route, withRouter } from "react-router-dom";
import routes from "./../../config/page-route.jsx";
import { PageSettings } from "./../../config/page-settings.js";
import access from "../../assets/accessDenied.svg";

function setTitle(path, routeArray) {
  var pageTitle;
  for (var i = 0; i < routeArray.length; i++) {
    if (routeArray[i].path === path) {
      pageTitle = "Sambas Motor | " + routeArray[i].title;
    }
  }
  document.title = pageTitle ? pageTitle : "Sambas Motor | React App";
}

class Content extends React.Component {
  componentDidMount() {
    setTitle(this.props.history.location.pathname, routes);
    // console.log(this.checkAcces());
  }
  componentWillMount() {
    this.props.history.listen(() => {
      setTitle(this.props.history.location.pathname, routes);
    });
  }

  checkAcces() {
    let array = JSON.parse(localStorage.getItem("Menu")) || []; //ganti dengan hak akses dari API
    let data = this.props.history.location.pathname;
    let hasil = array.findIndex((res) => res === data);
    return data === "/" ? 2 : hasil;
    // return 3;
  }
  render() {
    return (
      <Suspense fallback={<Skeleton width={"100%"} height={1000} />}>
        <PageSettings.Consumer>
          {({
            pageContentFullWidth,
            pageContentClass,
            pageContentInverseMode,
          }) => (
            <div
              className={
                "content " +
                (pageContentFullWidth ? "content-full-width " : "") +
                (pageContentInverseMode ? "content-inverse-mode " : "") +
                pageContentClass
              }
            >
                <>
                  {routes.map((route, index) => (
                    <Route
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      component={route.component}
                    />
                  ))}
                </>
            </div>
          )}
        </PageSettings.Consumer>
      </Suspense>
    );
  }
}

export default withRouter(Content);
