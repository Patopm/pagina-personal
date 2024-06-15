import "./Chips.css";
import PropTypes from "prop-types";

function Chips({ Icon, nombre }) {
  return (
    <li className="chip-tecnologia">
      {Icon && <Icon />}
      <p>{nombre}</p>
    </li>
  );
}

Chips.propTypes = {
  Icon: PropTypes.any,
  nombre: PropTypes.string,
};

export default Chips;
