import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faKey, faLongArrowAltRight, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
  return (
    <>
<div className="page-content">
        {/* <!-- Create project modal --> */}
        <div className="modal fade" id="modal-project-create" tabindex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                {/* <!-- Project name --> */}
                <div className="form-group">
                  <label className="form-control-label">
                    Project name
                  </label>
                  <input type="text" className="form-control"/>
                </div>
                {/* <!-- Project description --> */}
                <div className="form-group">
                  <label className="form-control-label mb-0">
                    Project description
                  </label>
                  <small className="form-text text-muted mb-2 mt-0">
                    This textarea will autosize while you type
                  </small>
                  <textarea className="form-control" data-toggle="autosize" rows="1"></textarea>
                </div>
                {/* <!-- Project privacy --> */}
                <div className="form-group">
                  <label className="form-control-label">
                    Project privacy
                  </label>
                  <div className="row">
                    <div className="col-4">
                      <div className="custom-control custom-checkbox">
                        <input type="radio" className="custom-control-input" name="project-privacy" id="radio-project-1"/>
                        <label className="custom-control-label form-control-label text-muted" for="radio-project-1">Private</label>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="custom-control custom-checkbox">
                        <input type="radio" className="custom-control-input" name="project-privacy" id="radio-project-2"/>
                        <label className="custom-control-label form-control-label text-muted" for="radio-project-2">Team</label>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="custom-control custom-checkbox">
                        <input type="radio" className="custom-control-input" name="project-privacy" id="radio-project-3" checked/>
                        <label className="custom-control-label form-control-label text-muted" for="radio-project-3">Public</label>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Project members --> */}
                <div className="form-group">
                  <label className="form-control-label">
                    Project members
                  </label>
                  <input type="text" className="form-control"/>
                </div>
                <div className="list-group list-group-flush mb-4">
                  <div className="list-group-item px-0">
                    <div className="row align-items-center">
                      <div className="col-auto">
                        {/* <!-- Avatar --> */}
                        <a href="#" className="avatar avatar-sm rounded-circle">
                          <img alt="Image placeholder" src="../..//assets/img/theme/light/team-1-800x800.jpg"/>
                        </a>
                      </div>
                      <div className="col ml-n2">
                        <a href="#!" className="d-block h6 text-sm mb-0">John Sullivan</a>
                        <p className="card-text text-sm text-muted mb-0">
                          john@example.com
                        </p>
                      </div>
                      <div className="col-auto text-right">
                        <span className="text-sm text-info">Team Leader</span>
                      </div>
                    </div>
                  </div>
                  <div className="list-group-item px-0">
                    <div className="row align-items-center">
                      <div className="col-auto">
                        {/* <!-- Avatar --> */}
                        <a href="#" className="avatar avatar-sm rounded-circle">
                          <img alt="Image placeholder" src="../..//assets/img/theme/light/team-2-800x800.jpg"/>
                        </a>
                      </div>
                      <div className="col ml-n2">
                        <a href="#!" className="d-block h6 text-sm mb-0">Martin Lawrence</a>
                        <p className="card-text text-sm text-muted mb-0">
                          martin@example.com
                        </p>
                      </div>
                      <div className="col-auto text-right">
                        <span className="text-sm text-info">Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Project date --> */}
                <div className="form-group">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      {/* <!-- Start date --> */}
                      <div className="form-group">
                        <label className="form-control-label">
                          Start date
                        </label>
                        <input type="date" className="form-control"/>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      {/* <!-- Start date --> */}
                      <div className="form-group">
                        <label className="form-control-label">
                          End date
                        </label>
                        <input type="date" className="form-control"/>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Project tags --> */}
                <div className="form-group">
                  <label className="form-control-label">
                    Project tags
                  </label>
                  <input type="text" className="form-control" value="HTML, CSS3, Bootstrap, Photoshop, VueJS" data-toggle="tags" placeholder="Type here..." />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-sm btn-primary rounded-pill mr-auto" data-dismiss="modal">Save</button>
                <button type="button" className="btn btn-sm btn-link text-muted px-2">Archive</button>
                <button type="button" className="btn btn-sm btn-link text-danger px-2">Delete</button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Page title --> */}
        <div className="page-title" style={{marginBottom:"14px"}}>
          <div className="row justify-content-between align-items-center">
            <div className="col-md-6 d-flex align-items-center justify-content-between justify-content-md-start mb-3 mb-md-0">
              {/* <!-- Page title + Go Back button --> */}
              <div className="d-inline-block">
                <h5 className="h4 d-inline-block font-weight-400 mb-0 text-blue">Projects</h5>
              </div>
              {/* <!-- Additional info --> */}
              <div className="align-items-center ml-4 d-inline-flex">
                <span className="h4 text-info mb-0 mr-2">9</span>
                <span className="text-sm opacity-7 text-blue">Running projects</span>
              </div>
              {/* <!-- Optional link --> */}
              <a href="card-listing.html" className="text-sm text-info d-none d-lg-inline-block ml-4">See cards</a>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-between justify-content-md-end">
              <div className="actions actions-dark d-inline-block">
                <a href="#" className="action-item ml-md-4">
                  <i className="fas fa-file-export mr-2"></i>Export
                </a>
                <a href="#" className="action-item ml-3">
                  <i className="fas fa-cog mr-2"></i>Settings
                </a>
              </div>
              <a href="#modal-project-create" className="btn btn-sm btn-white btn-icon-only rounded-circle ml-4" data-toggle="modal">
                <span className="btn-inner--icon"><i className="fas fa-plus"></i></span>
              </a>
            </div>
          </div>
        </div>
        {/* <!-- Listing --> */}
        <div className="card">
          {/* <!-- Card header --> */}
          <div className="card-header actions-toolbar border-0">
            <div className="actions-search" id="actions-search">
              <div className="input-group input-group-merge input-group-flush">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-transparent"><i className="fas fa-search"></i></span>
                </div>
                <input type="text" className="form-control form-control-flush" placeholder="Type and hit enter ..."/>
                <div className="input-group-append">
                  <a href="#" className="input-group-text bg-transparent" data-action="search-close" data-target="#actions-search"><i className="fas fa-times"></i></a>
                </div>
              </div>
            </div>
            <div className="row justify-content-between align-items-center">
              <div className="col">
                <h6 className="d-inline-block mb-0">Projects</h6>
              </div>
              <div className="col text-right">
                <div className="actions"><a href="#" className="action-item mr-3" data-action="search-open" data-target="#actions-search"><i className="fas fa-search"></i></a>
                  <div className="dropdown mr-3">
                    <a href="#" className="action-item" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fas fa-filter"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-sort-amount-down"></i>Newest
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-sort-alpha-down"></i>From A-Z
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-sort-alpha-up"></i>From Z-A
                      </a>
                    </div>
                  </div>
                  <div className="dropdown" data-toggle="dropdown">
                    <a href="#" className="action-item" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fas fa-ellipsis-h"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a href="#" className="dropdown-item">Refresh</a>
                      <a href="#" className="dropdown-item">Manage Widgets</a>
                      <a href="#" className="dropdown-item">Settings</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Table --> */}
          <div className="table-responsive">
            <table className="table align-items-center">
              <thead>
                <tr>
                  <th scope="col" className="sort" data-sort="name">Project</th>
                  <th scope="col" className="sort" data-sort="budget">Budget</th>
                  <th scope="col" className="sort" data-sort="status">Status</th>
                  <th scope="col">Users</th>
                  <th scope="col" className="sort" data-sort="completion">Completion</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody className="list">
                <tr>
                  <th scope="row">
                    <div className="media align-items-center">
                      <div>
                        <img alt="Image placeholder" src="../../assets/img/theme/light/brand-avatar-1.png" className="avatar  rounded-circle"/>
                      </div>
                      <div className="media-body ml-4">
                        <a href="overview.html" className="name mb-0 h6 text-sm">Purpose Website UI</a>
                      </div>
                    </div>
                  </th>
                  <td className="budget">
                    $2500 USD
                  </td>
                  <td>
                    <span className="badge badge-dot mr-4">
                      <i className="bg-warning"></i>
                      <span className="status">pending</span>
                    </span>
                  </td>
                  <td>
                    <div className="avatar-group">
                      <a href="#" className="avatar rounded-circle avatar-sm">
                        <img alt="Image placeholder" src="../../assets/img/theme/light/team-1-800x800.jpg" className=""/>
                      </a>
                      <a href="#" className="avatar rounded-circle avatar-sm">
                        <img alt="Image placeholder" src="../../assets/img/theme/light/team-2-800x800.jpg" className=""/>
                      </a>
                      <a href="#" className="avatar rounded-circle avatar-sm">
                        <img alt="Image placeholder" src="../../assets/img/theme/light/team-3-800x800.jpg" className=""/>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="completion mr-2">60%</span>
                      <div>
                        <div className="progress" style={{width: "100px"}}>
                          <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}></div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-right">
                    <div className="dropdown" data-toggle="dropdown">
                      <a href="#" className="action-item" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-ellipsis-h"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="#" className="dropdown-item">Refresh</a>
                        <a href="#" className="dropdown-item">Manage Widgets</a>
                        <a href="#" className="dropdown-item">Settings</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="media align-items-center">
                      <div>
                        <img alt="Image placeholder" src="../../assets/img/theme/light/brand-avatar-2.png" className="avatar  rounded-circle"/>
                      </div>
                      <div className="media-body ml-4">
                        <a href="overview.html" className="name mb-0 h6 text-sm">Website Redesign</a>
                      </div>
                    </div>
                  </th>
                  <td className="budget">
                    $1800 USD
                  </td>
                  <td>
                    <span className="badge badge-dot mr-4">
                      <i className="bg-success"></i>
                      <span className="status">completed</span>
                    </span>
                  </td>
                  <td>
                    <div className="avatar-group">
                      <a href="#" className="avatar rounded-circle avatar-sm">
                        <img alt="Image placeholder" src="../../assets/img/theme/light/team-1-800x800.jpg" className=""/>
                      </a>
                      <a href="#" className="avatar rounded-circle avatar-sm">
                        <img alt="Image placeholder" src="../../assets/img/theme/light/team-2-800x800.jpg" className=""/>
                      </a>
                      <a href="#" className="avatar rounded-circle avatar-sm">
                        <img alt="Image placeholder" src="../../assets/img/theme/light/team-3-800x800.jpg" className=""/>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="completion mr-2">100%</span>
                      <div>
                        <div className="progress" style={{width: "100px"}}>
                          <div className="progress-bar bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}></div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-right">
                    <div className="dropdown" data-toggle="dropdown">
                      <a href="#" className="action-item" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-ellipsis-h"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="#" className="dropdown-item">Refresh</a>
                        <a href="#" className="dropdown-item">Manage Widgets</a>
                        <a href="#" className="dropdown-item">Settings</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="media align-items-center">
                      <div>
                        <img alt="Image placeholder" src="../../assets/img/theme/light/brand-avatar-3.png" className="avatar  rounded-circle"/>
                      </div>
                      <div className="media-body ml-4">
                        <a href="overview.html" className="name mb-0 h6 text-sm">Webpixels Website</a>
                      </div>
                    </div>
                  </th>
                  <td className="budget">
                    $3150 USD
                  </td>
                  <td>
                    <span className="badge badge-dot mr-4">
                      <i className="bg-danger"></i>
                      <span className="status">delayed</span>
                    </span>
                  </td>
                  <td>
                    <div className="avatar-group">
                      <a href="#" className="avatar rounded-circle avatar-sm">
                        <img alt="Image placeholder" src="../../assets/img/theme/light/team-1-800x800.jpg" className=""/>
                      </a>
                      <a href="#" className="avatar rounded-circle avatar-sm">
                        <img alt="Image placeholder" src="../../assets/img/theme/light/team-2-800x800.jpg" className=""/>
                      </a>
                      <a href="#" className="avatar rounded-circle avatar-sm">
                        <img alt="Image placeholder" src="../../assets/img/theme/light/team-3-800x800.jpg" className=""/>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="completion mr-2">72%</span>
                      <div>
                        <div className="progress" style={{width: "100px"}}>
                          <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100" style={{width: "72%"}}></div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-right">
                    <div className="dropdown" data-toggle="dropdown">
                      <a href="#" className="action-item" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-ellipsis-h"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="#" className="dropdown-item">Refresh</a>
                        <a href="#" className="dropdown-item">Manage Widgets</a>
                        <a href="#" className="dropdown-item">Settings</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="media align-items-center">
                      <div>
                        <img alt="Image placeholder" src="../../assets/img/theme/light/brand-avatar-4.png" className="avatar  rounded-circle"/>
                      </div>
                      <div className="media-body ml-4">
                        <a href="overview.html" className="name mb-0 h6 text-sm">Purpose Application UI</a>
                      </div>
                    </div>
                  </th>
                  <td className="budget">
                    $4400 USD
                  </td>
                  <td>
                    <span className="badge badge-dot mr-4">
                      <i className="bg-info"></i>
                      <span className="status">on schedule</span>
                    </span>
                  </td>
                  <td>
                    <div className="avatar-group">
                      <a href="#" className="avatar rounded-circle avatar-sm">
                        <img alt="Image placeholder" src="../../assets/img/theme/light/team-1-800x800.jpg" className=""/>
                      </a>
                      <a href="#" className="avatar rounded-circle avatar-sm">
                        <img alt="Image placeholder" src="../../assets/img/theme/light/team-2-800x800.jpg" className=""/>
                      </a>
                      <a href="#" className="avatar rounded-circle avatar-sm">
                        <img alt="Image placeholder" src="../../assets/img/theme/light/team-3-800x800.jpg" className=""/>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="completion mr-2">90%</span>
                      <div>
                        <div className="progress" style={{width: "100px"}}>
                          <div className="progress-bar bg-info" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width: "90%"}}></div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-right">
                    <div className="dropdown" data-toggle="dropdown">
                      <a href="#" className="action-item" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-ellipsis-h"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="#" className="dropdown-item">Refresh</a>
                        <a href="#" className="dropdown-item">Manage Widgets</a>
                        <a href="#" className="dropdown-item">Settings</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="media align-items-center">
                      <div>
                        <img alt="Image placeholder" src="../../assets/img/theme/light/brand-avatar-5.png" className="avatar  rounded-circle"/>
                      </div>
                      <div className="media-body ml-4">
                        <a href="overview.html" className="name mb-0 h6 text-sm">Purpose Dashboard UI</a>
                      </div>
                    </div>
                  </th>
                  <td className="budget">
                    $2200 USD
                  </td>
                  <td>
                    <span className="badge badge-dot mr-4">
                      <i className="bg-success"></i>
                      <span className="status">completed</span>
                    </span>
                  </td>
                  <td>
                    <div className="avatar-group">
                      <a href="#" className="avatar rounded-circle avatar-sm">
                        <img alt="Image placeholder" src="../../assets/img/theme/light/team-1-800x800.jpg" className=""/>
                      </a>
                      <a href="#" className="avatar rounded-circle avatar-sm">
                        <img alt="Image placeholder" src="../../assets/img/theme/light/team-2-800x800.jpg" className=""/>
                      </a>
                      <a href="#" className="avatar rounded-circle avatar-sm">
                        <img alt="Image placeholder" src="../../assets/img/theme/light/team-3-800x800.jpg" className=""/>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="completion mr-2">100%</span>
                      <div>
                        <div className="progress" style={{width: "100px"}}>
                          <div className="progress-bar bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}></div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-right">
                    <div className="dropdown" data-toggle="dropdown">
                      <a href="#" className="action-item" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-ellipsis-h"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="#" className="dropdown-item">Refresh</a>
                        <a href="#" className="dropdown-item">Manage Widgets</a>
                        <a href="#" className="dropdown-item">Settings</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="media align-items-center">
                      <div>
                        <img alt="Image placeholder" src="../../assets/img/theme/light/brand-avatar-6.png" className="avatar  rounded-circle"/>
                      </div>
                      <div className="media-body ml-4">
                        <a href="overview.html" className="name mb-0 h6 text-sm">Bootstrap Framework</a>
                      </div>
                    </div>
                  </th>
                  <td className="budget">
                    $2500 USD
                  </td>
                  <td>
                    <span className="badge badge-dot mr-4">
                      <i className="bg-warning"></i>
                      <span className="status">pending</span>
                    </span>
                  </td>
                  <td>
                    <div className="avatar-group">
                      <a href="#" className="avatar rounded-circle avatar-sm">
                        <img alt="Image placeholder" src="../../assets/img/theme/light/team-1-800x800.jpg" className=""/>
                      </a>
                      <a href="#" className="avatar rounded-circle avatar-sm">
                        <img alt="Image placeholder" src="../../assets/img/theme/light/team-2-800x800.jpg" className=""/>
                      </a>
                      <a href="#" className="avatar rounded-circle avatar-sm">
                        <img alt="Image placeholder" src="../../assets/img/theme/light/team-3-800x800.jpg" className=""/>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="completion mr-2">60%</span>
                      <div>
                        <div className="progress" style={{width: "100px"}}>
                          <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}></div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-right">
                    <div className="dropdown" data-toggle="dropdown">
                      <a href="#" className="action-item" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-ellipsis-h"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="#" className="dropdown-item">Refresh</a>
                        <a href="#" className="dropdown-item">Manage Widgets</a>
                        <a href="#" className="dropdown-item">Settings</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="media align-items-center">
                      <div>
                        <img alt="Image placeholder" src="../../assets/img/theme/light/brand-avatar-1.png" className="avatar  rounded-circle"/>
                      </div>
                      <div className="media-body ml-4">
                        <a href="overview.html" className="name mb-0 h6 text-sm">Component Library</a>
                      </div>
                    </div>
                  </th>
                  <td className="budget">
                    $2500 USD
                  </td>
                  <td>
                    <span className="badge badge-dot mr-4">
                      <i className="bg-warning"></i>
                      <span className="status">pending</span>
                    </span>
                  </td>
                  <td>
                    <div className="avatar-group">
                      <a href="#" className="avatar rounded-circle avatar-sm">
                        <img alt="Image placeholder" src="../../assets/img/theme/light/team-1-800x800.jpg" className=""/>
                      </a>
                      <a href="#" className="avatar rounded-circle avatar-sm">
                        <img alt="Image placeholder" src="../../assets/img/theme/light/team-2-800x800.jpg" className=""/>
                      </a>
                      <a href="#" className="avatar rounded-circle avatar-sm">
                        <img alt="Image placeholder" src="../../assets/img/theme/light/team-3-800x800.jpg" className=""/>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="completion mr-2">60%</span>
                      <div>
                        <div className="progress" style={{width: "100px"}}>
                          <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}></div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-right">
                    <div className="dropdown" data-toggle="dropdown">
                      <a href="#" className="action-item" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-ellipsis-h"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="#" className="dropdown-item">Refresh</a>
                        <a href="#" className="dropdown-item">Manage Widgets</a>
                        <a href="#" className="dropdown-item">Settings</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="media align-items-center">
                      <div>
                        <img alt="Image placeholder" src="../../assets/img/theme/light/brand-avatar-2.png" className="avatar  rounded-circle"/>
                      </div>
                      <div className="media-body ml-4">
                        <a href="overview.html" className="name mb-0 h6 text-sm">Website Builder</a>
                      </div>
                    </div>
                  </th>
                  <td className="budget">
                    $1800 USD
                  </td>
                  <td>
                    <span className="badge badge-dot mr-4">
                      <i className="bg-success"></i>
                      <span className="status">completed</span>
                    </span>
                  </td>
                  <td>
                    <div className="avatar-group">
                      <a href="#" className="avatar rounded-circle avatar-sm">
                        <img alt="Image placeholder" src="../../assets/img/theme/light/team-1-800x800.jpg" className=""/>
                      </a>
                      <a href="#" className="avatar rounded-circle avatar-sm">
                        <img alt="Image placeholder" src="../../assets/img/theme/light/team-2-800x800.jpg" className=""/>
                      </a>
                      <a href="#" className="avatar rounded-circle avatar-sm">
                        <img alt="Image placeholder" src="../../assets/img/theme/light/team-3-800x800.jpg" className=""/>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="completion mr-2">100%</span>
                      <div>
                        <div className="progress" style={{width: "100px"}}>
                          <div className="progress-bar bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}></div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-right">
                    <div className="dropdown" data-toggle="dropdown">
                      <a href="#" className="action-item" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-ellipsis-h"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="#" className="dropdown-item">Refresh</a>
                        <a href="#" className="dropdown-item">Manage Widgets</a>
                        <a href="#" className="dropdown-item">Settings</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="media align-items-center">
                      <div>
                        <img alt="Image placeholder" src="../../assets/img/theme/light/brand-avatar-3.png" className="avatar  rounded-circle"/>
                      </div>
                      <div className="media-body ml-4">
                        <a href="overview.html" className="name mb-0 h6 text-sm">Website Launch</a>
                      </div>
                    </div>
                  </th>
                  <td className="budget">
                    $3150 USD
                  </td>
                  <td>
                    <span className="badge badge-dot mr-4">
                      <i className="bg-danger"></i>
                      <span className="status">delayed</span>
                    </span>
                  </td>
                  <td>
                    <div className="avatar-group">
                      <a href="#" className="avatar rounded-circle avatar-sm">
                        <img alt="Image placeholder" src="../../assets/img/theme/light/team-1-800x800.jpg" className=""/>
                      </a>
                      <a href="#" className="avatar rounded-circle avatar-sm">
                        <img alt="Image placeholder" src="../../assets/img/theme/light/team-2-800x800.jpg" className=""/>
                      </a>
                      <a href="#" className="avatar rounded-circle avatar-sm">
                        <img alt="Image placeholder" src="../../assets/img/theme/light/team-3-800x800.jpg" className=""/>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="completion mr-2">72%</span>
                      <div>
                        <div className="progress" style={{width: "100px"}}>
                          <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100" style={{width: "72%"}}></div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-right">
                    <div className="dropdown" data-toggle="dropdown">
                      <a href="#" className="action-item" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-ellipsis-h"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="#" className="dropdown-item">Refresh</a>
                        <a href="#" className="dropdown-item">Manage Widgets</a>
                        <a href="#" className="dropdown-item">Settings</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="media align-items-center">
                      <div>
                        <img alt="Image placeholder" src="../../assets/img/theme/light/brand-avatar-4.png" className="avatar  rounded-circle"/>
                      </div>
                      <div className="media-body ml-4">
                        <a href="overview.html" className="name mb-0 h6 text-sm">Payment Integration</a>
                      </div>
                    </div>
                  </th>
                  <td className="budget">
                    $4400 USD
                  </td>
                  <td>
                    <span className="badge badge-dot mr-4">
                      <i className="bg-info"></i>
                      <span className="status">on schedule</span>
                    </span>
                  </td>
                  <td>
                    <div className="avatar-group">
                      <a href="#" className="avatar rounded-circle avatar-sm">
                        <img alt="Image placeholder" src="../../assets/img/theme/light/team-1-800x800.jpg" className=""/>
                      </a>
                      <a href="#" className="avatar rounded-circle avatar-sm">
                        <img alt="Image placeholder" src="../../assets/img/theme/light/team-2-800x800.jpg" className=""/>
                      </a>
                      <a href="#" className="avatar rounded-circle avatar-sm">
                        <img alt="Image placeholder" src="../../assets/img/theme/light/team-3-800x800.jpg" className=""/>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="completion mr-2">90%</span>
                      <div>
                        <div className="progress" style={{width: "100px"}}>
                          <div className="progress-bar bg-info" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width: "90%"}}></div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-right">
                    <div className="dropdown" data-toggle="dropdown">
                      <a href="#" className="action-item" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-ellipsis-h"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="#" className="dropdown-item">Refresh</a>
                        <a href="#" className="dropdown-item">Manage Widgets</a>
                        <a href="#" className="dropdown-item">Settings</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="media align-items-center">
                      <div>
                        <img alt="Image placeholder" src="../../assets/img/theme/light/brand-avatar-5.png" className="avatar  rounded-circle"/>
                      </div>
                      <div className="media-body ml-4">
                        <a href="overview.html" className="name mb-0 h6 text-sm">Newsletter Templates</a>
                      </div>
                    </div>
                  </th>
                  <td className="budget">
                    $2200 USD
                  </td>
                  <td>
                    <span className="badge badge-dot mr-4">
                      <i className="bg-success"></i>
                      <span className="status">completed</span>
                    </span>
                  </td>
                  <td>
                    <div className="avatar-group">
                      <a href="#" className="avatar rounded-circle avatar-sm">
                        <img alt="Image placeholder" src="../../assets/img/theme/light/team-1-800x800.jpg" className=""/>
                      </a>
                      <a href="#" className="avatar rounded-circle avatar-sm">
                        <img alt="Image placeholder" src="../../assets/img/theme/light/team-2-800x800.jpg" className=""/>
                      </a>
                      <a href="#" className="avatar rounded-circle avatar-sm">
                        <img alt="Image placeholder" src="../../assets/img/theme/light/team-3-800x800.jpg" className=""/>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="completion mr-2">100%</span>
                      <div>
                        <div className="progress" style={{width: "100px"}}>
                          <div className="progress-bar bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}></div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-right">
                    <div className="dropdown" data-toggle="dropdown">
                      <a href="#" className="action-item" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-ellipsis-h"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="#" className="dropdown-item">Refresh</a>
                        <a href="#" className="dropdown-item">Manage Widgets</a>
                        <a href="#" className="dropdown-item">Settings</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="media align-items-center">
                      <div>
                        <img alt="Image placeholder" src="../../assets/img/theme/light/brand-avatar-6.png" className="avatar  rounded-circle"/>
                      </div>
                      <div className="media-body ml-4">
                        <a href="overview.html" className="name mb-0 h6 text-sm">Laravel Back-end</a>
                      </div>
                    </div>
                  </th>
                  <td className="budget">
                    $2500 USD
                  </td>
                  <td>
                    <span className="badge badge-dot mr-4">
                      <i className="bg-warning"></i>
                      <span className="status">pending</span>
                    </span>
                  </td>
                  <td>
                    <div className="avatar-group">
                      <a href="#" className="avatar rounded-circle avatar-sm">
                        <img alt="Image placeholder" src="../../assets/img/theme/light/team-1-800x800.jpg" className=""/>
                      </a>
                      <a href="#" className="avatar rounded-circle avatar-sm">
                        <img alt="Image placeholder" src="../../assets/img/theme/light/team-2-800x800.jpg" className=""/>
                      </a>
                      <a href="#" className="avatar rounded-circle avatar-sm">
                        <img alt="Image placeholder" src="../../assets/img/theme/light/team-3-800x800.jpg" className=""/>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="completion mr-2">60%</span>
                      <div>
                        <div className="progress" style={{width: "100px"}}>
                          <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}></div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-right">
                    <div className="dropdown" data-toggle="dropdown">
                      <a href="#" className="action-item" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-ellipsis-h"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="#" className="dropdown-item">Refresh</a>
                        <a href="#" className="dropdown-item">Manage Widgets</a>
                        <a href="#" className="dropdown-item">Settings</a>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* <!-- Load more --> */}
        <div className="mt-4 text-center">
          <a href="#" className="btn btn-sm btn-neutral rounded-pill shadow hover-translate-y-n3">Load more ...</a>
        </div>
      </div>
      </>
      )}