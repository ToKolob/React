import { useState } from 'react'
import { PropTypes } from 'prop-types'

CommentaryForm.propTypes = {
  addCommentary: PropTypes.func
}

export default function CommentaryForm( {addCommentary}) {

  const [email, setEmail] = useState('')
  const [commentary, setCommentary] = useState('')
  
  function handleSubmit(e) {
    e.preventDefault()
    console.log(email, commentary)
    addCommentary({email, commentary})
    setCommentary('')
    setEmail('')
  }


  return (
    <form action="">        
<label htmlFor="email">Email</label>
<input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
<label htmlFor="commentary">Commentary</label>
<textarea id="commentary" rows="5" value={commentary} onChange={(e) => setCommentary(e.target.value)}></textarea>
<button type="submit" onClick={handleSubmit}>Submit</button>
</form>
  )
}

