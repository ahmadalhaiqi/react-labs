import React from "react";
import useFormValidation from "../../Auth/useFormValidation";
import validateCreateLab from "../../Auth/validateCreateLab";
import FirebaseContext from "../../../firebase/context";
import TextareaAutosize from "react-autosize-textarea";

const INITIAL_STATE = {
  name: "Experiment 7",
  semester: "S1Y2021",
  section: "",
  instructor: "Ahmed Mubarak",
  title:
    "Introduction to Universal Serial Asynchronous Receive Transmit (USART)",
  introduction: "",
  step1: "",
  step2: "",
  step3: "",
  step4: "",
  step5: "",
  discussion: "",
  conclusion: "",
  q1: "",
  code: "",
  file: null,
  progress: 0,
};

function AddLab7(props) {
  const { firebase, user } = React.useContext(FirebaseContext);
  const {
    handleSubmit,
    handleChange,
    handleFileChange,
    handleUpload,
    values,
    errors,
  } = useFormValidation(INITIAL_STATE, validateCreateLab, handleCreateLab);

  function handleCreateLab() {
    if (!user) {
      props.history.push("/login");
    } else {
      const {
        name,
        semester,
        section,
        instructor,
        title,
        introduction,
        step1,
        step2,
        step3,
        step4,
        step5,
        discussion,
        conclusion,
        q1,
        code,
      } = values;
      const newLab = {
        name,
        semester,
        section,
        instructor,
        title,
        introduction,
        step1,
        step2,
        step3,
        step4,
        step5,
        discussion,
        conclusion,
        q1,
        code,
        familiarity1: "",
        operation1: "",
        selection1: "",
        integration1: "",
        familiarity2: "",
        operation2: "",
        selection2: "",
        integration2: "",
        user: {
          id: user.uid,
          name: user.displayName,
          email: user.email,
        },
        comments: "",
        po4aA: "",
        po4aB: "",
        po4aC: "",
        po4bD: "",
        po4bE: "",
        po4bF: "",
        created: Date.now(),
      };
      firebase.db
        .collection("labs")
        .add(newLab)
        .then(function (docRef) {
          console.log("Document written with ID: ", docRef.id);
          props.history.push("/");
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
    }
  }

  return (
    <>
      <h4>{values.name.toUpperCase()}</h4>
      <form onSubmit={handleSubmit} className="flex flex-column mt3">
        <div className="flex-row">
          <input
            onChange={handleChange}
            value={values.semester}
            name="semester"
            placeholder="Semester"
            autoComplete="off"
            type="text"
            className={errors.semester && "error-input"}
          />
          {errors.semester && <p className="error-text">{errors.semester}</p>}

          <input
            onChange={handleChange}
            value={values.section}
            name="section"
            placeholder="Section"
            autoComplete="off"
            type="text"
            className={errors.section && "error-input"}
          />
          {errors.section && <p className="error-text">{errors.section}</p>}

          <input
            onChange={handleChange}
            value={values.instructor}
            name="instructor"
            placeholder="Instructor"
            autoComplete="off"
            type="text"
            className={errors.instructor && "error-input"}
          />
          {errors.instructor && (
            <p className="error-text">{errors.instructor}</p>
          )}

          <input
            onChange={handleChange}
            value={values.name}
            name="name"
            placeholder="Experiment No"
            autoComplete="off"
            type="text"
            className={errors.semester && "error-input"}
          />
          {errors.name && <p className="error-text">{errors.name}</p>}

          <input
            onChange={handleChange}
            value={values.title}
            name="title"
            placeholder="Title"
            autoComplete="off"
            type="text"
            className={errors.title && "error-input"}
          />
          {errors.title && <p className="error-text">{errors.title}</p>}
        </div>

        <div className="section-header mt4">Introduction</div>
        <div className="section-description mb2">
          *Student should be able to summarize in brief the experiments that
          they are about to conduct and list down the objective(s) of this
          experiment (PO4a-A).
        </div>
        <TextareaAutosize
          onChange={handleChange}
          value={values.introduction}
          name="introduction"
          placeholder="Introduction and Objectives..."
        />
        <br />
        <br />
        <b>
          <i>Part 1: Hello World</i>
        </b>
        <div className="section-header mt4">PROCEDURE 1</div>

        <div className="ba mt3 ph3 pt2">
          <p>Rubrics evaluation of PO5a: Familiarity of tool(s)</p>
          <div className="section-description mb2">
            The student’s ability to use debugging mode and WATCH function will
            be evaluated via PO5a rubrics – Familiarity of tool(s)
          </div>
          <div className="flex justify-between mb4">
            <label>
              <input
                type="radio"
                name="familiarity1"
                value="unfamiliar"
                checked={values.familiarity1 === "unfamiliar"}
                onChange={handleChange}
                disabled={!(user && user.email === "admin@gmail.com")}
              />
              Unfamiliar
            </label>
            <label>
              <input
                type="radio"
                name="familiarity1"
                value="acceptable"
                checked={values.familiarity1 === "acceptable"}
                onChange={handleChange}
                disabled={!(user && user.email === "admin@gmail.com")}
              />
              Acceptable knowledge
            </label>
            <label>
              <input
                type="radio"
                name="familiarity1"
                value="excellent"
                checked={values.familiarity1 === "excellent"}
                onChange={handleChange}
                disabled={!(user && user.email === "admin@gmail.com")}
              />
              Excellent knowledge
            </label>
          </div>

          <p>Rubrics evaluation of PO5a: Operation of tool(s)</p>
          <div className="section-description mb2">
            The ability of students to demonstrate the various tools to display
            the results in simulation and hardware will be evaluated via PO5a
            rubrics – Operation of tool(s).
          </div>
          <div className="flex justify-between mb4">
            <label>
              <input
                type="radio"
                name="operation1"
                value="need"
                checked={values.operation1 === "need"}
                onChange={handleChange}
                disabled={!(user && user.email === "admin@gmail.com")}
              />
              Need assistance
            </label>
            <label>
              <input
                type="radio"
                name="operation1"
                value="fairly"
                checked={values.operation1 === "fairly"}
                onChange={handleChange}
                disabled={!(user && user.email === "admin@gmail.com")}
              />
              Fairly Independent
            </label>
            <label>
              <input
                type="radio"
                name="operation1"
                value="fully"
                checked={values.operation1 === "fully"}
                onChange={handleChange}
                disabled={!(user && user.email === "admin@gmail.com")}
              />
              Fully Independent
            </label>
          </div>
        </div>

        <div className="section-header mt4">PROCEDURE 2</div>

        <div className="ba mt3 ph3 pt2">
          <p>Rubrics evaluation of PO5a: Selection of tool(s)</p>
          <div className="flex justify-between mb4">
            <label>
              <input
                type="radio"
                name="selection1"
                value="poor"
                checked={values.selection1 === "poor"}
                onChange={handleChange}
                disabled={!(user && user.email === "admin@gmail.com")}
              />
              Poor selection
            </label>
            <label>
              <input
                type="radio"
                name="selection1"
                value="fair"
                checked={values.selection1 === "fair"}
                onChange={handleChange}
                disabled={!(user && user.email === "admin@gmail.com")}
              />
              Fair selection
            </label>
            <label>
              <input
                type="radio"
                name="selection1"
                value="superb"
                checked={values.selection1 === "superb"}
                onChange={handleChange}
                disabled={!(user && user.email === "admin@gmail.com")}
              />
              Superb selection
            </label>
          </div>

          <p>Rubrics evaluation of PO5a: Integration of tool(s)</p>
          <div className="flex justify-between mb4">
            <label>
              <input
                type="radio"
                name="integration1"
                value="no"
                checked={values.integration1 === "no"}
                onChange={handleChange}
                disabled={!(user && user.email === "admin@gmail.com")}
              />
              No Knowledge
            </label>
            <label>
              <input
                type="radio"
                name="integration1"
                value="need"
                checked={values.integration1 === "need"}
                onChange={handleChange}
                disabled={!(user && user.email === "admin@gmail.com")}
              />
              Need guidance
            </label>
            <label>
              <input
                type="radio"
                name="integration1"
                value="fairly"
                checked={values.integration1 === "fairly"}
                onChange={handleChange}
                disabled={!(user && user.email === "admin@gmail.com")}
              />
              Fairly Independent
            </label>
          </div>
        </div>

        <p>
          1. Explain the procedures taken to achieve your task. Demonstrate the
          working program on the Proteus and write down your observation(s).
          Copy and Paste the C file to Word Doc and print.
        </p>
        <div className="section-description mb2">
          * Students should be able to list down the summary of steps taken to
          complete the task (PO4a & PO4b-C) and present the results in an
          organized manner, i.e., labeled/contains title or caption (PO4a &
          PO4b-D). Students should also be able to perform good analysis of data
          (PO4a & PO4b-E). The ability of students to demonstrate the various
          tools to display the results in simulation and hardware will be
          evaluated via PO5 rubrics – Integration of tool(s)/ Selection of
          tool(s).
        </div>
        <TextareaAutosize
          onChange={handleChange}
          value={values.step1}
          name="step1"
          placeholder="Procedure and Results..."
        />

        <p>
          2. Copy and Paste the C file to Word Doc and print. Write down your
          observation(s).
        </p>
        <TextareaAutosize
          onChange={handleChange}
          value={values.step2}
          name="step2"
          placeholder="Results and Analysis..."
        />

        <br />
        <br />
        <b>
          <i>Part 2: Simple Send-Receive a Character Program</i>
        </b>

        <p>
          3. Copy and Paste the C file to Word Doc and print. Record your
          response for <b>procedure 5</b>. Discuss on your observation(s).
        </p>
        <div className="section-description mb2">
          Please include three samples of sent characters and the corresponding
          received characters below.
        </div>
        <TextareaAutosize
          onChange={handleChange}
          value={values.step3}
          name="step3"
          placeholder="Response, Results and Analysis..."
        />

        <br />
        <br />
        <b>
          <i>Part 3: Conversion to ASCII</i>
        </b>

        <p>
          4. Copy and Paste the C file to Word Doc and print. Record your
          response for <b>procedure 7</b>. Discuss on your observation(s).
        </p>
        <div className="section-description mb2">
          Please include the response for ‘Usart_Write’ and the corresponding
          response for ‘NumtoChar’ below.
        </div>
        <TextareaAutosize
          onChange={handleChange}
          value={values.step4}
          name="step4"
          placeholder="Response, Results and Analysis..."
        />

        <div className="section-header mt4">PROCEDURE 8</div>

        <div className="ba mt3 ph3 pt2">
          <p>Rubrics evaluation of PO5a: Familiarity of tool(s)</p>
          <div className="section-description mb2">
            The student’s ability to use debugging mode and WATCH function will
            be evaluated via PO5a rubrics – Familiarity of tool(s)
          </div>
          <div className="flex justify-between mb4">
            <label>
              <input
                type="radio"
                name="familiarity2"
                value="unfamiliar"
                checked={values.familiarity2 === "unfamiliar"}
                onChange={handleChange}
                disabled={!(user && user.email === "admin@gmail.com")}
              />
              Unfamiliar
            </label>
            <label>
              <input
                type="radio"
                name="familiarity2"
                value="acceptable"
                checked={values.familiarity2 === "acceptable"}
                onChange={handleChange}
                disabled={!(user && user.email === "admin@gmail.com")}
              />
              Acceptable knowledge
            </label>
            <label>
              <input
                type="radio"
                name="familiarity2"
                value="excellent"
                checked={values.familiarity2 === "excellent"}
                onChange={handleChange}
                disabled={!(user && user.email === "admin@gmail.com")}
              />
              Excellent knowledge
            </label>
          </div>

          <p>Rubrics evaluation of PO5a: Operation of tool(s)</p>
          <div className="section-description mb2">
            The ability of students to demonstrate the various tools to display
            the results in simulation and hardware will be evaluated via PO5a
            rubrics – Operation of tool(s).
          </div>
          <div className="flex justify-between mb4">
            <label>
              <input
                type="radio"
                name="operation2"
                value="need"
                checked={values.operation2 === "need"}
                onChange={handleChange}
                disabled={!(user && user.email === "admin@gmail.com")}
              />
              Need assistance
            </label>
            <label>
              <input
                type="radio"
                name="operation2"
                value="fairly"
                checked={values.operation2 === "fairly"}
                onChange={handleChange}
                disabled={!(user && user.email === "admin@gmail.com")}
              />
              Fairly Independent
            </label>
            <label>
              <input
                type="radio"
                name="operation2"
                value="fully"
                checked={values.operation2 === "fully"}
                onChange={handleChange}
                disabled={!(user && user.email === "admin@gmail.com")}
              />
              Fully Independent
            </label>
          </div>
        </div>

        <div className="ba mt3 ph3 pt2">
          <p>Rubrics evaluation of PO5a: Selection of tool(s)</p>
          <div className="flex justify-between mb4">
            <label>
              <input
                type="radio"
                name="selection2"
                value="poor"
                checked={values.selection2 === "poor"}
                onChange={handleChange}
                disabled={!(user && user.email === "admin@gmail.com")}
              />
              Poor selection
            </label>
            <label>
              <input
                type="radio"
                name="selection2"
                value="fair"
                checked={values.selection2 === "fair"}
                onChange={handleChange}
                disabled={!(user && user.email === "admin@gmail.com")}
              />
              Fair selection
            </label>
            <label>
              <input
                type="radio"
                name="selection2"
                value="superb"
                checked={values.selection2 === "superb"}
                onChange={handleChange}
                disabled={!(user && user.email === "admin@gmail.com")}
              />
              Superb selection
            </label>
          </div>

          <p>Rubrics evaluation of PO5a: Integration of tool(s)</p>
          <div className="flex justify-between mb4">
            <label>
              <input
                type="radio"
                name="integration2"
                value="no"
                checked={values.integration2 === "no"}
                onChange={handleChange}
                disabled={!(user && user.email === "admin@gmail.com")}
              />
              No Knowledge
            </label>
            <label>
              <input
                type="radio"
                name="integration2"
                value="need"
                checked={values.integration2 === "need"}
                onChange={handleChange}
                disabled={!(user && user.email === "admin@gmail.com")}
              />
              Need guidance
            </label>
            <label>
              <input
                type="radio"
                name="integration2"
                value="fairly"
                checked={values.integration2 === "fairly"}
                onChange={handleChange}
                disabled={!(user && user.email === "admin@gmail.com")}
              />
              Fairly Independent
            </label>
          </div>
        </div>

        <p>
          5. Explain the procedures taken to achieve your task. Demonstrate the
          working program on the Proteus and write down your observation(s).
          Copy and Paste the C file to Word Doc and print.
        </p>
        <div className="section-description mb2">
          * Students should be able to list down the summary of steps taken to
          complete the task (PO4a & PO4b-C) and present the results in an
          organized manner, i.e., labeled/contains title or caption (PO4a &
          PO4b-D). Students should also be able to perform good analysis of data
          (PO4a & PO4b-E). The ability of students to demonstrate the various
          tools to display the results in simulation and hardware will be
          evaluated via PO5 rubrics – Integration of tool(s)/ Selection of
          tool(s).
        </div>
        <TextareaAutosize
          onChange={handleChange}
          value={values.step5}
          name="step5"
          placeholder="Procedure and Results..."
        />

        <div className="section-header mt4">Discussion</div>
        <div className="section-description mb2">
          * All important trends and data comparisons have been interpreted
          correctly and discussed; good understanding of results is conveyed
          (PO4b-E).
        </div>
        <TextareaAutosize
          onChange={handleChange}
          value={values.discussion}
          name="discussion"
          placeholder="Discussion..."
        />

        <div className="section-header mt4">Conclusion</div>
        <div className="section-description mb2">
          * The conclusion succinctly describes what can be concluded from the
          experimental results. It is aligned with wellwritten objectives at the
          beginning of the lab (PO4b-F).
        </div>
        <TextareaAutosize
          onChange={handleChange}
          value={values.conclusion}
          name="conclusion"
          placeholder="Conclusion..."
        />

        <div className="section-header mt4">Challenge Questions</div>
        <p>
          Q1: Explain why the response from ‘Usart_Write’ and ‘NumtorChar’ is
          different.
        </p>
        <TextareaAutosize
          onChange={handleChange}
          value={values.q1}
          name="q1"
          placeholder="Analysis..."
        />

        <p>
          Q2: Modify the ‘NumtoChar’ function to enable conversion of 16 bit
          numbers (16 bit -> 0-65355) or 5 digit number to ASCII. Add your
          modified code to the PDF file including all codes below.
        </p>

        <div className="section-header mt4">Code </div>
        <div className="section-description mb2">
          * Please upload here a single PDF file that contains the code for all
          tasks above in addition to any other required items or screenshots.
        </div>
        <div className="flex flex-row">
          <input
            type="file"
            name="file"
            accept="application/pdf"
            onChange={handleFileChange}
          />
          <progress className="pv3 w-100" value={values.progress} max="100" />
        </div>
        {errors.file && <p className="error-text">{errors.file}</p>}

        {
          <button disabled={!values.file} onClick={handleUpload}>
            Upload Code
          </button>
        }
        {errors.code && <p className="error-text">{errors.code}</p>}

        {/* Comments and marks */}
        <div className="b mt4">Comments</div>
        <TextareaAutosize
          onChange={handleChange}
          value={values.comments}
          name="comments"
          placeholder="Comments..."
          disabled={!(user && user.email === "admin@gmail.com")}
        />

        <div className="b mt4">Marks</div>
        <div className="flex flex-column">
          <label className="f6 ml1 mt1">A. Introduction and objective</label>
          <input
            onChange={handleChange}
            value={values.po4aA}
            name="po4aA"
            autoComplete="off"
            type="text"
            className={errors.po4aA && "error-input"}
            disabled={!(user && user.email === "admin@gmail.com")}
          />
          <label className="f6 ml1 mt1">B. Procedure</label>
          <input
            onChange={handleChange}
            value={values.po4aB}
            name="po4aB"
            autoComplete="off"
            type="text"
            className={errors.po4aB && "error-input"}
            disabled={!(user && user.email === "admin@gmail.com")}
          />
          <label className="f6 ml1 mt1">
            C. Results: data, figure, graphs, tables, etc
          </label>
          <input
            onChange={handleChange}
            value={values.po4aC}
            name="po4aC"
            autoComplete="off"
            type="text"
            className={errors.po4aC && "error-input"}
            disabled={!(user && user.email === "admin@gmail.com")}
          />
          <label className="f6 ml1 mt1">D. Analysis</label>
          <input
            onChange={handleChange}
            value={values.po4bD}
            name="po4bD"
            autoComplete="off"
            type="text"
            className={errors.po4bD && "error-input"}
            disabled={!(user && user.email === "admin@gmail.com")}
          />
          <label className="f6 ml1 mt1">E. Discussions</label>
          <input
            onChange={handleChange}
            value={values.po4bE}
            name="po4bE"
            autoComplete="off"
            type="text"
            className={errors.po4bE && "error-input"}
            disabled={!(user && user.email === "admin@gmail.com")}
          />
          <label className="f6 ml1 mt1">F. Conclusion</label>
          <input
            onChange={handleChange}
            value={values.po4bF}
            name="po4bF"
            autoComplete="off"
            type="text"
            className={errors.po4bF && "error-input"}
            disabled={!(user && user.email === "admin@gmail.com")}
          />
        </div>

        <button className="button pointer ma3 w-100 center" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default AddLab7;
