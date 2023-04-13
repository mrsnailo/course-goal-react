import React, { useState } from "react";
import Button from "../UI/Button/Button";
import "./InputForm.css";
const InputForm = (props) => {
  const [currentName, setCurrentName] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const nameChangeHandler = (event) => {
    setCurrentName(event.target.value);
  };

  const LastID = (props) => {
    if (props.goals.length === 0) {
      return "0";
    } else {
      const idn = props.goals[0].id.slice(1);
      return idn;
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!currentName) {
      setErrMsg("Please enter valid course name!!");
    } else {
      const goals = {
        id: "g" + (Number(LastID(props)) + 1),
        name: currentName,
      };

      setCurrentName("");
      props.onSaveCourse(goals);
    }
  };
  return (
    <div className="form__wrapper">
      <form onSubmit={formSubmitHandler}>
        <div className="form_content">
          <label>Course Goal</label>
          <input
            onChange={nameChangeHandler}
            value={currentName}
            type="text"
            name="courseGoal"
          />
          <span className="err_msg">{errMsg}</span>
          <Button type="submit">Add Course</Button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
