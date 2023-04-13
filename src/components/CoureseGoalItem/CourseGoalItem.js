import "./CourseGoalItem.css";

const CourseGoalItem = (props) => {
  
  const deleteHandler = () => {
   // console.log(props.id) 
    props.onDelete(props.courseId);
  }
  return (
        <li>
          <p onClick={deleteHandler} className="course_items">{props.course}</p>
        </li>
  );
};

export default CourseGoalItem;
