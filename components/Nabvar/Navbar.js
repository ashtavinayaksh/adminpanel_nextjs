import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import the icons you need
import {
    faBars, faBell, faCog, faCommentAlt, faCreditCard, faSearch, faSignOutAlt, faTasks, faUser,
  } from "@fortawesome/free-solid-svg-icons";

import img1 from "../../public/img/theme/light/team-4-800x800.jpg";
import img2 from "../../public/img/icons/essential/detailed/DOC_File.svg";
import img3 from "../../public/img/icons/essential/detailed/Mobile_UI.svg";
import img4 from "../../public/img/theme/light/team-4-800x800.jpg";

export default function Navbar() {
    return (
      <>
      <nav className="navbar navbar-main navbar-expand-lg navbar-dark bg-primary navbar-border" id="navbar-main">
        <div className="container-fluid">
          {/* <!-- Brand + Toggler (for mobile devices) --> */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-main-collapse" aria-controls="navbar-main-collapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <!-- User's navbar --> */}
          <div className="navbar-user d-lg-none ml-auto">
            <ul className="navbar-nav flex-row align-items-center">
              <li className="nav-item">
                <a href="#" className="nav-link nav-link-icon sidenav-toggler" data-action="sidenav-pin" data-target="#sidenav-main"><FontAwesomeIcon icon={faBars} /></a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link nav-link-icon" data-action="omnisearch-open" data-target="#omnisearch"><FontAwesomeIcon icon={faSearch} /></a>
              </li>
              <li className="nav-item dropdown dropdown-animate">
                <a className="nav-link nav-link-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><FontAwesomeIcon icon={faBell} /></a>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg dropdown-menu-arrow p-0">
                  <div className="py-3 px-3">
                    <h5 className="heading h6 mb-0">Notifications</h5>
                  </div>
                  <div className="list-group list-group-flush">
                    <a href="#" className="list-group-item list-group-item-action">
                      <div className="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="2 hrs ago">
                        <div>
                          <span className="avatar bg-primary text-white rounded-circle">AM</span>
                        </div>
                        <div className="flex-fill ml-3">
                          <div className="h6 text-sm mb-0">Alex Michael <small className="float-right text-muted">2 hrs ago</small></div>
                          <p className="text-sm lh-140 mb-0">
                            Some quick example text to build on the card title.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                      <div className="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="3 hrs ago">
                        <div>
                          <span className="avatar bg-warning text-white rounded-circle">SW</span>
                        </div>
                        <div className="flex-fill ml-3">
                          <div className="h6 text-sm mb-0">Sandra Wayne <small className="float-right text-muted">3 hrs ago</small></div>
                          <p className="text-sm lh-140 mb-0">
                            Some quick example text to build on the card title.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                      <div className="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="5 hrs ago">
                        <div>
                          <span className="avatar bg-info text-white rounded-circle">JM</span>
                        </div>
                        <div className="flex-fill ml-3">
                          <div className="h6 text-sm mb-0">Jason Miller <small className="float-right text-muted">5 hrs ago</small></div>
                          <p className="text-sm lh-140 mb-0">
                            Some quick example text to build on the card title.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                      <div className="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="2 hrs ago">
                        <div>
                          <span className="avatar bg-dark text-white rounded-circle">MJ</span>
                        </div>
                        <div className="flex-fill ml-3">
                          <div className="h6 text-sm mb-0">Mike Thomson <small className="float-right text-muted">2 hrs ago</small></div>
                          <p className="text-sm lh-140 mb-0">
                            Some quick example text to build on the card title.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                      <div className="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="3 hrs ago">
                        <div>
                          <span className="avatar bg-primary text-white rounded-circle">RN</span>
                        </div>
                        <div className="flex-fill ml-3">
                          <div className="h6 text-sm mb-0">Richard Nixon <small className="float-right text-muted">3 hrs ago</small></div>
                          <p className="text-sm lh-140 mb-0">
                            Some quick example text to build on the card title.
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="py-3 text-center">
                    <a href="#" className="link link-sm link--style-3">View all notifications</a>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown dropdown-animate">
                <a className="nav-link pr-lg-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span className="avatar avatar-sm rounded-circle">
                    <Image alt="Image placeholder" src={img1}/>
                  </span>
                </a>
                <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right dropdown-menu-arrow">
                  <h6 className="dropdown-header px-0">Hi, Heather!</h6>
                  <a href="../application/user/profile.html" className="dropdown-item">
                    <i className="fas fa-user"></i>
                    <span>My profile</span>
                  </a>
                  <a href="../application/account/settings.html" className="dropdown-item">
                    <i className="fas fa-cog"></i>
                    <span>Settings</span>
                  </a>
                  <a href="../application/account/billing.html" className="dropdown-item">
                    <i className="fas fa-credit-card"></i>
                    <span>Billing</span>
                  </a>
                  <a href="../application/shop/orders.html" className="dropdown-item">
                    <i className="fas fa-shopping-basket"></i>
                    <span>Orders</span>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a href="../application/authentication/login.html" className="dropdown-item">
                    <i className="fas fa-sign-out-alt"></i>
                    <span>Logout</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          {/* <!-- Navbar nav --> */}
          <div className="collapse navbar-collapse navbar-collapse-fade" id="navbar-main-collapse">
            <ul className="navbar-nav align-items-lg-center">
              {/* <!-- Overview  --> */}
              <li className="nav-item d-lg-none ">
                <a className="nav-link" href="../index.html">
                  Overview
                </a>
              </li>
              <li className="border-top opacity-2 my-2"></li>
              {/* <!-- Home  --> */}
              <li className="nav-item ">
                <a className="nav-link pl-lg-0" href="/home">
                  Home
                </a>
              </li>
              {/* <!-- Application menu --> */}
              <li className="nav-item dropdown dropdown-animate" data-toggle="hover">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Application
                </a>
                <div className="dropdown-menu dropdown-menu-arrow p-lg-0">
                  {/* <!-- Top dropdown menu --> */}
                  <div className="p-lg-4">
                    <div className="dropdown dropdown-animate dropdown-submenu" data-toggle="hover">
                      <a href="/project/overview" className="dropdown-item dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Project
                      </a>
                      <div className="dropdown-menu"><a className="dropdown-item" href="/project/card-listing">
                          Card listing
                        </a>
                        <a className="dropdown-item" href="/project/table-listing">
                          Table listing
                        </a>
                        <a className="dropdown-item" href="/project/overview">
                          Overview
                        </a>
                        <a className="dropdown-item" href="/project/create-new">
                          Create new
                        </a>
                      </div>
                    </div>
                    <div className="dropdown dropdown-animate dropdown-submenu" data-toggle="hover">
                      <a href="/" className="dropdown-item dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Task
                      </a>
                      <div className="dropdown-menu"><a className="dropdown-item" href="/task/tableListing">
                          Table listing
                        </a>
                        <a className="dropdown-item" href="/task/kanban-board">
                          Kanban board
                        </a>
                        <a className="dropdown-item" href="/task/createNew">
                          Create new
                        </a>
                      </div>
                    </div>
                    <div className="dropdown dropdown-animate dropdown-submenu" data-toggle="hover">
                      <a href="/profile" className="dropdown-item dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        User
                      </a>
                      <div className="dropdown-menu"><a className="dropdown-item" href="/user/cardListing">
                          Card listing
                        </a>
                        <a className="dropdown-item" href="/user/tableListing">
                          Table listing
                        </a>
                        <a className="dropdown-item" href="/user/profile">
                          Profile
                        </a>
                      </div>
                    </div>
                    <div className="dropdown dropdown-animate dropdown-submenu" data-toggle="hover">
                      <a href="#" className="dropdown-item dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Authentication
                      </a>
                      <div className="dropdown-menu"><a className="dropdown-item" href="/authentication/login">
                          Login
                        </a>
                        <a className="dropdown-item" href="/authentication/register">
                          Register
                        </a>
                        <a className="dropdown-item" href="/authentication/recover">
                          Recover
                        </a>
                      </div>
                    </div>
                    <div className="dropdown dropdown-animate dropdown-submenu" data-toggle="hover">
                      <a href="#" className="dropdown-item dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Account
                      </a>
                      <div className="dropdown-menu"><a className="dropdown-item" href="/account/profile">
                          Profile
                        </a>
                        <a className="dropdown-item" href="/account/settings">
                          Settings
                        </a>
                        <a className="dropdown-item" href="../application/account/billing.html">
                          Billing
                        </a>
                        <a className="dropdown-item" href="/notification">
                          Notifications
                        </a>
                        <a className="dropdown-item" href="/account/addresses">
                          Addresses
                        </a>
                      </div>
                    </div>
                    <div className="dropdown dropdown-animate dropdown-submenu" data-toggle="hover">
                      <a href="#" className="dropdown-item dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Shop
                      </a>
                      <div className="dropdown-menu"><a className="dropdown-item" href="../application/shop/card-listing.html">
                          Card listing
                        </a>
                        <a className="dropdown-item" href="../application/shop/table-listing.html">
                          Table listing
                        </a>
                        <a className="dropdown-item" href="../application/shop/product.html">
                          Product
                        </a>
                        <a className="dropdown-item" href="../application/shop/orders.html">
                          Orders
                        </a>
                        <a className="dropdown-item" href="../application/shop/order-description.html">
                          Order description
                        </a>
                        <a className="dropdown-item" href="../application/shop/cart.html">
                          Cart
                        </a>
                        <a className="dropdown-item" href="../application/shop/sellers.html">
                          Sellers
                        </a>
                        <a className="dropdown-item" href="/shop/invoices">
                          Invoices
                        </a>
                        <a className="dropdown-item" href="../application/shop/invoice-description.html">
                          Invoice description
                        </a>
                      </div>
                    </div>
                    <div className="dropdown dropdown-animate dropdown-submenu" data-toggle="hover">
                      <a href="#" className="dropdown-item dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Utility
                      </a>
                      <div className="dropdown-menu"><a className="dropdown-item" href="../application/utility/error-404.html">
                          Error 404
                        </a>
                        <a className="dropdown-item" href="../application/utility/error-500.html">
                          Error 500
                        </a>
                        <a className="dropdown-item" href="../application/utility/maintenance-mode.html">
                          Maintenance mode
                        </a>
                        <a className="dropdown-item" href="../application/utility/faq.html">
                          Faq
                        </a>
                        <a className="dropdown-item" href="../application/utility/topic.html">
                          Topic
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Bottom dropdown menu --> */}
                  <div className="dropdown-menu-links rounded-bottom delimiter-top p-lg-4">
                    <div className="row">
                      <div className="col-sm-6">
                        <a href="../application/calendar.html" className="dropdown-item">Calendar</a>
                        <a href="/timeline" className="dropdown-item">Timeline</a>
                      </div>
                      <div className="col-sm-6">
                        <a href="/task/kanban-board" className="dropdown-item">Kanban board</a>
                        <a href="../application/google-map.html" className="dropdown-item">Google map</a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/widgets">
                  Widgets
                </a>
              </li>
              <li className="nav-item dropdown dropdown-animate" data-toggle="hover">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Docs</a>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg dropdown-menu-arrow p-0">
                  <ul className="list-group list-group-flush">
                    <li>
                      <a href="../docs/index.html" className="list-group-item list-group-item-action" role="button">
                        <div className="media d-flex align-items-center">
                          {/* <!-- SVG icon --> */}
                          <figure style={{width: "50px"}}>
                            <Image alt="Image placeholder" src={img2} className="svg-inject img-fluid" style={{height: "50px"}}/>
                          </figure>
                          {/* <!-- Media body --> */}
                          <div className="media-body ml-3">
                            <h6 className="mb-1">Documentation</h6>
                            <p className="mb-0">Awesome section examples for any scenario.</p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="../docs/components/index.html" className="list-group-item list-group-item-action" role="button">
                        <div className="media d-flex align-items-center">
                          {/* <!-- SVG icon --> */}
                          <figure style={{width: "50px"}}>
                            <Image alt="Image placeholder" src={img3} className="svg-inject img-fluid" style={{height: "50px"}}/>
                          </figure>
                          {/* <!-- Media body --> */}
                          <div className="media-body ml-3">
                            <h6 className="mb-1">Components</h6>
                            <p className="mb-0">Awesome section examples for any scenario.</p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                  <div className="dropdown-menu-links rounded-bottom delimiter-top p-4">
                    <div className="row">
                      <div className="col-sm-6">
                        <a href="../docs/getting-started/installation.html" className="dropdown-item">Installation</a>
                        <a href="../docs/getting-started/file-structure.html" className="dropdown-item">File structure</a>
                        <a href="../docs/getting-started/build-tools.html" className="dropdown-item">Build tools</a>
                        <a href="../docs/getting-started/customization.html" className="dropdown-item">Customization</a>
                      </div>
                      <div className="col-sm-6">
                        <a href="../docs/getting-started/plugins.html" className="dropdown-item">Using plugins</a>
                        <a href="../docs/components/index.html" className="dropdown-item">Components</a>
                        <a href="../docs/plugins/animate.html" className="dropdown-item">Plugins</a>
                        <a href="../docs/support.html" className="dropdown-item">Support</a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="border-top opacity-2 my-2"></li>
              {/* <!-- Docs menu --> */}
              <li className="nav-item d-lg-none">
                <a className="nav-link" href="../docs/index.html">
                  Docs
                </a>
              </li>
              <li className="nav-item d-lg-none">
                <a className="nav-link" href="../application/authentication/register.html">
                  Register
                </a>
              </li>
              <li className="nav-item d-lg-none">
                <a className="nav-link" href="../application/authentication/login.html">
                  Sign in
                </a>
              </li>
            </ul>
            {/* <!-- Right menu --> */}
            <ul className="navbar-nav ml-lg-auto align-items-center d-none d-lg-flex">
              <li className="nav-item">
                <a href="#" className="nav-link nav-link-icon sidenav-toggler" data-action="sidenav-pin" data-target="#sidenav-main"><FontAwesomeIcon icon={faBars} /></a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link nav-link-icon" data-action="omnisearch-open" data-target="#omnisearch"><FontAwesomeIcon icon={faSearch} /></a>
              </li>
              <li className="nav-item">
                <a href="#modal-chat" className="nav-link nav-link-icon" data-toggle="modal"><FontAwesomeIcon icon={faCommentAlt} /></a>
              </li>
              <li className="nav-item dropdown dropdown-animate">
                <a className="nav-link nav-link-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><FontAwesomeIcon icon={faBell} /></a>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg dropdown-menu-arrow p-0">
                  <div className="py-3 px-3">
                    <h5 className="heading h6 mb-0">Notifications</h5>
                  </div>
                  <div className="list-group list-group-flush">
                    <a href="#" className="list-group-item list-group-item-action">
                      <div className="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="2 hrs ago">
                        <div>
                          <span className="avatar bg-primary text-white rounded-circle">AM</span>
                        </div>
                        <div className="flex-fill ml-3">
                          <div className="h6 text-sm mb-0">Alex Michael <small className="float-right text-muted">2 hrs ago</small></div>
                          <p className="text-sm lh-140 mb-0">
                            Some quick example text to build on the card title.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                      <div className="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="3 hrs ago">
                        <div>
                          <span className="avatar bg-warning text-white rounded-circle">SW</span>
                        </div>
                        <div className="flex-fill ml-3">
                          <div className="h6 text-sm mb-0">Sandra Wayne <small className="float-right text-muted">3 hrs ago</small></div>
                          <p className="text-sm lh-140 mb-0">
                            Some quick example text to build on the card title.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                      <div className="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="5 hrs ago">
                        <div>
                          <span className="avatar bg-info text-white rounded-circle">JM</span>
                        </div>
                        <div className="flex-fill ml-3">
                          <div className="h6 text-sm mb-0">Jason Miller <small className="float-right text-muted">5 hrs ago</small></div>
                          <p className="text-sm lh-140 mb-0">
                            Some quick example text to build on the card title.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                      <div className="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="2 hrs ago">
                        <div>
                          <span className="avatar bg-dark text-white rounded-circle">MJ</span>
                        </div>
                        <div className="flex-fill ml-3">
                          <div className="h6 text-sm mb-0">Mike Thomson <small className="float-right text-muted">2 hrs ago</small></div>
                          <p className="text-sm lh-140 mb-0">
                            Some quick example text to build on the card title.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                      <div className="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="3 hrs ago">
                        <div>
                          <span className="avatar bg-primary text-white rounded-circle">RN</span>
                        </div>
                        <div className="flex-fill ml-3">
                          <div className="h6 text-sm mb-0">Richard Nixon <small className="float-right text-muted">3 hrs ago</small></div>
                          <p className="text-sm lh-140 mb-0">
                            Some quick example text to build on the card title.
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="py-3 text-center">
                    <a href="#" className="link link-sm link--style-3">View all notifications</a>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown dropdown-animate">
                <a className="nav-link pr-lg-0" href='/profile' role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <div className="media media-pill align-items-center">
                    <span className="avatar rounded-circle">
                      <Image alt="Image placeholder" src={img4}/>
                    </span>
                    <div className="ml-2 d-none d-lg-block">
                      <span className="mb-0 text-sm  font-weight-bold">John Snow</span>
                    </div>
                  </div>
                </a>
                <div id="pro" className="dropdown-menu dropdown-menu-sm dropdown-menu-right dropdown-menu-arrow">
                  <h6 className="dropdown-header px-0">Hi, John!</h6>
                  <a href="#!" className="dropdown-item">
                  <FontAwesomeIcon icon={faUser} />
                    <span>My profile</span>
                  </a>
                  <a href="#!" className="dropdown-item">
                  <FontAwesomeIcon icon={faCog} />
                    <span>Settings</span>
                  </a>
                  <a href="#!" className="dropdown-item">
                  <FontAwesomeIcon icon={faCreditCard} />
                    <span>Billing</span>
                  </a>
                  <a href="#!" className="dropdown-item">
                  <FontAwesomeIcon icon={faTasks} />
                    <span>Activity</span>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a href="#!" className="dropdown-item">
                  <FontAwesomeIcon icon={faSignOutAlt} />
                    <span>Logout</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </>
    )}