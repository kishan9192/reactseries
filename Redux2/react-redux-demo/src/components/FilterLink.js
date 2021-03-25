import React from "react";
import { connect } from "react-redux";
import { changeVisibility } from "../redux/todolist/todoActions";

const FilterLink = ({ filter, currentFilter, children, setVisibility }) => {
  if (filter === currentFilter) {
    return <span>{children}</span>;
  }

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        setVisibility(filter);
      }}
    >
      {children}
    </a>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    visibilityFilter: state.visibilityFilter,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    setVisibility: (setVisibilityFilter) => dispatch(changeVisibility(setVisibilityFilter)),
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(FilterLink);
