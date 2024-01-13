import RestrauntCard from "./Card";
import resList from "../utils/mockData";
import { useState } from "react";

// Body component
const Body = () => {
  const [listOfRestraunts, setListOfRestraunts] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestraunts.filter(
              (res) => res.info.avgRating > 4
            );
            console.log(filteredList.length);
            setListOfRestraunts(filteredList);
          }}
        >
          Top Rated Restraunts
        </button>
      </div>
      <div className="res-container">
        {listOfRestraunts.map((restraunt) => (
          <RestrauntCard resData={restraunt} key={restraunt.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
