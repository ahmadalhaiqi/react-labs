import React from "react";
import useFormValidation from "../../Auth/useFormValidation";
import validateCreateLab from "../../Auth/validateCreateLab";
import FirebaseContext from "../../../firebase/context";
import TextareaAutosize from "react-autosize-textarea";

const INITIAL_STATE = {
  name: "Experiment 2",
  semester: "S1Y2021",
  section: "",
  instructor: "Ahmed Mubarak",
  title: "Elementary Input Output Programming",
  introduction: "",
  step1: "",
  step2: "",
  step3: "",
  step4: "",
  step5: "",
  step6: "",
  step7: "",
  step8: "",
  step9: "",
  discussion: "",
  conclusion: "",
};

function AddLab2(props) {
  const { firebase, user } = React.useContext(FirebaseContext);
  const { handleSubmit, handleChange, values, errors } = useFormValidation(
    INITIAL_STATE,
    validateCreateLab,
    handleCreateLab
  );

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
        step6,
        step7,
        step8,
        step9,
        discussion,
        conclusion,
      } = values;
      const newLab2 = {
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
        step6,
        step7,
        step8,
        step9,
        discussion,
        conclusion,
        familiarity: "",
        operation: "",
        user: {
          id: user.uid,
          name: user.displayName,
          email: user.email,
        },
        comments: "",
        po4aA: null,
        po4aB: null,
        po4aC: null,
        po4bD: null,
        po4bE: null,
        po4bF: null,
        created: Date.now(),
      };
      firebase.db.collection("labs").add(newLab2);
      props.history.push("/");
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

        <div className="section-header mt4">Task 1</div>
        <p>
          1. Copy and Paste the LST file (only the asm code portion with the
          date and time) to Word Doc and print.
        </p>
        <TextareaAutosize
          onChange={handleChange}
          value={values.step1}
          name="step1"
          placeholder="Code..."
        />
        <p>
          2. Explain the procedures taken to achieve your task and show
          calculation steps the delay subroutine. Demonstrate the working
          program on the PIC Training Kit hardware module and write down your
          observation(s).
        </p>
        <div className="section-description mb2">
          * Students should be able to list down the summary of steps taken to
          complete the task (PO4a-B) and present the results in an organized
          manner, i.e., labeled/contains title or caption (PO4a-C). Students
          should also be able to perform good analysis of data (PO4b-D).
        </div>
        <TextareaAutosize
          onChange={handleChange}
          value={values.step2}
          name="step2"
          placeholder="Procedure, Results and Analysis..."
        />

        <div className="section-header mt4">Task 2</div>
        <p>
          3. Copy and Paste the LST file (only the asm code portion with the
          date and time) to Word Doc and print.
        </p>
        <TextareaAutosize
          onChange={handleChange}
          value={values.step3}
          name="step3"
          placeholder="Code..."
        />
        <p>
          4. Explain the procedures taken to achieve your task. Demonstrate the
          working program on the PIC Training Kit hardware module and write down
          your observation(s).
        </p>
        <div className="section-description mb2">
          * Students should be able to list down the summary of steps taken to
          complete the task (PO4a-B) and present the results in an organized
          manner, i.e., labeled/contains title or caption (PO4a-C). Students
          should also be able to perform good analysis of data (PO4b-D).
        </div>
        <TextareaAutosize
          onChange={handleChange}
          value={values.step4}
          name="step4"
          placeholder="Procedure, Results and Analysis..."
        />

        <p>5. Draw the flowchart of the program.</p>
        <button>Upload</button>

        <div className="section-header mt4">Task 3</div>
        <p>
          6. Copy and Paste the LST file (only the asm code portion with the
          date and time) to Word Doc and print.
        </p>
        <TextareaAutosize
          onChange={handleChange}
          value={values.step6}
          name="step6"
          placeholder="Code..."
        />
        <p>
          7. Explain the procedures taken to achieve your task. Demonstrate the
          working program on the PIC Training Kit hardware module and write down
          your observation(s).
        </p>
        <div className="section-description mb2">
          * Students should be able to list down the summary of steps taken to
          complete the task (PO4a-B) and present the results in an organized
          manner, i.e., labeled/contains title or caption (PO4a-C). Students
          should also be able to perform good analysis of data (PO4b-D).
        </div>
        <TextareaAutosize
          onChange={handleChange}
          value={values.step7}
          name="step7"
          placeholder="Procedure, Results and Analysis..."
        />

        <div className="section-header mt4">Task 4</div>
        <p>
          8. Copy and Paste the LST file (only the asm code portion with the
          date and time) to Word Doc and print.
        </p>
        <TextareaAutosize
          onChange={handleChange}
          value={values.step8}
          name="step8"
          placeholder="Code..."
        />
        <p>
          9. Explain the procedures taken to achieve your task. Demonstrate the
          working program on the PIC Training Kit hardware module and write down
          your observation(s).
        </p>
        <div className="section-description mb2">
          * Students should be able to list down the summary of steps taken to
          complete the task (PO4a-B) and present the results in an organized
          manner, i.e., labeled/contains title or caption (PO4a-C). Students
          should also be able to perform good analysis of data (PO4b-D).
        </div>
        <TextareaAutosize
          onChange={handleChange}
          value={values.step9}
          name="step9"
          placeholder="Procedure, Results and Analysis..."
        />

        <div
          className="ba mt3 ph3 pt2"
          style={{
            pointerEvents:
              user && user.email === "admin@gmail.com" ? "auto" : "none",
          }}
        >
          <p>
            Verification of Q8 by Instructor. Rubrics evaluation of PO5a:
            Familiarity of tool(s)
          </p>
          <div className="section-description mb2">
            The student’s ability to use debugging mode and WATCH function will
            be evaluated via PO5a rubrics – Familiarity of tool(s)
          </div>
          <div className="flex justify-between mb4">
            <label>
              <input
                type="radio"
                name="familiarity"
                value="unfamiliar"
                checked={values.familiarity === "unfamiliar"}
                onChange={handleChange}
              />
              Unfamiliar
            </label>
            <label>
              <input
                type="radio"
                name="familiarity"
                value="acceptable"
                checked={values.familiarity === "acceptable"}
                onChange={handleChange}
              />
              Acceptable knowledge
            </label>
            <label>
              <input
                type="radio"
                name="familiarity"
                value="excellent"
                checked={values.familiarity === "excellent"}
                onChange={handleChange}
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
                name="operation"
                value="need"
                checked={values.operation === "need"}
                onChange={handleChange}
              />
              Need assistance
            </label>
            <label>
              <input
                type="radio"
                name="operation"
                value="fairly"
                checked={values.operation === "fairly"}
                onChange={handleChange}
              />
              Fairly Independent
            </label>
            <label>
              <input
                type="radio"
                name="operation"
                value="fully"
                checked={values.operation === "fully"}
                onChange={handleChange}
              />
              Fully Independent
            </label>
          </div>
        </div>

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

export default AddLab2;
