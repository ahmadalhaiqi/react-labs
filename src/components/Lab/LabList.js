import React from "react";
import FirebaseContext from "../../firebase/context";
import LabItem from "./LabItem";

function LabList(props) {
  const { user, firebase } = React.useContext(FirebaseContext);
  const [labs, setLabs] = React.useState([]);

  React.useEffect(() => {
    const unsubscribe = getLabs();
    return () => unsubscribe;
  }, []);

  function getLabs() {
    if (user)
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

  function handleSnapshot(snapshot) {
    const labs = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    setLabs(labs);
  }

  return (
    <div>
      {labs.map((lab, index) => (
        <LabItem key={lab.id} lab={lab} index={index + 1} />
      ))}
    </div>
  );
}

export default LabList;
