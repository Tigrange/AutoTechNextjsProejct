import { memo } from "react";

const ParentSymptomsSection =({item,createMarkup}) =>{
    return (
      <section className="px-2 px-md-4 py-5 py-sm-6">
        <div className="mx-auto content-container row">
          <div className="col-lg-6 col-md-5 col-12">
            <figure className="mb-3 position-relative">
              <img
                className="lazy rounded w-100 img-fluid d-block"
                src={item.mainImage.url}
                data-src={item.mainImage.url}
                alt={item.mainImage}
                width={item.width}
                height={item.height}
              />

              <figcaption className="text-center text-light">
                {item._topImgCaption}
              </figcaption>
            </figure>
          </div>
          <div className="col-lg-6 col-md-7 col-12">
            <div className="d-none d-md-flex mb-5 row">
              <div className="col">
                <div className="h6">This fix will help eliminating</div>
                <h3
                  className="mx-auto help-popover h3 h-big"
                  id="h-does-your-car-have-a-burning-oil-smell"
                  data-tag="confirm-issue-pop"
                  data-idx="-1"
                  // data-bs-fallbackplacements=""
                  // data-bs-html="true"
                  // data-bs-toggle="popover"
                  // data-bs-placement="bottom"
                  // data-bs-custom-className="help-popover-top-right no-link"
                  // data-bs-content="Do you experience this symptom?"
                >
                  {item._menuTitle}
                </h3>
              </div>
            </div>
            <div className="d-block">
              <div dangerouslySetInnerHTML={createMarkup(item._shortContent)} />
              <p className="text-end">
                <a href={`${item.url}`} className="link-secondary">
                  Learn More about the Symptom
                  <svg
                    className="svg-inline--fa fa-arrow-right-long"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="arrow-right-long"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
                    ></path>
                  </svg>
                  <i className="fa-solid fa-arrow-right-long"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}
export default memo(ParentSymptomsSection)