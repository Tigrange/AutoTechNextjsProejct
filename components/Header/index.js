const Header = () =>{
    return (
      <header className="px-0 mt-0 mb-1 p0 w-100 bg-white" id="sticky-nav">
        <div className="w-100">
          <div className="w-100 bg-white">
            <div className="mx-auto content-container">
              <nav className="navbar navbar-expand-xl navbar-light color-primary">
                <div className="container-fluid d-flex align-items-center">
                  <a
                    href="/"
                    aria-label="AutoTechIQ.com"
                    title="AutoTechIQ.com"
                    className="order-1 d-flex col-3 col-sm align-items-center text-dark text-decoration-none"
                    id="top-logo"
                  ></a>
                  <div
                    className="px-lg-3 d-none d-xl-block collapse navbar-collapse order-4 order-xl-2"
                    id="top-navbar"
                  >
                    <ul className="navbar-nav mx-xxl-5 mb-2 mb-lg-0 d-flex justify-content-around w-100">
                      <li className="nav-item dropdown">
                        <span
                          id="vehicles-why-us-nav"
                          title="Why AutoTechIQ"
                          className="nav-link text-start"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Why AutoTechIQ
                          <svg
                            className="icon icon-xsm"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path
                              fill="currentColor"
                              d=" M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                            ></path>
                          </svg>
                        </span>
                        <ul
                          className="dropdown dropdown-menu"
                          aria-labelledby="vehicles-why-us-nav"
                        >
                          <li>
                            <a
                              className="dropdown-item text-start"
                              href="/why-us"
                              title="Our Purpose"
                            >
                              Our Purpose
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item text-start"
                              href="/our-team"
                              title="Our Team"
                            >
                              Our Team
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item text-start"
                              href="/author/Uwe-Kleinschmidt"
                              title="Author: Uwe-Kleinschmidt"
                            >
                              Author: Uwe-Kleinschmidt
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item text-start"
                              href="/business-certification-levels"
                              title="Business Certification Levels"
                            >
                              Business Certification Levels
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <a
                          title="Success Stories"
                          className="nav-link text-start"
                          href="/"
                        >
                          Fixes
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          title="Shops Near You"
                          className="nav-link text-start"
                          href="/shops-near-you"
                        >
                          Shops Near You
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <span
                          title="Vehicle Functions"
                          className="nav-link text-start"
                          id="vehicles-symptoms-nav"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Vehicle Symptoms
                          <svg
                            className="icon icon-xsm"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path
                              fill="currentColor"
                              d=" M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                            ></path>
                          </svg>
                        </span>

                        <ul
                          className="dropdown dropdown-menu"
                          aria-labelledby="vehicles-symptoms-nav"
                        >
                          <li className="dropdown second-level">
                            <a
                              className="dropdown-item text-start"
                              href="/symptom/my-car-smells-like-burning-rubber-main"
                            >
                              Why Does my Car smell?
                            </a>
                            <ul className="list-unstyled ps-2">
                              <li>
                                <a
                                  className="dropdown-item text-start"
                                  href="/symptom/my-car-smells-like-burning-oil"
                                >
                                  Burning Oil Smell
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item text-start"
                                  href="/symptom/my-car-smells-like-burning-rubber-3"
                                >
                                  Burning Rubber Smell
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item text-start"
                                  href="/symptom/my-car-smells-like-rotten-eggs"
                                >
                                  Rotten Egg Smell
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item text-start"
                                  href="/symptom/my-car-smells-like-burning-plastic"
                                >
                                  Burning Plastic Smell
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown second-level">
                            <a
                              className="dropdown-item text-start"
                              href="/symptom/why-does-my-car-make-noises-summary"
                            >
                              Why Does My Car Make Noises?
                            </a>
                            <ul className="list-unstyled ps-2">
                              <li>
                                <a
                                  className="dropdown-item text-start"
                                  href="/symptom/my-car-squealing-noise-while-driving-but-no-brakes-applied"
                                >
                                  Squealing Noise
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item text-start"
                                  href="/symptom/humming-noise-while-driving"
                                >
                                  Humming Noise
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item text-start"
                                  href="/symptom/car-wont-start-no-noise"
                                >
                                  No Noise/No Start
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item text-start"
                                  href="/symptom/car-sounds-like-a-lawn-mower"
                                >
                                  Lawn Mower Noise
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown second-level">
                            <a
                              className="dropdown-item text-start"
                              href="/symptom/what-do-my-dashboard-warning-lights-mean-main"
                            >
                              What Do My Dashboard Warning Lights Mean?
                            </a>
                            <ul className="list-unstyled ps-2">
                              <li>
                                <a
                                  className="dropdown-item text-start"
                                  href="/symptom/check-engine-light-is-on"
                                >
                                  Check Engine Light
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item text-start"
                                  href="/symptom/car-engine-temperature-warning-light-what-it-means-and-why-its-on"
                                >
                                  Engine Temperature Light
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item text-start"
                                  href="/symptom/brake-light-on-dash-is-on"
                                >
                                  Brake Light
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item text-start"
                                  href="/symptom/car-battery-warning-light-symptoms-and-causes"
                                >
                                  Battery Light
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item text-start"
                                  href="/symptom/tire-pressure-light-is-on"
                                >
                                  Tire Pressure Light
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item text-start"
                                  href="/symptom/your-cars-abs-and-traction-control-lights-what-they-mean-and-where-to-find-help"
                                >
                                  ABS/Traction Control Light
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item text-start"
                                  href="/symptom/oil-pressure-warning-light"
                                >
                                  Oil Pressure Light
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item text-start"
                                  href="/symptom/why-is-my-transmission-warning-light-on-and-what-should-i-do-about-it"
                                >
                                  Transmission Light
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item text-start"
                                  href="/symptom/power-steering-warning-light"
                                >
                                  Power Steering Light
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown second-level">
                            <a
                              className="dropdown-item text-start"
                              href="/symptom/what-are-common-car-failure-searches"
                            >
                              What Are Common Car Failure Searches?
                            </a>
                            <ul className="list-unstyled ps-2">
                              <li>
                                <a
                                  className="dropdown-item text-start"
                                  href="/symptom/why-wont-my-car-start-bad-starter-causes-and-symptoms"
                                >
                                  Bad Starter
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item text-start"
                                  href="/symptom/bad-fuel-pump-symptoms-and-causes"
                                >
                                  Bad Fuel Pump
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item text-start"
                                  href="/symptom/bad-ignition-switch-symptoms-and-causes"
                                >
                                  Bad Ignition Switch
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item text-start"
                                  href="/symptom/hey-why-is-my-cars-reduced-engine-power-message-on"
                                >
                                  Reduced Engine Power Light
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item text-start"
                                  href="/symptom/hey-why-am-i-being-told-that-my-camshaft-sensor-failed"
                                >
                                  Bad Camshaft Sensor
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item text-start"
                                  href="/symptom/hey-why-is-my-cars-esc-light-active"
                                >
                                  ESC Light
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown second-level">
                            <a
                              className="dropdown-item text-start"
                              href="/symptom/why-does-my-car-drive-weird"
                            >
                              Why Does My Car Drive Weird?
                            </a>
                            <ul className="list-unstyled ps-2">
                              <li>
                                <a
                                  className="dropdown-item text-start"
                                  href="/symptom/hey-why-is-there-smoke-coming-from-my-cars-wheels"
                                >
                                  Brake Caliper Issue
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item text-start"
                                  href="/symptom/hey-why-is-my-car-grinding-when-i-brake"
                                >
                                  Brakes Grinding
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item text-start"
                                  href="/symptom/hey-why-wont-my-car-start"
                                >
                                  No Start
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item text-start"
                                  href="/symptom/hey-why-is-my-cars-engine-sputtering"
                                >
                                  Engine Sputtering
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item text-start"
                                  href="/symptom/hey-why-is-my-cars-steering-wheel-shaking"
                                >
                                  Steering Wheel Shaking
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item text-start"
                                  href="/symptom/hey-why-is-my-cars-transmission-slipping"
                                >
                                  Transmission Slipping
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item text-start"
                                  href="/symptom/hey-why-does-my-car-shake-when-i-brake"
                                >
                                  Shaking While Braking
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item text-start"
                                  href="/symptom/hey-why-is-my-car-overheating"
                                >
                                  Car Overheating
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown second-level">
                            <a
                              className="dropdown-item text-start"
                              href="/symptom/hey-why-is-my-car-leaking-oil"
                            >
                              Car Leaking Oil
                            </a>
                          </li>
                          <li className="dropdown second-level">
                            <a
                              className="dropdown-item text-start"
                              href="/symptom/hey-why-is-my-car-leaking-coolant"
                            >
                              Car Leaking Coolant
                            </a>
                          </li>
                          <li className="dropdown second-level">
                            <a
                              className="dropdown-item text-start"
                              href="/symptom/hey-why-is-my-car-leaking-water"
                            >
                              Car Leaking Water
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="d-flex col-md flex-column align-items-center align-items-md-end order-2 order-xl-3"
                    id="top-phone-wrapper"
                  >
                    <a
                      href="tel:+1(866)678-8505"
                      className="p-1 color-primary text-decoration-none text-nowrap fs-2 d-flex align-items-center"
                      id="top-phone"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="fs-1 mt-1 me-2 icon icon-xsm"
                      >
                        <path
                          d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <strong>(866)678-8505</strong>
                    </a>
                  </div>

                  <div
                    className="col-1 text-end d-block d-xl-none order-3 order-xl-4"
                    id="top-toggle"
                  >
                    <button
                      className="navbar-toggler border-0"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasMenu"
                      aria-controls="offcanvasMenu"
                      title="Show Menu"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div
            className="w-100 bg-secondary d-block rounded-bottom"
            id="apnt-container"
          >
            <div className="mx-auto content-container">
              <div className="position-relative">
                <div
                  className="col-11 col-lg-9 mx-auto d-flex secondary-bg-white flex-row justify-content-between align-items-end align-items-md-center py-0 py-md-1 link-hover"
                  id="apnt-container-bar"
                >
                  <a
                    className="text-center  d-flex flex-column flex-md-row align-items-center py-0 py-md-3 help-popover"
                    href="/shops-near-you"
                    // onClick="window.app.apnt.check_wizard(event);window.app.apnt.hide(()=>{window.app.wizard.locate.wizard(event);});window.app.ga.apnt_bar_your_shop();"
                  >
                    <strong className="py-1 d-block  text-wrap">
                      Elevated Autoworks
                    </strong>
                  </a>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#selectVehicleModal"
                    className="text-center d-flex flex-column flex-md-row align-items-center py-0 py-md-3 help-popover"
                    // onClick="window.app.ga.apnt_bar_your_car();"
                  >
                    <span className="icon-l icon-car-white position-relative me-md-3"></span>
                    <strong className="py-1">Your Car</strong>
                  </a>
                  <a
                    data-bs-toggle="modal"
                    data-bs-target="#selectConcernModal"
                    className="text-center d-flex flex-column flex-md-row align-items-center py-0 py-md-3 help-popover"
                    href="#"
                    // onClick="window.app.ga.apnt_bar_your_concern();"
                  >
                    <span className="icon-l icon-tool-white position-relative me-md-3"></span>
                    <strong className="py-1">Your Concerns</strong>
                  </a>
                  <a
                    data-bs-toggle="modal"
                    data-bs-target="#selectDateModal"
                    className="text-center d-flex flex-column flex-md-row align-items-center py-0 py-md-3 help-popover"
                    href="#"
                    // onClick="window.app.ga.apnt_bar_date();"
                  >
                    <span className="icon-l icon-calendar-white position-relative me-md-3"></span>
                    <strong className="py-1">Appointment Date</strong>
                  </a>
                </div>
              </div>
            </div>

            <div className="collapse" id="collapseApntForm">
              <div className="bg-primary">
                <div
                  className="mx-auto content-container"
                  id="apnt-collapse-wrapper"
                >
                  <div className="row position-relative">
                    <form className="row text-black text-start pt-3 w-100 h-100">
                      <div className="col-12">
                        <h2 className=" text-white mt-1 mb-2 mt-xl-3 mb-xl-4">
                          Your appointment request
                        </h2>
                      </div>
                      <div className="col-12 col-lg-6">
                        <div className="col-12 mb-2 mb-xl-3">
                          <label
                            htmlFor="apnt-form-name"
                            className="form-label text-white mb-0 mb-xl-2"
                          >
                            Name
                          </label>
                          <input
                            placeholder="John Doe"
                            id="apnt-form-name"
                            aria-describedby="apnt-form-name"
                            className="form-control valid"
                            _bl_de2bc3da-4188-4dad-b3d9-a90e5aebbfa7=""
                          />
                        </div>
                        <div className="col-12 mb-2 mb-xl-3">
                          <label
                            htmlFor="apnt-form-email"
                            className="form-label text-white mb-0 mb-xl-2"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            placeholder="john@doe.com"
                            id="apnt-form-email"
                            aria-describedby="apnt-form-email"
                            className="form-control valid"
                            _bl_a5ac9d97-e6d7-43e0-b841-ab9d634f0b20=""
                          />

                          <div className="validation-message">
                            The field email is invalid.
                          </div>
                        </div>
                        <div className="col-12 mb-2 mb-xl-3">
                          <label
                            htmlFor="apnt-form-phone"
                            className="form-label text-white mb-0 mb-xl-2"
                          >
                            Phone
                          </label>
                          <input
                            type="tel"
                            placeholder="(866) ___  ____"
                            id="apnt-form-phone"
                            aria-describedby="apnt-form-phone"
                            className="form-control valid"
                            _bl_108b0280-b8ed-4c84-b287-2ff614b8b438=""
                          />

                          <div className="validation-message">
                            The field phone is invalid.
                          </div>
                        </div>
                        <div className="mb-3 mb-xl-4">
                          <label
                            htmlFor="apnt-form-details"
                            className="form-label text-white mb-0 mb-xl-2"
                          >
                            Your message{" "}
                          </label>
                          <textarea
                            rows="3"
                            placeholder="Please type it in here..."
                            className="form-control"
                            id="apnt-form-details"
                            aria-describedby="apnt-form-details"
                          ></textarea>

                          <div className="validation-message">
                            Please enter at least five words
                          </div>
                        </div>
                        <div className="row mb-2 mb-xl-3">
                          <div className="col-6 text-white">
                            Ride home or to work needed:
                          </div>

                          <div className="col-auto form-check me-3">
                            <label
                              className="form-check-label text-white"
                              htmlFor="apnt-form-ride-yes"
                            >
                              Yes
                            </label>
                            <input
                              id="apnt-form-ride-yes"
                              className="form-check-input primary-radio valid"
                              type="radio"
                              name="apnt-form-ride"
                              value="True"
                              _bl_283f19ee-c8ce-40ee-b52c-f6baa49e9c22=""
                            />
                          </div>
                          <div className="col-auto form-check">
                            <label
                              className="form-check-label text-white"
                              htmlFor="apnt-form-ride-no"
                            >
                              No
                            </label>
                            <input
                              id="apnt-form-ride-no"
                              className="form-check-input primary-radio valid"
                              type="radio"
                              name="apnt-form-ride"
                              value="False"
                              _bl_dafd8ceb-115e-45c7-9778-0e1f3786f702=""
                            />
                          </div>
                        </div>
                        <div className="row mb-2 mb-xl-3">
                          <div className="col-6 text-white">
                            Have you been to the shop before?:
                          </div>

                          <div className="col-auto form-check me-3">
                            <label
                              className="form-check-label text-white"
                              htmlFor="apnt-form-before-yes"
                            >
                              Yes
                            </label>
                            <input
                              id="apnt-form-before-yes"
                              className="form-check-input primary-radio valid"
                              type="radio"
                              name="apnt-form-before"
                              value="True"
                              _bl_e0efb75c-6eab-4b99-81da-829c73fa22cc=""
                            />
                          </div>
                          <div className="col-auto form-check">
                            <label
                              className="form-check-label text-white"
                              htmlFor="apnt-form-before-no"
                            >
                              No
                            </label>
                            <input
                              id="apnt-form-before-no"
                              className="form-check-input primary-radio valid"
                              type="radio"
                              name="apnt-form-before"
                              value="False"
                              _bl_d5380f93-c832-416f-b69a-23da00fc3b07=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-lg-6 pt-3">
                        <div className="d-flex flex-row align-items-center justify-content-between">
                          <div className="flex-column flex-column py-2 py-xl-3">
                            <h5 className="text-white icon-box-center">
                              Elevated Autoworks
                            </h5>
                            <input
                              type="text"
                              id="apnt-form-shop"
                              aria-describedby="apnt-form-shop"
                              className="visually-hidden form-control valid"
                              _bl_e30fdc60-3ce0-4445-b071-544cfc64531a=""
                            />
                          </div>

                          <a
                            className="btn btn-icon"
                            href="/shops-near-you"
                            // onClick="window.app.apnt.check_wizard(event);window.app.apnt.hide(()=>{window.app.wizard.locate.wizard(event);});window.app.ga.apnt_form_your_shop();"
                          >
                            <span className="icon icon-edit-white position-relative"></span>
                          </a>
                        </div>
                        <div className="d-flex flex-row align-items-center justify-content-between">
                          <div className="flex-column flex-column py-2 py-xl-3">
                            <h5 className="text-white icon-box icon-car-white icon-box-l icon-box-center">
                              Choose Your Car
                            </h5>
                            <input
                              type="text"
                              id="apnt-form-ymm"
                              aria-describedby="apnt-form-ymm"
                              className="visually-hidden form-control invalid"
                              _bl_6950d9ce-a9f4-4059-9804-797daae05a29=""
                              aria-invalid="true"
                            />

                            <div className="validation-message">
                              Please select your vehicle type
                            </div>
                          </div>

                          <a
                            className="btn btn-icon"
                            data-bs-toggle="modal"
                            data-bs-target="#selectVehicleModal"
                            // onClick={window.app.ga.apnt_form_your_car()}
                          >
                            <span className="icon icon-edit-white position-relative"></span>
                          </a>
                        </div>
                        <div className="d-flex flex-row align-items-center justify-content-between">
                          <div className="flex-column flex-column py-2 py-xl-3">
                            <h5 className="text-white icon-box icon-calendar-white icon-box-l icon-box-center">
                              Appointment Date
                            </h5>

                            <div className="validation-message">
                              Please enter preferred date of visit
                            </div>
                          </div>

                          <a
                            className="btn btn-icon"
                            data-bs-toggle="modal"
                            data-bs-target="#selectDateModal"
                            // onClick="window.app.ga.apnt_form_date();"
                          >
                            <span className="icon icon-edit-white position-relative"></span>
                          </a>
                        </div>
                        <div className="d-flex flex-row align-items-center justify-content-between">
                          <h5 className="text-white icon-box icon-clock-white icon-box-l icon-box-center py-3">
                            Appointment Time
                          </h5>
                          <a
                            className="btn btn-icon"
                            data-bs-toggle="modal"
                            data-bs-target="#selectTimeModal"
                            // onClick="window.app.ga.apnt_form_time();"
                          >
                            <span className="icon icon-edit-white position-relative"></span>
                          </a>
                        </div>
                        <div className="d-flex flex-row align-items-center justify-content-between">
                          <div className="flex-column flex-column py-2 py-xl-3">
                            <h5 className="text-white icon-box icon-tool-white icon-box-l icon-box-center">
                              Choose Your Concern
                            </h5>

                            <div className="validation-message">
                              Please add your vehicle problem symptoms
                            </div>
                          </div>
                          <a
                            className="btn btn-icon"
                            data-bs-toggle="modal"
                            data-bs-target="#selectConcernModal"
                            // onClick="window.app.ga.apnt_form_your_concern();"
                          >
                            <span className="icon icon-edit-white position-relative"></span>
                          </a>
                          <input
                            type="text"
                            id="apnt-form-symptom"
                            aria-describedby="apnt-form-symptom"
                            className="visually-hidden form-control invalid"
                            _bl_17153901-78cf-437b-8d98-3e5974bf3672=""
                            aria-invalid="true"
                          />
                        </div>
                        <div className="mb-3 mt-3 col-12">
                          <button
                            title="Submit Request"
                            type="submit"
                            className="d-block btn border-15 btn-secondary btn-cta cta-secondary btn-lg w-100 px-lg-6 px-md-3 px-sm-2 mt-3"
                            id="apnt-form-submit-btn"
                            // onClick="window.app.ga.apnt_form_submit();"
                            name="Submit Appointment Request"
                          >
                            Send
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <button
              id="apnt-form-expand-btn"
              data-bs-toggle="collapse"
              data-bs-target="#collapseApntForm"
            ></button>
          </div>
        </div>
      </header>
    );
};
export default Header