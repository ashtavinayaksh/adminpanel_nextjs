import React from "react";

export default function Chat() {
  return (
    <>
    {/* <!-- Chat modal --> */}
  {/* <!-- Customizer modal --> */}
  <div class="modal fade fixed-right" id="modal-chat" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-vertical" role="document">
      <div class="modal-content">
        <div class="modal-header align-items-center">
          <div class="modal-title">
            <h6 class="mb-0">Chat</h6>
            <span class="d-block text-sm">3 new conversations</span>
          </div>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="scrollbar-inner">
          {/* <!-- Chat contacts --> */}
          <div class="list-group list-group-flush">
            <a href="#" class="list-group-item list-group-item-action">
              <div class="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="">
                <div>
                  <div class="avatar-parent-child">
                    <img alt="Image placeholder" src="../assets/img/theme/light/team-1-800x800.jpg" class="avatar  rounded-circle"/>
                    <span class="avatar-child avatar-badge bg-warning"></span>
                  </div>
                </div>
                <div class="flex-fill ml-3">
                  <h6 class="text-sm mb-0">John Sullivan</h6>
                  <p class="text-sm mb-0">
                    Working remotely
                  </p>
                </div>
              </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <div class="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="">
                <div>
                  <div class="avatar-parent-child">
                    <img alt="Image placeholder" src="../assets/img/theme/light/team-2-800x800.jpg" class="avatar  rounded-circle"/>
                    <span class="avatar-child avatar-badge bg-warning"></span>
                  </div>
                </div>
                <div class="flex-fill ml-3">
                  <h6 class="text-sm mb-0">Heather Wright</h6>
                  <p class="text-sm mb-0">
                    Working remotely
                  </p>
                </div>
              </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <div class="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="">
                <div>
                  <div class="avatar-parent-child">
                    <img alt="Image placeholder" src="../assets/img/theme/light/team-3-800x800.jpg" class="avatar  rounded-circle"/>
                    <span class="avatar-child avatar-badge bg-warning"></span>
                  </div>
                </div>
                <div class="flex-fill ml-3">
                  <h6 class="text-sm mb-0">James Lewis</h6>
                  <p class="text-sm mb-0">
                    Working remotely
                  </p>
                </div>
              </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <div class="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="">
                <div>
                  <div class="avatar-parent-child">
                    <img alt="Image placeholder" src="../assets/img/theme/light/team-4-800x800.jpg" class="avatar  rounded-circle"/>
                    <span class="avatar-child avatar-badge bg-warning"></span>
                  </div>
                </div>
                <div class="flex-fill ml-3">
                  <h6 class="text-sm mb-0">Martin Gray</h6>
                  <p class="text-sm mb-0">
                    Working remotely
                  </p>
                </div>
              </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <div class="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="">
                <div>
                  <div class="avatar-parent-child">
                    <img alt="Image placeholder" src="../assets/img/theme/light/team-5-800x800.jpg" class="avatar  rounded-circle"/>
                    <span class="avatar-child avatar-badge bg-warning"></span>
                  </div>
                </div>
                <div class="flex-fill ml-3">
                  <h6 class="text-sm mb-0">John Snow</h6>
                  <p class="text-sm mb-0">
                    Working remotely
                  </p>
                </div>
              </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <div class="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="">
                <div>
                  <div class="avatar-parent-child">
                    <img alt="Image placeholder" src="../assets/img/theme/light/team-1-800x800.jpg" class="avatar  rounded-circle"/>
                    <span class="avatar-child avatar-badge bg-warning"></span>
                  </div>
                </div>
                <div class="flex-fill ml-3">
                  <h6 class="text-sm mb-0">John Michael</h6>
                  <p class="text-sm mb-0">
                    Working remotely
                  </p>
                </div>
              </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <div class="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="">
                <div>
                  <div class="avatar-parent-child">
                    <img alt="Image placeholder" src="../assets/img/theme/light/team-2-800x800.jpg" class="avatar  rounded-circle"/>
                    <span class="avatar-child avatar-badge bg-warning"></span>
                  </div>
                </div>
                <div class="flex-fill ml-3">
                  <h6 class="text-sm mb-0">Monroe Parker</h6>
                  <p class="text-sm mb-0">
                    Working remotely
                  </p>
                </div>
              </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <div class="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="">
                <div>
                  <div class="avatar-parent-child">
                    <img alt="Image placeholder" src="../assets/img/theme/light/team-3-800x800.jpg" class="avatar  rounded-circle"/>
                    <span class="avatar-child avatar-badge bg-warning"></span>
                  </div>
                </div>
                <div class="flex-fill ml-3">
                  <h6 class="text-sm mb-0">Danielle Levin</h6>
                  <p class="text-sm mb-0">
                    Working remotely
                  </p>
                </div>
              </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <div class="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="">
                <div>
                  <div class="avatar-parent-child">
                    <img alt="Image placeholder" src="../assets/img/theme/light/team-4-800x800.jpg" class="avatar  rounded-circle"/>
                    <span class="avatar-child avatar-badge bg-warning"></span>
                  </div>
                </div>
                <div class="flex-fill ml-3">
                  <h6 class="text-sm mb-0">Jesse Stevens</h6>
                  <p class="text-sm mb-0">
                    Working remotely
                  </p>
                </div>
              </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <div class="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="">
                <div>
                  <div class="avatar-parent-child">
                    <img alt="Image placeholder" src="../assets/img/theme/light/team-5-800x800.jpg" class="avatar  rounded-circle"/>
                    <span class="avatar-child avatar-badge bg-warning"></span>
                  </div>
                </div>
                <div class="flex-fill ml-3">
                  <h6 class="text-sm mb-0">John Snow</h6>
                  <p class="text-sm mb-0">
                    Working remotely
                  </p>
                </div>
              </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <div class="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="">
                <div>
                  <div class="avatar-parent-child">
                    <img alt="Image placeholder" src="../assets/img/theme/light/team-1-800x800.jpg" class="avatar  rounded-circle"/>
                    <span class="avatar-child avatar-badge bg-warning"></span>
                  </div>
                </div>
                <div class="flex-fill ml-3">
                  <h6 class="text-sm mb-0">John Sullivan</h6>
                  <p class="text-sm mb-0">
                    Working remotely
                  </p>
                </div>
              </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <div class="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="">
                <div>
                  <div class="avatar-parent-child">
                    <img alt="Image placeholder" src="../assets/img/theme/light/team-2-800x800.jpg" class="avatar  rounded-circle"/>
                    <span class="avatar-child avatar-badge bg-warning"></span>
                  </div>
                </div>
                <div class="flex-fill ml-3">
                  <h6 class="text-sm mb-0">Heather Wright</h6>
                  <p class="text-sm mb-0">
                    Working remotely
                  </p>
                </div>
              </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <div class="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="">
                <div>
                  <div class="avatar-parent-child">
                    <img alt="Image placeholder" src="../assets/img/theme/light/team-3-800x800.jpg" class="avatar  rounded-circle"/>
                    <span class="avatar-child avatar-badge bg-warning"></span>
                  </div>
                </div>
                <div class="flex-fill ml-3">
                  <h6 class="text-sm mb-0">James Lewis</h6>
                  <p class="text-sm mb-0">
                    Working remotely
                  </p>
                </div>
              </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <div class="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="">
                <div>
                  <div class="avatar-parent-child">
                    <img alt="Image placeholder" src="../assets/img/theme/light/team-4-800x800.jpg" class="avatar  rounded-circle"/>
                    <span class="avatar-child avatar-badge bg-warning"></span>
                  </div>
                </div>
                <div class="flex-fill ml-3">
                  <h6 class="text-sm mb-0">Martin Gray</h6>
                  <p class="text-sm mb-0">
                    Working remotely
                  </p>
                </div>
              </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <div class="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="">
                <div>
                  <div class="avatar-parent-child">
                    <img alt="Image placeholder" src="../assets/img/theme/light/team-5-800x800.jpg" class="avatar  rounded-circle"/>
                    <span class="avatar-child avatar-badge bg-warning"></span>
                  </div>
                </div>
                <div class="flex-fill ml-3">
                  <h6 class="text-sm mb-0">John Snow</h6>
                  <p class="text-sm mb-0">
                    Working remotely
                  </p>
                </div>
              </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <div class="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="">
                <div>
                  <div class="avatar-parent-child">
                    <img alt="Image placeholder" src="../assets/img/theme/light/team-1-800x800.jpg" class="avatar  rounded-circle"/>
                    <span class="avatar-child avatar-badge bg-warning"></span>
                  </div>
                </div>
                <div class="flex-fill ml-3">
                  <h6 class="text-sm mb-0">John Michael</h6>
                  <p class="text-sm mb-0">
                    Working remotely
                  </p>
                </div>
              </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <div class="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="">
                <div>
                  <div class="avatar-parent-child">
                    <img alt="Image placeholder" src="../assets/img/theme/light/team-2-800x800.jpg" class="avatar  rounded-circle"/>
                    <span class="avatar-child avatar-badge bg-warning"></span>
                  </div>
                </div>
                <div class="flex-fill ml-3">
                  <h6 class="text-sm mb-0">Monroe Parker</h6>
                  <p class="text-sm mb-0">
                    Working remotely
                  </p>
                </div>
              </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <div class="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="">
                <div>
                  <div class="avatar-parent-child">
                    <img alt="Image placeholder" src="../assets/img/theme/light/team-3-800x800.jpg" class="avatar  rounded-circle"/>
                    <span class="avatar-child avatar-badge bg-warning"></span>
                  </div>
                </div>
                <div class="flex-fill ml-3">
                  <h6 class="text-sm mb-0">Danielle Levin</h6>
                  <p class="text-sm mb-0">
                    Working remotely
                  </p>
                </div>
              </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <div class="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="">
                <div>
                  <div class="avatar-parent-child">
                    <img alt="Image placeholder" src="../assets/img/theme/light/team-4-800x800.jpg" class="avatar  rounded-circle"/>
                    <span class="avatar-child avatar-badge bg-warning"></span>
                  </div>
                </div>
                <div class="flex-fill ml-3">
                  <h6 class="text-sm mb-0">Jesse Stevens</h6>
                  <p class="text-sm mb-0">
                    Working remotely
                  </p>
                </div>
              </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <div class="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="">
                <div>
                  <div class="avatar-parent-child">
                    <img alt="Image placeholder" src="../assets/img/theme/light/team-5-800x800.jpg" class="avatar  rounded-circle"/>
                    <span class="avatar-child avatar-badge bg-warning"></span>
                  </div>
                </div>
                <div class="flex-fill ml-3">
                  <h6 class="text-sm mb-0">John Snow</h6>
                  <p class="text-sm mb-0">
                    Working remotely
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="modal-footer py-3 mt-auto">
          <a href="#" class="btn btn-block btn-sm btn-neutral btn-icon rounded-pill">
            <span class="btn-inner--icon"><i class="fab fa-facebook-messenger"></i></span>
            <span class="btn-inner--text">Open Chat</span>
          </a>
        </div>
      </div>
    </div>
  </div>
    </>
  )}