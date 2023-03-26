import { memo } from "react"

const StateLinks = ({item}) =>{
    return (
      <li className="col-6 col-sm-3 col-md-2">
        <a
          className="text-nowrap"
          href={`http://localhost:3000/fixes/${item.fixslug}`}
        >
          {item.state_name}
        </a>
      </li>
    );
}

export default memo(StateLinks)