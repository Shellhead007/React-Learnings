import RestrauntCard from "./Card";
import resList from "../utils/mockData";

// Body component
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search: ToDO</div>
      <div className="res-container">
        {resList.map((restraunt) => (
          <RestrauntCard resData={restraunt} key={restraunt.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
