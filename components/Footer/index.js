import Image from "next/image";
import logo from "assets/img/logo-w.svg";

const Footer = () => {
    return (
      <footer
        className="px-0 py-5 mt-8 dark-bg text-start lazy"
        id="footer"
        data-bg="../assets/img/footer-xlg-bg.webp"
      >
        <div className="mx-auto content-container px-2 mx-auto row d-md-flex flex-row justify-content-between lh-lg">
          <div className="col-12 col-md-12 col-xl-4 order-3 order-xl-0 mt-4 mt-xl-0">
            <a
              href="/"
              aria-label="AutoTechIQ.com"
              title="AutoTechIQ.com"
              className="w-100 mb-4 d-block align-items-center text-dark text-decoration-none"
            >
              <Image
                loading="lazy"
                className="mw-100"
                src={logo}
                alt=""
                width="226"
                height="45"
              />
            </a>

            <p className="text-small">
              With combined 100+ years of experience working with car and truck
              owners like you, we've helped thousands of North American auto
              repair shops complete vehicle inspections to make your vehicle's
              condition super transparent.
            </p>
            <div className="d-none d-md-flex">
              <a
                aria-label="AutoTechIQ Twitter"
                title="AutoTechIQ Twitter"
                className="btn btn-icon btn-outline-secondary"
                href="https://twitter.com/AutoTechIQ"
                target="_blank"
              >
                <svg
                  className="svg-inline--fa fa-twitter"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="twitter"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                  ></path>
                </svg>{" "}
              </a>
              <a
                aria-label="AutoTechIQ Facebook"
                title="AutoTechIQ Facebook"
                className="btn btn-icon btn-outline-secondary ms-3"
                href="https://www.facebook.com/groups/1877510915781102"
                target="_blank"
              >
                <svg
                  className="svg-inline--fa fa-facebook-f"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="facebook-f"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  ></path>
                </svg>{" "}
              </a>
              <a
                aria-label="AutoTechIQ Email"
                title="AutoTechIQ Email"
                className="btn btn-icon btn-outline-secondary ms-3"
                // onMouseDown={window.app.tools.safe.m(this)}
                href="/"
              >
                <svg
                  className="svg-inline--fa fa-envelope"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="envelope"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                  ></path>
                </svg>
              </a>
              <a
                aria-label="AutoTechIQ Youtube"
                title="AutoTechIQ Youtube"
                className="btn btn-icon btn-outline-secondary ms-3"
                href="https://www.youtube.com/channel/UCOKaWtFulSJMJqqoLU_-Ihw"
                target="_blank"
              >
                <svg
                  className="svg-inline--fa fa-youtube"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="youtube"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                  ></path>
                </svg>
              </a>
            </div>
            <small className="text-opacity-75 d-block mt-5">
              Copyright © 2022 AutoTechIQ
            </small>
          </div>

          <div className="col-12 col-md-4 col-xl-2 ps-5 ps-md-3 order-0 order-md-0 order-md-1 d-none d-md-block">
            <h2 className="h4 text-white">Menu</h2>
            <a
              className="d-block text-white text-decoration-none py-2"
              href="/fixes"
              title="Symptoms and fixes"
            >
              Symptoms and fixes
            </a>
            <a
              className="d-block text-white text-decoration-none py-2"
              href="/shops-near-you"
              title="AutoTechIQ certified shops"
            >
              AutoTechIQ certified shops
            </a>
          </div>

          <div className="col-12 col-md-4 col-xl-3 order-1 order-md-1 order-md-2 d-none d-md-block">
            <div className="h4">&nbsp;</div>
            <a
              className="d-block text-white text-decoration-none py-2"
              href="/typical-vehicle-health-inspection"
              title="Vehicle health inspection"
            >
              Vehicle health inspection
            </a>
            <a
              className="d-block text-white text-decoration-none py-2"
              href="/why-us"
              title="About AutotechIQ"
            >
              About AutotechIQ
            </a>
            <a
              className="d-block text-white text-decoration-none py-2"
              href="/our-team"
              title="Our Team"
            >
              Team
            </a>
          </div>
          <div className="col-12 col-md-4 col-xl-3 ps-3 ps-lg-5 pb-5 order-0 order-md-2 order-xl-3">
            <h3>
              CALL US <span className="text-secondary">NOW</span>
            </h3>
            <h3>
              <a
                href="tel:+1(866)678-8505"
                className="p-1 color-primary text-decoration-none text-nowrap fs-2 d-flex align-items-center"
                id="bottom-phone"
              >
                <svg
                  className="svg-inline--fa fa-phone fs-1 mt-1 me-2"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="phone"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                  ></path>
                </svg>
                <strong>(866)678-8505</strong>
              </a>
            </h3>
            <a
              href="/"
              className="d-flex text-link text-white text-decoration-none align-items-center"
              //   onMouseDown={window.app.tools.safe.m(this)}
            >
              <svg
                className="svg-inline--fa fa-envelope me-2"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="envelope"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                ></path>
              </svg>
              Or send an <u className="ms-2">email</u>
            </a>

            <div className="mt-4">
              <h3>AutoTechIQ</h3>
              <div className="footer-addr">
                3905 State St., Ste 7-222
                <br />
                Santa Barbara, CA, USA
                <br />
                93105
              </div>
            </div>
            <div className="d-flex d-md-none mt-4">
              <a
                aria-label="AutoTechIQ Twitter"
                title="AutoTechIQ Twitter"
                className="btn btn-icon btn-outline-secondary"
                href="https://twitter.com/AutoTechIQ"
                target="_blank"
              >
                <svg
                  className="svg-inline--fa fa-twitter"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="twitter"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                  ></path>
                </svg>{" "}
              </a>
              <a
                aria-label="AutoTechIQ Facebook"
                title="AutoTechIQ Facebook"
                className="btn btn-icon btn-outline-secondary ms-3"
                href="https://www.facebook.com/groups/1877510915781102"
                target="_blank"
              >
                <svg
                  className="svg-inline--fa fa-facebook-f"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="facebook-f"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  ></path>
                </svg>{" "}
              </a>
              <a
                href="/"
                title="AutoTechIQ Email"
                className="btn btn-icon btn-outline-secondary ms-3"
                // onMouseDown={window.app.tools.safe.m(this)}
              >
                <svg
                  className="svg-inline--fa fa-envelope"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="envelope"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                  ></path>
                </svg>{" "}
              </a>
              <a
                aria-label="AutoTechIQ Youtube"
                title="AutoTechIQ Youtube"
                className="btn btn-icon btn-outline-secondary ms-3"
                href="https://www.youtube.com/channel/UCOKaWtFulSJMJqqoLU_-Ihw"
                target="_blank"
              >
                <svg
                  className="svg-inline--fa fa-youtube"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="youtube"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                  ></path>
                </svg>{" "}
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
}
export default Footer;