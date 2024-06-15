import "./Card.css";
import PropTypes from "prop-types";

function Card(props) {
  return (
    <>
      <div className="card-item">
        <h3>{props.title}</h3>
        <div className="card-detail">
          <h4>{props.details[0]}</h4>
          <h4>{props?.details[1]}</h4>
        </div>
        <p>{props.description}</p>
      </div>
    </>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  details: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
};

export default Card;
