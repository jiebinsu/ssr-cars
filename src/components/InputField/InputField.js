import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./input-field.scss";

const InputField = ({ label, icon, inputProps }) => (
  <Box className="input-field">
    {icon && <div className="input-field__icon">{icon}</div>}
    <TextField
      label={label}
      variant="standard"
      fullWidth
      InputProps={{ disableUnderline: true, ...inputProps }}
    />
  </Box>
);

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.node,
  inputProps: PropTypes.object,
};

export default InputField;
