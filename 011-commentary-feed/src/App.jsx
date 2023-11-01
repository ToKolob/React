import { useState } from 'react'

import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [commentary, setCommentary] = useState('')
  const [comments, setComments] = useState(() => {
    const comments = localStorage.getItem('comments-list')
    return comments ? JSON.parse(comments) : []
  })

  const addCommentary = ({email, commentary}) => {
    const id = Math.floor(Math.random() * 100000)
    const date = new Date().toLocaleString('en-US')
    const newComment = {id, email, commentary, date}
    setCommentary('')
    setEmail('')

    setComments(state => {
      const newState = [newComment, ...state]
      localStorage.setItem('comments-list', JSON.stringify(newState))
      return newState
    })

    
  }
  

  function handleSubmit(e) {
    e.preventDefault()
    console.log(email, commentary)
    addCommentary({email, commentary})
  }

  
   

  return (      
    <div className="App">
      <h2>Comentary section</h2>  

      <form action="">        
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="commentary">Commentary</label>
        <textarea id="commentary" rows="5" value={commentary} onChange={(e) => setCommentary(e.target.value)}></textarea>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
      <div className='comments'>
        {comments.map((comment) => (
          <div key={comment.id}>
            <h3>{comment.email}</h3>
            <p>at: {comment.date} </p>
            <p>{comment.commentary}</p>
          </div>

        ))}
      </div>
    </div>
  )
}

export default App
