import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { newTask } from './taskSlice';

export const TaskInput = () => {
  const dispatch = useDispatch();
  const [editTitle, setEditTitle] = useState("");

  const handleTitleChange = (e) => {
    setEditTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    //  form の中の submit が実行されると、refresh が走る。これを防ぐ。
    e.preventDefault();
    dispatch(newTask(editTitle));
    setEditTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={editTitle} onChange={handleTitleChange} placeholder="Please type in" />
    </form>
  )
}
