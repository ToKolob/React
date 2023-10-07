import PropTypes from 'prop-types';

Input.propTypes = {
  passwordSize: PropTypes.number.isRequired,
  setPasswordSize: PropTypes.func.isRequired,
}
export function Input(props) {
  
  return (
    <div>
      <label htmlFor="passwordSize">Tamanho:</label>
      <input
        type="number"
        name="passwordSize"
        id="passwordSize"
        min="1"
        value={props.passwordSize}
        onChange={(ev) => props.setPasswordSize(+ev.target.value)} />

    </div>
  );
}
