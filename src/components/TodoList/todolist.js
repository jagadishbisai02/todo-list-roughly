import { FaPencilAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import "./todolist.css";

const TodoList = (props) => {
  const { todoList, onDelete } = props;
  console.log(onDelete)
  

  return (
    <li className="list-items">
      <p>{todoList.codeName}</p>
      <div className="btn-container">
        <button type="button">
          <FaPencilAlt />
        </button>
        <button type="button" onClick={onDelete}>
          <IoClose color="#ff5655" />
        </button>
      </div>
    </li>
  );
};

export default TodoList;
