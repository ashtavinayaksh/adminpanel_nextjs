import React from "react";
import Image from "next/image";
import ro from "../../public/img/icons/flags/ro.svg";
import es from "../../public/img/icons/flags/es.svg";
import us from "../../public/img/icons/flags/us.svg";
import gr from "../../public/img/icons/flags/gr.svg";

export default function Footer() {
  return (
    <>
      <div class="footer pt-5 pb-4 footer-light" id="footer-main">
        <div class="row text-center text-sm-left align-items-sm-center">
          <div class="col-sm-6">
            <p class="text-sm mb-0">
              &copy; 2022{" "}
              <a href="/" class="h6 text-sm" target="_blank">
                LiveLook
              </a>
              . All rights reserved.
            </p>
          </div>
          <div class="col-sm-6 mb-md-0">
            <ul class="nav justify-content-center justify-content-md-end">
              {/* <li class="nav-item dropdown border-right">
                <a
                  class="nav-link"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <Image alt="Image placeholder" src={ro} />
                  <span class="h6 text-sm mb-0">RO</span>
                </a>
                <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                  <a href="#" class="dropdown-item">
                    <Image alt="Image placeholder" src={es} class="mr-2" />
                    Spanish
                  </a>
                  <a href="#" class="dropdown-item">
                    <Image alt="Image placeholder" src={us} class="mr-2" />
                    English
                  </a>
                  <a href="#" class="dropdown-item">
                    <Image alt="Image placeholder" src={gr} class="mr-2" />
                    Greek
                  </a>
                </div>
              </li> */}
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Support
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Terms
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link pr-0" href="#">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
