import React from "react";
import FirebaseContext from "../../firebase/context";

function useFormValidation(initialState, validate, authenticate) {
  const { firebase, user } = React.useContext(FirebaseContext);
  const [values, setValues] = React.useState(initialState);
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setSubmitting] = React.useState(false);

  React.useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) authenticate();
      setSubmitting(false);
    }
  }, [errors]);

  function handleChange(event) {
    event.persist();
    setValues((previousValues) => ({
      ...previousValues,
      [event.target.name]: event.target.value,
    }));
  }

  function handleBlur() {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  }

  function handleFileChange(event) {
    event.persist();
    setValues((previousValues) => ({
      ...previousValues,
      file: event.target.files[0],
    }));
  }

  function handleUpload(event) {
    event.preventDefault();
    const fileName = `${values.name}-${values.semester}-${values.section}-${user.displayName}`;
    const uploadTask = firebase.storage
      .ref(`/code/${fileName}`)
      .put(values.file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progressValue = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setValues((previousValues) => ({
          ...previousValues,
          progress: progressValue,
        }));
      },
      (err) => console.error("upload errer: ", err),
      () => {
        console.log("completed");
        firebase.storage
          .ref("code")
          .child(fileName)
          .getDownloadURL()
          .then((url) => {
            setValues((previousValues) => ({
              ...previousValues,
              code: url,
            }));
            // setValues((previousValues) => ({
            //   ...previousValues,
            //   file: null,
            // }));
          });
      }
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitting(true);
  }

  return {
    handleSubmit,
    handleBlur,
    handleChange,
    handleFileChange,
    handleUpload,
    values,
    errors,
    isSubmitting,
  };
}

export default useFormValidation;
