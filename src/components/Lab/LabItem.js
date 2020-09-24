import React from "react";
import { Link, withRouter } from "react-router-dom";
import distanceInWordsToNow from "date-fns/distance_in_words_to_now";

function LabItem({ lab, index }) {
  return index === 0 ? (
    <div className="flex mt2 ph3">
      <div className="ml1">
        <div>
          {lab.name}
          <span className="link"> ({lab.title})</span>
          {" | "}
          <Link to={`/add-lab${lab.name.slice(-1)}`}>Add</Link>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex items-start mt2">
      <div className="flex items-center">
        <span className="gray">{index}.</span>
      </div>
      <div className="ml2">
        <div>
          {lab.name}
          <span className="link"> ({lab.title})</span>
        </div>
        <div className="f6 lh-copy gray">
          {lab.totalMarks} by {lab.user.name}
          {", "}
          {distanceInWordsToNow(lab.created)}
          {" ago | "}
          <Link
            to={{
              pathname: `/edit-lab${lab.name.slice(-1)}`,
              state: { lab: lab },
            }}
          >
            View & Edit
          </Link>
        </div>
      </div>
    </div>
  );
}

export default withRouter(LabItem);
