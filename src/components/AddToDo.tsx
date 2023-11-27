import { FormEvent, useState } from "react"
import { useTodos } from "../store/todos";
import React from "react";

export default function AddToDo() {
  const [todo, setTodo] = useState("");
  const { handleAddToDo } = useTodos();

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddToDo(todo)
    setTodo("");
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={todo}
          onChange={(e) => setTodo(e.target.value)}>
        </input>
        <button type="submit">Add</button>
      </form>
    </>

  )
}