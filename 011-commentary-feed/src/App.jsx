import { useState } from 'react'

import './App.css'
import Comments from './components/Comments'
import CommentaryForm from './components/CommentaryForm'

function App() {
  const addCommentary = ({email, commentary}) => {
    const id = Math.floor(Math.random() * 100000)
    const date = new Date().toLocaleString('en-US')
    const newComment = {id, email, commentary, date}

    setComments(state => {
      const newState = [newComment, ...state]
      localStorage.setItem('comments-list', JSON.stringify(newState))
      return newState
    })
  }

  const [comments, setComments] = useState(() => {
    const comments = localStorage.getItem('comments-list')
    return comments ? JSON.parse(comments) : []
  })
    
    return (      
    <div className="App">
      <h2>Comentary section</h2>  

      <CommentaryForm
        addCommentary={addCommentary}/>

      <div className='comments'>
        {comments.length > 0 ? (
          comments.map((comment) => (
          <Comments
            key={comment.id}
            email={comment.email}
            date={comment.date}
            commentary={comment.commentary}
          />

        ))):
        <p>No comments yet</p>}
      </div>
    </div>
  )
}

export default App
