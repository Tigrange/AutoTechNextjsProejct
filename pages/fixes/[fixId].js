import React, { Suspense } from "react";
import data from "api/fixes.json";
const Acordeon = React.lazy(() => import("components/Acordeon"));
const RelatedSymptomsCol = React.lazy(() =>import("components/RelatedSymptomsCol"));
const StateLinks = React.lazy(() => import("components/StateLinks"));
const ParentSymptomsSection = React.lazy(() =>import("components/ParentSymptomsSection"));

const FixSingle = ({ singleFix }) => {
  const createMarkup = (text)=>{
    return { __html: text };
  }
  return (
    <>
      <section className="dark-bg position-relative">
        <div
          className="row position-absolute w-100 h-100 mx-auto"
          id="article-title-img-bg"
        ></div>
        <div className="mx-auto content-container row">
          <div className="col-12 col-md-8 col-lg-6 py-8 position-relative ps-3 ps-xl-0">
            {singleFix.categoryName && (
              <a
                href={`/category/${singleFix.categorySlug}`}
                title="Car Smells"
              >
                <span className="badge text-bg-secondary mb-2 h6 py-1 px-4">
                  {singleFix.categoryName}
                </span>
              </a>
            )}
            <h1>{singleFix._title}</h1>
          </div>
        </div>
      </section>

      <section className="px-3 px-xlg-0 bg-primary bg-opacity-5">
        <div
          className="pt-3 pb-0 pb-md-3 mx-auto content-container"
          id="three-steps-wrapper"
        >
          <h2>Take Two Steps</h2>
          <div className="gap-5 col-12 py-2 py-md-4 mx-auto d-flex flex-row justify-content-md-start justify-content-around align-items-start align-items-md-center steps-guide-list">
            <button className="d-flex flex-column flex-md-row align-items-center py-3 steps-guide-item">
              <span className="icon-lg icon-add-shop-info position-relative me-md-3"></span>
              <span className="h5 mb-0">
                Add Info
                <br />
                for shop
              </span>
            </button>
            <button className="d-flex flex-column flex-md-row align-items-center py-3 steps-guide-item">
              <span className="icon-lg icon-request-appointment position-relative me-md-3"></span>
              <span className="h5 mb-0">
                Request
                <br />
                Appointment{" "}
              </span>
            </button>
          </div>
        </div>
      </section>

      {singleFix.fix.wo && (
        <section className="px-2 px-md-4 pt-7 pt-sm-8 pt-3 pt-sm-4">
          <div className="mx-auto content-container">
            <div className="accordion" id="accordionFixes">
              <h1 style={{ color: "red" }}>
                здесь нужно менять структуру API{" "}
              </h1>
              <h3 style={{ color: "red" }}>
                title accordeon-ов не связаны с масивом [wo]
              </h3>
              {singleFix.fix.wo.map((item, index) => (
                <Suspense fallback={"loading"}>
                  <Acordeon acc_item={item} key={index} />
                </Suspense>
              ))}
              ;
            </div>
          </div>
        </section>
      )}

      <section className="px-2 px-md-4 pt-8" id="home-symptoms-state-city">
        <div className="mx-auto content-container">
          <div className="col-12">
            <div className="h3 h-big border-bottom pb-4 mb-4">
              Select the state and town where this fix should be performed
            </div>
            <h3 className="mx-auto mb-3">
              Oil Pressure Sensor Replacement in States of
            </h3>
          </div>
          <ul className="row px-0 py-3">
            {singleFix.stateLinks.map((item) => {
              return (
                <Suspense fallback={"loading"}>
                  <StateLinks item={item} key={item.state_id} />
                </Suspense>
              );
            })}
          </ul>
        </div>
      </section>

      {singleFix?.parentSymptoms?.map((item) => {
        return (
          <Suspense fallback={"loading"}>
            <ParentSymptomsSection
              item={item}
              key={item.slug}
              createMarkup={createMarkup}
            />
          </Suspense>
        );
      })}

      <section className="px-2 px-md-4 py-8" id="other-vehicle-symptoms">
        <div className="mx-auto content-container">
          <div className="col-12 px-4">
            <h2 className="mx-auto mb-3">
              Other Vehicle Symptoms similar to Hey, Why Does My Car Smell Like
              Burning Oil?
            </h2>

            <p className="text-light">
              Below are just a few examples of typical Symptoms and Fixes your
              car might be experiencing.
            </p>
          </div>
          <div className="col-12 row row-cols-1 row-cols-md-3 g-5 pb-5 mt-0 mx-auto">
            {singleFix?.relatedSymptoms.map((item, index) => {
              if (index < 3) {
                return (
                  <Suspense fallback={"loading"}>
                    <RelatedSymptomsCol
                      item={item}
                      key={index}
                      createMarkup={createMarkup}
                    />
                  </Suspense>
                );
              }
            })}
          </div>
        </div>
      </section>

      <section className="px-2 px-md-4 pt-8" id="home-symptoms-state-city">
        <div className="mx-auto content-container">
          <div className="col-12">
            <div className="h3 h-big border-bottom pb-4 mb-4">
              Select the state and town where this fix should be performed
            </div>
            <h3 className="mx-auto mb-3">
              Oil Pressure Sensor Replacement in States of
            </h3>
          </div>
          <ul className="row px-0 py-3">
            {singleFix.allStateLinks.map((item) => {
              return (
                <Suspense fallback={"loading"}>
                  <StateLinks item={item} key={item.state_id} />
                </Suspense>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};
export default FixSingle;

export async function getStaticPaths() {
  const paths = data.map((post) => ({
    params: { fixId: post.top_fix_slug },
  }));
  return { paths, fallback: false };
}
export async function getStaticProps(context) {
  const { fixId } = context.params;
  let filtered = data?.filter((item) => item.top_fix_slug === fixId);
  return {
    props: {
      singleFix: filtered[0],
    },
  };
}
