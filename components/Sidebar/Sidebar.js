import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import img1 from "../../public/img/brand/white.png";
import img2 from "../../public/img/theme/light/team-1-800x800.jpg";
import {
  fa2,
  faCogs,
  faCoins,
  faColumns,
  faCommentAlt,
  faHome,
  faProjectDiagram,
  faReceipt,
  faTasks,
  faUser,
  faUserNinja,
  faUsersCog,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  return (
    <>
      <div className="sidenav" id="sidenav-main">
        {/* <!-- Sidenav header --> */}
        <div className="sidenav-header d-flex align-items-center">
          <a className="navbar-brand" href="../index.html">
            <Image src={img1} className="navbar-brand-img" alt="..." />
          </a>
          <div className="ml-auto">
            {/* <!-- Sidenav toggler --> */}
            <div
              className="sidenav-toggler sidenav-toggler-dark d-md-none"
              data-action="sidenav-unpin"
              data-target="#sidenav-main"
            >
              <div className="sidenav-toggler-inner">
                <i className="sidenav-toggler-line bg-white"></i>
                <i className="sidenav-toggler-line bg-white"></i>
                <i className="sidenav-toggler-line bg-white"></i>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- User mini profile --> */}
        <div className="sidenav-user d-flex flex-column align-items-center justify-content-between text-center">
          {/* <!-- Avatar --> */}
          <div>
            <a href="#" className="avatar rounded-circle avatar-xl">
              <Image alt="Image placeholder" src={img2} className="" />
            </a>
            <div className="mt-4">
              <h5 className="mb-0 text-white">Heather Parker</h5>
              <span className="d-block text-sm text-white opacity-8 mb-3">
                Web Architect
              </span>
              <a
                href="#"
                className="btn btn-sm btn-white btn-icon rounded-pill shadow hover-translate-y-n3"
              >
                <span className="btn-inner--icon">
                  <FontAwesomeIcon icon={faCoins} />
                </span>
                <span className="btn-inner--text">$2.300</span>
              </a>
            </div>
          </div>
          {/* <!-- User info --> */}
          {/* <!-- Actions --> */}
          <div className="w-100 mt-4 actions d-flex justify-content-between">
            <a
              href="../application/user/profile.html"
              className="action-item action-item-lg text-white pl-0"
            >
              <FontAwesomeIcon icon={faUser} />
            </a>
            <a
              href="#modal-chat"
              className="action-item action-item-lg text-white"
              data-toggle="modal"
            >
              <FontAwesomeIcon icon={faCommentAlt} />
            </a>
            <a
              href="../application/shop/invoices.html"
              className="action-item action-item-lg text-white pr-0"
            >
              <FontAwesomeIcon icon={faReceipt} />
            </a>
          </div>
        </div>
        {/* <!-- Application nav --> */}
        <div className="nav-application clearfix">
          <a href="../application/home.html" className="btn btn-square text-sm">
            <span className="btn-inner--icon d-block">
              <FontAwesomeIcon icon={faHome} />
              <FontAwesomeIcon icon={fa2} />
            </span>
            <span className="btn-inner--icon d-block pt-2">Home</span>
          </a>
          <a
            href="../application/project/card-listing.html"
            className="btn btn-square text-sm"
          >
            <span className="btn-inner--icon d-block">
              {/* <i className="fas fa-project-diagram fa-2x"></i> */}
              <FontAwesomeIcon icon={faProjectDiagram} />
              <FontAwesomeIcon icon={fa2} />
            </span>
            <span className="btn-inner--icon d-block pt-2">Projects</span>
          </a>
          <a
            href="../application/task/table-listing.html"
            className="btn btn-square text-sm"
          >
            <span className="btn-inner--icon d-block">
              {/* <i className="fas fa-tasks fa-2x"></i> */}
              <FontAwesomeIcon icon={faTasks} />
              <FontAwesomeIcon icon={fa2} />
            </span>
            <span className="btn-inner--icon d-block pt-2">Tasks</span>
          </a>
          <a
            href="../application/task/kanban-board.html"
            className="btn btn-square text-sm"
          >
            <span className="btn-inner--icon d-block">
              {/* <i className="fas fa-columns fa-2x"></i> */}
              <FontAwesomeIcon icon={faColumns} />
              <FontAwesomeIcon icon={fa2} />
            </span>
            <span className="btn-inner--icon d-block pt-2">Kanban</span>
          </a>
          <a
            href="../application/user/card-listing.html"
            className="btn btn-square text-sm"
          >
            <span className="btn-inner--icon d-block">
              <i className="fas fa-users-cog fa-2x"></i>
              <FontAwesomeIcon icon={faUsersCog} />
              <FontAwesomeIcon icon={fa2} />
            </span>
            <span className="btn-inner--icon d-block pt-2">Users</span>
          </a>
          <a
            href="../application/user/profile.html"
            className="btn btn-square text-sm"
          >
            <span className="btn-inner--icon d-block">
              {/* <i className="fas fa-user-ninja fa-2x"></i> */}
              <FontAwesomeIcon icon={faUserNinja} />
              <FontAwesomeIcon icon={fa2} />
            </span>
            <span className="btn-inner--icon d-block pt-2">Profile</span>
          </a>
          <a
            href="../application/shop/invoices.html"
            className="btn btn-square text-sm"
          >
            <span className="btn-inner--icon d-block">
              {/* <i className="fas fa-receipt fa-2x"></i> */}
              <FontAwesomeIcon icon={faReceipt} />
              <FontAwesomeIcon icon={fa2} />
            </span>
            <span className="btn-inner--icon d-block pt-2">Invoices</span>
          </a>
          <a
            href="../application/widgets.html"
            className="btn btn-square text-sm active"
          >
            <span className="btn-inner--icon d-block">
              {/* <i className="fas fa-cogs fa-2x"></i> */}
              <FontAwesomeIcon icon={faCogs} />
              <FontAwesomeIcon icon={fa2} />
            </span>
            <span className="btn-inner--icon d-block pt-2">Widgets</span>
          </a>
        </div>
      </div>
    </>
  );
}
