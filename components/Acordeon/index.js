import { memo, useState } from "react";
const Acordeon = ({acc_item}) =>{
    const [show,setShow] = useState(false)
    return (
      <>
        <div className="accordion-item">
          <div
            className="d-flex mb-5 row flex-column flex-md-row align-items-center align-items-md-center fix-title"
            id="fix-title-1"
          >
            <div
              className="col text-center text-md-start"
              onClick={() => setShow(!show)}
            >
              <h3 className="accordion-header" id="panelsFixes-heading-1">
                <button className={`accordion-button ${!show && "collapsed"}`} type="button">
                  {acc_item._title}
                </button>
              </h3>
            </div>
            <div className="col-auto d-none d-md-flex flex-column flex-md-row align-items-center justify-content-center mt-2">
              <h3 className="h5 mx-4 mb-0">
                Is this the fix you request to be
                <br /> considered by the shop?
              </h3>
              <div className="gap-3 d-flex">
                <button
                  className="mb-0 btn btn-secondary btn-sm cta h6 flex-fill px-3"
                  type="button"
                >
                  Yes
                </button>
                <button className="mb-0 btn btn-primary btn-sm btn-primary-20 h6 flex-fill px-3">
                  No
                </button>
              </div>
            </div>
            <div className="col-auto rounded d-flex d-md-none flex-column flex-md-row align-items-center justify-content-center mt-4 p-3 bg-primary">
              <h3 className="h5 mx-4 mb-3 text-white">
                Is this the fix you request to be
                <br /> considered by the shop?
              </h3>
              <div className="gap-3 d-flex">
                <button
                  className="mb-0 btn btn-secondary btn-sm cta h6 flex-fill px-3"
                  type="button"
                >
                  Yes
                </button>
                <button className="mb-0 btn btn-light btn-sm h6 flex-fill px-3">
                  No
                </button>
              </div>
            </div>
          </div>

            {show && 
            <div
                id="panelsFixes-collapse-1"
                className="accordion-collapse collapse active show"
                aria-labelledby="panelsFixes-heading-1"
            >
                <div className="accordion-body">
                <p>
                    A test/diagnosis isolates one of the following potential fixes:
                </p>
                <div className="masonry g-4 pb-5 pt-3">
                    <div className="col">
                    <div className="p-3 rounded bg-primary bg-opacity-5">
                        <ul className="theme-ul">
                        <li>
                            <h3 className="h5">{acc_item._title}</h3>
                            <ul className="mt-2">
                            {acc_item.jobs.map((item, index) => {
                                return (
                                <li
                                    className="text-dark text-opacity-50"
                                    key={index}
                                >
                                    {item._val}
                                </li>
                                );
                            })}
                            </ul>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>

                <p>
                    Your go-to shop might propose a solution that includes any of
                    the fixes above — or a different one.
                </p>
                <div className="row mt-5">
                    <div className="col-12 col-md-4 position-relative pb-4 mb-5">
                    <div className="d-flex align-items-center icon-box-mid icon-safety h5 mb-3">
                        <strong className="h4 mb-0">Safety</strong>
                        <span
                        className="btn icon-sm icon-info border-0 py-2 px-4"
                        // data-bs-toggle="tooltip"
                        // data-bs-html="true"
                        // data-bs-title="While rare, a complete loss of engine oil can break the engine or prevent it from starting, leaving you stranded."
                        ></span>
                    </div>
                    <div
                        className="lazy score-bar"
                        // data-bs-toggle="tooltip"
                        // data-bs-html="true"
                        // data-bs-title="<b>Medium</b>"
                    >
                        <div className="lazy clip-path"></div>
                    </div>
                    </div>
                    <div className="col-12 col-md-4 position-relative pb-4 mb-5">
                    <div className="d-flex align-items-center icon-box-mid icon-cost h5 mb-3">
                        <strong className="h4 mb-0">Cost Avoidance</strong>
                        <span
                        className="btn icon-sm icon-info border-0 py-2 px-4"
                        // data-bs-toggle="tooltip"
                        // data-bs-html="true"
                        // data-bs-title="Oil seeping and soaking rubber and plastic components will cause engine damage if not corrected over time."
                        ></span>
                    </div>
                    <div
                        className="lazy score-bar"
                        // data-bs-toggle="tooltip"
                        // data-bs-html="true"
                        // data-bs-title="<b>Medium</b>"
                    >
                        <div className="lazy clip-path"></div>
                    </div>
                    </div>
                    <div className="col-12 col-md-4 position-relative pb-4 mb-5">
                    <div className="d-flex align-items-center icon-box-mid icon-environment h5 mb-3">
                        <strong className="h4 mb-0">Environmental Impact</strong>
                        <span
                        className="btn icon-sm icon-info border-0 py-2 px-4"
                        // data-bs-toggle="tooltip"
                        // data-bs-html="true"
                        // data-bs-title="Dripping oil builds up on driveways and streets, causing a strong smell. Then, they wash up on rivers and streams during rains, becoming an environmental concern."
                        ></span>
                    </div>
                    <div
                        className="lazy score-bar"
                        // data-bs-toggle="tooltip"
                        // data-bs-html="true"
                        // data-bs-title="<b>High</b>"
                    >
                        <div className="lazy clip-path"></div>
                    </div>
                    </div>
                </div>
                </div>
            </div>}
        </div>
      </>
    );
}
export default memo(Acordeon)