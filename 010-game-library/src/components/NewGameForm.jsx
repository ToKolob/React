import { useState } from 'react'
import PropTypes from 'prop-types';
import TextInput from './TextInput';

NewGameForm.propTypes = {
  addGame: PropTypes.func
}

export default function NewGameForm({ addGame }) {

  const [title, setTitle] = useState('')
  const [cover, setCover] = useState('')
  
  function handleSubmit(e) {
    e.preventDefault()
    console.log(e.target)
    addGame({title,cover});
    setTitle('')
    setCover('')
    }

  return (
    <form action="">
      <TextInput value={title} setValue={setTitle} label="Title" id="title" />
      <TextInput value={cover} setValue={setCover} label="Cover" id="cover" />
    <button onClick={handleSubmit}>Submit</button>
  </form>
  )
}