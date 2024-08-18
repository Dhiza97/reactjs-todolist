import React from "react";
import { FaEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";

export default function TodoCard(props) {
  const { children, handleDeleteTodo, index, handleEditTodo } = props;
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button
          onClick={() => {
            handleEditTodo(index);
          }}
        >
          <FaEdit />
        </button>

        <button
          onClick={() => {
            handleDeleteTodo(index);
          }}
        >
          <FaRegTrashCan />
        </button>
      </div>
    </li>
  );
}
