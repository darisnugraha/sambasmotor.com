import React from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Swal from "sweetalert2";
import user_foto from "../../../assets/img/user/user-13.jpg";

const logout = () => {
  Swal.fire({
    title: "Konfirmasi Keluar !!",
    text: "Apkah anda ingin keluar ?",
    icon: "info",
    position: "top-center",
    cancelButtonText: "Tidak",
    showCancelButton: true,
    confirmButtonText: "OK",
    showConfirmButton: true,
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.reload();
      localStorage.clear();
      localStorage.setItem("islogin", "false");
    }
  });
};
class DropdownProfile extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  render() {
    return (
      <Dropdown
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}
        className="dropdown navbar-user"
        tag="li"
      >
        <DropdownToggle tag="a">
          <img src={user_foto} alt="" />
          <span className="d-none d-md-inline" style={{ cursor: "pointer" }}>
            Samsul Arifin
          </span>{" "}
          <b className="caret"></b>
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu dropdown-menu-right" tag="ul">
          <DropdownItem>Edit Profile</DropdownItem>
          <DropdownItem>Setting</DropdownItem>
          <div className="dropdown-divider"></div>
          <DropdownItem>
            {/* <button onClick={() => logout()}>Log Out </button> */}
            <Link to="#" onClick={() => logout()}>
              {" "}
              Logout{" "}
            </Link>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default DropdownProfile;
