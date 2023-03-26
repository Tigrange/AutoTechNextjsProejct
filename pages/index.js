import Link from "next/link";
import data from "api/fixes.json"


export default function Fixes({fixes}) {
  return (
    <>
    <section className="px-2 px-md-4 py-3 py-sm-3">
      <div className="mx-auto content-container">
        <div className="row mt-3 mb-4">
          <div className="col-12 col-md-6">
            <h1>Fixes</h1>
          </div>
          <div className="col-12 col-md-6">
            <div className="mud-input-control mud-input-input-control mt-3">
              <div className="mud-input-control-input-container">
                <div className="mud-input mud-input-text mud-input-adorned-start mud-input-underline mud-shrink">
                  <div className="mud-input-adornment mud-input-adornment-start"><svg aria-label="Icon" tabIndex="-1"
                      className="mud-icon-root mud-icon-default mud-svg-icon mud-icon-size-medium" focusable="false"
                      viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                      </path>
                    </svg></div><input
                    className="mud-input-slot mud-input-root mud-input-root-text mud-input-root-adorned-start" type="text"
                    placeholder="Search" inputMode="text" maxLength="524288" aria-invalid="false"
                    _bl_103862e3-c0ce-4fe0-8f35-551642391a76=""/>
                  <div className="mud-input-slot mud-input-root mud-input-root-text mud-input-root-adorned-start"
                    style={{display:'none'}} tabIndex="-1" _bl_ce6ba062-a586-48ce-aa13-f5657fe0ad81=""></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className="light-blue-disc tool-list">
          {fixes?.map((item)=>{
            return (
              <li key={item._title}>
                <Link
                  className="text-break"
                  href={`fixes/${item.top_fix_slug}`}
                >
                  <b>{item._title}</b>
                </Link>
              </li>
            );
          })}
          
        </ul>
        <nav className="my-6">
          <ul className="pagination mx-auto justify-content-center">
            <li className="page-item"><span aria-label="Previous Page" title="Previous Page"
                className="page-link disabled"><span aria-hidden="true">«</span></span></li>
            <li className="page-item active"><span className="page-link">1</span></li>
            <li className="page-item"><a aria-label="Page #2" title="Page Page #2" href="/fixes/page/2"
                className="page-link">2</a></li>
            <li className="page-item"><a aria-label="Page #3" title="Page Page #3" href="/fixes/page/3"
                className="page-link">3</a></li>
            <li className="page-item disabled"><span className="page-link">...</span></li>
            <li className="page-item"><a href="/fixes/page/2" aria-label="Next Page" title="Next Page"
                className="page-link"><span aria-hidden="true">»</span></a></li>
          </ul>
        </nav>
      </div>
    </section>
      
    </>
  )
}

export async function getStaticProps() {
  const res = data;
  return {
    props: {
      fixes: res,
    },
  };
}