import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleLeft,
  faAngleRight,
  faEye,
  faKey,
  faLongArrowAltRight,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  return (
    <>
      <div className="page-content">
        <div className="page-title">
          <div className="row justify-content-between align-items-center">
            <div className="col d-flex align-items-center">
              <a
                href="#"
                className="text-white pr-3"
                data-toggle="tooltip"
                data-placement="left"
                data-original-title="Go back"
              >
                {/* <i className="fas fa-angle-left"></i> */}
                <FontAwesomeIcon icon={faAngleLeft} />
              </a>
              <h5 className="fullcalendar-title h4 d-inline-block font-weight-400 mb-0 text-white">
                Calendar
              </h5>
            </div>
            <div className="col-lg-6 mt-3 mt-lg-0 text-lg-right">
              <div className="btn-group" role="group" aria-label="Basic example">
                <a
                  href="#"
                  className="fullcalendar-btn-prev btn btn-sm btn-neutral"
                >
                  {/* <i className="fas fa-angle-left"></i> */}
                  <FontAwesomeIcon icon={faAngleLeft} />
                </a>
                <a
                  href="#"
                  className="fullcalendar-btn-next btn btn-sm btn-neutral"
                >
                  {/* <i className="fas fa-angle-right"></i> */}
                  <FontAwesomeIcon icon={faAngleRight} />
                </a>
              </div>
              <div className="btn-group" role="group" aria-label="Basic example">
                <a
                  href="#"
                  className="btn btn-sm btn-neutral"
                  data-calendar-view="month"
                >
                  Month
                </a>
                <a
                  href="#"
                  className="btn btn-sm btn-neutral"
                  data-calendar-view="basicWeek"
                >
                  Week
                </a>
                <a
                  href="#"
                  className="btn btn-sm btn-neutral"
                  data-calendar-view="basicDay"
                >
                  Day
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {/* <!-- Fullcalendar --> */}
            <div className="card overflow-hidden">
              <div className="calendar" data-toggle="calendar" id="calendar"></div>
            </div>
            {/* <!-- Modal - Add new event --> */}
            {/* <!--* Modal header *--> */}
            <div
              className="modal fade"
              id="new-event"
              tabIndex="-1"
              role="dialog"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  {/* <!-- Modal body --> */}
                  <div className="modal-body">
                    <form className="new-event--form">
                      <div className="form-group">
                        <label className="form-control-label">Event title</label>
                        <input
                          type="text"
                          className="form-control form-control-alternative new-event--title"
                          placeholder="Event Title"
                        />
                      </div>
                      <div className="form-group mb-0">
                        <label className="form-control-label d-block mb-3">
                          Status color
                        </label>
                        <div
                          className="btn-group btn-group-toggle btn-group-colors event-tag"
                          data-toggle="buttons"
                        >
                          <label className="btn bg-info active">
                            <input
                              type="radio"
                              name="event-tag"
                              value="bg-info"
                              checked
                            />
                          </label>
                          <label className="btn bg-warning">
                            <input
                              type="radio"
                              name="event-tag"
                              value="bg-warning"
                            />
                          </label>
                          <label className="btn bg-danger">
                            <input
                              type="radio"
                              name="event-tag"
                              value="bg-danger"
                            />
                          </label>
                          <label className="btn bg-success">
                            <input
                              type="radio"
                              name="event-tag"
                              value="bg-success"
                            />
                          </label>
                          <label className="btn bg-secondary">
                            <input
                              type="radio"
                              name="event-tag"
                              value="bg-default"
                            />
                          </label>
                          <label className="btn bg-primary">
                            <input
                              type="radio"
                              name="event-tag"
                              value="bg-primary"
                            />
                          </label>
                        </div>
                      </div>
                      <input type="hidden" className="new-event--start" />
                      <input type="hidden" className="new-event--end" />
                    </form>
                  </div>
                  {/* <!-- Modal footer --> */}
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-sm btn-link"
                      data-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-primary rounded-pill float-right new-event--add"
                    >
                      Create event
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Modal - Edit event --> */}
            <div
              className="modal fade"
              id="edit-event"
              tabIndex="-1"
              role="dialog"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  {/* <!-- Modal body --> */}
                  <div className="modal-body">
                    <form className="edit-event--form">
                      <div className="form-group">
                        <label className="form-control-label">Event title</label>
                        <input
                          type="text"
                          className="form-control form-control-alternative edit-event--title"
                          placeholder="Event Title"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-control-label d-block mb-3">
                          Status color
                        </label>
                        <div
                          className="btn-group btn-group-toggle btn-group-colors event-tag mb-0"
                          data-toggle="buttons"
                        >
                          <label className="btn bg-info active">
                            <input
                              type="radio"
                              name="event-tag"
                              value="bg-info"
                              checked
                            />
                          </label>
                          <label className="btn bg-warning">
                            <input
                              type="radio"
                              name="event-tag"
                              value="bg-warning"
                            />
                          </label>
                          <label className="btn bg-danger">
                            <input
                              type="radio"
                              name="event-tag"
                              value="bg-danger"
                            />
                          </label>
                          <label className="btn bg-success">
                            <input
                              type="radio"
                              name="event-tag"
                              value="bg-success"
                            />
                          </label>
                          <label className="btn bg-secondary">
                            <input
                              type="radio"
                              name="event-tag"
                              value="bg-default"
                            />
                          </label>
                          <label className="btn bg-primary">
                            <input
                              type="radio"
                              name="event-tag"
                              value="bg-primary"
                            />
                          </label>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-control-label">Description</label>
                        <textarea
                          className="form-control form-control-alternative edit-event--description textarea-autosize"
                          placeholder="Event Desctiption"
                        ></textarea>
                        <i className="form-group--bar"></i>
                      </div>
                      <input type="hidden" className="edit-event--id" />
                    </form>
                  </div>
                  {/* <!-- Modal footer --> */}
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-sm btn-link"
                      data-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-primary rounded-pill float-right"
                      data-calendar="update"
                    >
                      Update
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-danger rounded-pill float-right"
                      data-calendar="delete"
                    >
                      Delete
                    </button>
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
