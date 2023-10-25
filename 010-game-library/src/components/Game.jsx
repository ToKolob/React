import PropTypes from 'prop-types';

Game.propTypes = {
  title: PropTypes.string,
  cover: PropTypes.string,
  onRemove: PropTypes.func
};


export default function Game({ title, cover, onRemove }) {
  return (
    <div className="game" >
      <img src={cover} alt={title} />
      <div>
        <h2>{title}</h2>
        <button onClick={onRemove}>Delete</button>
      </div>
    </div>
  );
}
