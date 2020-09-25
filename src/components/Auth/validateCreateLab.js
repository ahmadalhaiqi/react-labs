export default function validateCreateLab(values) {
  let errors = {};

  // File Errors
  if (!values.file) {
    errors.file = "Please select a file to upload the code";
  } else if (
    values.file.name.substr(values.file.name.lastIndexOf(".")) !== ".pdf"
  ) {
    errors.file = "Code file must be a PDF file";
  } else if (!values.code) {
    errors.code = "Please wait until the coce is uploaded...";
  }
  // Url Errors
  // if (!values.url) {
  //   errors.url = "URL required";
  // } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(values.url)) {
  //   errors.url = "URL must be valid";
  // }

  return errors;
}
