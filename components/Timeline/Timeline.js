import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faKey,
  faLongArrowAltRight,
  faPlus,
  badge,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function Timeline() {
  return (
    <>
      <div class="page-content">
        {/* <!-- Page title --> */}
        <div class="page-title">
          <div class="row justify-content-between align-items-center">
            <div class="col-md-6 d-flex align-items-center justify-content-between justify-content-md-start mb-3 mb-md-0">
              {/* <!-- Page title + Go Back button --> */}
              <div class="d-inline-block">
                <h5 class="h4 d-inline-block font-weight-400 mb-0 text-white">
                  Timeline
                </h5>
              </div>
              {/* <!-- Additional info --> */}
            </div>
            <div class="col-md-6 d-flex align-items-center justify-content-between justify-content-md-end">
              <div class="actions actions-dark d-inline-block">
                <a href="#" class="action-item ml-md-4">
                  <i class="fas fa-file-export mr-2"></i>Export
                </a>
                <a href="#" class="action-item ml-3">
                  <i class="fas fa-cog mr-2"></i>Settings
                </a>
              </div>
              <a
                href="#"
                class="btn btn-sm btn-white btn-icon-only rounded-circle ml-4"
              >
                <span class="btn-inner--icon">
                <FontAwesomeIcon icon={faPlus} />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div class="card">
              <div class="card-header">
                <h5 class=" h6 mb-0">Timeline</h5>
              </div>
              <div class="card-body">
                <div
                  class="timeline timeline-one-side"
                  data-timeline-content="axis"
                  data-timeline-axis-style="dashed"
                >
                  <div class="timeline-block">
                    <span class="timeline-step badge-primary"></span>
                    <div class="timeline-content">
                      <small class="text-muted font-weight-bold">
                        10:30 AM
                      </small>
                      <h5 class="h6 ">Mail sent to</h5>
                      <p class=" text-sm mb-0">
                        Nullam id dolor id nibh ultricies vehicula ut id elit.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus.
                      </p>
                      <div class="mt-3">
                        <span class="badge badge-pill badge-soft-primary">
                          design
                        </span>
                        <span class="badge badge-pill badge-soft-primary">
                          system
                        </span>
                        <span class="badge badge-pill badge-soft-primary">
                          creative
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="timeline-block">
                    <span class="timeline-step badge-warning"></span>
                    <div class="timeline-content">
                      <small class="text-muted font-weight-bold">
                        10:30 AM
                      </small>
                      <h5 class="h6 ">You liked a comment from</h5>
                      <p class=" text-sm mb-0">
                        Nullam id dolor id nibh ultricies vehicula ut id elit.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus.
                      </p>
                      <div class="mt-3">
                        <span class="badge badge-pill badge-soft-warning">
                          design
                        </span>
                        <span class="badge badge-pill badge-soft-warning">
                          system
                        </span>
                        <span class="badge badge-pill badge-soft-warning">
                          creative
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="timeline-block">
                    <span class="timeline-step badge-info"></span>
                    <div class="timeline-content">
                      <small class="text-muted font-weight-bold">
                        10:30 AM
                      </small>
                      <h5 class="h6 ">New likes from</h5>
                      <p class=" text-sm mb-0">
                        Nullam id dolor id nibh ultricies vehicula ut id elit.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus.
                      </p>
                      <div class="mt-3">
                        <span class="badge badge-pill badge-soft-info">
                          design
                        </span>
                        <span class="badge badge-pill badge-soft-info">
                          system
                        </span>
                        <span class="badge badge-pill badge-soft-info">
                          creative
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <div class="card-header">
                <h5 class=" h6 mb-0">Timeline</h5>
              </div>
              <div class="card-body">
                <div
                  class="timeline timeline-one-side"
                  data-timeline-content="axis"
                  data-timeline-axis-style="dashed"
                >
                  <div class="timeline-block">
                    <span class="timeline-step"></span>
                    <div class="timeline-content">
                      <small class="text-muted font-weight-bold">
                        2016 - present
                      </small>
                      <h6>Web Developer at Webpixels</h6>
                      <p class="text-sm lh-160">
                        When we strive to become better than we are everything
                        around us becomes better too. This is a wider card with
                        supporting text below.
                      </p>
                      <div>
                        <span class="badge badge-pill badge-secondary mr-2 mb-2">
                          Bootstrap
                        </span>
                        <span class="badge badge-pill badge-secondary mr-2 mb-2">
                          UI/UX
                        </span>
                        <span class="badge badge-pill badge-secondary mr-2 mb-2">
                          Market Strategy
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="timeline-block">
                    <span class="timeline-step timeline-step-sm"></span>
                    <div class="timeline-content">
                      <small class="text-muted font-weight-bold">
                        2014 - 2016
                      </small>
                      <h6>Front Designer at Google</h6>
                      <p class="text-sm lh-160">
                        When we strive to become better than we are everything
                        around us becomes better too. This is a wider card with
                        supporting text below.
                      </p>
                      <div>
                        <span class="badge badge-pill badge-secondary mr-2 mb-2">
                        <FontAwesomeIcon icon={badge} />
                          HTML5
                        </span>
                        <span class="badge badge-pill badge-secondary mr-2 mb-2">
                          CSS3
                        </span>
                        <span class="badge badge-pill badge-secondary mr-2 mb-2">
                          Responsive Design
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="timeline-block">
                    <span class="timeline-step timeline-step-sm"></span>
                    <div class="timeline-content">
                      <small class="text-muted font-weight-bold">
                        2013 - 2014
                      </small>
                      <h6>Internship at Apple</h6>
                      <p class="text-sm lh-160">
                        When we strive to become better than we are everything
                        around us becomes better too. This is a wider card with
                        supporting text below.
                      </p>
                      <div>
                        <span class="badge badge-pill badge-secondary mr-2 mb-2">
                          Product Design
                        </span>
                        <span class="badge badge-pill badge-secondary mr-2 mb-2">
                          Development
                        </span>
                        <span class="badge badge-pill badge-secondary mr-2 mb-2">
                          Market Strategy
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-header">
                <h5 class=" h6 mb-0">Timeline 2</h5>
              </div>
              <div class="card-body">
                <div
                  class="timeline"
                  data-timeline-content="axis"
                  data-timeline-axis-style="dashed"
                >
                  <div class="timeline-block">
                    <span class="timeline-step badge-primary"></span>
                    <div class="timeline-content">
                      <small class="text-muted font-weight-bold">
                        10:30 AM
                      </small>
                      <h5 class="h6 ">Mail sent to</h5>
                      <p class=" text-sm mb-0">
                        Nullam id dolor id nibh ultricies vehicula ut id elit.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus.
                      </p>
                      <div class="mt-3">
                        <span class="badge badge-pill badge-soft-primary">
                          design
                        </span>
                        <span class="badge badge-pill badge-soft-primary">
                          system
                        </span>
                        <span class="badge badge-pill badge-soft-primary">
                          creative
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="timeline-block">
                    <span class="timeline-step badge-warning"></span>
                    <div class="timeline-content">
                      <small class="text-muted font-weight-bold">
                        10:30 AM
                      </small>
                      <h5 class="h6 ">You liked a comment from</h5>
                      <p class=" text-sm mb-0">
                        Nullam id dolor id nibh ultricies vehicula ut id elit.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus.
                      </p>
                      <div class="mt-3">
                        <span class="badge badge-pill badge-soft-warning">
                          design
                        </span>
                        <span class="badge badge-pill badge-soft-warning">
                          system
                        </span>
                        <span class="badge badge-pill badge-soft-warning">
                          creative
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="timeline-block">
                    <span class="timeline-step badge-info"></span>
                    <div class="timeline-content">
                      <small class="text-muted font-weight-bold">
                        10:30 AM
                      </small>
                      <h5 class="h6 ">New likes from</h5>
                      <p class=" text-sm mb-0">
                        Nullam id dolor id nibh ultricies vehicula ut id elit.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus.
                      </p>
                      <div class="mt-3">
                        <span class="badge badge-pill badge-soft-info">
                          design
                        </span>
                        <span class="badge badge-pill badge-soft-info">
                          system
                        </span>
                        <span class="badge badge-pill badge-soft-info">
                          creative
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="timeline-block">
                    <span class="timeline-step badge-dark"></span>
                    <div class="timeline-content">
                      <small class="text-muted font-weight-bold">
                        10:30 AM
                      </small>
                      <h5 class="h6 ">You are now in team with</h5>
                      <p class=" text-sm mb-0">
                        Nullam id dolor id nibh ultricies vehicula ut id elit.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus.
                      </p>
                      <div class="mt-3">
                        <span class="badge badge-pill badge-soft-dark">
                          design
                        </span>
                        <span class="badge badge-pill badge-soft-dark">
                          system
                        </span>
                        <span class="badge badge-pill badge-soft-dark">
                          creative
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="timeline-block">
                    <span class="timeline-step badge-primary"></span>
                    <div class="timeline-content">
                      <small class="text-muted font-weight-bold">
                        10:30 AM
                      </small>
                      <h5 class="h6 ">Mail sent to</h5>
                      <p class=" text-sm mb-0">
                        Nullam id dolor id nibh ultricies vehicula ut id elit.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus.
                      </p>
                      <div class="mt-3">
                        <span class="badge badge-pill badge-soft-primary">
                          design
                        </span>
                        <span class="badge badge-pill badge-soft-primary">
                          system
                        </span>
                        <span class="badge badge-pill badge-soft-primary">
                          creative
                        </span>
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
