// == Import : npm
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

// == Import : local
import './style.scss';

// == Composant
function Field({
  type,
  name,
  placeholder,

}) {
  const value = useSelector((state) => state.user[name]);
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    dispatch({
      type: 'CHANGE_VALUE',
      value: evt.target.value,
      key: name,
    });
  };
  const inputId = `field-${name}`;

  return (
    <div className={value.length > 0 ? 'field field--has-content' : 'field'}>
      <input
        // React - state
        value={value}
        onChange={handleChange}
        // infos de base
        id={inputId}
        type={type}
        className="field-input"
        placeholder={placeholder}
        name={name}
      />

      <label
        htmlFor={inputId}
        className="field-label"
      >
        {placeholder}
      </label>
    </div>
  );
}

Field.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

// Valeurs par défaut pour les props
Field.defaultProps = {
  type: 'text',
};

// == Export
export default Field;
