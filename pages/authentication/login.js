import React from "react";

export default function Login() {
  return (
    <>
        {/* <!-- Application container --> */}
        <div className="container-fluid container-application">
          {/* <!-- Content --> */}
          <div className="main-content position-relative">
            {/* <!-- Page content --> */}
            <div className="page-content">
              <div className="min-vh-100 py-5 d-flex align-items-center">
                <div className="w-100">
                  <div className="row justify-content-center">
                    <div className="col-sm-8 col-lg-4">
                      <div className="card shadow zindex-100 mb-0">
                        <div className="card-body px-md-5 py-5">
                          <div className="mb-5">
                            <h6 className="h3">Login</h6>
                            <p className="text-muted mb-0">
                              Sign in to your account to continue.
                            </p>
                          </div>
                          <span className="clearfix"></span>
                          <form role="form">
                            <div className="form-group">
                              <label className="form-control-label">
                                Email address
                              </label>
                              <div className="input-group input-group-merge">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="fas fa-user"></i>
                                  </span>
                                </div>
                                <input
                                  type="email"
                                  className="form-control"
                                  id="input-email"
                                  placeholder="name@example.com"
                                />
                              </div>
                            </div>
                            <div className="form-group mb-4">
                              <div className="d-flex align-items-center justify-content-between">
                                <div>
                                  <label className="form-control-label">
                                    Password
                                  </label>
                                </div>
                                <div className="mb-2">
                                  <a
                                    href="/authentication/recover"
                                    className="small text-muted text-underline--dashed border-primary"
                                  >
                                    Lost password?
                                  </a>
                                </div>
                              </div>
                              <div className="input-group input-group-merge">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="fas fa-key"></i>
                                  </span>
                                </div>
                                <input
                                  type="password"
                                  className="form-control"
                                  id="input-password"
                                  placeholder="Password"
                                />
                                <div className="input-group-append">
                                  <span className="input-group-text">
                                    <a
                                      href="#"
                                      data-toggle="password-text"
                                      data-target="#input-password"
                                    >
                                      <i className="fas fa-eye"></i>
                                    </a>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="mt-4">
                              <button
                                type="button"
                                className="btn btn-sm btn-primary btn-icon rounded-pill"
                              >
                                <span className="btn-inner--text">Sign in</span>
                                <span className="btn-inner--icon">
                                  <i className="fas fa-long-arrow-alt-right"></i>
                                </span>
                              </button>
                            </div>
                          </form>
                        </div>
                        <div className="card-footer px-md-5">
                          <small>Not registered? </small>
                          <a href="/authentication/register" className="small font-weight-bold">
                            Create account
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
