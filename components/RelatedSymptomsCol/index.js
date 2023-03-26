import { memo } from "react"

const RelatedSymptomsCol = ({item,createMarkup}) =>{
    return (
      <div className="col">
        <a
          className="card h-100 symptom-card px-0"
          href={item.url}
          title={item.title}
        >
          <div className="card-img-top">
            <div
              className="card-img-top-img lazy"
              style={{
                backgroundImage: `url(${item.mainImage.url})`,
              }}
            ></div>
          </div>
          <div className="card-body">
            <h3 className="h5 text-primary">
              <strong className="link">{item.title}</strong>
            </h3>
            <div
              className="card-text px-0 text-light text-small"
              dangerouslySetInnerHTML={createMarkup(item._shortContent)}
            />
          </div>
        </a>
      </div>
    );
}
export default memo(RelatedSymptomsCol)