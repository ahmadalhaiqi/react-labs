import React from "react";
import FirebaseContext from "../../firebase/context";
import LabItem from "./LabItem";

function LabList(props) {
  const { user, firebase } = React.useContext(FirebaseContext);
  const [labs, setLabs] = React.useState([]);

  React.useEffect(() => {
    getLabs();
  }, []);

  function getLabs() {
    firebase.db
      .collection("labs")
      .where("user.id", "==", user.uid)
      .onSnapshot(handleSnapshot);
  }

  function handleSnapshot(snapshot) {
    const labs = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    setLabs(labs);
  }

  return (
    <div>
      {labs.map((lab, index) => (
        <LabItem lab={lab.id} labName={lab.name} index={index + 1} />
      ))}
    </div>
  );
}

export default LabList;
