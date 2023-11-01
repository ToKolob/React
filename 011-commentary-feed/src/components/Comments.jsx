import PropTypes from 'prop-types'

Comments.propTypes = {
  email: PropTypes.string,
  date: PropTypes.string,
  commentary: PropTypes.string
}
export default function Comments({email, date, commentary}) {
  return(
    <div>
            <h3>{email}</h3>
            <p>at: {date} </p>
            <p>{commentary}</p>
    </div>
  )
}