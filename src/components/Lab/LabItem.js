import React from "react";
import { Link, withRouter } from "react-router-dom";
import distanceInWordsToNow from "date-fns/distance_in_words_to_now";
import FirebaseContext from "../../firebase/context";

function LabItem({ lab, index, history }) {
  const { firebase, user } = React.useContext(FirebaseContext);

  // function handleVote() {
  //   if (!user) {
  //     history.push("/login");
  //   } else {
  //     const voteRef = firebase.db.collection("links").doc(lab.id);
  //     voteRef.get().then((doc) => {
  //       if (doc.exists) {
  //         const previousVotes = doc.data().votes;
  //         const vote = { votedBy: { id: user.uid, name: user.displayName } };
  //         const updatedVotes = [...previousVotes, vote];
  //         const voteCount = updatedVotes.length;
  //         voteRef.update({ votes: updatedVotes, voteCount });
  //       }
  //     });
  //   }
  // }

  function handleDeleteLab() {
    const labRef = firebase.db.collection("labs").doc(lab.id);
    labRef
      .delete()
      .then(() => {
        console.log(`Document with ID ${lab.id} deleted`);
      })
      .catch((err) => {
        console.error("Error deleting document:", err);
      });
  }

  const userAuthUser = user && user.uid === lab.user.id;

  return (
    <div className="flex items-start mt2">
      <div className="flex items-center">
        <span className="gray">{index}.</span>
      </div>
      <div className="ml1">
        <div>
          {lab.name}
          <span className="link">({lab.title})</span>
        </div>
        <div className="f6 lh-copy gray">
          {lab.totalMarks} by {lab.user.name}{" "}
          {distanceInWordsToNow(lab.created)}
          {" | "}
          <Link to={`/lab/${lab.id}`}>Edit</Link>
          {userAuthUser && (
            <>
              {" | "}
              <span className="delete-button" onClick={handleDeleteLab}>
                delete
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default withRouter(LabItem);
