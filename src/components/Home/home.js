import { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import TodoList from "../TodoList/todolist";
import "./home.css";

const Home = () => {
  const [codeName, setCodeName] = useState("");
  const [todoList, setTodoList] = useState([]);

  const onClickAdd = (event) => {
    event.preventDefault();
    const newTodoList = {
      id: uuidV4(),
      codeName,
    };

    setTodoList((prevtodoList) => [...prevtodoList, newTodoList]);
    setCodeName("");
  };

  const onDelete = (id) =>{
    const updatedTodoList = todoList.filter(
      eachCartItem => eachCartItem.id !== id,
    )

    setTodoList((prevtodoList) => [...prevtodoList, updatedTodoList]);
  }

  return (
    <div className="home-container">
      <div className="todo-home-container">
        <h1>Day Goals!</h1>
        <div className="btn-input">
          <input
            type="text"
            value={codeName}
            name=""
            placeholder="Add a todo"
            onChange={(event) => setCodeName(event.target.value)}
          />
          <button type="submit" onClick={onClickAdd}>
            Add Todo
          </button>
        </div>
        <ul className="todo-list-container">
          {todoList.map((each) => (
            <TodoList todoList={each} key={each.id} onDelete={onDelete} />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Home;
