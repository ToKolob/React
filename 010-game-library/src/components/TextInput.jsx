import PropTypes from 'prop-types';
export default function TextInput({value, setValue, label, id }){

  TextInput.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    setValue: PropTypes.func
  }

  return(
    <div>
      <label htmlFor={id}>{label}:</label>
      <input 
        type="text" 
        id={id}
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
      />   
    </div>
  )
}