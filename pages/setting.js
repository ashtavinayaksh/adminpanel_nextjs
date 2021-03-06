import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faKey,
  faLongArrowAltRight,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Nabvar/Navbar";
import Footer from "../components/Footer/Footer";

export default function Setting() {
  return (
    <>
    <Navbar />
      <div className="page-content" style={{paddingLeft:"20px",marginTop:"14px", marginBottom:"14px",paddingRight:"20px"}}>
        {/* <!-- Page title --> */}
        <div class="page-title">
          <div class="row justify-content-between align-items-center">
            <div class="col-md-6 d-flex align-items-center justify-content-between justify-content-md-start mb-3 mb-md-0">
              {/* <!-- Page title + Go Back button --> */}
              <div class="d-inline-block">
                <h5 class="h4 d-inline-block font-weight-400 mb-0 text-white">
                  Account settings
                </h5>
              </div>
              {/* <!-- Additional info --> */}
            </div>
            <div class="col-md-6 d-flex align-items-center justify-content-between justify-content-md-end"></div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 order-lg-2">
            <div class="card">
              <div class="list-group list-group-flush">
                <div class="list-group-item active">
                  <div class="media">
                    <i class="fas fa-user"></i>
                    <div class="media-body ml-3">
                      <a href="settings.html" class="stretched-link h6 mb-1">
                        Settings
                      </a>
                      <p class="mb-0 text-sm">
                        Details about your personal information
                      </p>
                    </div>
                  </div>
                </div>
                <div class="list-group-item">
                  <div class="media">
                    <i class="fas fa-map-marker-alt"></i>
                    <div class="media-body ml-3">
                      <a href="addresses.html" class="stretched-link h6 mb-1">
                        Addresses
                      </a>
                      <p class="mb-0 text-sm">
                        Faster checkout with saved addresses
                      </p>
                    </div>
                  </div>
                </div>
                <div class="list-group-item">
                  <div class="media">
                    <i class="fas fa-credit-card"></i>
                    <div class="media-body ml-3">
                      <a href="billing.html" class="stretched-link h6 mb-1">
                        Billing
                      </a>
                      <p class="mb-0 text-sm">
                        Speed up your shopping experience
                      </p>
                    </div>
                  </div>
                </div>
                <div class="list-group-item">
                  <div class="media">
                    <i class="fas fa-file-invoice"></i>
                    <div class="media-body ml-3">
                      <a
                        href="payment-history.html"
                        class="stretched-link h6 mb-1"
                      >
                        Payment history
                      </a>
                      <p class="mb-0 text-sm">
                        See previous orders and invoices
                      </p>
                    </div>
                  </div>
                </div>
                <div class="list-group-item">
                  <div class="media">
                    <i class="fas fa-bell"></i>
                    <div class="media-body ml-3">
                      <a
                        href="notifications.html"
                        class="stretched-link h6 mb-1"
                      >
                        Notifications
                      </a>
                      <p class="mb-0 text-sm">
                        Choose what notification you will receive
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8 order-lg-1">
            <div class="card">
              <div class="card-header">
                <h5 class=" h6 mb-0">Change password</h5>
              </div>
              <div class="card-body">
                <form>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="form-control-label">Old password</label>
                        <input class="form-control" type="password" />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="form-control-label">New password</label>
                        <input class="form-control" type="password" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="form-control-label">
                          Confirm password
                        </label>
                        <input class="form-control" type="password" />
                      </div>
                    </div>
                  </div>
                  <div class="mt-4">
                    <button
                      type="button"
                      class="btn btn-sm btn-primary rounded-pill"
                    >
                      Update password
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div class="card">
              <div class="card-header">
                <h5 class=" h6 mb-0">Change username</h5>
              </div>
              <div class="card-body">
                {/* <!-- Button trigger modal --> */}
                <button
                  type="button"
                  class="btn btn-sm btn-secondary rounded-pill"
                  data-toggle="modal"
                  data-target="#modal-change-username"
                >
                  Change username
                </button>
                {/* <!-- Modal --> */}
                <div
                  class="modal fade"
                  id="modal-change-username"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="modal-change-username"
                  aria-hidden="true"
                >
                  <div
                    class="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <form>
                      <div class="modal-content">
                        <div class="modal-header">
                          <div
                            class="modal-title d-flex align-items-center"
                            id="modal-title-change-username"
                          >
                            <div>
                              <div class="icon icon-sm icon-shape icon-info rounded-circle shadow mr-3">
                                <i class="fas fa-user"></i>
                              </div>
                            </div>
                            <div>
                              <h6 class="mb-0">Change username</h6>
                            </div>
                          </div>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <div class="row">
                            <div class="col-sm-6">
                              <div class="form-group">
                                <label class="form-control-label">
                                  Old username
                                </label>
                                <input class="form-control" type="text" />
                              </div>
                            </div>
                            <div class="col-sm-6">
                              <div class="form-group">
                                <label class="form-control-label">
                                  New username
                                </label>
                                <input class="form-control" type="text" />
                              </div>
                            </div>
                          </div>
                          <div class="px-5 pt-4 mt-4 delimiter-top text-center">
                            <p class="text-muted text-sm">
                              You will receive an email where you will be asked
                              to confirm this action in order to be completed.
                            </p>
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-sm btn-secondary rounded-pill"
                            data-dismiss="modal"
                          >
                            Change my username
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header">
                <h5 class=" h6 mb-0">Danger zone</h5>
              </div>
              <div class="card-body">
                {/* <!-- Button trigger modal --> */}
                <button
                  type="button"
                  class="btn btn-sm btn-danger rounded-pill"
                  data-toggle="modal"
                  data-target="#modal-delete-account"
                >
                  Delete account
                </button>
                {/* <!-- Modal --> */}
                <div
                  class="modal modal-danger fade"
                  id="modal-delete-account"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="modal-delete-account"
                  aria-hidden="true"
                >
                  <div
                    class="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <form class="form-danger">
                      <div class="modal-content">
                        <div class="modal-body">
                          <div class="text-center">
                            <i class="fas fa-exclamation-circle fa-3x opacity-8"></i>
                            <h5 class="text-white mt-4">Should we stop now?</h5>
                            <p class="text-sm text-sm">
                              All your data will be erased. You will no longer
                              be billed, and your username will be available to
                              anyone.
                            </p>
                          </div>
                          <div class="form-group">
                            <label class="form-control-label text-white">
                              You email or username
                            </label>
                            <input class="form-control" type="text" />
                          </div>
                          <div class="form-group">
                            <label class="form-control-label text-white">
                              To verify, type{" "}
                              <span class="font-italic">delete my account</span>{" "}
                              below
                            </label>
                            <input class="form-control" type="text" />
                          </div>
                          <div class="form-group">
                            <label class="form-control-label text-white">
                              Your password
                            </label>
                            <input class="form-control" type="password" />
                          </div>
                          <div class="mt-4">
                            <button
                              type="button"
                              class="btn btn-block btn-sm btn-white text-danger rounded-pill"
                            >
                              Delete my account
                            </button>
                            <button
                              type="button"
                              class="btn btn-block btn-sm btn-link text-light mt-4"
                              data-dismiss="modal"
                            >
                              Not this time
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
