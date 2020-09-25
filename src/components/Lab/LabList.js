import React from "react";
import FirebaseContext from "../../firebase/context";
import LabItem from "./LabItem";
import labTitles from "./LabTitles";

function LabList(props) {
  const { user, firebase } = React.useContext(FirebaseContext);
  const [labs, setLabs] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const unsubscribe = getLabs();
    return () => unsubscribe();
  }, [user]);

  function getLabs() {
    if (!user) {
      props.history.push("/login");
    } else {
      if (user.email === "admin@gmail.com")
        firebase.db
          .collection("labs")
          .orderBy("created")
          .onSnapshot(handleSnapshot);
      else
        firebase.db
          .collection("labs")
          .where("user.id", "==", user.uid)
          .orderBy("created")
          .onSnapshot(handleSnapshot);
    }
  }

  function handleSnapshot(snapshot) {
    const labs = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    setLabs(labs);
    setLoading(false);
  }

  return !loading ? (
    user && user.email === "admin@gmail.com" ? (
      <div>
        {labs.map((lab, index) => (
          <LabItem key={lab.id} lab={lab} index={index + 1} />
        ))}
      </div>
    ) : (
      <>
        <div>
          {labs.map((lab, index) => (
            <LabItem key={lab.id} lab={lab} index={index + 1} />
          ))}
        </div>
        <div className="mt3">
          {labTitles.map((element, i) => {
            return labs.findIndex((lab) => lab.name === element.name) === -1 ? (
              <LabItem key={i} lab={element} index={0} />
            ) : (
              ""
            );
          })}
        </div>
      </>
    )
  ) : (
    <div> Loading... </div>
  );
}

export default LabList;
