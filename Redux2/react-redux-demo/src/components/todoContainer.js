import React, { useState } from "react";
import {
  addTodo,
  toggleTodo,
  changeVisibility,
} from "../redux/todolist/todoActions";
import { connect } from "react-redux";
import store from "../redux/store";
import FilterLink from './FilterLink';
let nextTodoId = 2;

const getVisibleTodos = (todos, visibilityFilter) => {
  switch (visibilityFilter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_ACTIVE":
      return todos.filter((item) => !item.completed);
    case "SHOW_COMPLETED":
      return todos.filter((item) => item.completed);
  }
};


function ToDoContainer(props) {
  const [item, setItem] = useState("");
  const [itemId, setId] = useState(0);
  const visibleTodos = getVisibleTodos(props.todos, props.visibilityFilter);
  return (
    <div>
      <input
        type="text"
        placeholder="add todo"
        onChange={(e) => setItem(e.target.value)}
      />
      <button
        onClick={() => {
          setId((prevId) => prevId + 1);
          props.addItem(item, itemId);
        }}
      >
        Add todo
      </button>
      <ul>
        {visibleTodos.map((item) => (
          <li
            key={item.id}
            onClick={() => {
              props.toggleTodo(item.id);
            }}
            style={{
              textDecoration: item.completed ? "line-through" : "none",
            }}
          >
            {item.text}
          </li>
        ))}
      </ul>

      <p>
        Show :
        <FilterLink filter="SHOW_ALL" currentFilter={props.visibilityFilter}>
          {" "}
          All{" "}
        </FilterLink>
        <FilterLink filter="SHOW_COMPLETED" currentFilter={props.visibilityFilter}>
          {" "}
          Completed{" "}
        </FilterLink>
        <FilterLink filter="SHOW_ACTIVE" currentFilter={props.visibilityFilter}>
          {" "}
          Active{" "}
        </FilterLink>
      </p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    visibilityFilter: state.visibilityFilter,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    addItem: (item, itemId) => dispatch(addTodo(item, itemId)),
    toggleTodo: (itemId) => dispatch(toggleTodo(itemId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(ToDoContainer);
