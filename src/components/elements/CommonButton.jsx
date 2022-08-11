import { StyledEngineProvider } from "@mui/styled-engine";
import styled from "styled-components";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";

const CommonButton = ({
  text,
  onClick,
  size,
  variant,
  iconColor,
  margin,
  add,
  del,
  edit,
  disabled,
}) => {
  return (
    <StyledEngineProvider injectFirst>
      {text ? (
        <MyButton
          variant={variant}
          onClick={onClick}
          size={size}
          margin={margin}
        >
          {text}
        </MyButton>
      ) : (
        <IconButton
          onClick={onClick}
          color={iconColor}
          size={size}
          disabled={disabled}
        >
          {del && <DeleteIcon />}
          {add && <AddCircleIcon />}
          {edit && <EditIcon />}
        </IconButton>
      )}
    </StyledEngineProvider>
  );
};

export default CommonButton;

const MyButton = styled(Button)(({ size, margin }) => ({
  width: size || "auto",
  color: "black",
  margin: margin,
  border: "1px solid black",
}));
