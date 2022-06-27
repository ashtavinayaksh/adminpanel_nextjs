import React from "react";

export default function Register() {
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
              <div className="col-sm-8 col-lg-5">
                <div className="card shadow zindex-100 mb-0">
                  <div className="card-body px-md-5 py-5">
                    <div className="mb-5">
                      <h6 className="h3">Create account</h6>
                      <p className="text-muted mb-0">Made with love by developers for developers.</p>
                    </div>
                    <span className="clearfix"></span>
                    <form role="form">
                      <div className="form-group">
                        <label className="form-control-label">Email address</label>
                        <div className="input-group input-group-merge">
                          <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                          </div>
                          <input type="email" className="form-control" id="input-email" placeholder="name@example.com"/>
                        </div>
                      </div>
                      <div className="form-group mb-4">
                        <label className="form-control-label">Password</label>
                        <div className="input-group input-group-merge">
                          <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fas fa-key"></i></span>
                          </div>
                          <input type="password" className="form-control" id="input-password" placeholder="********"/>
                          <div className="input-group-append">
                            <span className="input-group-text">
                              <a href="#" data-toggle="password-text" data-target="#input-password">
                                <i className="fas fa-eye"></i>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-control-label">Confirm password</label>
                        <div className="input-group input-group-merge">
                          <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fas fa-key"></i></span>
                          </div>
                          <input type="password" className="form-control" id="input-password-confirm" placeholder="********"/>
                        </div>
                      </div>
                      <div className="my-4">
                        <div className="custom-control custom-checkbox mb-3">
                          <input type="checkbox" className="custom-control-input" id="check-terms"/>
                          <label className="custom-control-label" for="check-terms">I agree to the <a href="#">terms and conditions</a></label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="check-privacy"/>
                          <label className="custom-control-label" for="check-privacy">I agree to the <a href="#">privacy policy</a></label>
                        </div>
                      </div>
                      <div className="mt-4"><button type="button" className="btn btn-sm btn-primary btn-icon rounded-pill">
                          <span className="btn-inner--text">Create my account</span>
                          <span className="btn-inner--icon"><i className="fas fa-long-arrow-alt-right"></i></span>
                        </button></div>
                    </form>
                  </div>
                  <div className="card-footer px-md-5"><small>Already have an acocunt? </small>
                    <a href="/authentication/login" className="small font-weight-bold">Sign in</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  )}