import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Nabvar/Navbar";

export default function Home() {
  return (
    <>
    <Navbar />
  {/* <!-- Application container --> */}
  <div class="container-fluid container-application">
    {/* <!-- Content --> */}
    <div class="main-content position-relative">
      {/* <!-- Page content --> */}
      <div class="page-content">
        {/* <!-- Page title --> */}
        <div class="page-title">
          <div class="row justify-content-between align-items-center">
            <div class="col-md-6 mb-3 mb-md-0">
              <h5 class="h3 font-weight-400 mb-0 text-white">Moning, Heather!</h5>
              <span class="text-sm text-white opacity-8">Have a nice day!</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-8 col-md-6">
            <div class="card card-fluid">
              <div class="card-header">
                <h6 class="mb-0">Engagement</h6>
              </div>
              <div class="card-body">
                {/* <!-- Chart --> */}
                <div id="apex-engagement" data-color="primary" data-height="280"></div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-6">
            <div class="card card-fluid">
              <div class="card-body text-center d-flex flex-column justify-content-center">
                <h5 class="mb-4">Emails sent</h5>
                <div class="progress-circle progress-lg mx-auto" id="progress-5" data-progress="50" data-text="98" data-textclass="h1" data-color="warning"></div>
                <div class="d-flex mt-4">
                  <div class="col">
                    <span class="d-block badge badge-dot badge-lg h6">
                      <i class="bg-danger"></i>30 not sent
                    </span>
                    <span class="d-block badge badge-dot badge-lg h6">
                      <i class="bg-success"></i>68 success
                    </span>
                  </div>
                  <div class="col">
                    <span class="d-block badge badge-dot badge-lg h6">
                      <i class="bg-warning"></i>38 opened
                    </span>
                    <span class="d-block badge badge-dot badge-lg h6">
                      <i class="bg-danger"></i>SMTP error
                    </span>
                  </div>
                </div>
                <a href="#" class="btn btn-block btn-secondary mt-auto">Open insights</a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-sm-6">
            <div class="card card-fluid">
              <div class="card-body">
                <div class="row align-items-center mb-4">
                  <div class="col-auto">
                    <div class="progress-circle progress-sm" id="progress-1" data-progress="90" data-color="primary"></div>
                  </div>
                  <div class="col">
                    <a href="#!" class="d-block h6 mb-0">98 tasks solved</a>
                    <a href="#" class="text-sm text-muted">Purpose Website UI</a>
                  </div>
                </div>
                <div class="row align-items-center mb-4">
                  <div class="col-auto">
                    <div class="progress-circle progress-sm" id="progress-2" data-progress="40" data-color="warning"></div>
                  </div>
                  <div class="col">
                    <a href="#!" class="d-block h6 mb-0">13 tasks solved</a>
                    <a href="#" class="text-sm text-muted">Webpixels website</a>
                  </div>
                </div>
                <div class="row align-items-center">
                  <div class="col-auto">
                    <div class="progress-circle progress-sm" id="progress-3" data-progress="60" data-color="info"></div>
                  </div>
                  <div class="col">
                    <a href="#!" class="d-block h6 mb-0">23 tasks solved</a>
                    <a href="#" class="text-sm text-muted">Purpose Dashboard UI</a>
                  </div>
                </div>
                <a href="#" class="btn btn-sm btn-block btn-secondary mt-5">Open insights</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="card card-fluid">
              <div class="card-body text-center d-flex flex-column justify-content-center">
                <h5 class="mb-4">Congratulations!</h5>
                <div class="progress-circle progress-lg mx-auto" id="progress-4" data-progress="78" data-text="23" data-textclass="h1" data-color="primary"></div>
                <p class="mt-4 mb-0">
                  Github issues were closed this week.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card card-fluid bg-gradient-dark border-0">
              <div class="card-header border-0 pb-0">
                <h6 class="text-white mb-0"><span class="text-danger mr-2">???</span>Project at risk</h6>
              </div>
              <div class="card-body text-center">
                {/* <!-- Avatar --> */}
                <a href="#" class="avatar avatar-lg rounded-circle">
                  <img alt="Image placeholder" src="../assets/img/theme/light/brand-avatar-1.png"/>
                </a>
                {/* <!-- Title --> */}
                <h5 class="h6 mt-4 mb-0 text-white">Website redesign</h5>
                {/* <!-- Actions --> */}
                <div class="actions actions-dark d-flex justify-content-between px-4 mt-4">
                  <a href="#" class="action-item">
                    <i class="fas fa-chart-pie"></i>
                  </a>
                  <a href="#" class="action-item">
                    <i class="fas fa-user"></i>
                  </a>
                  <a href="#" class="action-item">
                    <i class="fas fa-info-circle"></i>
                  </a>
                </div>
              </div>
              <div class="card-body">
                <div class="row justify-content-between align-items-center">
                  <div class="col-6">
                    <div style={{maxWidth: "120px"}}>
                      <div class="spark-chart" data-toggle="spark-chart" data-type="line" data-height="50" data-color="danger" data-dataset="[42, 55, 19, 16, 84, 24, 10, 11, 93, 15, 81]"></div>
                    </div>
                  </div>
                  <div class="col-auto text-center">
                    <span class="d-block h4 mb-0 text-white">8</span>
                    <span class="d-block text-sm text-white opacity-8">Days delay</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-7 d-sm-flex flex-sm-column">
            <div class="row flex-sm-fill">
              <div class="col-sm-4">
                <div class="card card-fluid">
                  <div class="card-body text-center">
                    <div class="avatar-parent-child">
                      <a href="#" class="avatar avatar-lg rounded-circle">
                        <img alt="Image placeholder" src="../assets/img/theme/light/team-1-800x800.jpg"/>
                      </a>
                      <span class="avatar-child avatar-badge bg-success"></span>
                    </div>
                    <h5 class="h6 mt-4 mb-0">John Sullivan</h5>
                    <a href="#" class="d-block text-sm text-muted mb-3">@john.sullivan</a>
                    <div class="actions d-flex justify-content-between px-4">
                      <a href="#" class="action-item">
                        <i class="fas fa-envelope"></i>
                      </a>
                      <a href="#" class="action-item">
                        <i class="fas fa-phone"></i>
                      </a>
                      <a href="#" class="action-item">
                        <i class="fas fa-share-alt"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card card-fluid">
                  <div class="card-body text-center">
                    <div class="avatar-parent-child">
                      <a href="#" class="avatar avatar-lg rounded-circle">
                        <img alt="Image placeholder" src="../assets/img/theme/light/team-2-800x800.jpg"/>
                      </a>
                      <span class="avatar-child avatar-badge bg-warning"></span>
                    </div>
                    <h5 class="h6 mt-4 mb-0">Heather Wright</h5>
                    <a href="#" class="d-block text-sm text-muted mb-3">@heather.wright</a>
                    <div class="actions d-flex justify-content-between px-4">
                      <a href="#" class="action-item">
                        <i class="fas fa-envelope"></i>
                      </a>
                      <a href="#" class="action-item">
                        <i class="fas fa-phone"></i>
                      </a>
                      <a href="#" class="action-item">
                        <i class="fas fa-share-alt"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card card-fluid">
                  <div class="card-body text-center">
                    <div class="avatar-parent-child">
                      <a href="#" class="avatar avatar-lg rounded-circle">
                        <img alt="Image placeholder" src="../assets/img/theme/light/team-3-800x800.jpg"/>
                      </a>
                      <span class="avatar-child avatar-badge bg-danger"></span>
                    </div>
                    <h5 class="h6 mt-4 mb-0">James Lewis</h5>
                    <a href="#" class="d-block text-sm text-muted mb-3">@james.lewis</a>
                    <div class="actions d-flex justify-content-between px-4">
                      <a href="#" class="action-item">
                        <i class="fas fa-envelope"></i>
                      </a>
                      <a href="#" class="action-item">
                        <i class="fas fa-phone"></i>
                      </a>
                      <a href="#" class="action-item">
                        <i class="fas fa-share-alt"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row flex-sm-fill">
              <div class="col-sm-4">
                <div class="card card-fluid">
                  <div class="card-body text-center">
                    <div class="avatar-parent-child">
                      <a href="#" class="avatar avatar-lg rounded-circle">
                        <img alt="Image placeholder" src="../assets/img/theme/light/team-1-800x800.jpg"/>
                      </a>
                      <span class="avatar-child avatar-badge bg-success"></span>
                    </div>
                    <h5 class="h6 mt-4 mb-0">John Snow</h5>
                    <a href="#" class="d-block text-sm text-muted mb-3">@john.snow</a>
                    <div class="actions d-flex justify-content-between px-4">
                      <a href="#" class="action-item">
                        <i class="fas fa-envelope"></i>
                      </a>
                      <a href="#" class="action-item">
                        <i class="fas fa-phone"></i>
                      </a>
                      <a href="#" class="action-item">
                        <i class="fas fa-share-alt"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card card-fluid">
                  <div class="card-body text-center">
                    <div class="avatar-parent-child">
                      <a href="#" class="avatar avatar-lg rounded-circle">
                        <img alt="Image placeholder" src="../assets/img/theme/light/team-2-800x800.jpg"/>
                      </a>
                      <span class="avatar-child avatar-badge bg-success"></span>
                    </div>
                    <h5 class="h6 mt-4 mb-0">John Michael</h5>
                    <a href="#" class="d-block text-sm text-muted mb-3">@john.michael</a>
                    <div class="actions d-flex justify-content-between px-4">
                      <a href="#" class="action-item">
                        <i class="fas fa-envelope"></i>
                      </a>
                      <a href="#" class="action-item">
                        <i class="fas fa-phone"></i>
                      </a>
                      <a href="#" class="action-item">
                        <i class="fas fa-share-alt"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card card-fluid">
                  <div class="card-body text-center">
                    <div class="avatar-parent-child">
                      <a href="#" class="avatar avatar-lg rounded-circle">
                        <img alt="Image placeholder" src="../assets/img/theme/light/team-3-800x800.jpg"/>
                      </a>
                      <span class="avatar-child avatar-badge bg-warning"></span>
                    </div>
                    <h5 class="h6 mt-4 mb-0">Monroe Parker</h5>
                    <a href="#" class="d-block text-sm text-muted mb-3">@monroe.parker</a>
                    <div class="actions d-flex justify-content-between px-4">
                      <a href="#" class="action-item">
                        <i class="fas fa-envelope"></i>
                      </a>
                      <a href="#" class="action-item">
                        <i class="fas fa-phone"></i>
                      </a>
                      <a href="#" class="action-item">
                        <i class="fas fa-share-alt"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-5">
            {/* <!-- Calendar --> */}
            <div class="card widget-calendar">
              <div class="card-header">
                <div class="text-sm text-muted mb-1 widget-calendar-year"></div>
                <div class="h5 mb-0 widget-calendar-day"></div>
              </div>
              {/* <!-- Calendar --> */}
              <div data-toggle="widget-calendar"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
  </>
  )}